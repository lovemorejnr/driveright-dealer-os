import React from 'react';
import { 
  Ship, 
  Calendar, 
  Users, 
  BarChart3, 
  Car, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  TrendingUp, 
  AlertCircle,
  ExternalLink,
  Phone,
  MessageSquare,
  FileCheck,
  Building2,
  Lock,
  Search,
  Filter,
  ArrowUpRight
} from 'lucide-react';

interface MockupWindowProps {
  id: string;
  type: 'image' | 'arrivals' | 'calendar' | 'team-roles' | 'reports-analytics' | 'marketplace-listings';
  imageSrc?: string;
  imageAlt?: string;
  title: string;
}

export const ProductModuleMockup: React.FC<MockupWindowProps> = ({
  id,
  type,
  imageSrc,
  imageAlt,
  title,
}) => {
  return (
    <div className="w-full rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-slate-300">
      {/* Browser / OS Window Bar */}
      <div className="border-b border-slate-200 bg-slate-50/90 px-3 py-2.5 sm:px-4 sm:py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Window control dots */}
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400 inline-block"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400 inline-block"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 inline-block"></span>
          </div>
          
          <div className="h-3.5 w-px bg-slate-300 mx-1 hidden sm:block"></div>

          {/* Dealership OS Title */}
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight">
              DriveRight Demo Motors
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
          <span className="hidden md:inline">Lekki Showroom 1</span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
        </div>
      </div>

      {/* Main Content Area */}
      {type === 'image' && imageSrc ? (
        <div className="relative bg-slate-950/5 flex items-center justify-center overflow-hidden">
          <img 
            src={imageSrc} 
            alt={imageAlt || title}
            className="w-full h-auto object-contain block"
            loading="lazy"
          />
        </div>
      ) : type === 'arrivals' ? (
        <ArrivalsMockup />
      ) : type === 'calendar' ? (
        <CalendarMockup />
      ) : type === 'team-roles' ? (
        <TeamRolesMockup />
      ) : type === 'reports-analytics' ? (
        <AnalyticsMockup />
      ) : type === 'marketplace-listings' ? (
        <MarketplaceMockup />
      ) : null}
    </div>
  );
};

/* Module 3: Inbound Port & Arrivals tracker */
const ArrivalsMockup: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 bg-white text-xs space-y-4">
      {/* OS Header & stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div>
          <div className="text-sm font-bold text-slate-900">Inbound Shipments & Port Clearance</div>
          <div className="text-[11px] text-slate-500">Tracking Apapa & Tin Can Island incoming containers</div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-semibold text-[11px] border border-blue-200">
            3 In Transit • 2 Clearing
          </span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
          <div className="text-[10px] text-slate-500 font-medium">Inbound Total Value</div>
          <div className="text-sm sm:text-base font-extrabold text-slate-900 font-mono mt-0.5">₦72,000,000</div>
          <div className="text-[9px] text-blue-600 font-semibold mt-1">4 vehicles on water</div>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
          <div className="text-[10px] text-slate-500 font-medium">Tin Can Port</div>
          <div className="text-sm sm:text-base font-extrabold text-slate-900 font-mono mt-0.5">2 Vessels</div>
          <div className="text-[9px] text-blue-600 font-semibold mt-1">ETA: 4 & 6 days</div>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
          <div className="text-[10px] text-slate-500 font-medium">Apapa Wharf</div>
          <div className="text-sm sm:text-base font-extrabold text-slate-900 font-mono mt-0.5">1 Vessel</div>
          <div className="text-[9px] text-amber-600 font-semibold mt-1">Clearing in progress</div>
        </div>
      </div>

      {/* Inbound Vehicles List */}
      <div className="space-y-2">
        <div className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50">
          <div className="space-y-0.5">
            <div className="font-bold text-slate-800 text-xs">2023 Lexus RX 350 F-Sport AWD</div>
            <div className="text-[10px] text-slate-500 flex items-center gap-2">
              <span>Vessel: MSC Grace</span>
              <span>•</span>
              <span className="text-slate-600 font-mono">VIN: 2T2BZMCA7P...</span>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
              <Clock className="h-3 w-3" />
              Tin Can • ETA 3 Days
            </span>
            <div className="text-[10px] text-slate-500 mt-1 font-mono">Duty: ₦8,400,000</div>
          </div>
        </div>

        <div className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50">
          <div className="space-y-0.5">
            <div className="font-bold text-slate-800 text-xs">2022 Toyota Land Cruiser Prado TX-L</div>
            <div className="text-[10px] text-slate-500 flex items-center gap-2">
              <span>Vessel: Grimaldi Grande Lagos</span>
              <span>•</span>
              <span className="text-slate-600 font-mono">Port: Apapa</span>
            </div>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="h-3 w-3" />
              Customs Released
            </span>
            <div className="text-[10px] text-slate-500 mt-1 font-mono">Moving to Lot Tomorrow</div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Module 7: Dealership Calendar */
