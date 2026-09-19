import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface SignInPageProps {
  onNavigate?: (page: string) => void;
}

export const SignInPage: React.FC<SignInPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-[calc(100vh-76px)] bg-slate-100/70 py-4 sm:py-8 px-2 sm:px-6 flex flex-col items-center justify-start sm:justify-center">
      <div className="w-full max-w-6xl mx-auto">
        {/* Top Back Navigation Bar */}
        <div className="mb-3 sm:mb-4 flex items-center justify-between px-1">
          <button
            type="button"
            onClick={() => (onNavigate ? onNavigate('home') : (window.location.hash = ''))}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 px-3.5 py-2 rounded-md shadow-2xs hover:bg-slate-50 transition-all cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to website</span>
          </button>
          <span className="text-xs text-slate-500 font-medium hidden sm:inline">
            DriveRight Tech Dealer OS
          </span>
        </div>

        {/* Sign In Screenshot Presentation */}
        <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}signin-screen.png`}
            alt="Sign in to your DriveRight Tech account to continue"
            className="w-full h-auto object-contain block select-none"
            data-no-zoom="true"
          />
        </div>
      </div>
    </div>
  );
};
