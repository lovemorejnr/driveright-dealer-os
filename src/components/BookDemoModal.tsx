import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, MapPin, Car, Phone } from 'lucide-react';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  const [dealershipName, setDealershipName] = useState('');
  const [contactName, setContactName] = useState('');
  const [whatsappPhone, setWhatsappPhone] = useState('');
  const [city, setCity] = useState('Lagos');
  const [inventorySize, setInventorySize] = useState('10 - 30 cars');
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 2:00 PM (WAT)');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-8 shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
              <Calendar className="h-4 w-4" />
              <span>Schedule a Live Walkthrough</span>
            </div>

            <h3 className="mt-2 text-xl sm:text-2xl font-extrabold text-slate-900 font-['Outfit']">
              See DriveRight on your own stock
            </h3>

            <p className="mt-1 text-xs sm:text-sm text-slate-500">
              We'll jump on a 20-minute video or phone call with your team in West Africa Time (WAT).
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Dealership or Trading Name *
                </label>
                <input
                  type="text"
                  required
                  value={dealershipName}
                  onChange={(e) => setDealershipName(e.target.value)}
                  placeholder="e.g., Crown Motors Lekki"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g., Alhaji Ibrahim"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={whatsappPhone}
                    onChange={(e) => setWhatsappPhone(e.target.value)}
                    placeholder="+234 803 000 0000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Location / City
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="Lagos">Lagos (Lekki / Ikeja / VI)</option>
                    <option value="Abuja">Abuja (Central / Garki / Wuse)</option>
                    <option value="Port Harcourt">Port Harcourt</option>
                    <option value="Ibadan">Ibadan</option>
                    <option value="Kano">Kano</option>
                    <option value="Other">Other City (Nigeria)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Cars Currently in Stock
                  </label>
                  <select
                    value={inventorySize}
                    onChange={(e) => setInventorySize(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="1 - 9 cars">1 - 9 cars (Free Plan eligible)</option>
                    <option value="10 - 30 cars">10 - 30 cars (Starter)</option>
                    <option value="30 - 100 cars">30 - 100 cars (Pro)</option>
                    <option value="100+ cars">100+ cars (Multi-branch)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Preferred WAT Time Slot
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    'Tomorrow, 11:00 AM (WAT)',
                    'Tomorrow, 2:00 PM (WAT)',
                    'Wednesday, 11:00 AM (WAT)',
                    'Wednesday, 4:00 PM (WAT)',
                  ].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedDate(slot)}
                      className={`p-2.5 rounded-md border text-left font-medium transition-all ${
                        selectedDate === slot
                          ? 'border-orange-600 bg-orange-50 text-orange-950 font-bold'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-md bg-orange-600 text-white font-bold text-sm shadow-md hover:bg-orange-500 active:scale-[0.99] transition-all cursor-pointer min-h-[48px]"
                >
                  Confirm Demo Appointment ({selectedDate})
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                🔒 Your contact details are strictly confidential and will never be shared with competitors.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit']">
              Demo Confirmed!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              We've reserved <strong>{selectedDate}</strong> for <strong>{dealershipName || 'your dealership'}</strong>. A calendar invite has been dispatched to {whatsappPhone}.
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 text-left max-w-sm mx-auto space-y-1">
              <div><strong>Dealership:</strong> {dealershipName || 'Crown Motors'}</div>
              <div><strong>Location:</strong> {city}, Nigeria</div>
              <div><strong>Stock Volume:</strong> {inventorySize}</div>
              <div><strong>Specialist Assigned:</strong> Tunde (Lagos Dealer Success)</div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-md bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors"
            >
              Back to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
