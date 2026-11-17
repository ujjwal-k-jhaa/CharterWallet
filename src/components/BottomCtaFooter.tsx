import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { MeridianLogoMark } from './BrandIcons';
import { HeroWalletPhone } from './PhoneMockups';

interface BottomCtaFooterProps {
  onWaitlistSuccess: (email: string) => void;
}

export function BottomCtaFooter({ onWaitlistSuccess }: BottomCtaFooterProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmittedEmail(trimmed);
    setEmail('');
    onWaitlistSuccess(trimmed);
  };

  return (
    <>
      {/* Bottom Conversion Banner */}
      <section className="bg-[#F4F6F5] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="bg-white rounded-[32px] border border-[#0D1F1B]/[0.06] p-8 sm:p-12 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center overflow-hidden">
            <div className="lg:col-span-7">
              <h2 className="font-display font-bold tracking-[-0.035em] text-[#0D1F1B] text-[38px] sm:text-[52px] md:text-[62px] leading-[1.03]">
                <span className="inline-flex items-center gap-3">
                  <span>Make</span>
                  <span className="relative inline-flex items-center justify-center w-[96px] sm:w-[124px] h-[40px] sm:h-[50px] rounded-full bg-[#132B26] -rotate-[4deg] shadow-md">
                    <span className="w-5 h-5 rounded-full bg-[#0F766E] text-white text-[10px] font-bold flex items-center justify-center">
                      ₮
                    </span>
                    <span className="w-5 h-5 rounded-full bg-[#0D9488] text-white text-[10px] font-bold flex items-center justify-center -ml-1 border border-[#132B26]">
                      $
                    </span>
                  </span>
                </span>
                <br />
                <span>your money</span>
                <br />
                <span className="inline-flex items-center gap-3 mt-1">
                  <span className="relative inline-flex items-center justify-center w-[96px] sm:w-[124px] h-[40px] sm:h-[50px] rounded-full bg-[#132B26] rotate-[3deg] shadow-md">
                    <span className="w-5 h-5 rounded-full bg-[#0F766E] text-white text-[8px] font-bold flex items-center justify-center">
                      OP
                    </span>
                    <span className="w-5 h-5 rounded-full bg-[#5EEAD4] text-[#0D1F1B] text-[8px] font-bold flex items-center justify-center ml-1">
                      B
                    </span>
                  </span>
                  <span>move.</span>
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-[#465853] mt-6 max-w-sm leading-relaxed">
                Explore a new affordable and efficient way to send and receive digital payments globally.
              </p>

              {submittedEmail ? (
                <div className="mt-6 inline-flex items-center gap-2.5 bg-[#CCFBF1]/60 border border-[#0F766E]/25 text-[#0D1F1B] rounded-2xl px-4 py-3 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0" />
                  <span>You&apos;re on the Meridian early access waitlist ({submittedEmail}).</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 max-w-sm">
                  <div className="flex items-center gap-2 bg-[#F4F6F5] border border-[#D3DDD8] rounded-full p-1.5 pl-4 focus-within:border-[#0F766E] transition-colors">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="Email"
                      aria-label="Email address for waitlist"
                      className="flex-1 min-w-0 bg-transparent text-xs text-[#0D1F1B] placeholder:text-[#739088] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-full bg-[#0F766E] hover:bg-[#0B5B55] text-white text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      Join Waitlist
                    </button>
                  </div>
                  {error && <p className="text-[11px] text-red-600 mt-2 pl-2">{error}</p>}
                </form>
              )}
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="lg:rotate-[5deg] lg:translate-y-4">
                <HeroWalletPhone compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Footer */}
      <footer className="bg-[#F4F6F5] border-t border-[#0D1F1B]/[0.07] pt-16 pb-10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 font-display font-bold text-base text-[#0D1F1B]">
                <MeridianLogoMark className="w-5 h-5" />
                <span>Meridian</span>
              </a>
              <p className="text-xs text-[#465853] mt-3 max-w-[230px] leading-relaxed">
                Bringing financing to the 1.5 billion unbanked. Enabling cost-efficient and instant payments, worldwide.
              </p>
              <div className="flex items-center gap-4 mt-5 text-xs font-medium text-[#465853]">
                <a href="#overview" className="hover:text-[#0F766E] transition-colors">
                  X
                </a>
                <a href="#capabilities" className="hover:text-[#0F766E] transition-colors">
                  Discord
                </a>
                <a href="#security" className="hover:text-[#0F766E] transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-[#0D1F1B] mb-3">Personal</h4>
              <ul className="space-y-2 text-xs text-[#465853]">
                <li>
                  <a href="#overview" className="hover:text-[#0F766E] transition-colors">
                    Wallet
                  </a>
                </li>
                <li>
                  <a href="#scenarios" className="hover:text-[#0F766E] transition-colors">
                    Accounts
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="hover:text-[#0F766E] transition-colors">
                    Transfers
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="hover:text-[#0F766E] transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#security" className="hover:text-[#0F766E] transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-[#0D1F1B] mb-3">Businesses</h4>
              <ul className="space-y-2 text-xs text-[#465853]">
                <li>
                  <a href="#capabilities" className="hover:text-[#0F766E] transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#scenarios" className="hover:text-[#0F766E] transition-colors">
                    Payments
                  </a>
                </li>
                <li>
                  <a href="#capabilities" className="hover:text-[#0F766E] transition-colors">
                    Transfers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-[#0D1F1B] mb-3">Resources</h4>
              <ul className="space-y-2 text-xs text-[#465853]">
                <li>
                  <a href="#security" className="hover:text-[#0F766E] transition-colors">
                    Guides
                  </a>
                </li>
                <li>
                  <a href="#security" className="hover:text-[#0F766E] transition-colors">
                    Docs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-[#0D1F1B] mb-3">About us</h4>
              <ul className="space-y-2 text-xs text-[#465853]">
                <li>
                  <a href="#overview" className="hover:text-[#0F766E] transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#overview" className="hover:text-[#0F766E] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Massive Wordmark */}
          <div className="mt-14 pt-6 border-t border-[#0D1F1B]/[0.07] select-none overflow-hidden">
            <p className="font-display font-bold tracking-[-0.045em] text-[#132B26] text-[clamp(4rem,18vw,15.5rem)] leading-[0.88] text-center">
              Meridian
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#0D1F1B]/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#465853]">
            <span>© 2026 Meridian Concept Showcase.</span>
            <span>
              Disclaimer: This website is created solely for a web designer&apos;s portfolio and does not belong to a
              real business.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
