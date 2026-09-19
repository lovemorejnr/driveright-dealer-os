import React, { useMemo } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  FileSpreadsheet, 
  PhoneCall, 
  MessageSquare, 
  Car,
  Activity
} from 'lucide-react';

interface WaveformComparisonSectionProps {
  onOpenDemo?: () => void;
  onNavigate?: (page: string) => void;
}

// Generates the seamless looping dot-matrix waveform SVG matching Cloudflare's signature wave design
function WaveformSvg({ className = '' }: { className?: string }) {
  const pathData = useMemo(() => {
    const width = 1192;
    const step = 5;
    const numCols = Math.floor(width / step);
    let paths = '';

    for (let i = 0; i < numCols; i++) {
      const x = i * step;
      const t = (i / numCols) * 2 * Math.PI;

      // Harmonic synthesis with distinct periodic bursts to mimic telemetry and sound packets
      const base = 
        Math.sin(t) * 16 + 
        Math.sin(2 * t) * 14 + 
        Math.sin(4 * t) * 18 + 
        Math.sin(8 * t) * 15 + 
        Math.cos(6 * t) * 12;

      const burst1 = Math.exp(-Math.pow((t - 1.1) * 5.5, 2)) * 65;
      const burst2 = Math.exp(-Math.pow((t - 2.5) * 6.5, 2)) * 75;
      const burst3 = Math.exp(-Math.pow((t - 4.2) * 5.0, 2)) * 70;
      const burst4 = Math.exp(-Math.pow((t - 5.5) * 6.0, 2)) * 55;

      const rawHeight = 12 + Math.abs(base) + burst1 + burst2 + burst3 + burst4;
      const height = Math.min(85, Math.max(10, Math.round(rawHeight / 5) * 5));

      const centerY = 111;
      const minY = centerY - height;
      const maxY = centerY + height;

      for (let y = minY; y <= maxY; y += 5) {
        // Dot represented as a clean 1.6px round-rect in SVG path
        paths += `M${x} ${y}h1.6v1.6h-1.6z `;
      }
    }

    return paths;
  }, []);

  return (
    <svg
      width="1192"
      height="222"
      viewBox="0 0 1192 222"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    >
      <path d={pathData} />
    </svg>
  );
}

