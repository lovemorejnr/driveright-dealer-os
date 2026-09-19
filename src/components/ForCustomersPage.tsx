import React, { useState } from 'react';
import { 
  Car, 
  Calculator, 
  CheckCircle2
} from 'lucide-react';

interface ForCustomersPageProps {
  onOpenDemo: () => void;
  onNavigate: (route: string) => void;
}

export const ForCustomersPage: React.FC<ForCustomersPageProps> = ({ onOpenDemo, onNavigate }) => {
  const [valuationMake, setValuationMake] = useState('Toyota');
  const [valuationModel, setValuationModel] = useState('Camry');
  const [valuationYear, setValuationYear] = useState('2020');
  const [valuationCondition, setValuationCondition] = useState('Foreign Used (Tokunbo)');
  const [estimatedVal, setEstimatedVal] = useState<string | null>(null);

  const calculateEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    if (valuationModel === 'Camry') {
      setEstimatedVal(valuationCondition.includes('Tokunbo') ? '₦25,000,000 - ₦27,500,000' : '₦17,000,000 - ₦19,500,000');
    } else if (valuationModel === 'Corolla') {
      setEstimatedVal(valuationCondition.includes('Tokunbo') ? '₦16,500,000 - ₦18,800,000' : '₦11,000,000 - ₦13,200,000');
    } else {
      setEstimatedVal('₦38,000,000 - ₦44,500,000');
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Banner */}
      <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200">
              For Car Buyers & Sellers
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
              Buy verified cars from Nigeria&apos;s vetted dealerships.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              No phantom listings. No fraudulent middle-men. Every car displayed on the DriveRight marketplace comes directly from a registered dealership with physical yard inspection and verified customs paperwork.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#marketplace-listings"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-orange-500 transition-all"
              >
                <Car className="h-4 w-4" />
                <span>Browse Verified Cars</span>
              </a>
              <a
                href="#car-valuation-tool"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition-all"
              >
                <Calculator className="h-4 w-4" />
                <span>Check Car Market Value</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Marketplace Browse Screenshot */}
      <section id="marketplace-listings" className="py-6 sm:py-10 bg-slate-100/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="w-full bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}marketplace-browse-screen.png`}
              alt="Find your next car with confidence - DriveRight Verified Marketplace"
              className="w-full h-auto object-contain block select-none"
            />
          </div>
        </div>
      </section>

      {/* Car Valuation Tool */}
      <section id="car-valuation-tool" className="py-12 sm:py-16 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-600 text-white">
                  June AI Valuation
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-['Outfit']">
                  What is your car really worth today in Nigeria?
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Based on verified dealer invoices and customs benchmarks in Lagos & Abuja. Get an honest price range before you sell to a dealer or buy from one.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-orange-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Calibrated with over 140k Nigerian car sales</span>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white text-slate-900 rounded-2xl p-6 shadow-md">
                <form onSubmit={calculateEstimate} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Make</label>
                      <select 
                        value={valuationMake}
                        onChange={(e) => setValuationMake(e.target.value)}
                        className="w-full text-xs p-2 rounded-lg border border-slate-200 font-medium"
                      >
                        <option>Toyota</option>
                        <option>Lexus</option>
                        <option>Mercedes-Benz</option>
                        <option>Honda</option>
                        <option>Hyundai</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Model</label>
                      <select 
                        value={valuationModel}
                        onChange={(e) => setValuationModel(e.target.value)}
                        className="w-full text-xs p-2 rounded-lg border border-slate-200 font-medium"
                      >
                        <option>Camry</option>
                        <option>Corolla</option>
                        <option>Highlander</option>
                        <option>RX 350</option>
                        <option>C300</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Year</label>
                      <select 
                        value={valuationYear}
                        onChange={(e) => setValuationYear(e.target.value)}
                        className="w-full text-xs p-2 rounded-lg border border-slate-200 font-medium"
                      >
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2015</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Condition</label>
                      <select 
                        value={valuationCondition}
                        onChange={(e) => setValuationCondition(e.target.value)}
                        className="w-full text-xs p-2 rounded-lg border border-slate-200 font-medium"
                      >
                        <option>Foreign Used (Tokunbo)</option>
                        <option>Nigerian Used</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-md bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
                  >
                    Calculate Current Fair Market Value
                  </button>
                </form>

                {estimatedVal && (
                  <div className="mt-4 p-3.5 rounded-xl bg-orange-50 border border-orange-200 text-center animate-in fade-in duration-200">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-700 block">
                      Estimated Market Value:
                    </span>
                    <span className="text-base font-extrabold text-slate-900 font-mono mt-0.5 block">
                      {estimatedVal}
                    </span>
                    <span className="text-[10px] text-slate-500 mt-1 block">
                      Based on recent verified transactions in Lagos & Abuja
                    </span>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Selling your car? */}
      <section className="py-12 bg-[#FAFAFA] border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit']">
            Are you a car owner looking to sell?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Submit your car details once, and receive competitive buyout offers from verified DriveRight dealerships within 24 hours. No endless roadside test drives.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => alert('Sell Feature: Connect with top Lagos & Abuja dealers for verified car buyouts.')}
              className="px-5 py-2.5 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
            >
              List Your Car for Dealer Buyout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
