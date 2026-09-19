import React, { useState, useEffect, useRef } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Maximize2 } from 'lucide-react';

export interface ZoomedImageData {
  src: string;
  alt?: string;
  title?: string;
}

interface ImageZoomModalProps {
  image: ZoomedImageData | null;
  onClose: () => void;
}

export const ImageZoomModal: React.FC<ImageZoomModalProps> = ({ image, onClose }) => {
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Reset zoom & position whenever a new image is opened
  useEffect(() => {
    if (image) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
      // Prevent body scrolling while modal is active
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [image]);

  // Keyboard navigation
  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-' || e.key === '_') {
        handleZoomOut();
      } else if (e.key === '0') {
        handleResetZoom();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [image, scale]);

  if (!image) return null;

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.4, 3.5));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.4, 1);
      if (next === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return next;
    });
  };

  const handleResetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scale === 1) {
      setScale(1.8);
    } else {
      handleResetZoom();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      dragStartRef.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStartRef.current.x,
        y: e.clientY - dragStartRef.current.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      id="image-zoom-modal-backdrop"
      className="fixed inset-0 z-50 flex flex-col bg-slate-950/92 backdrop-blur-md animate-in fade-in duration-200 select-none"
      onClick={onClose}
      onMouseUp={handleMouseUp}
    >
      {/* Top Header Controls Bar */}
      <div 
        className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800/80 bg-slate-950/60 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 min-w-0 pr-4">
          <p className="text-xs sm:text-sm font-semibold text-slate-200 truncate">
            {image.title || image.alt || 'Image Preview'}
          </p>
        </div>

        {/* Zoom Controls Pill */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-900/90 border border-slate-700/80 rounded-full px-2 py-1 shadow-lg shrink-0">
          <button
            type="button"
            onClick={handleZoomOut}
            disabled={scale <= 1}
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-transparent transition-colors cursor-pointer"
            title="Zoom out (-)"
            aria-label="Zoom out"
          >
            <ZoomOut className="h-4 w-4" />
          </button>

          <span className="text-[11px] font-mono font-bold text-slate-300 px-1.5 min-w-[42px] text-center">
            {Math.round(scale * 100)}%
          </span>

          <button
            type="button"
            onClick={handleZoomIn}
            disabled={scale >= 3.5}
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-40 disabled:hover:bg-transparent transition-colors cursor-pointer"
            title="Zoom in (+)"
            aria-label="Zoom in"
          >
            <ZoomIn className="h-4 w-4" />
          </button>

          <div className="h-3 w-px bg-slate-700 mx-0.5"></div>

          <button
            type="button"
            onClick={handleResetZoom}
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="Reset Zoom (0)"
            aria-label="Reset zoom"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>

          <div className="h-3 w-px bg-slate-700 mx-0.5"></div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-rose-500/80 transition-colors cursor-pointer"
            title="Close (Esc)"
            aria-label="Close image zoom"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div 
        className="flex-1 relative flex items-center justify-center overflow-hidden p-3 sm:p-6"
        onMouseMove={handleMouseMove}
      >
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
            transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseDown={handleMouseDown}
          onClick={handleImageClick}
          className="max-w-[92vw] max-h-[82vh] flex items-center justify-center"
        >
          <img
            src={image.src}
            alt={image.alt || 'Zoomed vehicle or screenshot preview'}
            className="max-w-full max-h-[82vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-slate-800/80"
            draggable={false}
          />
        </div>
      </div>

      {/* Bottom Subtle Hint */}
      <div 
        className="py-2.5 px-4 text-center border-t border-slate-900 bg-slate-950/60 z-10 flex items-center justify-center gap-3 text-[11px] text-slate-400"
        onClick={(e) => e.stopPropagation()}
      >
        <span>Click image to toggle zoom</span>
        <span className="text-slate-600">•</span>
        {scale > 1 && (
          <>
            <span className="text-orange-400">Drag to pan</span>
            <span className="text-slate-600">•</span>
          </>
        )}
        <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-300 font-mono">Esc</kbd> to exit</span>
      </div>
    </div>
  );
};
