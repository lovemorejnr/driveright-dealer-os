import React, { useState, useRef, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  ChevronDown, 
  Calendar, 
  Package, 
  FileText,
  Activity,
  MessageSquare, 
  Users,
  ShoppingBag, 
  Shield,
  ShieldCheck, 
  TrendingUp, 
  Sparkles,
  HelpCircle, 
  Smartphone, 
  Building2,
  Mail,
  Calculator,
  Tag,
  MapPin,
  History,
  ArrowRight
} from 'lucide-react';
import { DeviceViewport } from '../types';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onNavigateToSection?: (page: string, sectionId: string) => void;
  onOpenDemo: () => void;
  onOpenSearch: () => void;
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  viewportMode: DeviceViewport;
  onToggleViewport: (mode: DeviceViewport) => void;
}

export const PRODUCTS_DROPDOWN_COLUMNS = [
  {
    category: 'STOCK',
    items: [
      {
        id: 'inventory',
        title: 'Inventory',
        desc: 'Every car, its papers and its photos, from arrival to sale.',
        icon: Package,
      },
      {
        id: 'documents',
        title: 'Documents',
        desc: 'Registration, customs and ownership papers with expiry tracking.',
        icon: FileText,
      },
      {
        id: 'arrivals',
        title: 'Arrivals',
        desc: 'Track inbound cars: supplier, ETA, mark them arrived.',
        icon: Activity,
      }
    ]
  },
  {
    category: 'SELLING',
    items: [
      {
        id: 'enquiries',
        title: 'Enquiries',
        desc: 'One inbox for every buyer message, assigned to a salesperson.',
        icon: MessageSquare,
      },
      {
        id: 'customers',
        title: 'Customers',
        desc: 'Your customer book: budgets, pipeline stage, contact history.',
        icon: Users,
      },
      {
        id: 'sales-payments',
        title: 'Sales & payments',
        desc: 'Deposits, part-payments against the balance, branded invoices.',
        icon: ShoppingBag,
      }
    ]
  },
  {
    category: 'RUNNING THE PLACE',
    items: [
      {
        id: 'calendar',
        title: 'Calendar',
        desc: 'Viewings, test drives and handovers - subscribe from Google or Apple.',
        icon: Calendar,
      },
      {
        id: 'team-roles',
        title: 'Team & roles',
        desc: 'Staff accounts, roles, tasks, team chat and an audit log.',
        icon: Users,
      },
      {
        id: 'reports-analytics',
        title: 'Reports & analytics',
        desc: 'Revenue, units, conversion - from your own records, nothing invented.',
        icon: TrendingUp,
      }
    ]
  },
  {
    category: 'REACHING BUYERS',
    items: [
      {
        id: 'june-ai',
        title: 'June AI',
        desc: 'Listing copy, buyer reply drafts, lead scoring on every page.',
        icon: Sparkles,
      },
      {
        id: 'marketplace-listings',
        title: 'Marketplace listings',
        desc: 'Publish your stock to buyers browsing DriveRight.',
        icon: Search,
      },
      {
        id: 'verification-trust',
        title: 'Verification & trust',
        desc: 'Verified-dealer status and what buyers are shown about you.',
        icon: Shield,
      }
    ]
  }
];

