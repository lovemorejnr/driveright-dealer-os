import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '../data/dealershipData';
import { formatNaira } from '../utils/formatters';

interface PricingSectionProps {
  onOpenDemo: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemo }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedCars, setSelectedCars] = useState<number>(25);

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full bg-orange-100/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-800">
            Pricing
          </div>

          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Start free. Pay when the caps stop fitting.
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Monthly or annual billing in naira, with a discount for paying yearly. Exact checkout in-app.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors min-h-[38px] cursor-pointer ${
                !isAnnual
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly billing
            </button>

            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors min-h-[38px] cursor-pointer ${
                isAnnual
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual billing</span>
              <span className="rounded-full bg-orange-100 text-orange-900 text-[10px] font-extrabold px-1.5 py-0.2">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Free Plan Callout Banner (From Original Design, Enhanced Hierarchy) */}
        <div className="mt-10 rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded-md">
              <Sparkles className="h-3 w-3" />
              Free while you are small.
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Every plan includes the whole system. What changes with the plan is how many cars, how many marketplace listings, how many staff accounts, and how much June does for you.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenDemo}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-slate-800 transition-colors shrink-0 cursor-pointer min-h-[42px]"
          >
            <span>Start free account</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Pricing Cards Grid (Responsive 1 col mobile, 2 col tablet, 4 col desktop) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            const isFree = plan.priceMonthly === 0;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all ${
                  plan.isPopular
                    ? 'bg-white border-2 border-orange-600 shadow-lg shadow-orange-600/10'
                    : 'bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-600 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-xs">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="mt-2 text-xs text-slate-500 leading-relaxed min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Price Tag in Nigerian Naira */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit']">
                        {isFree ? '₦0' : formatNaira(price)}
                      </span>
                      {!isFree && (
                        <span className="text-xs text-slate-400 font-medium">/ month</span>
                      )}
                    </div>
                    {!isFree && (
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        {isAnnual ? 'Billed annually in NGN' : 'Billed monthly in NGN'}
                      </span>
                    )}
                    {isFree && (
                      <span className="text-[11px] text-orange-600 font-semibold block mt-0.5">
                        No credit card required
                      </span>
                    )}
                  </div>

                  {/* Core Caps */}
                  <div className="mt-4 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Stock Capacity:</span>
                      <strong className="text-slate-800">{plan.carsLimit} cars</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Marketplace:</span>
                      <strong className="text-slate-800">{plan.marketplaceListings} listings</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Staff Accounts:</span>
                      <strong className="text-slate-800">{plan.staffAccounts} users</strong>
                    </div>
                  </div>

                  {/* Features list */}
                  <ul className="mt-5 space-y-2 text-xs text-slate-600">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-orange-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan CTA Button */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all min-h-[44px] cursor-pointer ${
                      plan.isPopular
                        ? 'bg-orange-600 text-white hover:bg-orange-500 shadow-xs'
                        : isFree
                        ? 'bg-slate-900 text-white hover:bg-slate-800'
                        : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing FAQs & Assurance */}
        <div className="mt-12 text-center text-xs text-slate-500 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span>✔ Instant Naira payment via Paystack, Flutterwave or Direct Bank Transfer</span>
          <span>✔ Upgrade or downgrade whenever your stock expands or contracts</span>
          <span>✔ Export all dealer data anytime in CSV or PDF format</span>
        </div>

      </div>
    </section>
  );
};
