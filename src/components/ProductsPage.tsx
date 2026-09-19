import React, { useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { ProductModuleMockup } from './ProductModuleMockup';

interface ProductsPageProps {
  onOpenDemo: () => void;
  onNavigate: (route: string) => void;
  onOpenAuth?: (mode: 'signin' | 'signup') => void;
}

interface ProductSectionConfig {
  id: string;
  category: 'STOCK' | 'SELLING' | 'RUNNING THE PLACE' | 'REACHING BUYERS';
  title: string;
  description: string;
  layout: 'image-left' | 'text-left';
  mockupType: 'image' | 'arrivals' | 'calendar' | 'team-roles' | 'reports-analytics' | 'marketplace-listings';
  imageSrc?: string;
}

export const PRODUCTS_SECTIONS: ProductSectionConfig[] = [
  {
    id: 'inventory',
    category: 'STOCK',
    title: 'Inventory',
    description:
      'Search and filter your whole stock list by price, status, or days in stock, and export it to a spreadsheet whenever you need it. Adding a car is a guided form for VIN, specs, photos and documents, with model and trim suggestions as you type.',
    layout: 'image-left',
    mockupType: 'image',
    imageSrc: '/screenshots/screenshot-1.png'
  },
  {
    id: 'documents',
    category: 'STOCK',
    title: 'Documents',
    description:
      'Registration, customs and proof-of-ownership papers attached to each car, with expiry dates tracked so nothing lapses quietly.',
    layout: 'text-left',
    mockupType: 'image',
    imageSrc: '/screenshots/screenshot-2.png'
  },
  {
    id: 'arrivals',
    category: 'STOCK',
    title: 'Arrivals',
    description:
      'Track inbound cars: supplier, ETA, and mark them arrived. A car that has not landed yet is still a car you can plan around.',
    layout: 'image-left',
    mockupType: 'arrivals'
  },
  {
    id: 'enquiries',
    category: 'SELLING',
    title: 'Enquiries',
    description:
      'Every buyer message lands in one inbox: assign it to a salesperson, reply, and watch the status. You can import WhatsApp conversations too.',
    layout: 'text-left',
    mockupType: 'image',
    imageSrc: '/screenshots/screenshot-3.png'
  },
  {
    id: 'customers',
    category: 'SELLING',
    title: 'Customers',
    description:
      'Your customer book with budgets, pipeline stage and contact history, plus an automatic risk score so you know who needs a call.',
    layout: 'image-left',
    mockupType: 'image',
    imageSrc: '/screenshots/screenshot-5.png'
  },
  {
    id: 'sales-payments',
    category: 'SELLING',
    title: 'Sales & payments',
    description:
      'Record the sale, log deposits and part-payments against the balance, and print a branded invoice and receipt.',
    layout: 'text-left',
    mockupType: 'image',
    imageSrc: '/screenshots/screenshot-4.png'
  },
  {
    id: 'calendar',
    category: 'RUNNING THE PLACE',
    title: 'Calendar',
    description:
      'One shared dealership calendar for viewings, test drives and handovers, with a private feed you can subscribe to from Google or Apple Calendar.',
    layout: 'image-left',
    mockupType: 'calendar'
  },
  {
    id: 'team-roles',
    category: 'RUNNING THE PLACE',
    title: 'Team & roles',
    description:
      'Staff accounts with roles, tasks, team chat and an audit log so you can see who did what, and give each person only what their job needs.',
    layout: 'text-left',
    mockupType: 'team-roles'
  },
  {
    id: 'reports-analytics',
    category: 'RUNNING THE PLACE',
    title: 'Reports & analytics',
    description:
      'Revenue, units sold, conversion and category mix over time: computed from your actual sales, nothing invented. Each role also gets a home screen with live counts of stock, enquiries and today\'s work.',
    layout: 'image-left',
    mockupType: 'reports-analytics'
  },
  {
    id: 'marketplace-listings',
    category: 'REACHING BUYERS',
    title: 'Marketplace listings',
    description:
      'Publish your stock to buyers browsing DriveRight. Your listings carry your verified-dealer badge, and the enquiries they generate arrive in the same inbox as everything else.',
    layout: 'text-left',
    mockupType: 'marketplace-listings'
  }
];

export const ProductsPage: React.FC<ProductsPageProps> = ({ 
  onOpenDemo, 
  onNavigate,
  onOpenAuth 
}) => {
  // Check if there's a target section hash on load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes('#')) {
      const parts = hash.split('#');
      const targetId = parts[parts.length - 1];
      if (targetId && targetId !== 'products') {
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            el.classList.add('ring-2', 'ring-orange-500/40', 'rounded-3xl', 'transition-all');
            setTimeout(() => el.classList.remove('ring-2', 'ring-orange-500/40'), 2000);
          }
        }, 100);
      }
    }
  }, []);

  const handleStartFree = () => {
    if (onOpenAuth) {
      onOpenAuth('signup');
    } else {
      onOpenDemo();
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-slate-900 pb-20">
      
      {/* 1. Hero Section */}
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 text-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Badge */}
          <div className="inline-block mb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50/80 text-orange-700 border border-orange-200">
              Products
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-['Outfit']">
            Everything a dealership actually runs on.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Ten modules, one system, one login. Every one of them ships today: nothing on this page is a roadmap item.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={handleStartFree}
              className="inline-flex items-center justify-center rounded-md bg-orange-600 px-6 py-3 text-sm sm:text-base font-bold text-white shadow-md hover:bg-orange-500 transition-all cursor-pointer min-h-[44px]"
            >
              Start free
            </button>
            <button
              type="button"
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center rounded-md bg-white border border-slate-300 px-6 py-3 text-sm sm:text-base font-semibold text-slate-800 hover:bg-slate-50 transition-all cursor-pointer min-h-[44px]"
            >
              Book a demo
            </button>
          </div>
        </div>
      </section>

      {/* 2. The 10 Alternating Module Sections */}
      <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {PRODUCTS_SECTIONS.map((section, idx) => {
          const isImageLeft = section.layout === 'image-left';

          return (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 p-2 sm:p-4 rounded-3xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                
                {/* Column 1 (Image or Text depending on alternating layout) */}
                {isImageLeft ? (
                  <>
                    {/* Mockup on Left */}
                    <div className="lg:col-span-7 order-2 lg:order-1">
                      <ProductModuleMockup
                        id={section.id}
                        type={section.mockupType}
                        imageSrc={section.imageSrc}
                        title={section.title}
                      />
                    </div>

                    {/* Text on Right */}
                    <div className="lg:col-span-5 order-1 lg:order-2 space-y-3 sm:space-y-4">
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-orange-100/70 text-orange-700">
                        {section.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
                        {section.title}
                      </h2>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
                        {section.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Text on Left */}
                    <div className="lg:col-span-5 order-1 space-y-3 sm:space-y-4">
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-orange-100/70 text-orange-700">
                        {section.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
                        {section.title}
                      </h2>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
                        {section.description}
                      </p>
                    </div>

                    {/* Mockup on Right */}
                    <div className="lg:col-span-7 order-2">
                      <ProductModuleMockup
                        id={section.id}
                        type={section.mockupType}
                        imageSrc={section.imageSrc}
                        title={section.title}
                      />
                    </div>
                  </>
                )}

              </div>
            </section>
          );
        })}
      </div>

      {/* 3. Section: AND THE REST / Told as a checklist */}
      <section className="mt-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50/80 text-orange-700 border border-orange-200">
            AND THE REST
          </span>
          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Told as a checklist, not a screenshot
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything here ships today too. It is listed rather than illustrated because a screenshot of it would not tell you anything a sentence does not.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-orange-300 transition-colors">
            <h3 className="text-base font-bold text-slate-900">Bulk import</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Upload your stock list from Excel with row-by-row error checking.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-orange-300 transition-colors">
            <h3 className="text-base font-bold text-slate-900">Ownership transfer</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Record a legal transfer and the car leaves your stock correctly.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-orange-300 transition-colors">
            <h3 className="text-base font-bold text-slate-900">Delivery reports</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Hand the buyer a branded PDF condition report.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:border-orange-300 transition-colors">
            <h3 className="text-base font-bold text-slate-900">Two-factor sign-in</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              TOTP and passkey support on every account.
            </p>
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-6 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
          <div>
            <h4 className="text-base font-bold text-slate-900">
              Two of these live on their own pages.
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
              June AI is a layer across every module rather than a module, and verification is about how buyers see you rather than how you work. Both have a page of their own.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => {
                onNavigate('home');
                setTimeout(() => {
                  const el = document.getElementById('june-ai');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-800 transition-colors cursor-pointer"
            >
              <span>June AI</span>
              <span>→</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigate('for-customers');
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-xs sm:text-sm font-semibold text-slate-800 transition-colors cursor-pointer"
            >
              <span>Verification & trust</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
