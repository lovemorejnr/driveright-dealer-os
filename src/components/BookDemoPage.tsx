import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface BookDemoPageProps {
  onNavigate?: (page: string) => void;
}

interface CalendarDay {
  dayNumber: number;
  dayOfWeek: string; // 'MON', 'TUE', etc.
  isCurrentMonth: boolean;
  isSelectable: boolean;
  isToday?: boolean;
}

interface TimeSlot {
  time: string;
  isAvailable: boolean;
}

export const BookDemoPage: React.FC<BookDemoPageProps> = ({ onNavigate }) => {
  // Calendar state - September 2026
  const [selectedDay, setSelectedDay] = useState<number>(18);
  const [selectedSlot, setSelectedSlot] = useState<string>('11:00');
  
  // Form state
  const [fullName, setFullName] = useState<string>('');
  const [dealershipName, setDealershipName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('+234');
  const [carsInStock, setCarsInStock] = useState<string>('');
  
  // Validation state
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // September 2026 begins on Tuesday (day 1)
  // Calendar layout: 7 columns (MON, TUE, WED, THU, FRI, SAT, SUN)
  const daysInSeptember = 30;
  const startDayOffset = 1; // 0 for Mon, 1 for Tue

  const calendarCells: (CalendarDay | null)[] = [];
  // Empty slots before Sep 1
  for (let i = 0; i < startDayOffset; i++) {
    calendarCells.push(null);
  }
  // Days of September 2026
  for (let day = 1; day <= daysInSeptember; day++) {
    const dayOfWeekIndex = (startDayOffset + day - 1) % 7;
    const isWeekend = dayOfWeekIndex === 5 || dayOfWeekIndex === 6; // SAT, SUN
    // Allow weekdays from day 14 onwards to be selectable
    const isSelectable = !isWeekend && day >= 14;

    calendarCells.push({
      dayNumber: day,
      dayOfWeek: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'][dayOfWeekIndex],
      isCurrentMonth: true,
      isSelectable,
      isToday: day === 17, // Day 17 has the subtle border
    });
  }

  // Time slots for the chosen day
  const timeSlots: TimeSlot[] = [
    { time: '09:00', isAvailable: true },
    { time: '10:00', isAvailable: false }, // Booked
    { time: '11:00', isAvailable: true },
    { time: '12:00', isAvailable: true },
    { time: '14:00', isAvailable: false }, // Booked
    { time: '15:00', isAvailable: true },
  ];

  // Selected date formatted string (e.g., "Fri 18 Sep")
  const getSelectedDayString = () => {
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const dayOfWeekIndex = (startDayOffset + selectedDay - 1) % 7;
    return `${dayNames[dayOfWeekIndex]} ${selectedDay} Sep`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);

    if (!fullName.trim()) {
      return;
    }

    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[#C04A1A] text-[11px] font-bold tracking-widest uppercase mb-3">
            BOOK A DEMO
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            See it on your own stock
          </h1>

          {/* Subheading */}
          <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Pick a time that works. We walk your dealership through the system on a call, with your cars in front of you.
          </p>

          {/* Contact Link */}
          <p className="mt-3 text-xs sm:text-sm text-slate-600">
            Prefer to write?{' '}
            <a 
              href="mailto:hello@driveright.tech?subject=DriveRight%20Demo%20Enquiry" 
              className="text-[#C04A1A] underline hover:text-orange-700 font-medium transition-colors cursor-pointer"
            >
              hello@driveright.tech
            </a>
          </p>
        </div>

        {/* Success Confirmation Card */}
        {isSuccess ? (
          <div className="mt-12 max-w-xl mx-auto rounded-2xl bg-white border border-emerald-200 p-8 text-center shadow-lg">
            <div className="h-14 w-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">
              Demo slot requested!
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              We have reserved <span className="font-semibold text-[#C04A1A]">{getSelectedDayString()} at {selectedSlot} WAT</span> for {dealershipName || fullName || 'your dealership'}.
            </p>

            <p className="mt-3 text-xs text-slate-500 leading-relaxed">
              A calendar invitation with a video link and phone dial-in has been sent to <span className="text-slate-900 font-medium">{email || 'your email'}</span>. Our team will bring your stock and live numbers to the session.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  setHasAttemptedSubmit(false);
                  setFullName('');
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                Change or book another slot
              </button>
              {onNavigate && (
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-md bg-[#C04A1A] hover:bg-[#a83610] text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs"
                >
                  Return to overview
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Main Two-Column Scheduling Grid */
          <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            
            {/* Left Card: Date & Time Picker */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm">
              <h2 className="text-slate-900 font-bold text-base sm:text-[17px]">
                Choose a date and time
              </h2>
              <p className="text-slate-500 text-xs mt-1 leading-normal">
                Weekdays, 09:00 - 15:00 West Africa Time (WAT). Pick a day, then a time.
              </p>

              {/* Inner Calendar Box */}
              <div className="mt-5 rounded-xl bg-slate-50/70 border border-slate-200 p-4 sm:p-5">
                
                {/* Month Navigator Header */}
                <div className="flex items-center justify-between px-1 mb-3">
                  <button
                    type="button"
                    className="h-7 w-7 rounded-md border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                    aria-label="Previous month"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    September 2026
                  </span>

                  <button
                    type="button"
                    className="h-7 w-7 rounded-md border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
                    aria-label="Next month"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Day of Week Headers */}
                <div className="grid grid-cols-7 text-center mb-1">
                  {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((d) => (
                    <span 
                      key={d} 
                      className="text-[10px] font-bold text-slate-400 uppercase tracking-wider py-1"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-1 text-center">
                  {calendarCells.map((cell, idx) => {
                    if (!cell) {
                      return <div key={`empty-${idx}`} className="h-9 w-full" />;
                    }

                    const isSelected = selectedDay === cell.dayNumber;
                    const isBorderedDay = cell.dayNumber === 17;
                    const isSelectable = cell.isSelectable;

                    return (
                      <button
                        key={`day-${cell.dayNumber}`}
                        type="button"
                        disabled={!isSelectable}
                        onClick={() => {
                          if (isSelectable) {
                            setSelectedDay(cell.dayNumber);
                          }
                        }}
                        className={`h-9 w-full rounded-lg text-xs font-semibold flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-[#C04A1A] text-white shadow-sm font-bold'
                            : isBorderedDay
                            ? 'border border-slate-300 bg-white text-slate-900 font-semibold hover:border-slate-400 cursor-pointer'
                            : isSelectable
                            ? 'text-slate-700 font-medium hover:bg-white hover:text-orange-600 hover:shadow-2xs cursor-pointer'
                            : 'text-slate-300 cursor-not-allowed select-none'
                        }`}
                      >
                        {cell.dayNumber}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots for Selected Day */}
              <div className="mt-6">
                <div className="text-xs font-semibold text-slate-700 mb-3">
                  Times on {getSelectedDayString()}
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedSlot === slot.time && slot.isAvailable;

                    if (!slot.isAvailable) {
                      return (
                        <div
                          key={slot.time}
                          className="py-2.5 px-3 rounded-lg bg-slate-100 border border-slate-200/60 text-slate-400 line-through text-xs sm:text-sm font-medium text-center cursor-not-allowed select-none"
                          title="Slot already booked"
                        >
                          {slot.time}
                        </div>
                      );
                    }

                    return (
                      <button
                        key={slot.time}
                        type="button"
                        onClick={() => setSelectedSlot(slot.time)}
                        className={`py-2.5 px-3 rounded-md text-xs sm:text-sm font-semibold transition-all cursor-pointer text-center ${
                          isSelected
                            ? 'bg-[#C04A1A] border border-[#C04A1A] text-white shadow-sm font-bold'
                            : 'bg-white border border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
                        }`}
                      >
                        {slot.time}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Card: Details Form */}
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm">
              <h2 className="text-slate-900 font-bold text-base sm:text-[17px]">
                Your details
              </h2>
              <p className="text-slate-500 text-xs mt-1 leading-normal">
                We send the request to our team and a confirmation to you.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                {/* Your Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-colors shadow-2xs"
                  />
                </div>

                {/* Dealership */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Dealership
                  </label>
                  <input
                    type="text"
                    value={dealershipName}
                    onChange={(e) => setDealershipName(e.target.value)}
                    placeholder="Dealership name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-colors shadow-2xs"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@dealership.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-colors shadow-2xs"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-colors shadow-2xs"
                  />
                </div>

                {/* How many cars */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    How many cars do you keep in stock?
                  </label>
                  <input
                    type="text"
                    value={carsInStock}
                    onChange={(e) => setCarsInStock(e.target.value)}
                    placeholder="Roughly"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none transition-colors shadow-2xs"
                  />
                </div>

                {/* Validation hint */}
                {hasAttemptedSubmit && !fullName.trim() && (
                  <div className="text-xs text-rose-600 font-medium pt-1">
                    Your name is required.
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-md bg-[#C04A1A] hover:bg-[#a83610] text-white font-bold text-sm transition-all shadow-md cursor-pointer mt-3"
                >
                  Request this slot
                </button>

                {/* Subtext note */}
                <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
                  We confirm by email with a calendar invite. Nothing is charged and no account is created.
                </p>
              </form>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
