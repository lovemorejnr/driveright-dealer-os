import React, { useState } from 'react';
import { Search, X, ArrowRight, Car, FileText, HelpCircle, Shield, Building2, Tag } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: string) => void;
}

const SEARCH_ITEMS = [
  { title: 'Inventory Management', category: 'Products', route: 'products', icon: Car, desc: 'Every car, papers, photos from arrival to sale' },
  { title: 'Enquiries & WhatsApp CRM', category: 'Products', route: 'products', icon: FileText, desc: 'Central dealer inbox for customer chats and lead assignments' },
  { title: 'Sales & Payments Invoicing', category: 'Products', route: 'products', icon: Tag, desc: 'Deposits, payment receipts, balance tracking' },
  { title: 'June AI Assistant', category: 'Products', route: 'products', icon: HelpCircle, desc: 'Dealership AI copilot for pricing, WhatsApp replies, inventory insights' },
  { title: 'Browse Verified Cars', category: 'For customers', route: 'for-customers', icon: Car, desc: 'Search Nigerian used & foreign used tokunbo cars' },
  { title: 'Car Valuation Tool', category: 'For customers', route: 'for-customers', icon: Tag, desc: 'Free instant market valuation based on Lagos & Abuja transactions' },
  { title: 'Sell Your Car', category: 'For customers', route: 'for-customers', icon: Building2, desc: 'List your car directly or request dealer buyout offers' },
  { title: 'Dealer Pricing & Tiers', category: 'Pricing', route: 'pricing', icon: Tag, desc: 'Starter, Professional and Enterprise plans with transparent limits' },
  { title: 'Buyer & Dealer Guide', category: 'Resources', route: 'resources', icon: FileText, desc: 'Step-by-step guides for purchasing and inventory audit' },
  { title: 'Dealer Data Trust & Verification', category: 'Resources', route: 'resources', icon: Shield, desc: 'How DriveRight audits CAC, yards, and protects dealer data' },
  { title: 'Frequently Asked Questions (FAQ)', category: 'Resources', route: 'resources', icon: HelpCircle, desc: 'Common questions on onboarding, migration, and payment' },
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = SEARCH_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase()) ||
    item.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-100 bg-slate-50/50">
          <Search className="h-5 w-5 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Search products, pages, guides, inventory tools..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-400 hover:text-slate-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold px-2 py-1 rounded bg-slate-200 text-slate-600 hover:bg-slate-300"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-slate-100">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-sm">
              No results found for &ldquo;{query}&rdquo;. Try searching for &ldquo;Pricing&rdquo;, &ldquo;Inventory&rdquo;, &ldquo;June AI&rdquo;, or &ldquo;Valuation&rdquo;.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    onNavigate(item.route);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between gap-3 p-3 rounded-xl text-left hover:bg-slate-50 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1">{item.desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-orange-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </button>
              );
            })
          )}
        </div>

        {/* Quick Footer Links */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Navigate with 1-click quick pages</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => { onNavigate('products'); onClose(); }}
              className="hover:text-orange-600"
            >
              Products
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => { onNavigate('pricing'); onClose(); }}
              className="hover:text-orange-600"
            >
              Pricing
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => { onNavigate('resources'); onClose(); }}
              className="hover:text-orange-600"
            >
              Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
