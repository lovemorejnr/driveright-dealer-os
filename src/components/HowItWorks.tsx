import React, { useState } from 'react';
import { Upload, Users, ShoppingBag, ArrowRight, CheckCircle2, FileSpreadsheet, Shield, FileText } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: 1,
      title: 'Bring your stock in',
      tagline: 'Spreadsheet import or quick add',
      description: 'Upload your existing list from a spreadsheet with row-by-row error checking, or add cars one at a time with model and trim suggestions as you type.',
      icon: Upload,
      preview: {
        title: 'Instant Spreadsheet Parser',
        details: 'Parses Make, Model, Year, VIN, Cost, Price, Mileage. Automatically highlights missing customs papers.',
        metric: 'Takes ~4 minutes for 50 cars'
      }
    },
    {
      number: 2,
      title: 'Put your team on it',
      tagline: 'Role-based access & lead assignment',
      description: 'Create staff accounts with the right role, assign enquiries to salespeople, and see the audit log of who changed what.',
      icon: Users,
      preview: {
        title: 'Team Security & Audit Log',
        details: 'Sales reps only see their assigned leads. Managers see total margin, floor costs and bank receipts.',
        metric: '2-Factor Authentication (2FA)'
      }
    },
    {
      number: 3,
      title: 'Publish and sell',
      tagline: 'Marketplace sync & printed invoices',
      description: 'Push the cars you want to the marketplace, take enquiries in one inbox, record the sale with its deposits, and print the invoice.',
      icon: ShoppingBag,
      preview: {
        title: 'One-Click Multi-Channel Sync',
        details: 'Push to DriveRight marketplace, WhatsApp catalog, and print stamped PDF receipts in Nigerian Naira.',
        metric: 'Instant branded PDF receipts'
      }
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full bg-orange-100/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-800">
            How It Works
          </div>

          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Three steps to running on it
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            No installation, no server, no migration project. Your stock is in on day one.
          </p>
        </div>

        {/* 3 Step Cards - Mobile Optimized with vertical connector & Desktop horizontal flow */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`group relative rounded-2xl bg-white p-6 sm:p-7 border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  isSelected 
                    ? 'border-orange-500 shadow-md ring-2 ring-orange-500/10' 
                    : 'border-slate-200/90 shadow-2xs hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Step number badge & icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 text-white font-extrabold text-base shadow-xs shadow-orange-600/30">
                      {step.number}
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-5">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Outfit']">
                      {step.title}
                    </h3>
                    <span className="text-xs font-semibold text-slate-400 block mt-0.5">
                      {step.tagline}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Micro-preview box */}
                <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50/80 -mx-2 -mb-2 p-3.5 rounded-xl text-xs space-y-1">
                  <div className="font-bold text-slate-800 flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-orange-600" />
                    {step.preview.title}
                  </div>
                  <p className="text-slate-500 text-[11px]">
                    {step.preview.details}
                  </p>
                  <div className="pt-1 text-[10px] font-semibold text-orange-700">
                    ⚡ {step.preview.metric}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Setup Guarantee */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium text-center">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
            <span>Free 30-minute migration assistance by our Lagos team</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
            <span>No long-term contracts • Cancel anytime</span>
          </div>
        </div>

      </div>
    </section>
  );
};