const CalendarMockup: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 bg-white text-xs space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div>
          <div className="text-sm font-bold text-slate-900">Dealership Schedule & Viewings</div>
          <div className="text-[11px] text-slate-500">Live synced with Google & Apple Calendar feed</div>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-semibold text-[11px] border border-blue-200">
            <Calendar className="h-3 w-3" />
            iCal Feed Active
          </span>
        </div>
      </div>

      {/* Mini Day Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <div className="p-3 rounded-xl border border-orange-200 bg-orange-50/50 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-orange-700 uppercase">10:00 AM - Today</span>
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
          </div>
          <div className="font-bold text-slate-800 text-xs">Test Drive: 2022 Range Rover Velar</div>
          <div className="text-[10px] text-slate-600">Buyer: Alhaji Kabir</div>
          <div className="text-[10px] text-slate-500">Assigned Rep: Chioma Eze</div>
        </div>

        <div className="p-3 rounded-xl border border-blue-200 bg-blue-50/40 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-blue-700 uppercase">01:30 PM - Today</span>
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
          </div>
          <div className="font-bold text-slate-800 text-xs">Showroom Viewing: 2021 Benz GLE</div>
          <div className="text-[10px] text-slate-600">Buyer: Chief Balogun</div>
          <div className="text-[10px] text-slate-500">Assigned Rep: Emeka Obi</div>
        </div>

        <div className="p-3 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-emerald-700 uppercase">04:00 PM - Today</span>
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
          </div>
          <div className="font-bold text-slate-800 text-xs">Vehicle Handover & Gate Pass</div>
          <div className="text-[10px] text-slate-600">Car: 2020 Toyota Highlander</div>
          <div className="text-[10px] text-emerald-700 font-semibold">Payment 100% Cleared</div>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
        <span>Subscribed Staff: 8 Dealership accounts receiving SMS/iCal alerts</span>
        <span className="font-bold text-slate-800">Auto-Reminders On</span>
      </div>
    </div>
  );
};

/* Module 8: Team & Roles */
const TeamRolesMockup: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 bg-white text-xs space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div>
          <div className="text-sm font-bold text-slate-900">User Management & Permissions</div>
          <div className="text-[11px] text-slate-500">Role-based controls, team chat & immutable audit trail</div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold">
            8 Team Members
          </span>
          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
            Audit Log ON
          </span>
        </div>
      </div>

      {/* Staff Roles Grid */}
      <div className="space-y-2">
        <div className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-[10px]">
              DA
            </div>
            <div>
              <div className="font-bold text-slate-800">David Adeleke (Owner / Dealer Principal)</div>
              <div className="text-[10px] text-slate-500">Full Access: P&L, Bank Accounts, Staff Permissions, Pricing</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 font-bold text-[10px]">
            Super Admin
          </span>
        </div>

        <div className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">
              CE
            </div>
            <div>
              <div className="font-bold text-slate-800">Chioma Eze (Senior Sales Executive)</div>
              <div className="text-[10px] text-slate-500">Permitted: WhatsApp CRM, Customer Quotes, View Stock Prices</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 font-bold text-[10px]">
            Sales Rep
          </span>
        </div>

        <div className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">
              EO
            </div>
            <div>
              <div className="font-bold text-slate-800">Emeka Obi (Yard & Port Operations)</div>
              <div className="text-[10px] text-slate-500">Permitted: Inbound arrivals, customs papers, vehicle photos</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold text-[10px]">
            Yard Manager
          </span>
        </div>
      </div>

      {/* Live Audit Trail */}
      <div className="p-2.5 rounded-xl bg-slate-900 text-white text-[11px] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-mono text-slate-300">Latest audit: Chioma issued quote #Q-4091 for ₦44,500,000</span>
        </div>
        <span className="text-[10px] text-slate-400">2 mins ago</span>
      </div>
    </div>
  );
};

