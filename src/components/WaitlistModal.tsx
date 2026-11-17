import React, { useEffect, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { AccountMode } from '../types/wallet';
import { MeridianLogoMark } from './BrandIcons';

interface WaitlistModalProps {
  open: boolean;
  initialMode: AccountMode;
  onClose: () => void;
  onSuccess: (email: string) => void;
}

export function WaitlistModal({ open, initialMode, onClose, onSuccess }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [accountType, setAccountType] = useState<AccountMode>(initialMode);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setAccountType(initialMode);
  }, [initialMode]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    onSuccess(trimmed);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#071311]/60 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-modal-title"
    >
      <div className="w-full max-w-md rounded-[28px] bg-white p-6 sm:p-8 shadow-2xl border border-[#0D1F1B]/[0.07] relative">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close waitlist modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#EBF0ED] hover:bg-[#DCE5E1] flex items-center justify-center text-[#0D1F1B] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="inline-flex items-center gap-2 font-display font-bold text-sm text-[#0D1F1B] mb-4">
          <MeridianLogoMark className="w-4 h-4" />
          <span>Meridian</span>
        </div>

        {submitted ? (
          <div className="py-4">
            <div className="w-11 h-11 rounded-2xl bg-[#CCFBF1] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-[#0F766E]" />
            </div>
            <h3 id="waitlist-modal-title" className="font-display font-bold text-xl text-[#0D1F1B]">
              You&apos;re on the list.
            </h3>
            <p className="text-xs text-[#465853] mt-2 leading-relaxed">
              We reserved early access for <strong className="text-[#0D1F1B]">{email}</strong> ({accountType}{' '}
              account). We will notify you as soon as your invite is ready.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setEmail('');
                onClose();
              }}
              className="mt-6 w-full py-2.5 rounded-full bg-[#0F766E] text-white text-xs font-medium hover:bg-[#0B5B55] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 id="waitlist-modal-title" className="font-display font-bold text-2xl tracking-tight text-[#0D1F1B]">
              Join the Meridian waitlist
            </h3>
            <p className="text-xs text-[#465853] mt-2 leading-relaxed">
              Get priority access to non-custodial multi-currency accounts and instant global transfers.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <span className="block text-[11px] font-medium text-[#465853] mb-1.5">Account type</span>
                <div className="grid grid-cols-2 gap-2 p-1 bg-[#EBF0ED] rounded-xl">
                  <button
                    type="button"
                    onClick={() => setAccountType('personal')}
                    className={`py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      accountType === 'personal' ? 'bg-white text-[#0D1F1B] shadow-sm' : 'text-[#465853]'
                    }`}
                  >
                    Personal
                  </button>
                  <button
                    type="button"
                    onClick={() => setAccountType('business')}
                    className={`py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      accountType === 'business' ? 'bg-white text-[#0D1F1B] shadow-sm' : 'text-[#465853]'
                    }`}
                  >
                    Business
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="waitlist-email" className="block text-[11px] font-medium text-[#465853] mb-1.5">
                  Email address
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="you@domain.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F4F6F5] border border-[#D3DDD8] text-xs text-[#0D1F1B] placeholder:text-[#739088] focus:outline-none focus:border-[#0F766E]"
                />
                {error && <p className="text-[11px] text-red-600 mt-1.5">{error}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#0F766E] hover:bg-[#0B5B55] text-white text-xs font-medium transition-colors cursor-pointer"
              >
                Request early access
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
