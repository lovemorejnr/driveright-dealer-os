import React, { useState } from 'react';
import { 
  Package, 
  MessageSquare, 
  Receipt, 
  LayoutDashboard, 
  Sparkles, 
  Search, 
  ChevronRight, 
  FileText, 
  Users, 
  AlertCircle, 
  ShieldCheck, 
  ExternalLink, 
  Bell, 
  CheckCircle2, 
  Calendar,
  Clock,
  ArrowUpRight,
  Plus,
  Share2,
  Printer
} from 'lucide-react';
import { OsTab, Vehicle, VehicleStatus } from '../types';
import { INITIAL_VEHICLES, INITIAL_ENQUIRIES, INITIAL_SALES } from '../data/dealershipData';
import { formatNaira } from '../utils/formatters';

interface InteractiveOsMockupProps {
  onOpenDemo?: () => void;
}

export const InteractiveOsMockup: React.FC<InteractiveOsMockupProps> = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState<OsTab>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [showInvoiceModal, setShowInvoiceModal] = useState<string | null>(null);
  const [expandedInsight, setExpandedInsight] = useState(true);

  // Filter vehicles
  const filteredVehicles = INITIAL_VEHICLES.filter((car) => {
    const matchesSearch = 
      `${car.year} ${car.make} ${car.model} ${car.trim} ${car.color} ${car.vin}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || car.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const availableCount = INITIAL_VEHICLES.filter(v => v.status === 'available').length;
  const reservedCount = INITIAL_VEHICLES.filter(v => v.status === 'reserved').length;
  const soldCount = INITIAL_VEHICLES.filter(v => v.status === 'sold').length;
  const totalValue = INITIAL_VEHICLES.reduce((acc, curr) => acc + (curr.status !== 'sold' ? curr.price : 0), 0);

  return (
    <div id="live-demo" className="w-full">
      {/* Container Frame simulating OS Window */}
      <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/60 overflow-hidden transition-all">
        
        {/* OS Header Bar (Desktop & Mobile Adaptive) */}
        <div className="border-b border-slate-200 bg-slate-50/90 px-3 py-2.5 sm:px-5 sm:py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Window dots */}
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-400 inline-block"></span>
              <span className="h-3 w-3 rounded-full bg-amber-400 inline-block"></span>
              <span className="h-3 w-3 rounded-full bg-emerald-400 inline-block"></span>
            </div>
            
            <div className="h-4 w-px bg-slate-300 mx-1 hidden sm:block"></div>

            {/* Dealership identifier */}
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight">
                DriveRight Demo Motors
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden md:inline-flex text-[11px] text-slate-500 font-mono">
              Lagos • Lekki Phase 1
            </span>

            <button
              type="button"
              className="relative p-1.5 rounded-lg text-slate-600 hover:bg-slate-200/80 transition-colors"
              title="Notifications"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-orange-600"></span>
            </button>

            <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-lg border border-slate-200 shadow-2xs">
              <div className="h-5 w-5 rounded-full bg-orange-600 text-white flex items-center justify-center text-[10px] font-bold">
                DA
              </div>
              <span className="text-xs font-semibold text-slate-700 hidden sm:inline">
                Admin
              </span>
            </div>

            <button
              type="button"
              onClick={() => alert('Opening live public dealer inventory showcase demo for buyers!')}
              className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-slate-600 bg-white px-2.5 py-1 rounded-lg border border-slate-200 hover:text-orange-600 hover:border-orange-300 transition-colors"
            >
              <span>View Website</span>
              <ExternalLink className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* OS Sub-Navigation Tabs (Highly Responsive & Thumb-friendly) */}
        <div className="border-b border-slate-200 bg-white px-3 sm:px-6 py-2 overflow-x-auto scrollbar-none flex items-center gap-1 sm:gap-2">
          <button
            id="tab-btn-dashboard"
            type="button"
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[38px] ${
              activeTab === 'dashboard'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <LayoutDashboard className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Dashboard</span>
          </button>

          <button
            id="tab-btn-inventory"
            type="button"
            onClick={() => setActiveTab('inventory')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[38px] ${
              activeTab === 'inventory'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Package className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Inventory</span>
            <span className="ml-1 rounded-full bg-orange-100 text-orange-800 text-[10px] px-1.5 py-0.2 font-bold">
              {availableCount + reservedCount}
            </span>
          </button>

          <button
            id="tab-btn-enquiries"
            type="button"
            onClick={() => setActiveTab('enquiries')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[38px] ${
              activeTab === 'enquiries'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <MessageSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Enquiries & WhatsApp</span>
            <span className="ml-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] px-1.5 py-0.2 font-bold">
              4 new
            </span>
          </button>

          <button
            id="tab-btn-sales"
            type="button"
            onClick={() => setActiveTab('sales')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[38px] ${
              activeTab === 'sales'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Receipt className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>Sales & Invoices</span>
          </button>
        </div>

        {/* View Content Body */}
        <div className="p-3.5 sm:p-6 bg-slate-50/50 min-h-[440px]">
          
          {/* TAB 1: SYSTEM ADMINISTRATION / DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-4 sm:space-y-6">
              {/* Header Title & Subtitle */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Outfit']">
                    System Administration
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Complete system overview and management controls for Lagos showroom
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                    <Clock className="h-3 w-3 text-slate-400" />
                    Last synced: Just now
                  </span>
                </div>
              </div>

              {/* 3 Metric Cards (Responsive Grid: 1 col on mobile, 3 col on tablet/desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {/* Revenue card */}
                <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Revenue this month</span>
                    <span className="inline-flex items-center gap-0.5 text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[11px] font-semibold">
                      <ArrowUpRight className="h-3 w-3" /> +14.8%
                    </span>
                  </div>
                  <div className="mt-2 text-xl sm:text-2xl font-extrabold text-slate-900 font-['Outfit']">
                    ₦125.0M
                  </div>
                  <div className="mt-1 text-[11px] text-slate-500">
                    +₦16.2M vs last month
                  </div>
                </div>

                {/* System Users */}
                <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>System Users</span>
                    <Users className="h-4 w-4 text-slate-400" />
                  </div>
                  <div className="mt-2 text-xl sm:text-2xl font-extrabold text-slate-900 font-['Outfit']">
                    2
                  </div>
                  <div className="mt-1 text-[11px] text-slate-500">
                    2 active users (Emeka, Aisha)
                  </div>
                </div>

                {/* Vehicle Inventory */}
                <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>Vehicle inventory</span>
                    <Package className="h-4 w-4 text-slate-400" />
                  </div>
                  <div className="mt-2 text-xl sm:text-2xl font-extrabold text-slate-900 font-['Outfit']">
                    7
                  </div>
                  <div className="mt-1 text-[11px] text-slate-500">
                    2 sold this month
                  </div>
                </div>
              </div>

              {/* June Admin Insights Banner (Interactive Expandable) */}
              <div className="rounded-xl border border-orange-200/80 bg-linear-to-r from-orange-50/70 to-orange-100/40 p-4 transition-all">
                <button
                  type="button"
                  onClick={() => setExpandedInsight(!expandedInsight)}
                  className="w-full flex items-start sm:items-center justify-between gap-2 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-600 text-white shadow-2xs shrink-0">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                        June Admin Insights
                      </span>
                      <span className="text-[11px] sm:text-xs text-slate-600">
                        AI-powered system administration and optimization recommendations
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-orange-700 underline shrink-0 mt-1 sm:mt-0">
                    {expandedInsight ? 'Hide' : 'Review'}
                  </span>
                </button>

                {expandedInsight && (
                  <div className="mt-3.5 pt-3.5 border-t border-orange-200/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                    <div className="bg-white/80 rounded-lg p-3 border border-orange-200/40">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                        <AlertCircle className="h-3.5 w-3.5 text-amber-600" />
                        Aged Stock Alert (118 Days)
                      </div>
                      <p className="mt-1 text-slate-600 text-[11px] leading-relaxed">
                        The 2018 VW Polo has been sitting for 118 days. Similar Lagos Tokunbo units move at ₦9.2M. Recommend running a ₦600k weekend price refresh to free up capital.
                      </p>
                    </div>

                    <div className="bg-white/80 rounded-lg p-3 border border-orange-200/40">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        High Intent Lead Assigned
                      </div>
                      <p className="mt-1 text-slate-600 text-[11px] leading-relaxed">
                        Folake Adeleke made a cash offer of ₦40M on the Lexus RX 350. Aisha is currently handling negotiation. Margin will remain above 6.6%.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* June Overnight Brief Card */}
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      June Overnight Brief
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">7:30 AM WAT</span>
                </div>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                  A two-minute morning read: overnight enquiries (4), aged stock (1), and what to do today. 
                  All customs duty records have verified QR codes. Ready for weekend test drives.
                </p>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('inventory')}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-orange-700 bg-orange-50 px-2.5 py-1.5 rounded-lg border border-orange-200 hover:bg-orange-100 transition-colors"
                  >
                    <span>View 1 Aged Vehicle</span>
                    <ChevronRight className="h-3 w-3" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('enquiries')}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1.5 rounded-lg hover:bg-slate-200 transition-colors"
                  >
                    <span>Review 4 WhatsApp Leads</span>
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INVENTORY */}
          {activeTab === 'inventory' && (
            <div className="space-y-4">
              {/* Header Title & Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Outfit']">
                    Vehicle Inventory
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Manage your vehicle inventory, pricing and track sales
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => alert('Bulk Excel Import tool: Upload your spreadsheet to automatically validate VINs and import vehicle rows.')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <FileText className="h-3.5 w-3.5 text-slate-500" />
                    <span>Import Excel</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => alert('Add Vehicle Modal: Enter make, model, trim, Tokunbo condition, and upload photos.')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-orange-600 px-3 py-1.5 rounded-lg shadow-xs hover:bg-orange-500 transition-colors"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    <span>Add Vehicle</span>
                  </button>
                </div>
              </div>

              {/* Inventory Metric Ribbon */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 bg-white p-3 rounded-xl border border-slate-200">
                <div className="p-2">
                  <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">
                    Total Stock Value
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-900 block mt-0.5">
                    ₦181,600,000
                  </span>
                </div>
                <div className="p-2 border-l border-slate-100">
                  <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">
                    Available
                  </span>
                  <span className="text-sm sm:text-base font-bold text-emerald-600 block mt-0.5">
                    {availableCount} <span className="text-[10px] font-normal text-slate-400">Ready</span>
                  </span>
                </div>
                <div className="p-2 border-l border-slate-100">
                  <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">
                    Reserved
                  </span>
                  <span className="text-sm sm:text-base font-bold text-amber-600 block mt-0.5">
                    {reservedCount} <span className="text-[10px] font-normal text-slate-400">Deposit</span>
                  </span>
                </div>
                <div className="p-2 border-l border-slate-100">
                  <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">
                    Sold
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-800 block mt-0.5">
                    {soldCount} <span className="text-[10px] font-normal text-slate-400">This mo.</span>
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1 p-2 border-t sm:border-t-0 sm:border-l border-slate-100">
                  <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">
                    Plan Usage
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="h-1.5 flex-1 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-600 rounded-full w-[24%]"></div>
                    </div>
                    <span className="text-[11px] font-bold text-slate-700">6/25</span>
                  </div>
                </div>
              </div>

              {/* Filters and Search Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by car, VIN, color, lot..."
                    className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                  {['all', 'available', 'reserved', 'sold'].map((status) => (
                    <button
                      key={status}
                      type="button"
                      onClick={() => setStatusFilter(status)}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-lg capitalize whitespace-nowrap transition-colors ${
                        statusFilter === status
                          ? 'bg-slate-900 text-white'
                          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile-Responsive Vehicle List: Cards on mobile, Table on desktop */}
              {/* DESKTOP TABLE VIEW (hidden on small screens) */}
              <div className="hidden md:block rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
                <table className="w-full text-left text-xs text-slate-600">
                  <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Vehicle</th>
                      <th className="px-3 py-3 font-semibold">Status</th>
                      <th className="px-3 py-3 font-semibold">Price (NGN)</th>
                      <th className="px-3 py-3 font-semibold">Days in Stock</th>
                      <th className="px-3 py-3 font-semibold">Customs</th>
                      <th className="px-3 py-3 font-semibold">Lot / Location</th>
                      <th className="px-4 py-3 text-right font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredVehicles.map((car) => (
                      <tr key={car.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="px-4 py-3">
                          <div className="font-bold text-slate-900 text-sm">
                            {car.year} {car.make} {car.model}
                          </div>
                          <div className="text-[11px] text-slate-400 flex items-center gap-2">
                            <span>{car.trim}</span>
                            <span>•</span>
                            <span>{car.color}</span>
                            <span>•</span>
                            <span>{car.mileage}</span>
                          </div>
                        </td>
                        <td className="px-3 py-3">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            car.status === 'available'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : car.status === 'reserved'
                              ? 'bg-amber-50 text-amber-700 border border-amber-200'
                              : 'bg-slate-100 text-slate-600 border border-slate-200'
                          }`}>
                            {car.status}
                          </span>
                        </td>
                        <td className="px-3 py-3 font-bold text-slate-900 text-sm">
                          {formatNaira(car.price)}
                        </td>
                        <td className="px-3 py-3">
                          <span className={`inline-flex items-center gap-1 font-semibold ${
                            car.daysInStock > 90
                              ? 'text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded text-[11px]'
                              : car.daysInStock > 50
                              ? 'text-amber-600'
                              : 'text-slate-600'
                          }`}>
                            {car.daysInStock}d
                            {car.daysInStock > 90 && <AlertCircle className="h-3 w-3" />}
                          </span>
                        </td>
                        <td className="px-3 py-3">
                          {car.customsCleared ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700">
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                              Duty Paid
                            </span>
                          ) : (
                            <span className="text-slate-400 text-[11px]">Pending</span>
                          )}
                        </td>
                        <td className="px-3 py-3 text-slate-600 text-[11px]">
                          {car.location}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button
                            type="button"
                            onClick={() => setSelectedVehicle(car)}
                            className="text-xs font-semibold text-orange-600 hover:text-orange-700 bg-orange-50 px-2 py-1 rounded"
                          >
                            Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* MOBILE CARD VIEW (Fluid, high-touch cards) */}
              <div className="md:hidden space-y-2.5">
                {filteredVehicles.map((car) => (
                  <div
                    key={car.id}
                    className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-2xs space-y-2.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-bold text-slate-900 text-sm">
                          {car.year} {car.make} {car.model}
                        </div>
                        <div className="text-xs text-slate-500">
                          {car.trim} • {car.color}
                        </div>
                      </div>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        car.status === 'available'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : car.status === 'reserved'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}>
                        {car.status}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase block">Asking Price</span>
                        <span className="font-bold text-slate-900 text-sm">
                          {formatNaira(car.price)}
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 uppercase block">Days in Stock</span>
                        <span className={`font-semibold text-xs ${
                          car.daysInStock > 90 ? 'text-rose-600' : car.daysInStock > 50 ? 'text-amber-600' : 'text-slate-700'
                        }`}>
                          {car.daysInStock} days
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                        <CheckCircle2 className="h-3 w-3 text-emerald-600" /> Customs Verified
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelectedVehicle(car)}
                        className="text-xs font-semibold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-lg"
                      >
                        Inspect Car
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: ENQUIRIES & MESSAGING */}
          {activeTab === 'enquiries' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Outfit']">
                    Enquiries & Messaging
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Every buyer message in one inbox: assign to sales reps, reply, and track WhatsApp deals
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  WhatsApp Connected
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
                {/* Enquiries Lead List */}
                <div className="lg:col-span-2 space-y-2.5">
                  {INITIAL_ENQUIRIES.map((enq) => (
                    <div
                      key={enq.id}
                      className="bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-2xs hover:border-orange-300 transition-all cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                            {enq.customerName.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                              <span>{enq.customerName}</span>
                              <span className={`text-[10px] font-semibold px-1.5 py-0.2 rounded ${
                                enq.channel === 'WhatsApp' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                              }`}>
                                {enq.channel}
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-400">
                              {enq.phone} • {enq.timeAgo}
                            </div>
                          </div>
                        </div>

                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                          {enq.status}
                        </span>
                      </div>

                      <div className="mt-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <span className="font-semibold text-slate-900">Vehicle of interest: </span>
                        {enq.vehicleOfInterest} ({enq.budget})
                        <p className="mt-1 text-slate-600 italic">
                          "{enq.lastMessage}"
                        </p>
                      </div>

                      <div className="mt-3 flex items-center justify-between text-xs">
                        <span className="text-[11px] text-slate-500">
                          Assigned: <strong className="text-slate-700">{enq.assignedTo}</strong>
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => alert(`June AI: Drafted WhatsApp quick response for ${enq.customerName} regarding ${enq.vehicleOfInterest}`)}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md hover:bg-orange-100 transition-colors"
                          >
                            <Sparkles className="h-3 w-3" />
                            <span>AI Reply Draft</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Assistant Widget: Quick Lead Stats */}
                <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Lead Routing & Conversion
                  </h4>
                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="flex justify-between text-slate-600 mb-1">
                        <span>Response Time (WAT)</span>
                        <span className="font-bold text-slate-900">4.2 mins</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[85%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-600 mb-1">
                        <span>Inspection Bookings</span>
                        <span className="font-bold text-slate-900">6 this week</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-orange-500 w-[60%]"></div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-800 block">
                      Auto-WhatsApp Sync
                    </span>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Sales reps don't lose chats when they change phones. Full buyer chat log is backed up to each car record.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SALES & INVOICES */}
          {activeTab === 'sales' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-['Outfit']">
                    Sales & Branded Payments
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Record sales, log deposits, track balances, and generate PDF invoices & official receipts
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => alert('Record New Sale: Select car from inventory, enter buyer details, deposit amount and generate instant invoice.')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-orange-600 px-3 py-1.5 rounded-lg shadow-xs hover:bg-orange-500 transition-colors"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Record Sale</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {INITIAL_SALES.map((sale) => (
                  <div
                    key={sale.id}
                    className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-orange-600 font-bold bg-orange-50 px-1.5 py-0.5 rounded">
                          {sale.invoiceNo}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm mt-1">
                          {sale.vehicle}
                        </h4>
                        <div className="text-xs text-slate-500">
                          Buyer: <strong>{sale.buyerName}</strong>
                        </div>
                      </div>

                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        sale.status === 'Completed'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {sale.status}
                      </span>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-lg text-xs space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Sale Total:</span>
                        <span className="font-bold text-slate-900">{formatNaira(sale.salePrice)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Deposit Paid:</span>
                        <span className="font-semibold text-emerald-700">{formatNaira(sale.depositPaid)}</span>
                      </div>
                      {sale.balanceRemaining > 0 && (
                        <div className="flex justify-between pt-1 border-t border-slate-200 text-amber-700">
                          <span className="font-medium">Balance Remaining:</span>
                          <span className="font-bold">{formatNaira(sale.balanceRemaining)}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-[11px] text-slate-400">
                        Date: {sale.date} • Rep: {sale.salesperson}
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowInvoiceModal(sale.invoiceNo)}
                        className="inline-flex items-center gap-1 font-semibold text-orange-600 bg-orange-50 px-2.5 py-1 rounded hover:bg-orange-100 transition-colors"
                      >
                        <Printer className="h-3 w-3" />
                        <span>Print Invoice</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Bottom OS Status Bar */}
        <div className="border-t border-slate-200 bg-white px-4 py-2.5 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span className="font-medium text-slate-700">DriveRight OS v2.4 Live System</span>
            <span className="text-slate-400">•</span>
            <span>West Africa Time (WAT)</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
            <span>Every screenshot and interactive module is the real product</span>
          </div>
        </div>

      </div>

      {/* Vehicle Detail Modal for interactive inspection */}
      {selectedVehicle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                  {selectedVehicle.condition}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1 font-['Outfit']">
                  {selectedVehicle.year} {selectedVehicle.make} {selectedVehicle.model} {selectedVehicle.trim}
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  VIN: {selectedVehicle.vin}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedVehicle(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Price</span>
                <span className="font-bold text-slate-900 text-base">{formatNaira(selectedVehicle.price)}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Days in Stock</span>
                <span className="font-bold text-slate-900">{selectedVehicle.daysInStock} days</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Color & Fuel</span>
                <span className="font-medium text-slate-700">{selectedVehicle.color} • {selectedVehicle.fuelType}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Mileage</span>
                <span className="font-medium text-slate-700">{selectedVehicle.mileage}</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-700 font-semibold bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>Customs Duty Assessment & Clean Title verified by DriveRight Desk</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Photos ({selectedVehicle.photosCount} high-res shots), video walkaround, and pre-purchase inspection report are linked directly to this record.
              </p>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedVehicle(null)}
                className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedVehicle(null);
                  alert(`Vehicle ${selectedVehicle.model} pushed to DriveRight Nigeria Public Marketplace!`);
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg shadow-sm"
              >
                Publish to Marketplace
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Invoice Modal Simulation */}
      {showInvoiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-bold text-slate-900">Official Dealer Invoice {showInvoiceModal}</span>
              </div>
              <button
                type="button"
                onClick={() => setShowInvoiceModal(null)}
                className="p-1 rounded text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <div className="p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-xs space-y-3 font-mono">
              <div className="text-center font-bold text-slate-800 text-sm">
                DRIVERIGHT DEMO MOTORS LTD
                <div className="text-[10px] text-slate-500 font-normal">Plot 14, Admiralty Way, Lekki Phase 1, Lagos</div>
              </div>
              <div className="border-t border-slate-200 pt-2 flex justify-between text-[11px]">
                <span>Invoice: {showInvoiceModal}</span>
                <span>Date: 12-09-2024</span>
              </div>
              <div className="text-slate-700">
                <div>Sold To: Engr. Dapo Williams</div>
                <div>VIN Verified: 2T1BURHE7KC89214</div>
                <div>Vehicle: 2019 Toyota Corolla LE</div>
              </div>
              <div className="border-t border-slate-200 pt-2 flex justify-between font-bold text-slate-900 text-sm">
                <span>TOTAL PAID:</span>
                <span>₦14,200,000</span>
              </div>
              <div className="text-[10px] text-emerald-700 text-center font-semibold bg-emerald-50 py-1 rounded">
                ✔ OFFICIAL RECEIPT ISSUED • ZERO OUTSTANDING BALANCE
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowInvoiceModal(null)}
                className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Dismiss
              </button>
              <button
                type="button"
                onClick={() => {
                  alert('Generating official PDF with dealer watermark, stamp and QR verification code.');
                  setShowInvoiceModal(null);
                }}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