/* Module 9: Reports & Analytics */
const AnalyticsMockup: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 bg-white text-xs space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div>
          <div className="text-sm font-bold text-slate-900">Dealership Analytics & P&L</div>
          <div className="text-[11px] text-slate-500">Real transaction data from your bank receipts and inventory sales</div>
        </div>
        <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-semibold text-[11px] border border-emerald-200">
          +24.8% vs last month
        </span>
      </div>

      {/* KPI 4-stat bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
          <div className="text-[10px] text-slate-500">Total Net Revenue</div>
          <div className="text-sm sm:text-base font-extrabold text-slate-900 font-mono mt-0.5">₦342.5M</div>
          <div className="text-[9px] text-emerald-600 font-semibold mt-0.5">+₦48.2M profit</div>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
          <div className="text-[10px] text-slate-500">Cars Sold</div>
          <div className="text-sm sm:text-base font-extrabold text-slate-900 font-mono mt-0.5">14 Units</div>
          <div className="text-[9px] text-slate-500 mt-0.5">Avg 22 days on lot</div>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
          <div className="text-[10px] text-slate-500">Lead Conversion</div>
          <div className="text-sm sm:text-base font-extrabold text-slate-900 font-mono mt-0.5">26.4%</div>
          <div className="text-[9px] text-emerald-600 font-semibold mt-0.5">+4.1% vs target</div>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
          <div className="text-[10px] text-slate-500">Outstanding Balance</div>
          <div className="text-sm sm:text-base font-extrabold text-slate-900 font-mono mt-0.5">₦18.2M</div>
          <div className="text-[9px] text-amber-600 font-semibold mt-0.5">3 installments due</div>
        </div>
      </div>

      {/* Simulated Visual Breakdown Bar */}
      <div className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-700">
          <span>Sales Mix by Category</span>
          <span>Tokunbo (68%) • Nigerian Used (32%)</span>
        </div>
        <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden flex">
          <div className="h-full bg-blue-600 w-[68%]" title="Tokunbo 68%"></div>
          <div className="h-full bg-slate-800 w-[32%]" title="Nigerian Used 32%"></div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
          <span>Top Seller: Toyota Land Cruiser Prado (4 units)</span>
          <span>Fastest Turnover: Lexus RX 350 (9 days)</span>
        </div>
      </div>
    </div>
  );
};

/* Module 10: Marketplace Listings */
const MarketplaceMockup: React.FC = () => {
  return (
    <div className="p-4 sm:p-5 bg-white text-xs space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div>
          <div className="text-sm font-bold text-slate-900">Public Dealership Marketplace</div>
          <div className="text-[11px] text-slate-500">Live published cars on DriveRight marketplace browsing portal</div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-semibold text-[11px] border border-emerald-200">
            <CheckCircle2 className="h-3 w-3" />
            Marketplace Sync Active
          </span>
        </div>
      </div>

      {/* Vehicle Marketplace cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
          <div className="h-20 bg-slate-200 relative">
            <img 
              src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=400&q=80" 
              alt="Lexus RX 350"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-1.5 left-1.5 px-1.5 py-0.2 rounded bg-slate-950/80 text-white text-[9px] font-bold">
              Tokunbo
            </span>
          </div>
          <div className="p-2 space-y-1">
            <div className="font-bold text-slate-900 text-xs truncate">2023 Lexus RX 350 F-Sport</div>
            <div className="text-xs font-extrabold text-orange-600 font-mono">₦58,000,000</div>
            <div className="text-[10px] text-slate-500 flex items-center justify-between pt-1">
              <span>38 Leads this week</span>
              <span className="text-emerald-600 font-bold">Live</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
          <div className="h-20 bg-slate-200 relative">
            <img 
              src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=400&q=80" 
              alt="Mercedes-Benz GLE"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-1.5 left-1.5 px-1.5 py-0.2 rounded bg-slate-950/80 text-white text-[9px] font-bold">
              Tokunbo
            </span>
          </div>
          <div className="p-2 space-y-1">
            <div className="font-bold text-slate-900 text-xs truncate">2021 Mercedes-Benz GLE 450</div>
            <div className="text-xs font-extrabold text-orange-600 font-mono">₦74,000,000</div>
            <div className="text-[10px] text-slate-500 flex items-center justify-between pt-1">
              <span>52 Leads this week</span>
              <span className="text-emerald-600 font-bold">Live</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
          <div className="h-20 bg-slate-200 relative">
            <img 
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80" 
              alt="Toyota Prado"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-1.5 left-1.5 px-1.5 py-0.2 rounded bg-slate-950/80 text-white text-[9px] font-bold">
              Tokunbo
            </span>
          </div>
          <div className="p-2 space-y-1">
            <div className="font-bold text-slate-900 text-xs truncate">2022 Toyota Prado TX-L</div>
            <div className="text-xs font-extrabold text-orange-600 font-mono">₦82,000,000</div>
            <div className="text-[10px] text-slate-500 flex items-center justify-between pt-1">
              <span>61 Leads this week</span>
              <span className="text-emerald-600 font-bold">Live</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
        <span>Dealer Inquiries land directly in your DriveRight CRM Enquiries Inbox</span>
        <span className="font-bold text-orange-600 flex items-center gap-1">
          <span>Instant WhatsApp Sync</span>
          <ArrowUpRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  );
};
