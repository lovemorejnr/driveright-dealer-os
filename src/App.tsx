import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SystemFeatures } from './components/SystemFeatures';
import { HowItWorks } from './components/HowItWorks';
import { JuneAiSection } from './components/JuneAiSection';
import { WaveformComparisonSection } from './components/WaveformComparisonSection';
import { TrustSection } from './components/TrustSection';
import { BookDemoSection } from './components/BookDemoSection';
import { Footer } from './components/Footer';
import { BookDemoModal } from './components/BookDemoModal';
import { SearchModal } from './components/SearchModal';
import { AuthModal } from './components/AuthModal';
import { ProductsPage } from './components/ProductsPage';
import { ForCustomersPage } from './components/ForCustomersPage';
import { PricingPage } from './components/PricingPage';
import { ResourcesPage } from './components/ResourcesPage';
import { ChangelogPage } from './components/ChangelogPage';
import { BookDemoPage } from './components/BookDemoPage';
import { SignInPage } from './components/SignInPage';
import { SignUpPage } from './components/SignUpPage';
import { ImageZoomModal, ZoomedImageData } from './components/ImageZoomModal';
import { DeviceViewport } from './types';
import { Smartphone, Monitor, ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'signin' | 'signup' }>({
    isOpen: false,
    mode: 'signin',
  });
  const [viewportMode, setViewportMode] = useState<DeviceViewport>('responsive');
  const [zoomedImage, setZoomedImage] = useState<ZoomedImageData | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global handler so clicking ANY content image opens the high-res zoom lightbox
  useEffect(() => {
    const handleGlobalImageClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const img = target.tagName === 'IMG' 
        ? (target as HTMLImageElement) 
        : target.closest('img');

      if (img && img instanceof HTMLImageElement) {
        // Skip explicitly non-zoomable images
        if (img.hasAttribute('data-no-zoom') || img.classList.contains('no-zoom')) {
          return;
        }

        // Avoid intercepting the header brand logo button navigation
        if (img.closest('header') && img.closest('button')) {
          return;
        }

        // Don't intercept clicks inside the image zoom modal itself
        if (img.closest('#image-zoom-modal-backdrop')) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        setZoomedImage({
          src: img.currentSrc || img.src,
          alt: img.alt || 'Zoomed preview',
          title: img.getAttribute('title') || img.alt || 'DriveRight Image Preview'
        });
      }
    };

    document.addEventListener('click', handleGlobalImageClick, true);
    return () => {
      document.removeEventListener('click', handleGlobalImageClick, true);
    };
  }, []);

  // Handle browser hash navigation support
  useEffect(() => {
    const handleHash = () => {
      const rawHash = window.location.hash;
      const cleanHash = rawHash.replace(/^#\/?/, '');
      
      const productSectionIds = [
        'inventory', 'documents', 'arrivals', 'enquiries', 'customers',
        'sales-payments', 'calendar', 'team-roles', 'reports-analytics', 'marketplace-listings'
      ];
      
      let targetSection = '';
      if (cleanHash.includes('#')) {
        const parts = cleanHash.split('#');
        if (parts[0] === 'products') {
          setCurrentPage('products');
          targetSection = parts[1];
        }
      } else if (cleanHash.startsWith('products/')) {
        setCurrentPage('products');
        targetSection = cleanHash.replace('products/', '');
      } else if (productSectionIds.includes(cleanHash)) {
        setCurrentPage('products');
        targetSection = cleanHash;
      } else if (['products', 'for-customers', 'pricing', 'resources', 'changelog', 'book-a-demo', 'sign-in', 'sign-up'].includes(cleanHash)) {
        setCurrentPage(cleanHash);
      } else if (cleanHash === 'signin') {
        setCurrentPage('sign-in');
      } else if (cleanHash === 'signup') {
        setCurrentPage('sign-up');
      } else if (!cleanHash) {
        setCurrentPage('home');
      }

      if (targetSection) {
        setTimeout(() => {
          const el = document.getElementById(targetSection);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDemo = () => {
    navigateTo('book-a-demo');
  };

  const navigateToSection = (page: string, sectionId: string) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}#${sectionId}`;

    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        el.classList.add('ring-2', 'ring-orange-500/50', 'rounded-3xl', 'transition-all');
        setTimeout(() => {
          el.classList.remove('ring-2', 'ring-orange-500/50');
        }, 2000);
      }
    }, currentPage !== page ? 150 : 20);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-[#FAFAFA] text-slate-900 font-sans transition-all duration-300 ${
      viewportMode === 'mobile' ? 'py-6 px-3 bg-slate-900 flex flex-col items-center justify-center' : ''
    }`}>
      
      {/* Mobile Device Simulation Top Indicator */}
      {viewportMode === 'mobile' && (
        <div className="mb-4 flex items-center justify-between w-full max-w-[420px] px-2 text-white text-xs font-semibold">
          <span className="flex items-center gap-1.5 text-orange-400">
            <Smartphone className="h-4 w-4" />
            <span>Mobile Device Simulation (390px)</span>
          </span>
          <button
            type="button"
            onClick={() => setViewportMode('responsive')}
            className="flex items-center gap-1 text-slate-300 hover:text-white bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700 cursor-pointer"
          >
            <Monitor className="h-3 w-3" />
            <span>Exit to Responsive</span>
          </button>
        </div>
      )}

      {/* Main App Container */}
      <div
        className={`w-full transition-all duration-300 ${
          viewportMode === 'mobile'
            ? 'max-w-[420px] rounded-[44px] border-[10px] border-slate-800 bg-white shadow-2xl overflow-hidden relative'
            : 'min-h-screen'
        }`}
      >
        {/* Notch in Mobile View */}
        {viewportMode === 'mobile' && (
          <div className="h-6 bg-slate-900 w-full flex items-center justify-center relative">
            <div className="h-4 w-28 bg-black rounded-full absolute top-1"></div>
          </div>
        )}

        {/* Global Navigation Bar */}
        <Navbar
          currentPage={currentPage}
          onNavigate={navigateTo}
          onNavigateToSection={navigateToSection}
          onOpenDemo={handleOpenDemo}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenAuth={(mode) => {
            if (mode === 'signin') {
              navigateTo('sign-in');
            } else if (mode === 'signup') {
              navigateTo('sign-up');
            } else {
              setAuthModal({ isOpen: true, mode });
            }
          }}
          viewportMode={viewportMode}
          onToggleViewport={(mode) => setViewportMode(mode)}
        />

        {/* Dynamic Multi-Page Router */}
        <main>
          {currentPage === 'products' && (
            <ProductsPage
              onOpenDemo={handleOpenDemo}
              onNavigate={navigateTo}
              onOpenAuth={(mode) => setAuthModal({ isOpen: true, mode })}
            />
          )}

          {currentPage === 'for-customers' && (
            <ForCustomersPage
              onOpenDemo={handleOpenDemo}
              onNavigate={navigateTo}
            />
          )}

          {currentPage === 'pricing' && (
            <PricingPage
              onOpenDemo={handleOpenDemo}
              onNavigate={navigateTo}
            />
          )}

          {currentPage === 'resources' && (
            <ResourcesPage
              onOpenDemo={handleOpenDemo}
              onNavigate={navigateTo}
            />
          )}

          {currentPage === 'changelog' && (
            <ChangelogPage
              onOpenDemo={handleOpenDemo}
              onNavigate={navigateTo}
            />
          )}

          {currentPage === 'book-a-demo' && (
            <BookDemoPage
              onNavigate={navigateTo}
            />
          )}

          {currentPage === 'sign-in' && (
            <SignInPage
              onNavigate={navigateTo}
            />
          )}

          {currentPage === 'sign-up' && (
            <SignUpPage
              onNavigate={navigateTo}
            />
          )}

          {currentPage === 'home' && (
            <>
              <HeroSection onOpenDemo={handleOpenDemo} />
              <SystemFeatures />
              <WaveformComparisonSection 
                onOpenDemo={handleOpenDemo}
                onNavigate={navigateTo}
              />
              <HowItWorks />
              <JuneAiSection />
              <TrustSection />
              <BookDemoSection onOpenDemo={handleOpenDemo} />
            </>
          )}
        </main>

        {/* Global Footer */}
        <Footer 
          onOpenDemo={handleOpenDemo} 
          onNavigate={navigateTo}
          onNavigateToSection={navigateToSection}
        />

        {/* Scroll-to-Top Button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="fixed bottom-16 right-4 sm:bottom-6 sm:right-6 z-20 h-10 w-10 rounded-full bg-white border border-slate-200 text-slate-600 shadow-md hover:bg-slate-50 hover:text-slate-900 flex items-center justify-center transition-all opacity-85 hover:opacity-100 cursor-pointer"
            title="Back to top"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        )}

      </div>

      {/* Book Demo Modal */}
      <BookDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* Instant Search Palette */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigateTo}
      />

      {/* Sign in & Sign up Auth Modal */}
      <AuthModal
        isOpen={authModal.isOpen}
        initialMode={authModal.mode}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
      />

      {/* Global Image Zoom Lightbox Modal */}
      <ImageZoomModal
        image={zoomedImage}
        onClose={() => setZoomedImage(null)}
      />

    </div>
  );
}
