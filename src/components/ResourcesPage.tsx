import React, { useState } from 'react';
import { 
  BookOpen, 
  ShieldCheck, 
  HelpCircle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  FileCheck, 
  Lock, 
  Users, 
  ArrowRight,
  Download,
  AlertCircle
} from 'lucide-react';

interface ResourcesPageProps {
  onOpenDemo: () => void;
  onNavigate: (route: string) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onOpenDemo, onNavigate }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does DriveRight verify that a dealership is legitimate?',
      a: 'We physically inspect each dealer yard address in Nigeria, verify their CAC (Corporate Affairs Commission) certificate, authenticate Nigerian Customs duty receipts, and confirm owner/manager NIN/BVN credentials before granting the "Verified Dealer" badge.'
    },
    {
      q: 'Can my existing inventory spreadsheet be imported into DriveRight OS?',
      a: 'Yes! Our Nigerian onboarding team provides white-glove migration. You can upload an Excel or CSV file of your current yard stock, or send us photos of your lot ledger, and our team will digitize it within 4 hours.'
    },
    {
      q: 'What prevents sales reps from taking buyer WhatsApp leads for personal deals?',
      a: 'DriveRight OS features anti-leakage protections. All leads entering through WhatsApp API or phone calls route through the dealer company inbox. Customer phone numbers and historical conversations remain property of the dealership even if a staff member departs.'
    },
    {
      q: 'How does June AI determine realistic car prices in Nigeria?',
      a: 'June AI is continually updated with live exchange rates (FX parallel & official), current Apapa customs tariff schedules, and anonymized sales price data from over 140,000 closed vehicle sales across Lagos, Abuja, and Port Harcourt.'
    },
    {
      q: 'Can we issue official receipts and invoices through DriveRight?',
      a: 'Yes. DriveRight includes a complete automotive invoicing and sales agreement engine. You can issue digital invoices, track deposit part-payments, generate handover gate passes, and download tax-ready receipts.'
    }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Header Banner */}
      <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200">
              Dealership & Buyer Resources
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
              Guides, Trust Standards & FAQ.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Everything you need to know about operating an elite dealership on DriveRight OS, dealer data security, and buying cars safely in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Core Resource Hubs */}
      <section id="guides" className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Dealer Data Trust */}
            <div id="dealer-trust" className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between scroll-mt-24">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-5 border border-orange-100">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Dealer Data Trust Pledge</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Your purchase cost, supplier contacts, and customer phone numbers belong exclusively to your business. We never sell dealer data to competitors or third-party brokers.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-orange-600 shrink-0" />
                    <span>NDPR (Nigeria Data Protection Regulation) Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-orange-600 shrink-0" />
                    <span>256-bit encrypted lot records</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => alert('Dealer Trust Document: Download full NDA & Data Integrity Charter PDF.')}
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 cursor-pointer"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Dealer Security Charter (PDF)</span>
                </button>
              </div>
            </div>

            {/* How It Works Guide */}
            <div id="how-it-works" className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between scroll-mt-24">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center mb-5 border border-slate-200">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Dealer Onboarding Guide</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Step-by-step documentation on setting up lot locations, connecting your official WhatsApp business numbers, and deploying June AI to your sales team.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-orange-600 shrink-0" />
                    <span>Setup time: under 30 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-orange-600 shrink-0" />
                    <span>Full staff video walkthroughs</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Request 1-on-1 Guided Onboarding</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Verification Protocol */}
            <div id="verify" className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between scroll-mt-24">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-5 border border-orange-100">
                  <FileCheck className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Customs & VIN Verification</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  How DriveRight prevents fake customs papers and seized vehicles. We integrate with customs lookup channels to ensure clean title handovers.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-orange-600 shrink-0" />
                    <span>Single Goods Declaration (SGD) checks</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-orange-600 shrink-0" />
                    <span>Stolen vehicle registry cross-reference</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onNavigate('for-customers')}
                  className="text-xs font-bold text-orange-700 hover:text-orange-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>View Verified Cars Marketplace</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faq" className="py-12 sm:py-16 bg-white border-t border-slate-200 scroll-mt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Outfit'] mt-1">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Everything Nigerian dealers and buyers ask before getting started.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-all bg-slate-50/50"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-100/60 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-orange-600 shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Need more help? */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-base">Have custom questions for your yard?</h4>
              <p className="text-xs text-slate-300 mt-1">Our dealer support team in Victoria Island is ready to assist.</p>
            </div>
            <a
              href="mailto:hello@driveright.tech"
              className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shrink-0 shadow-md transition-all"
            >
              Email hello@driveright.tech
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
