import React from 'react';
import { Bot, Send } from 'lucide-react';

export const JuneAiSection: React.FC = () => {
  return (
    <section id="june-ai" className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header matching screenshot */}
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center gap-2.5">
            <Bot className="h-6 w-6 sm:h-7 sm:w-7 text-purple-600 shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-['Outfit']">
              June AI
            </h2>
            <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-0.5 rounded-md">
              Basic Features
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5">
            Quick actions below ask June for you - the answer shows up in the chat.
          </p>
        </div>

        {/* Main Chat Box Container */}
        <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xs overflow-hidden">
          {/* Talk to June Header */}
          <div className="px-5 sm:px-6 pt-5 pb-3 flex items-center gap-2">
            <Bot className="h-4 w-4 text-purple-600 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-slate-900">Talk to June</span>
          </div>

          {/* Scrollable Messages Area */}
          <div className="px-4 sm:px-6 py-2 space-y-4 max-h-[380px] sm:max-h-[440px] overflow-y-auto scrollbar-thin">
            {/* June Message 1 */}
            <div className="flex justify-start">
              <div className="max-w-2xl bg-slate-100/90 text-slate-800 text-xs sm:text-sm rounded-2xl px-4 py-3 leading-relaxed">
                Hi, I'm June. Use a quick action below, or just ask me anything about your dealership.
              </div>
            </div>

            {/* User Message 1 */}
            <div className="flex justify-end">
              <div className="max-w-xl bg-blue-600 text-white text-xs sm:text-sm rounded-2xl px-4 py-2.5 font-normal">
                How many cars have I sold this week?
              </div>
            </div>

            {/* June Message 2 - Breakdown */}
            <div className="flex justify-start">
              <div className="max-w-2xl bg-slate-100/90 text-slate-800 text-xs sm:text-sm rounded-2xl p-4 sm:p-5 leading-relaxed space-y-3">
                <p>You've sold 12 vehicles this week (Mon, 15 Sep - Thu, 18 Sep 2026). 🚗</p>
                <div>
                  <p className="font-normal">Here's a quick breakdown:</p>
                  <ul className="mt-1 space-y-1">
                    <li>• Total sales value: P2,184,500</li>
                    <li>• Unique customers: 11</li>
                    <li>• Trade-ins: 4</li>
                    <li>• Compared to last week: ⬆️ 33% more cars sold (9 last week)</li>
                  </ul>
                </div>
                <p>
                  Would you like to see the list of vehicles, top-performing models, or a comparison to last week?
                </p>
              </div>
            </div>

            {/* User Message 2 */}
            <div className="flex justify-end">
              <div className="max-w-xl bg-blue-600 text-white text-xs sm:text-sm rounded-2xl px-4 py-2.5 font-normal">
                Yes, show me the list of vehicles sold this week.
              </div>
            </div>

            {/* June Message 3 - 12 Cars List */}
            <div className="flex justify-start">
              <div className="max-w-2xl bg-slate-100/90 text-slate-800 text-xs sm:text-sm rounded-2xl p-4 sm:p-5 leading-relaxed space-y-3">
                <p>Here are the 12 vehicles sold this week (Mon, 15 Sep - Thu, 18 Sep 2026):</p>
                <ol className="space-y-1 text-slate-700 font-normal">
                  <li>1. Toyota Hilux 2.8 GD-6 (2023) - P459,000 - Retail - 15 Sep</li>
                  <li>2. Volkswagen Polo (2024) - P282,000 - Retail - 15 Sep</li>
                  <li>3. Ford Ranger 2.0 Bi-Turbo (2023) - P612,000 - Corporate - 16 Sep</li>
                  <li>4. Hyundai Grand i10 (2024) - P189,500 - Retail - 17 Sep</li>
                  <li>5. Nissan Magnite (2024) - P178,000 - Retail - 18 Sep</li>
                  <li>6. Kia Sonet (2024) - P196,000 - Retail - 18 Sep</li>
                  <li>7. Suzuki Fronx (2025) - P248,000 - Retail - 18 Sep</li>
                  <li>8. Isuzu D-Max 3.0 (2023) - P520,000 - Corporate - 17 Sep</li>
                  <li>9. Volkswagen T-Cross (2024) - P310,000 - Retail - 16 Sep</li>
                  <li>10. Toyota Corolla Cross (2024) - P408,000 - Retail - 15 Sep</li>
                  <li>11. Haval Jolion (2024) - P265,000 - Retail - 16 Sep</li>
                  <li>12. Chery Tiggo 4 Pro (2024) - P240,000 - Retail - 17 Sep</li>
                </ol>
                <p className="font-semibold text-slate-900 pt-1">
                  Total: 12 vehicles | Total value: P2,184,500
                </p>
                <p>
                  Would you like a visual summary, a comparison to last week, or insights on which models are performing best?
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Divider and Non-typeable Illustration Input */}
          <div className="px-4 sm:px-6 pt-3 pb-5 sm:pb-6 mt-3 border-t border-slate-100">
            <div
              className="flex items-center justify-between border border-slate-200 rounded-lg p-1.5 sm:p-2 bg-slate-50/60 cursor-not-allowed select-none"
              title="Illustration purposes only"
            >
              <input
                type="text"
                readOnly
                disabled
                tabIndex={-1}
                placeholder="Ask June anything about your dealership..."
                className="w-full bg-transparent px-3 py-1.5 text-xs sm:text-sm text-slate-400 placeholder-slate-400 cursor-not-allowed focus:outline-none select-none"
              />
              <button
                type="button"
                disabled
                tabIndex={-1}
                aria-hidden="true"
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-md bg-[#C084FC]/80 text-white flex items-center justify-center shrink-0 cursor-not-allowed opacity-90 shadow-xs"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
