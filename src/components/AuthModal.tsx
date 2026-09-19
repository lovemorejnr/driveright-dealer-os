import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, ShieldCheck, CheckCircle2, User, Building2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'signin' | 'signup';
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, initialMode, onClose }) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [accountType, setAccountType] = useState<'dealer' | 'customer'>('dealer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [dealershipName, setDealershipName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync mode when initialMode changes
  React.useEffect(() => {
    setMode(initialMode);
    setIsSubmitted(false);
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with real logo */}
        <div className="px-6 pt-6 pb-4 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={`${import.meta.env.BASE_URL}driverightlogo.png`} 
              alt="DriveRight Tech" 
              className="h-7 w-auto object-contain"
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-200 shadow-sm">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {mode === 'signin' ? 'Welcome back to DriveRight OS!' : 'Account Created Successfully!'}
              </h3>
              <p className="text-sm text-slate-600 max-w-xs mx-auto">
                {mode === 'signin'
                  ? `Signed in as ${email || 'dealer@drive-right.ng'}. Loading your dealer dashboard & inventory...`
                  : `Welcome aboard ${fullName || 'Dealer'}! A verification link has been sent to ${email || 'your email'}.`}
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 rounded-md bg-orange-600 text-white font-semibold text-sm hover:bg-orange-500 shadow-md transition-all"
                >
                  Continue to DriveRight
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Mode Toggle Tabs */}
              <div className="flex p-1 bg-slate-100 rounded-md mb-5">
                <button
                  type="button"
                  onClick={() => setMode('signin')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${
                    mode === 'signin'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Sign in
                </button>
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${
                    mode === 'signup'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Sign up
                </button>
              </div>

              {/* Account Type Selection */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setAccountType('dealer')}
                  className={`flex items-center justify-center gap-2 p-2.5 rounded-md border text-xs font-semibold transition-all ${
                    accountType === 'dealer'
                      ? 'border-orange-500 bg-orange-50/50 text-orange-700 ring-1 ring-orange-400'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Building2 className="h-4 w-4" />
                  <span>Dealership Account</span>
                </button>
                <button
                  type="button"
                  onClick={() => setAccountType('customer')}
                  className={`flex items-center justify-center gap-2 p-2.5 rounded-md border text-xs font-semibold transition-all ${
                    accountType === 'customer'
                      ? 'border-orange-500 bg-orange-50/50 text-orange-700 ring-1 ring-orange-400'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <User className="h-4 w-4" />
                  <span>Car Buyer Account</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                {mode === 'signup' && (
                  <>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Chukwuma Adebayo"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                      />
                    </div>

                    {accountType === 'dealer' && (
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Dealership / Company Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Apex Auto Motors Lagos"
                          value={dealershipName}
                          onChange={(e) => setDealershipName(e.target.value)}
                          className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                        />
                      </div>
                    )}
                  </>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="h-4 w-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      placeholder="name@dealership.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="h-4 w-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-md bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{mode === 'signin' ? 'Sign In to Portal' : 'Create Free Account'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="h-3.5 w-3.5 text-orange-600" />
                <span>256-bit encrypted • Powered by DriveRight Tech</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