export const WaveformComparisonSection: React.FC<WaveformComparisonSectionProps> = ({
  onOpenDemo,
  onNavigate,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-[#014090]/15 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ containerType: 'inline-size' }}>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5300]/10 text-[#FF5300] text-xs sm:text-sm font-semibold mb-4 border border-[#FF5300]/25">
            <Sparkles className="h-3.5 w-3.5 text-[#FF5300]" />
            <span>The Dealership Operating Benchmark</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight font-['Outfit']">
            Two ways to run your dealership lot
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-black/65 font-normal">
            See the difference between juggling fragmented spreadsheets and running on DriveRight's unified dealership OS.
          </p>
        </div>

        {/* Cloudflare-inspired 2-Column Grid Card */}
        <div className="waveform-comparison-grid relative rounded-2xl sm:rounded-3xl border border-[#014090]/20 shadow-xl overflow-hidden bg-white">
          
          {/* ============================================================ */}
          {/* LEFT COLUMN: THE LEGACY WAY (CHAOS & FRAGMENTED SPREADSHEETS) */}
          {/* ============================================================ */}
          <div className="waveform-left-col relative p-5 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#014090]/5 to-white">
            
            {/* Ambient Background Grid */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ 
                backgroundImage: 'radial-gradient(#014090 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
              }}
            />

            {/* Cloudflare-style Animated Waveform in Background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden select-none flex items-center opacity-30 sm:opacity-45">
              <div 
                className="flex items-center" 
                style={{ 
                  animation: 'waveform-scroll 22s linear infinite', 
                  width: 'max-content' 
                }}
              >
                <WaveformSvg className="h-36 sm:h-44 lg:h-52 w-auto shrink-0 text-[#FF5300]" />
                <WaveformSvg className="h-36 sm:h-44 lg:h-52 w-auto shrink-0 text-[#FF5300]" />
              </div>
            </div>

            {/* Content Header */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5300]/10 border border-[#FF5300]/25 text-[#FF5300] text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-5">
                <AlertTriangle className="h-3.5 w-3.5 text-[#FF5300]" />
                <span>Status: Disconnected & Manual</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-black tracking-tight font-['Outfit']">
                Fighting lot chaos with <span className="text-[#014090]">"spreadsheets"</span>
              </h3>
              
              <p className="text-xs sm:text-sm text-black/60 mt-2 max-w-md leading-relaxed">
                Disjointed systems, lost paperwork, double-booked test drives, and hours wasted entering the same vehicle data three times.
              </p>
            </div>

            {/* Floating Chaotic Bottleneck Chips (Cloudflare incident badges style) */}
            <div className="relative z-10 my-6 sm:my-8 lg:my-10 space-y-2.5 sm:space-y-3">
              
              {/* Badge 1: Test Drive Conflict */}
              <div 
                className="bg-white/95 backdrop-blur-sm rounded-xl border border-[#FF5300]/30 p-3 sm:p-3.5 shadow-sm hover:shadow transition-all text-left flex items-start gap-2.5 sm:gap-3"
                style={{ animation: 'float-gentle-1 5s ease-in-out infinite' }}
              >
                <span className="px-2 py-0.5 rounded bg-[#FF5300]/10 text-[#FF5300] text-[10px] font-bold uppercase tracking-wider shrink-0 mt-0.5">
                  P0 Incident
                </span>
                <div className="text-xs text-black/75 font-medium leading-relaxed">
                  <span className="font-bold text-black">Double-booked test drive:</span> 2 buyers arrived for the 2021 Audi A4 at 2:00 PM. Reps arguing on lot.
                </div>
              </div>

              {/* Badge 2: Missing V5C */}
              <div 
                className="bg-white/95 backdrop-blur-sm rounded-xl border border-[#FF5300]/25 p-3 sm:p-3.5 shadow-sm hover:shadow transition-all text-left flex items-start gap-2.5 sm:gap-3"
                style={{ animation: 'float-gentle-2 6s ease-in-out infinite' }}
              >
                <span className="px-2 py-0.5 rounded bg-[#FF5300]/10 text-[#FF5300] text-[10px] font-bold uppercase tracking-wider shrink-0 mt-0.5">
                  Handover
                </span>
                <div className="text-xs text-black/75 font-medium leading-relaxed">
                  <span className="font-bold text-black">Missing V5C logbook & spare key:</span> Scheduled delivery delayed. Customer waiting in showroom for 45 mins.
                </div>
              </div>

              {/* Badge 3: WhatsApp Inquiry Overload */}
              <div 
                className="bg-white/95 backdrop-blur-sm rounded-xl border border-[#014090]/25 p-3 sm:p-3.5 shadow-sm hover:shadow transition-all text-left flex items-start gap-2.5 sm:gap-3"
                style={{ animation: 'float-gentle-1 7s ease-in-out infinite' }}
              >
                <span className="px-2 py-0.5 rounded bg-[#014090]/10 text-[#014090] text-[10px] font-bold uppercase tracking-wider shrink-0 mt-0.5">
                  Inquiries
                </span>
                <div className="text-xs text-black/75 font-medium leading-relaxed">
                  <span className="font-bold text-black">47 Unanswered buyer messages:</span> Spread across 3 staff WhatsApp phones with zero tracking.
                </div>
              </div>

              {/* Badge 4: AutoTrader Inventory Mismatch */}
              <div 
                className="bg-white/95 backdrop-blur-sm rounded-xl border border-[#FF5300]/25 p-3 sm:p-3.5 shadow-sm hover:shadow transition-all text-left flex items-start gap-2.5 sm:gap-3"
                style={{ animation: 'float-gentle-2 5.5s ease-in-out infinite' }}
              >
                <span className="px-2 py-0.5 rounded bg-[#FF5300]/10 text-[#FF5300] text-[10px] font-bold uppercase tracking-wider shrink-0 mt-0.5">
                  Stock
                </span>
                <div className="text-xs text-black/75 font-medium leading-relaxed">
                  <span className="font-bold text-black">Sold BMW 320d still listed:</span> AutoTrader stock sync failed; rep spent 20 mins explaining it is gone.
                </div>
              </div>

            </div>

            {/* Bottom Status Tally */}
            <div className="relative z-10 pt-4 border-t border-[#014090]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 text-xs text-black/60 font-medium">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-[#014090] shrink-0" />
                <span>Avg 3.5 hrs wasted per employee daily</span>
              </div>
              <span className="text-[#FF5300] font-semibold">6 active lot bottlenecks</span>
            </div>

          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: THE DRIVERIGHT WAY (SPEED, CONTROL & AUTOMATION) */}
          {/* ============================================================ */}
          <div className="relative p-5 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between overflow-hidden bg-[#FF5300] text-white">
            
            {/* Ambient Background Glow Effect */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

            {/* Content Header */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-5">
                <span>Operating with DriveRight</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-white tracking-tight font-['Outfit']">
                Shipping & scaling with DriveRight
              </h3>
              
              <p className="text-xs sm:text-sm text-white/85 mt-2 max-w-md font-normal leading-relaxed">
                One seamless operating system connecting inventory, DVLA and HPI lookups, June AI buyer replies, card payments, and delivery handovers.
              </p>
            </div>

            {/* Live Synchronized Telemetry Card */}
            <div className="relative z-10 my-6 sm:my-8 lg:my-10 bg-white/10 backdrop-blur-md rounded-2xl border border-white/25 p-4 sm:p-6 shadow-2xl">
              
              {/* Header Pulse */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/20 mb-3 sm:mb-4 text-xs font-semibold tracking-wide text-white/85">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-white shrink-0" />
                  <span>LIVE LOT PULSE • SYNCHRONIZED</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#014090] text-white border border-white/30 text-[10px] font-bold">
                  ACTIVE
                </span>
              </div>

              {/* Active Metric Checkmarks */}
              <div className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="h-4 w-4 text-white shrink-0 mt-0.5" />
                  <span className="font-medium">
                    <strong className="font-bold text-white">175 Vehicles synced:</strong> 1-click publishing to AutoTrader, Motors.co.uk, and custom dealership site.
                  </span>
                </div>

                <div className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="h-4 w-4 text-white shrink-0 mt-0.5" />
                  <span className="font-medium">
                    <strong className="font-bold text-white">June AI active:</strong> Handled 42 buyer inquiries in under 60s and confirmed 9 weekend test drives.
                  </span>
                </div>

                <div className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="h-4 w-4 text-white shrink-0 mt-0.5" />
                  <span className="font-medium">
                    <strong className="font-bold text-white">£84,250 Reconciled:</strong> Customer deposits, card payments, and bank transfers logged directly to ledgers.
                  </span>
                </div>

                <div className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="h-4 w-4 text-white shrink-0 mt-0.5" />
                  <span className="font-medium">
                    <strong className="font-bold text-white">0 Compliance gaps:</strong> Automated digital V5C, MOT, warranty, and customer signature packs.
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Action Area with rounded-md buttons */}
            <div className="relative z-10 pt-4 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="text-xs sm:text-sm text-white/85 font-medium">
                Ready to replace manual paperwork with live automation?
              </div>

              <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-md bg-white text-[#FF5300] text-xs sm:text-sm font-bold shadow-md hover:bg-black hover:text-white transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                
                <button
                  type="button"
                  onClick={() => onNavigate?.('products')}
                  className="flex-1 sm:flex-none px-3.5 py-2.5 rounded-md bg-[#014090] hover:bg-black border border-white/30 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer text-center"
                >
                  <span>Explore OS</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
