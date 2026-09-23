import React from 'react';
import { Eye, MapPin, Shield, CheckCircle2, Check } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Trust &amp; proof
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            How we earn confidence on every listing and every conversation
          </p>
        </div>

        {/* Top 3 Value Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Transparency */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs">
            <div className="h-10 w-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-600 mb-5">
              <Eye className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
              Transparency
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              We surface key details upfront—pricing, specs, and context—so you can compare listings with clarity, not guesswork.
            </p>
          </div>

          {/* Card 2: Rooted in Nigeria */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs">
            <div className="h-10 w-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-600 mb-5">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
              Rooted in Nigeria
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              DriveRight Tech is built for local buyers and sellers—pricing in naira, dealers across major hubs, and a marketplace tuned to how Nigerians shop for cars.
            </p>
          </div>

          {/* Card 3: Consistent standards */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs">
            <div className="h-10 w-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-600 mb-5">
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
              Consistent standards
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              We expect listings and sellers to meet clear standards—what you see on DriveRight Tech should reflect what you get when you enquire or visit.
            </p>
          </div>
        </div>

        {/* Bottom 2 Detail Cards */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 1: How we verify dealers */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 space-y-5 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
              How we verify dealers
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Before dealers can represent themselves credibly on DriveRight Tech, we review their presence and documentation—not a one-time badge, but an expectation of professionalism.
            </p>

            <div className="flex items-center gap-2 text-xs sm:text-[13px] text-slate-500 font-medium pt-1">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 fill-emerald-100" />
              <span>Example of what you&apos;ll see on profiles and listings after checks.</span>
            </div>

            <div className="space-y-3.5 pt-2 text-sm">
              <div className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-slate-600 leading-relaxed">
                  <strong className="font-semibold text-slate-900">Identity &amp; business checks</strong> — we verify who is selling and that they operate as a legitimate dealership or seller.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-slate-600 leading-relaxed">
                  <strong className="font-semibold text-slate-900">Onboarding review</strong> — new dealer accounts are reviewed before they can fully present inventory on the platform.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-slate-600 leading-relaxed">
                  <strong className="font-semibold text-slate-900">Ongoing compliance</strong> — serious policy breaches can lead to warnings, suspension, or removal to protect buyers.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-slate-600 leading-relaxed">
                  <strong className="font-semibold text-slate-900">CAC verification</strong> — every dealer must pass a Corporate Affairs Commission (CAC) registration check before they can publish any listing on DriveRight Tech.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Buyer safeguards */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 space-y-5 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">
              Buyer safeguards
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Your safety and confidence matter whether you&apos;re browsing, messaging, or ready to buy.
            </p>

            <ul className="space-y-3.5 pt-2 text-sm text-slate-600 leading-relaxed list-disc pl-5">
              <li>
                <strong className="font-semibold text-slate-900">Secure contact</strong> — use in-platform messaging where possible so you don&apos;t have to share personal details with strangers too early.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Report &amp; escalation</strong> — use the Report button on any listing or dealer profile to flag suspicious behaviour; every report is reviewed and resolved through our internal review queue, so nothing you flag goes unanswered.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Verify the vehicle</strong> — before paying any deposit, confirm the chassis/VIN, seller&apos;s proof of ownership, customs clearance documents, and vehicle history; make sure the details match the physical vehicle and avoid any listing where documents can&apos;t be independently verified.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Never pay before inspecting</strong> — never pay a reservation fee or deposit before inspecting and verifying the vehicle in person.
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
