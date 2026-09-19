import React from 'react';
import { 
  Package, 
  MessageSquare, 
  Users, 
  Receipt, 
  Calendar, 
  ShieldCheck, 
  TrendingUp, 
  FileCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SYSTEM_MODULES } from '../data/dealershipData';

interface SystemFeaturesProps {
  onSelectFeature?: (featureId: string) => void;
}

export const SystemFeatures: React.FC<SystemFeaturesProps> = ({ onSelectFeature }) => {
  // Map icon strings to Lucide components
  const renderIcon = (name: string, isPrimary?: boolean) => {
    const iconClass = isPrimary 
      ? "h-5 w-5 text-orange-600" 
      : "h-5 w-5 text-slate-700";

    switch (name) {
      case 'Package': return <Package className={iconClass} />;
      case 'MessageSquare': return <MessageSquare className={iconClass} />;
      case 'Users': return <Users className={iconClass} />;
      case 'Receipt': return <Receipt className={iconClass} />;
      case 'Calendar': return <Calendar className={iconClass} />;
      case 'ShieldCheck': return <ShieldCheck className={iconClass} />;
      case 'TrendingUp': return <TrendingUp className={iconClass} />;
      case 'FileCheck': return <FileCheck className={iconClass} />;
      case 'Sparkles': return <Sparkles className={iconClass} />;
      default: return <Package className={iconClass} />;
    }
  };

  return (
    <section id="system" className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with crisp typographic hierarchy */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
            The System
          </div>

          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Everything a dealership runs on, in one place
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Not a marketplace with a dashboard bolted on. The whole operation (the cars, the people who want them, the money, and the team) on one login.
          </p>
        </div>

        {/* 9 Modules Grid - Redesigned with strong visual hierarchy & mobile card ergonomics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SYSTEM_MODULES.map((module) => {
            const isHighlighted = module.isPrimary;

            return (
              <div
                key={module.id}
                className={`relative rounded-2xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-between ${
                  isHighlighted
                    ? 'bg-linear-to-b from-orange-50/40 via-white to-white border-2 border-orange-200/80 shadow-sm'
                    : 'bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs'
                }`}
              >
                <div>
                  {/* Card Header: Icon & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      isHighlighted ? 'bg-orange-100/80' : 'bg-slate-100'
                    }`}>
                      {renderIcon(module.iconName, module.isPrimary)}
                    </div>

                    {module.badge && (
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isHighlighted 
                          ? 'bg-orange-600 text-white shadow-2xs' 
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {module.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-4">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-['Outfit']">
                      {module.title}
                    </h3>
                    {module.tagline && (
                      <span className="text-xs font-semibold text-slate-500 block mt-0.5">
                        {module.tagline}
                      </span>
                    )}
                  </div>

                  {/* Body description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {module.description}
                  </p>
                </div>

                {/* Sub link for June AI or relevant actions */}
                {module.id === 'june' && (
                  <div className="mt-4 pt-3 border-t border-orange-100 flex items-center justify-between text-xs font-bold text-orange-600">
                    <a href="#june-ai" className="hover:underline flex items-center gap-1">
                      <span>Explore June AI capabilities</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Supporting Shipping Features Banner */}
        <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200/80 p-4 sm:p-5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs sm:text-sm text-slate-600">
            <strong className="font-semibold text-slate-800">Also included in every account:</strong> Bulk import from Excel, arrivals tracking, ownership transfer, team chat, tasks, vehicle operations with PDF condition reports, and two-factor sign-in (2FA).
          </p>
          <a
            href="#pricing"
            className="text-xs font-bold text-orange-600 hover:text-orange-700 whitespace-nowrap"
          >
            See full specifications →
          </a>
        </div>

      </div>
    </section>
  );
};
