import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Building2, MapPin } from 'lucide-react';
import { ScreenshotsShowcase } from './ScreenshotsShowcase';

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24">
      {/* Subtle ambient light gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-orange-50/60 via-slate-50/40 to-transparent pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Badge */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/90 bg-orange-50/80 px-3.5 py-1.5 text-xs font-semibold text-orange-900 shadow-2xs backdrop-blur-xs">
            <span className="tracking-wide uppercase font-bold text-[11px] text-orange-800">
              Dealer Operating System
            </span>
          </div>

          {/* Main Hero Headline - Refined typography scale */}
          <h1 className="mt-6 max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-['Outfit'] leading-[1.12]">
            Run your whole dealership on <span className="text-orange-600">one system.</span>
          </h1>

          {/* Subheading - Optimal line width & baseline readability */}
          <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal">
            Stock, buyers, sales, staff and your marketplace listings in one place, on your own numbers. <strong className="font-semibold text-slate-800">Built for Nigerian dealerships.</strong>
          </p>

          {/* Action CTAs: High touch-target, mobile-responsive layout */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto">
            <button
              id="hero-book-demo-btn"
              type="button"
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-600 px-7 py-3.5 text-base font-bold text-white shadow-md shadow-orange-600/20 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-600/25 active:scale-[0.98] transition-all min-h-[50px] cursor-pointer"
            >
              <span>Book a demo</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              id="hero-marketplace-btn"
              href="#system"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300/90 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98] transition-all min-h-[50px]"
            >
              <span>Browse the marketplace</span>
              <span className="text-slate-400">→</span>
            </a>
          </div>

          {/* Secondary microcopy links */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-500">
            <span>Buying a car instead?</span>
            <a 
              href="#trust" 
              className="font-semibold text-slate-800 underline underline-offset-2 hover:text-orange-600 transition-colors"
            >
              Go straight to the marketplace
            </a>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>Already a dealer?</span>
            <button
              type="button"
              onClick={() => alert('Dealer Login: Welcome back to your DriveRight OS workspace.')}
              className="font-semibold text-slate-800 underline underline-offset-2 hover:text-orange-600 transition-colors cursor-pointer"
            >
              Sign in
            </button>
          </div>

          {/* Trust proof ribbon */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium pt-4 border-t border-slate-200/60 max-w-xl">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-orange-600" />
              <span>100% Naira Pricing</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-orange-600" />
              <span>WhatsApp Lead Capture</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-orange-600" />
              <span>Customs & VIN Verification</span>
            </div>
          </div>
        </div>

        {/* Product Interface Screenshots Showcase */}
        <div className="mt-12 sm:mt-16">
          <ScreenshotsShowcase onOpenDemo={onOpenDemo} />
        </div>

      </div>
    </section>
  );
};
