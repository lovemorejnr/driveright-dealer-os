export type OsTab = 'dashboard' | 'inventory' | 'enquiries' | 'sales';

export type VehicleStatus = 'available' | 'reserved' | 'sold';

export interface Vehicle {
  id: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  color: string;
  price: number;
  costPrice?: number;
  daysInStock: number;
  status: VehicleStatus;
  mileage: string;
  condition: 'Foreign Used (Tokunbo)' | 'Brand New' | 'Nigerian Used';
  customsCleared: boolean;
  vin: string;
  photosCount: number;
  enquiriesCount: number;
  location: string;
  fuelType: string;
}

export interface Enquiry {
  id: string;
  customerName: string;
  phone: string;
  vehicleOfInterest: string;
  channel: 'WhatsApp' | 'Marketplace' | 'Walk-in' | 'Call';
  status: 'New' | 'Assigned' | 'Inspection Booked' | 'Negotiating' | 'Closed';
  assignedTo: string;
  budget: string;
  timeAgo: string;
  lastMessage: string;
  urgency: 'high' | 'medium' | 'normal';
}

export interface SaleRecord {
  id: string;
  invoiceNo: string;
  vehicle: string;
  buyerName: string;
  salePrice: number;
  depositPaid: number;
  balanceRemaining: number;
  date: string;
  salesperson: string;
  status: 'Completed' | 'Part-Payment' | 'Pending Handover';
}

export interface JuneAiPrompt {
  id: string;
  label: string;
  query: string;
  category: 'inventory' | 'leads' | 'pricing' | 'marketing';
}

export interface JuneAiMessage {
  id: string;
  sender: 'user' | 'june';
  text: string;
  timestamp: string;
  insights?: {
    type: 'inventory_alert' | 'whatsapp_draft' | 'pricing_matrix' | 'financial_summary';
    title?: string;
    items?: Array<{
      title: string;
      subtitle?: string;
      metric?: string;
      badge?: string;
      actionText?: string;
    }>;
    draftText?: string;
  };
}

export interface FeatureModule {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tagline?: string;
  badge?: string;
  isPrimary?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  priceMonthly: number; // in NGN
  priceAnnual: number;  // in NGN per month billed annually
  carsLimit: number | 'Unlimited';
  marketplaceListings: number | 'Unlimited';
  staffAccounts: number | 'Unlimited';
  juneAiScope: string;
  features: string[];
  ctaLabel: string;
  isPopular?: boolean;
}

export type DeviceViewport = 'responsive' | 'mobile' | 'desktop';
