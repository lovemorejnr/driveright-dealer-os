import React from 'react';
import { ShieldCheck, Lock, Database, FileSpreadsheet, EyeOff, UserCheck, ArrowRight } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-900">
            <ShieldCheck className="h-3.5 w-3.5 text-orange-600" />
            Trust & Security
          </div>

          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Verified dealers. Your data stays yours.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Buyers trust the badge because it is earned, and dealers stay because we are explicit about what we do with what you put in.
          </p>
        </div>

        {/* 2 Big Trust Guarantee Cards (Responsive 1 col mobile, 2 col desktop) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: How we verify dealers */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Outfit']">
                How we verify dealers
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center shrink-0 mt-0.5">
                  <UserCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Identity & business checks</h4>
                  <p className="mt-1 text-slate-600 leading-relaxed">
                    We verify CAC registration, physical showroom or compound location, and photo ID of the principal dealer so buyers know the inventory is authentic.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Onboarding review</h4>
                  <p className="mt-1 text-slate-600 leading-relaxed">
                    New dealer accounts are reviewed by an in-person DriveRight agent in Lagos or Abuja before marketplace listings can be published to buyers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Lock className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Ongoing compliance</h4>
                  <p className="mt-1 text-slate-600 leading-relaxed">
                    Odometer rollbacks, undisclosed accident history, or forged customs documentation result in immediate badge revocation and permanent marketplace suspension.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Dealer Data Trust */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Outfit'] flex items-center gap-2">
                <span>Dealer Data Trust</span>
                <span className="inline-flex items-center gap-1 rounded bg-slate-200 text-slate-800 text-xs font-bold px-2 py-0.5">
                  <Lock className="h-3 w-3" />
                  Isolated Ledgers
                </span>
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <EyeOff className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Your stock, your customers</h4>
                  <p className="mt-1 text-slate-600 leading-relaxed">
                    Another dealership never sees your purchase costs, buyer contact books, or margin figures. Every dealership runs in an isolated tenant database.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <FileSpreadsheet className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Export whenever you want</h4>
                  <p className="mt-1 text-slate-600 leading-relaxed">
                    Your vehicle records, sales history and invoices leave in clean Excel or PDF spreadsheets at any moment, on your say-so. Zero platform lock-in.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Database className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Real numbers only</h4>
                  <p className="mt-1 text-slate-600 leading-relaxed">
                    A metric we cannot reliably compute from your actual invoices and stock register is shown as unavailable, never as a misleading zero or guess.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Micro-Link Banner to Car Marketplace */}
        <div className="mt-12 text-center">
          <a
            href="#live-demo"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors py-2 px-4 rounded-xl hover:bg-slate-50"
          >
            <span>Looking for a car, not a CRM?</span>
            <span className="text-orange-600 font-bold underline underline-offset-2">For customers →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
