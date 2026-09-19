import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const TikTokIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
  </svg>
);

interface FooterProps {
  onOpenDemo: () => void;
  onNavigate: (route: string) => void;
  onNavigateToSection?: (page: string, sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo, onNavigate, onNavigateToSection }) => {
  const handleProductLink = (sectionId?: string) => {
    if (sectionId && onNavigateToSection) {
      onNavigateToSection('products', sectionId);
    } else {
      onNavigate('products');
    }
  };
  return (
    <footer className="bg-[#050608] text-slate-400 text-xs border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Column with white logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="cursor-pointer focus:outline-none"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}driverightlogo-white.png`} 
                  alt="DriveRight Tech" 
                  className="h-8 w-auto object-contain"
                />
              </button>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              The operating system Nigerian dealerships run on - and the marketplace their buyers browse.
            </p>

            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="DriveRight on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="DriveRight on TikTok"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="DriveRight on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Product
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button 
                  type="button" 
                  onClick={() => handleProductLink('inventory')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Inventory
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => handleProductLink('enquiries')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Enquiries
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => handleProductLink('sales-payments')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Sales & payments
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => onNavigate('products')} 
                  className="hover:text-white transition-colors text-left"
                >
                  June AI
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => onNavigate('pricing')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={onOpenDemo} 
                  className="hover:text-white transition-colors text-left"
                >
                  Book a demo
                </button>
              </li>
            </ul>
          </div>

          {/* Marketplace Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Marketplace
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button 
                  type="button" 
                  onClick={() => onNavigate('for-customers')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Browse cars
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => onNavigate('for-customers')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Sell your car
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => onNavigate('for-customers')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Car valuation
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => onNavigate('for-customers')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Find a dealer
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => onNavigate('for-customers')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Vehicle parts
                </button>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button 
                  type="button" 
                  onClick={() => onNavigate('resources')} 
                  className="hover:text-white transition-colors text-left"
                >
                  About us
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => onNavigate('resources')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => onNavigate('resources')} 
                  className="hover:text-white transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('changelog')}
                  className="hover:text-white transition-colors text-left"
                >
                  Changelog
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => onNavigate('resources')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Dealer Data Trust
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => onNavigate('resources')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  onClick={() => onNavigate('resources')} 
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li className="text-slate-400">
                Lagos, Nigeria
              </li>
              <li>
                <a href="mailto:hello@driveright.tech" className="text-orange-500 hover:text-orange-400 underline">
                  hello@driveright.tech
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-14 pt-6 border-t border-slate-900 text-center text-[11px] text-slate-500">
          © 2026 DriveRight Tech. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
