import React from 'react';
import { ArrowRight, Mail, Calendar, Clock, ShieldCheck } from 'lucide-react';

interface BookDemoSectionProps {
  onOpenDemo: () => void;
}

export const BookDemoSection: React.FC<BookDemoSectionProps> = ({ onOpenDemo }) => {
  return (
    <section className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-5">
          
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-400">
            <Calendar className="h-3 w-3" />
            Book a Demo
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-['Outfit'] leading-tight">
            See it on your own stock
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Pick a time that works. We walk your dealership through the system on a call, with your cars in front of you.
          </p>

          {/* Action CTAs: High contrast & mobile thumb-friendly */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full sm:w-auto">
            <button
              id="cta-pick-time-btn"
              type="button"
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-600/30 hover:bg-orange-500 active:scale-[0.98] transition-all min-h-[48px] cursor-pointer"
            >
              <span>Pick a time</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href="mailto:hello@driveright.tech?subject=DriveRight%20Demo%20Enquiry"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-all min-h-[48px]"
            >
              <Mail className="h-4 w-4 text-slate-400" />
              <span>Email us instead</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 pt-2">
            Times in West Africa Time (WAT). We confirm by email with a calendar invite. Nothing is charged and no account is created.
          </p>

        </div>
      </div>
    </section>
  );
};