export const RESOURCES_DROPDOWN_COLUMNS = [
  {
    category: 'LEARN',
    items: [
      {
        title: 'How it works',
        desc: 'How buying a car works, step by step.',
        icon: HelpCircle,
        route: 'resources',
        section: 'how-it-works'
      },
      {
        title: 'User guide',
        desc: 'Step-by-step walkthroughs of every screen.',
        icon: Smartphone,
        route: 'resources',
        section: 'guides'
      }
    ]
  },
  {
    category: 'TRUST',
    items: [
      {
        title: 'Dealer Data Trust',
        desc: "What we do with your dealership's data, and what we never do.",
        icon: Shield,
        route: 'resources',
        section: 'dealer-trust'
      },
      {
        title: 'How we verify dealers',
        desc: 'Identity, business checks and onboarding review: explained on the dealer directory.',
        icon: ShieldCheck,
        route: 'resources',
        section: 'verify'
      }
    ]
  },
  {
    category: 'COMPANY',
    items: [
      {
        title: 'About us',
        desc: 'Who builds this and where we are.',
        icon: Building2,
        route: 'resources',
        section: 'about'
      },
      {
        title: 'Changelog',
        desc: 'New features, improvements and security updates.',
        icon: History,
        route: 'changelog'
      },
      {
        title: 'Contact',
        desc: 'hello@driveright.tech, Lagos, Nigeria.',
        icon: Mail,
        action: 'contact'
      },
      {
        title: 'FAQ',
        desc: 'The questions dealers ask before they sign up.',
        icon: HelpCircle,
        route: 'resources',
        section: 'faq'
      }
    ]
  },
  {
    category: 'FOR BUYERS',
    items: [
      {
        title: 'Browse cars',
        desc: 'Every verified listing on the marketplace.',
        icon: Search,
        route: 'for-customers'
      },
      {
        title: 'Car valuation',
        desc: 'An estimated market value for a car you own.',
        icon: Calculator,
        route: 'for-customers'
      },
      {
        title: 'Sell your car',
        desc: 'List a vehicle, or put it in front of dealers.',
        icon: Tag,
        route: 'for-customers'
      },
      {
        title: 'Find a dealer',
        desc: 'Verified dealerships near you.',
        icon: MapPin,
        route: 'for-customers'
      }
    ]
  }
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onNavigateToSection,
  onOpenDemo,
  onOpenSearch,
  onOpenAuth,
  viewportMode,
  onToggleViewport,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'products' | 'resources' | null>(null);

  const headerRef = useRef<HTMLElement>(null);
  const lastHoverTimeRef = useRef<number>(0);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: 'products' | 'resources') => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    lastHoverTimeRef.current = Date.now();
    setActiveDropdown(menu);
  };

  const handleBookDemoClick = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onOpenDemo();
  };

  const handleSearchClick = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onOpenSearch();
  };

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onOpenAuth(mode);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleDropdownButtonClick = (menu: 'products' | 'resources', e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    const justHovered = Date.now() - lastHoverTimeRef.current < 350;

    if (activeDropdown === menu) {
      if (justHovered) {
        setActiveDropdown(menu);
      } else {
        setActiveDropdown(null);
      }
    } else {
      setActiveDropdown(menu);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (headerRef.current && !headerRef.current.contains(target)) {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (page: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    onNavigate(page);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const handleSectionClick = (sectionId: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    
    if (onNavigateToSection) {
      onNavigateToSection('products', sectionId);
    } else {
      onNavigate('products');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 120);
    }
  };

  const handleProductItemClick = (item: typeof PRODUCTS_DROPDOWN_COLUMNS[0]['items'][0]) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (item.id === 'june-ai') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById('june-ai');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else if (item.id === 'verification-trust') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById('trust');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else {
      handleSectionClick(item.id);
    }
  };

  const handleResourceItemClick = (item: typeof RESOURCES_DROPDOWN_COLUMNS[0]['items'][0]) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if ('action' in item && item.action === 'contact') {
      window.location.href = 'mailto:hello@driveright.tech';
      return;
    }

    onNavigate(item.route ?? 'resources');
    if ('section' in item && item.section) {
      setTimeout(() => {
        const el = document.getElementById(item.section as string);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  };

  return (
    <header 
      ref={headerRef}
      onMouseLeave={handleMouseLeave}
      className="sticky top-0 z-40 w-full border-b border-slate-200/90 bg-white/95 backdrop-blur-md transition-all"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        
        {/* Left: Real Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center group cursor-pointer focus:outline-none shrink-0"
            aria-label="DriveRight Tech - home"
          >
            <img 
              src={`${import.meta.env.BASE_URL}driverightlogo.png`} 
              alt="DriveRight Tech" 
              className="h-6 sm:h-9 w-auto object-contain transition-transform group-hover:scale-102"
            />
          </button>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav 
          className="hidden lg:flex items-center space-x-1 xl:space-x-2" 
          aria-label="Primary Navigation"
        >
          {/* Products Dropdown trigger */}
          <button
            type="button"
            id="nav-products-dropdown-btn"
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'products'}
            onMouseEnter={() => handleMouseEnter('products')}
            onClick={(e) => handleDropdownButtonClick('products', e)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer select-none ${
              activeDropdown === 'products'
                ? 'bg-slate-100 text-slate-900'
                : currentPage === 'products'
                  ? 'text-orange-600 bg-orange-50/70'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            <span>Products</span>
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180 text-slate-700' : 'text-slate-400'}`} />
          </button>

          {/* For customers */}
          <button
            type="button"
            onClick={() => handleNavClick('for-customers')}
            className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              currentPage === 'for-customers'
                ? 'text-orange-600 bg-orange-50/70'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            For customers
          </button>

          {/* Pricing */}
          <button
            type="button"
            onClick={() => handleNavClick('pricing')}
            className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
              currentPage === 'pricing'
                ? 'text-orange-600 bg-orange-50/70'
                : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            Pricing
          </button>

          {/* Resources Dropdown trigger */}
          <button
            type="button"
            id="nav-resources-dropdown-btn"
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'resources'}
            onMouseEnter={() => handleMouseEnter('resources')}
            onClick={(e) => handleDropdownButtonClick('resources', e)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors cursor-pointer select-none ${
              activeDropdown === 'resources'
                ? 'bg-slate-100 text-slate-900'
                : currentPage === 'resources' || currentPage === 'changelog'
                  ? 'text-orange-600 bg-orange-50/70'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            <span>Resources</span>
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180 text-slate-700' : 'text-slate-400'}`} />
          </button>
        </nav>

        {/* Right CTA Actions: Search Icon, Sign in, Sign up, Book a demo, Mobile toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          
          {/* Search Icon button */}
          <button
            id="nav-search-btn"
            type="button"
            onClick={handleSearchClick}
            aria-label="Search DriveRight"
            title="Search (⌘K)"
            className="h-8.5 w-8.5 sm:h-9 sm:w-9 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer"
          >
            <Search className="h-4 w-4" />
          </button>

          {/* Sign in - desktop */}
          <button
            id="nav-signin-btn"
            type="button"
            onClick={() => handleAuthClick('signin')}
            className="hidden sm:inline-flex items-center justify-center px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Sign in
          </button>

          {/* Sign up - desktop */}
          <button
            id="nav-signup-btn"
            type="button"
            onClick={() => handleAuthClick('signup')}
            className="hidden sm:inline-flex items-center justify-center px-3.5 py-2 text-sm font-semibold text-slate-800 border border-slate-300 rounded-md hover:bg-slate-50 transition-all cursor-pointer"
          >
            Sign up
          </button>

          {/* Book a demo - responsive on mobile & desktop */}
          <button
            id="nav-book-demo-btn"
            type="button"
            onClick={handleBookDemoClick}
            className="inline-flex items-center justify-center rounded-md bg-orange-600 hover:bg-orange-500 active:scale-[0.98] px-2.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-xs transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Book a demo</span>
          </button>

          {/* Mobile Menu Burger */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="inline-flex lg:hidden items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 min-w-[38px] min-h-[38px] cursor-pointer ml-0.5"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Desktop Mega Dropdown (Products & Resources) */}
      {activeDropdown && (
        <div 
          className="hidden lg:block absolute top-full left-0 right-0 w-full bg-white border-b border-slate-200 shadow-xl z-50 animate-in fade-in-50 duration-150"
          onMouseEnter={() => {
            if (closeTimeoutRef.current) {
              clearTimeout(closeTimeoutRef.current);
              closeTimeoutRef.current = null;
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-9">
            {activeDropdown === 'products' && (
              <>
                <div className="grid grid-cols-4 gap-8 lg:gap-10">
                  {PRODUCTS_DROPDOWN_COLUMNS.map((col) => (
                    <div key={col.category} className="space-y-5">
                      <h3 className="text-[11px] font-bold tracking-widest text-slate-400 uppercase select-none">
                        {col.category}
                      </h3>
                      <div className="space-y-6">
                        {col.items.map((item) => {
                          const IconComp = item.icon;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => handleProductItemClick(item)}
                              className="w-full flex items-start gap-3.5 text-left group cursor-pointer focus:outline-none"
                            >
                              <div className="w-8 h-8 rounded-lg bg-orange-50/70 border border-orange-200/70 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-colors">
                                <IconComp className="h-4 w-4 stroke-[1.8]" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                  {item.title}
                                </div>
                                <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                                  {item.desc}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom bar for Products */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-slate-500 font-normal">
                    Everything here ships today.
                  </span>
                  <button
                    type="button"
                    onClick={() => handleNavClick('products')}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-colors cursor-pointer"
                  >
                    <span>See the whole system</span>
                    <span>→</span>
                  </button>
                </div>
              </>
            )}

            {activeDropdown === 'resources' && (
              <div className="grid grid-cols-4 gap-8 lg:gap-10">
                {RESOURCES_DROPDOWN_COLUMNS.map((col) => (
                  <div key={col.category} className="space-y-5">
                    <h3 className="text-[11px] font-bold tracking-widest text-slate-400 uppercase select-none">
                      {col.category}
                    </h3>
                    <div className="space-y-6">
                      {col.items.map((item) => {
                        const IconComp = item.icon;
                        return (
                          <button
                            key={item.title}
                            type="button"
                            onClick={() => handleResourceItemClick(item)}
                            className="w-full flex items-start gap-3.5 text-left group cursor-pointer focus:outline-none"
                          >
                            <div className="w-8 h-8 rounded-lg bg-orange-50/70 border border-orange-200/70 text-orange-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-colors">
                              <IconComp className="h-4 w-4 stroke-[1.8]" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                {item.title}
                              </div>
                              <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            
            {/* Search Bar in Mobile Menu */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors mb-2"
            >
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-slate-400" />
                <span>Search modules, inventory tools...</span>
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 text-slate-600">Quick Find</span>
            </button>

            {/* Products Accordion with all sections */}
            <div className="border border-slate-100 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className={`w-full flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-bold text-left transition-colors ${
                  currentPage === 'products' ? 'bg-orange-50 text-orange-600' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Products (12 Modules)</span>
                <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${mobileProductsOpen ? 'rotate-180 text-orange-600' : ''}`} />
              </button>

              {mobileProductsOpen && (
                <div className="bg-slate-50 p-2 space-y-3 border-t border-slate-100">
                  {PRODUCTS_DROPDOWN_COLUMNS.map((group) => (
                    <div key={group.category} className="space-y-1">
                      <div className="text-[10px] font-bold text-orange-600 uppercase px-2">
                        {group.category}
                      </div>
                      {group.items.map((item) => {
                        const IconComp = item.icon;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleProductItemClick(item)}
                            className="w-full flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-100 text-left text-xs text-slate-800 font-semibold"
                          >
                            <div className="h-6 w-6 rounded flex items-center justify-center bg-orange-50 text-orange-600">
                              <IconComp className="h-3.5 w-3.5" />
                            </div>
                            <span className="truncate">{item.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleNavClick('products')}
                    className="w-full text-center py-2 text-xs font-bold text-orange-600 hover:underline"
                  >
                    View Complete Products Overview →
                  </button>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => handleNavClick('for-customers')}
              className={`w-full flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-bold text-left transition-colors ${
                currentPage === 'for-customers' ? 'bg-orange-50 text-orange-600' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>For customers</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('pricing')}
              className={`w-full flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-bold text-left transition-colors ${
                currentPage === 'pricing' ? 'bg-orange-50 text-orange-600' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>Pricing</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </button>

            {/* Resources Accordion with links */}
            <div className="border border-slate-100 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className={`w-full flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-bold text-left transition-colors ${
                  currentPage === 'resources' || currentPage === 'changelog' ? 'bg-orange-50 text-orange-600' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Resources</span>
                <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${mobileResourcesOpen ? 'rotate-180 text-orange-600' : ''}`} />
              </button>

              {mobileResourcesOpen && (
                <div className="bg-slate-50 p-2 space-y-3 border-t border-slate-100">
                  {RESOURCES_DROPDOWN_COLUMNS.map((group) => (
                    <div key={group.category} className="space-y-1">
                      <div className="text-[10px] font-bold text-orange-600 uppercase px-2">
                        {group.category}
                      </div>
                      {group.items.map((item) => {
                        const IconComp = item.icon;
                        return (
                          <button
                            key={item.title}
                            type="button"
                            onClick={() => handleResourceItemClick(item)}
                            className="w-full flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-100 text-left text-xs text-slate-800 font-semibold"
                          >
                            <div className="h-6 w-6 rounded flex items-center justify-center bg-orange-50 text-orange-600">
                              <IconComp className="h-3.5 w-3.5" />
                            </div>
                            <span className="truncate">{item.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleNavClick('resources')}
                    className="w-full text-center py-2 text-xs font-bold text-orange-600 hover:underline"
                  >
                    View All Resources Overview →
                  </button>
                </div>
              )}
            </div>

            {/* Auth & Demo Mobile Actions */}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={handleBookDemoClick}
                className="w-full flex items-center justify-center rounded-md bg-orange-600 hover:bg-orange-500 px-4 py-3 text-sm font-bold text-white shadow-sm transition-all cursor-pointer"
              >
                <span>Book a demo</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth('signin');
                  }}
                  className="w-full py-2.5 rounded-md border border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 text-center transition-colors cursor-pointer"
                >
                  Sign in
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth('signup');
                  }}
                  className="w-full py-2.5 rounded-md border border-slate-300 bg-slate-900 text-xs font-bold text-white hover:bg-slate-800 text-center transition-colors cursor-pointer shadow-xs"
                >
                  Sign up
                </button>
              </div>

              <div className="pt-1 text-center text-[11px] text-slate-400">
                Operating across Lagos, Abuja & Port Harcourt
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
