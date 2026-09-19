import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface PricingPageProps {
  onOpenDemo: () => void;
  onNavigate: (route: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenDemo, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'crm' | 'marketplace'>('crm');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [isCompareOpen, setIsCompareOpen] = useState<boolean>(true);

  // Pricing data based on billing cycle (5% discount for annual)
  const isAnnual = billingCycle === 'annual';

  const crmPlans = [
    {
      id: 'free',
      name: 'Free',
      price: '₦0',
      period: 'per month',
      badge: null,
      isPopular: false,
      features: [
        'Up to 2 users and 5 vehicles in inventory',
        '1 marketplace listing slot (separate from your vehicle inventory limit)',
        'Core inventory and customer records',
        'Per-customer pipeline-stage tracking (lead - sold)',
        'Basic enquiry tracking',
        '2 of 6 June AI quick actions - Lead Quality Score, Buyer Message Assistant',
        'Community/self-service support - no WhatsApp line',
      ],
      buttonText: 'Get started',
      buttonStyle: 'border border-slate-300 hover:border-slate-400 bg-white text-slate-800',
    },
    {
      id: 'standard',
      name: 'Standard',
      price: isAnnual ? '₦28,500' : '₦30,000',
      period: 'per month',
      badge: null,
      isPopular: false,
      features: [
        'Up to 5 users and 25 vehicles in inventory',
        '5 marketplace listing slots (separate from your vehicle inventory limit)',
        'Sales order recording with payments, invoices, and documents',
        'Reports page: sales, inventory, and customer reports (PDF export)',
        '3 of 6 June AI quick actions - adds Price Suggestion',
        'WhatsApp support',
      ],
      buttonText: 'Get started',
      buttonStyle: 'border border-slate-300 hover:border-slate-400 bg-white text-slate-800',
    },
    {
      id: 'pro',
      name: 'Pro',
      price: isAnnual ? '₦61,750' : '₦65,000',
      period: 'per month',
      badge: 'Popular',
      isPopular: true,
      features: [
        'Up to 15 users and 60 vehicles in inventory',
        '15 marketplace listing slots (separate from your vehicle inventory limit)',
        'Richer lead and contact tracking',
        'Financial reports: category and Excel/XLSX export, on top of Standard\'s reports',
        'June AI insights on every page - inventory, customers, enquiries, and more',
        '5 of 6 June AI quick actions - adds Listing Description Generator, Auto Follow-Up Suggestions',
        'WhatsApp support with priority triage',
      ],
      buttonText: 'Get started',
      buttonStyle: 'bg-[#FF5300] hover:bg-[#e04a00] text-white font-bold shadow-md shadow-orange-500/25',
    },
    {
      id: 'premium',
      name: 'Premium',
      price: isAnnual ? '₦85,500' : '₦90,000',
      period: 'per month',
      badge: null,
      isPopular: false,
      features: [
        'Up to 30 users and 150 vehicles in inventory',
        '25 marketplace listing slots (separate from your vehicle inventory limit)',
        'Everything in Pro - financial reports, Excel export, June AI insights on every page',
        'All 6 June AI quick actions - adds Inventory Analytics & Health Alert',
        'Highest storage allowance (50 GB)',
        'Structured onboarding and data-import assistance',
        'WhatsApp support with priority triage',
      ],
      buttonText: 'Get started',
      buttonStyle: 'border border-slate-300 hover:border-slate-400 bg-white text-slate-800',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing on request',
      badge: 'Coming Soon',
      isPopular: false,
      features: [
        'Everything in Premium, with custom users, vehicles, and storage allowances',
        'Custom, negotiated marketplace listing-slot allowance',
        'Coming soon - organisation & branch model for multi-location dealer groups',
        'Coming soon - cross-branch dashboards and consolidated reporting',
        'Coming soon - branch roles, custom permissions, and audit export',
        'Coming soon - public APIs, webhooks, SSO/SAML, and SCIM',
      ],
      buttonText: 'Contact sales',
      buttonStyle: 'border-2 border-[#014090] text-[#014090] hover:bg-[#014090] hover:text-white font-bold transition-all',
    },
  ];

  const marketplacePlans = [
    {
      id: 'm-starter',
      name: 'Starter Slots',
      price: isAnnual ? '₦14,250' : '₦15,000',
      period: 'per month',
      badge: null,
      isPopular: false,
      features: [
        '5 active marketplace listing slots',
        'Verified dealer badge on search results',
        'Direct WhatsApp lead enquiries',
        'Analytics on car views & buyer saves',
        'Standard buyer search indexing',
      ],
      buttonText: 'Get started',
      buttonStyle: 'border border-slate-300 hover:border-slate-400 bg-white text-slate-800',
    },
    {
      id: 'm-growth',
      name: 'Growth Slots',
      price: isAnnual ? '₦33,250' : '₦35,000',
      period: 'per month',
      badge: null,
      isPopular: false,
      features: [
        '15 active marketplace listing slots',
        'Priority placement in Lagos & Abuja car feeds',
        'Buyer inquiry notifications via WhatsApp & SMS',
        'Car valuation reference report for buyers',
        'Weekly inventory performance digest',
      ],
      buttonText: 'Get started',
      buttonStyle: 'border border-slate-300 hover:border-slate-400 bg-white text-slate-800',
    },
    {
      id: 'm-pro',
      name: 'Pro Slots',
      price: isAnnual ? '₦57,000' : '₦60,000',
      period: 'per month',
      badge: 'Popular',
      isPopular: true,
      features: [
        '30 active marketplace listing slots',
        'Featured dealer banner on marketplace homepage',
        'Instant enquiry routing to your sales reps',
        'June AI optimized listing descriptions',
        'Priority customer support channel',
      ],
      buttonText: 'Get started',
      buttonStyle: 'bg-[#FF5300] hover:bg-[#e04a00] text-white font-bold shadow-md shadow-orange-500/25',
    },
    {
      id: 'm-scale',
      name: 'Scale Slots',
      price: isAnnual ? '₦90,250' : '₦95,000',
      period: 'per month',
      badge: null,
      isPopular: false,
      features: [
        '50 active marketplace listing slots',
        'Top-tier search indexing across Nigeria',
        'Verified seller trust score boost',
        'Advanced buyer demographics & search analytics',
        'Dedicated marketplace success manager',
      ],
      buttonText: 'Get started',
      buttonStyle: 'border border-slate-300 hover:border-slate-400 bg-white text-slate-800',
    },
    {
      id: 'm-enterprise',
      name: 'Volume Network',
      price: 'Custom',
      period: 'pricing on request',
      badge: 'Coming Soon',
      isPopular: false,
      features: [
        '100+ active marketplace listing slots',
        'Multi-branch inventory synchronization',
        'Direct API integration with dealer DMS',
        'Custom verified dealer landing page',
        'Dedicated enterprise support SLA',
      ],
      buttonText: 'Contact sales',
      buttonStyle: 'border border-slate-300 hover:border-slate-400 bg-white text-slate-800',
    },
  ];

  const displayedPlans = activeTab === 'crm' ? crmPlans : marketplacePlans;

  // Comparison Table rows
  const comparisonRows = [
    {
      capability: 'Users',
      free: '2',
      standard: '5',
      pro: '15',
      premium: '30',
      enterprise: 'Unlimited',
    },
    {
      capability: 'Vehicle inventory capacity',
      free: '5',
      standard: '25',
      pro: '60',
      premium: '150',
      enterprise: 'Unlimited',
    },
    {
      capability: 'Marketplace listing slots',
      free: '1',
      standard: '5',
      pro: '15',
      premium: '25',
      enterprise: 'Unlimited',
    },
    {
      capability: 'Document storage',
      free: '500 MB',
      standard: '5 GB',
      pro: '15 GB',
      premium: '50 GB',
      enterprise: 'Custom',
    },
    {
      capability: 'Sales order & invoicing',
      free: false,
      standard: true,
      pro: true,
      premium: true,
      enterprise: true,
    },
    {
      capability: 'Reports (PDF export)',
      free: false,
      standard: true,
      pro: true,
      premium: true,
      enterprise: true,
    },
    {
      capability: 'Financial reports & Excel export',
      free: false,
      standard: false,
      pro: true,
      premium: true,
      enterprise: true,
    },
    {
      capability: 'June AI insights (every page)',
      free: false,
      standard: false,
      pro: true,
      premium: true,
      enterprise: true,
    },
    {
      capability: 'June AI quick actions',
      free: '2 of 6',
      standard: '3 of 6',
      pro: '5 of 6',
      premium: '6 of 6',
      enterprise: '6 of 6',
    },
    {
      capability: 'Onboarding',
      free: 'Self-service',
      standard: 'Self-service',
      pro: 'Guided',
      premium: 'Structured',
      enterprise: 'Structured',
    },
    {
      capability: 'Multi-branch, SSO, public APIs',
      free: false,
      standard: false,
      pro: false,
      premium: false,
      enterprise: 'Coming soon',
    },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Pill Badge */}
          <div className="inline-flex items-center justify-center px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF5300] text-[11px] font-bold tracking-widest uppercase mb-3">
            PRICING
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Start free. Pay when the caps stop fitting.
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Every plan includes the whole system. What changes is how many cars, how many marketplace listings, how many staff accounts, and how much June does for you.
          </p>
        </div>

        {/* Plan Category Switcher (Dealership CRM vs Listing Marketplace) */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center p-1 rounded-full bg-white border border-slate-200 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab('crm')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'crm'
                  ? 'bg-[#FF5300] text-white shadow-sm shadow-orange-500/25'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dealership CRM
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('marketplace')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'marketplace'
                  ? 'bg-[#014090] text-white shadow-sm shadow-blue-900/25'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Listing Marketplace
            </button>
          </div>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="mt-4 flex justify-center">
          <div className="inline-flex items-center p-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs sm:text-sm">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-slate-100 text-slate-900'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-slate-100 text-slate-900'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Annual - save 5%
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid (5 Tiers side-by-side) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
          {displayedPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl bg-white border transition-all flex flex-col justify-between p-5 ${
                plan.isPopular
                  ? 'border-2 border-[#FF5300] shadow-xl ring-2 ring-[#FF5300]/20'
                  : 'border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Top Badge (Popular / Coming Soon) */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs ${
                      plan.badge === 'Popular'
                        ? 'bg-[#FF5300] text-white shadow-sm'
                        : 'bg-[#014090] text-white'
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Plan Name */}
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
                    {plan.price}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500">
                  {plan.period}
                </div>

                {/* Feature List */}
                <ul className="mt-5 space-y-2.5 text-xs text-slate-700 leading-snug">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#FF5300] font-bold shrink-0 mt-0.5 text-[11px]">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-2">
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className={`w-full py-2.5 px-3 rounded-md text-xs font-bold transition-all cursor-pointer text-center ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Note Below Cards */}
        <div className="mt-6 text-center max-w-4xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            Start with a 1-month free trial - no credit card required; cancel anytime. Annual is 12 months at a 5% discount, collected once. Payments are processed securely via Paystack; sign in to your dealer account to subscribe or change plans.
          </p>
        </div>

        {/* Feature Comparison Accordion Section */}
        <div className="mt-10 rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <button
            type="button"
            onClick={() => setIsCompareOpen(!isCompareOpen)}
            className="w-full px-6 py-4 flex items-center justify-center gap-2 text-sm font-bold text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <span>Compare every plan</span>
            {isCompareOpen ? (
              <ChevronUp className="h-4 w-4 text-slate-500" />
            ) : (
              <ChevronDown className="h-4 w-4 text-slate-500" />
            )}
          </button>

          {isCompareOpen && (
            <div className="overflow-x-auto border-t border-slate-200">
              <table className="w-full text-left text-xs text-slate-700">
                <thead>
                  <tr className="bg-slate-50/75 border-b border-slate-200 text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-bold text-slate-900 w-1/4">
                      Capability
                    </th>
                    <th className="py-3.5 px-3 text-center">
                      Free
                    </th>
                    <th className="py-3.5 px-3 text-center">
                      Standard
                    </th>
                    <th className="py-3.5 px-3 text-center">
                      <div className="inline-flex items-center gap-1">
                        <span>Pro</span>
                        <span className="text-[9px] bg-[#FF5300] text-white px-1.5 py-0.5 rounded-full font-bold uppercase">
                          Popular
                        </span>
                      </div>
                    </th>
                    <th className="py-3.5 px-3 text-center">
                      Premium
                    </th>
                    <th className="py-3.5 px-3 text-center">
                      <div className="inline-flex items-center gap-1">
                        <span>Enterprise</span>
                        <span className="text-[9px] bg-[#014090] text-white px-1.5 py-0.5 rounded-full font-semibold">
                          Coming soon
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonRows.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}
                    >
                      <td className="py-3 px-4 font-medium text-slate-900">
                        {row.capability}
                      </td>

                      {/* Free */}
                      <td className="py-3 px-3 text-center font-medium">
                        {typeof row.free === 'boolean' ? (
                          row.free ? (
                            <span className="text-[#FF5300] font-bold text-sm">✓</span>
                          ) : (
                            <span className="text-slate-400 text-sm">✕</span>
                          )
                        ) : (
                          row.free
                        )}
                      </td>

                      {/* Standard */}
                      <td className="py-3 px-3 text-center font-medium">
                        {typeof row.standard === 'boolean' ? (
                          row.standard ? (
                            <span className="text-[#FF5300] font-bold text-sm">✓</span>
                          ) : (
                            <span className="text-slate-400 text-sm">✕</span>
                          )
                        ) : (
                          row.standard
                        )}
                      </td>

                      {/* Pro */}
                      <td className="py-3 px-3 text-center font-medium bg-orange-50/30">
                        {typeof row.pro === 'boolean' ? (
                          row.pro ? (
                            <span className="text-[#FF5300] font-bold text-sm">✓</span>
                          ) : (
                            <span className="text-slate-400 text-sm">✕</span>
                          )
                        ) : (
                          row.pro
                        )}
                      </td>

                      {/* Premium */}
                      <td className="py-3 px-3 text-center font-medium">
                        {typeof row.premium === 'boolean' ? (
                          row.premium ? (
                            <span className="text-[#FF5300] font-bold text-sm">✓</span>
                          ) : (
                            <span className="text-slate-400 text-sm">✕</span>
                          )
                        ) : (
                          row.premium
                        )}
                      </td>

                      {/* Enterprise */}
                      <td className="py-3 px-3 text-center font-medium">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? (
                            <span className="text-[#FF5300] font-bold text-sm">✓</span>
                          ) : (
                            <span className="text-slate-400 text-sm">✕</span>
                          )
                        ) : row.enterprise === 'Coming soon' ? (
                          <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full font-medium">
                            Coming soon
                          </span>
                        ) : (
                          row.enterprise
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
