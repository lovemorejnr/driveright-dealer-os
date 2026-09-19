import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles, 
  ArrowRight,
  Layers,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface ScreenshotsShowcaseProps {
  onOpenDemo?: () => void;
}

interface ScreenshotItem {
  id: string;
  title: string;
  badge: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

const SCREENSHOTS: ScreenshotItem[] = [
  {
    id: 'shot-1',
    title: 'Vehicle Inventory & Yard Management',
    badge: 'Core OS',
    category: 'Vehicle Inventory',
    description: 'Track vehicle arrivals from Tin Can and Apapa ports to showroom floor. Manage customs clearance, duty documentation, live lot aging, VIN specs, and real-time NGN pricing.',
    image: 'https://res.cloudinary.com/dl4qho6ia/image/upload/v1789711916/ChatGPT_Image_Sep_18_2026_08_07_05_AM_o67xoe.png',
    features: ['Customs Duty Verification', 'Days in Stock Tracker', 'Profit Margin Calculation']
  },
  {
    id: 'shot-2',
    title: 'Document Vault & Dealership Records',
    badge: 'Intelligence',
    category: 'Document Vault',
    description: 'Real-time profit & loss reporting, lot turnover metrics, branch performance comparisons, and sales pipeline velocity across your showrooms.',
    image: 'https://res.cloudinary.com/dl4qho6ia/image/upload/v1789711915/ChatGPT_Image_Sep_18_2026_08_06_51_AM_wzmiiz.png',
    features: ['Real-time P&L Reporting', 'Sales Rep Commissions', 'Multi-Branch Comparison']
  },
  {
    id: 'shot-3',
    title: 'Calendar & Lead Scheduling',
    badge: 'CRM Inbox',
    category: 'Calendar',
    description: 'Centralized dealer inbox for buyer chats from WhatsApp, website enquiries, and walk-in prospects. Auto-route leads to available sales executives without lead leakage.',
    image: 'https://res.cloudinary.com/dl4qho6ia/image/upload/v1789711915/ChatGPT_Image_Sep_18_2026_08_06_40_AM_ttriyh.png',
    features: ['Unified WhatsApp Business API', 'Lead Ownership Protection', 'Instant Quote Sharing']
  },
  {
    id: 'shot-4',
    title: 'Dealership Analytics & Performance',
    badge: 'Payments',
    category: 'Analytics',
    description: 'Instant PDF contract and branded tax invoice generation. Log buyer part-payments, verify bank transfers in seconds, and automatically generate gate passes upon settlement.',
    image: 'https://res.cloudinary.com/dl4qho6ia/image/upload/v1789711915/ChatGPT_Image_Sep_18_2026_08_06_35_AM_lireew.png',
    features: ['Official Tax Invoicing', 'Deposit & Balance Tracking', 'Gate Pass Generation']
  },
  {
    id: 'shot-5',
    title: 'Customer Management & Dealership Relations',
    badge: 'June AI Copilot',
    category: 'Customer Management',
    description: 'Localized intelligence trained on Nigerian vehicle sale transactions. Generates WhatsApp negotiations, suggests realistic market valuations, and drafts video marketing scripts.',
    image: 'https://res.cloudinary.com/dl4qho6ia/image/upload/v1789711915/ChatGPT_Image_Sep_18_2026_08_06_29_AM_pboa1g.png',
    features: ['140k+ Nigerian Comps', 'WhatsApp Negotiation Drafter', 'Automated Social Captions']
  },
];

export const ScreenshotsShowcase: React.FC<ScreenshotsShowcaseProps> = ({ onOpenDemo }) => {
  const [{ currentIndex, direction }, setSlide] = useState({ currentIndex: 0, direction: 1 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const current = SCREENSHOTS[currentIndex];

  const goToSlide = (nextIndex: number, nextDirection?: number) => {
    setSlide((previous) => {
      if (nextIndex === previous.currentIndex) return previous;

      return {
        currentIndex: nextIndex,
        direction: nextDirection ?? (nextIndex > previous.currentIndex ? 1 : -1),
      };
    });
  };

  const handlePrev = () => {
    goToSlide(currentIndex === 0 ? SCREENSHOTS.length - 1 : currentIndex - 1, -1);
  };

  const handleNext = () => {
    goToSlide(currentIndex === SCREENSHOTS.length - 1 ? 0 : currentIndex + 1, 1);
  };

  return (
    <div id="live-demo" className="w-full">
      {/* Main Showcase Container */}
      <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 overflow-hidden transition-all">
        
        {/* Browser / OS Window Bar */}
        <div className="border-b border-slate-200 bg-slate-50/90 px-3 py-2.5 sm:px-5 sm:py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Window control dots */}
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-400 inline-block"></span>
              <span className="h-3 w-3 rounded-full bg-amber-400 inline-block"></span>
              <span className="h-3 w-3 rounded-full bg-emerald-400 inline-block"></span>
            </div>
            
            <div className="h-4 w-px bg-slate-300 mx-1 hidden sm:block"></div>

            {/* Dealership OS Title */}
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight">
                DriveRight OS - Live Product Interface
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-slate-500 hidden md:inline">
              Slide {currentIndex + 1} of {SCREENSHOTS.length}
            </span>

            <button
              type="button"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-200/80 transition-colors"
              title={isFullscreen ? 'Exit Full Screen' : 'View Full Image'}
              aria-label="Toggle Full Screen"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Tab Switcher Pills */}
        <div className="border-b border-slate-200 bg-white px-3 sm:px-6 py-2.5 overflow-x-auto no-scrollbar flex items-center gap-1.5 sm:gap-2">
          {SCREENSHOTS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSlide(idx)}
              aria-current={currentIndex === idx ? 'true' : undefined}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[38px] cursor-pointer ${
                currentIndex === idx
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>{item.category}</span>
            </button>
          ))}
        </div>

        {/* Screenshot Viewport */}
        <div className="relative bg-slate-950 flex flex-col items-center justify-center overflow-hidden group">
          {/* Main Image */}
          <div className="relative w-full aspect-16/9 sm:aspect-16/8.5 max-h-[580px] bg-slate-950 flex items-center justify-center overflow-hidden cursor-zoom-in">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={current.id}
                src={current.image}
                alt={current.title}
                title={`${current.title} - Click to zoom`}
                custom={direction}
                initial={{
                  x: prefersReducedMotion ? 0 : `${direction * 100}%`,
                  opacity: prefersReducedMotion ? 0 : 0.7,
                }}
                animate={{ x: 0, opacity: 1, zIndex: 1 }}
                exit={{
                  x: prefersReducedMotion ? 0 : `${direction * -100}%`,
                  opacity: prefersReducedMotion ? 0 : 0.7,
                  zIndex: 0,
                }}
                transition={prefersReducedMotion
                  ? { duration: 0.15 }
                  : { type: 'spring', stiffness: 240, damping: 30, mass: 0.85 }
                }
                className="absolute inset-0 h-full w-full object-contain sm:object-cover sm:object-top"
                loading="eager"
              />
            </AnimatePresence>

            {/* Click to zoom badge */}
            <div className="absolute top-3 right-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-medium border border-white/10 shadow-lg">
              <Maximize2 className="h-3.5 w-3.5 text-orange-400" />
              <span>Click to zoom</span>
            </div>

            {/* Slide Navigation Buttons */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="h-10 w-10 rounded-xl bg-slate-900/90 hover:bg-orange-600 text-white border border-slate-700/80 flex items-center justify-center transition-all shadow-md cursor-pointer"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="h-10 w-10 rounded-xl bg-slate-900/90 hover:bg-orange-600 text-white border border-slate-700/80 flex items-center justify-center transition-all shadow-md cursor-pointer"
                aria-label="Next screenshot"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Info & Capabilities Bar Below Screenshot */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Features list tags */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0">
                Key Features:
              </span>
              {current.features.map((feat, i) => (
                <span 
                  key={i} 
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-orange-600" />
                  <span>{feat}</span>
                </span>
              ))}
            </div>

            {/* CTA action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
              >
                <span>Book a live product walkthrough</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <div 
            className="relative max-w-6xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-white">
              <div>
                <span className="text-xs font-bold uppercase text-orange-400">{current.badge}</span>
                <h4 className="font-bold text-sm sm:text-base">{current.title}</h4>
              </div>
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white"
              >
                Close (ESC)
              </button>
            </div>
            
            <div className="p-2 bg-black flex items-center justify-center">
              <img 
                src={current.image} 
                alt={current.title}
                className="max-h-[80vh] w-auto object-contain rounded"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
