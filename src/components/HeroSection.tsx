import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { EVM_CHAINS } from '../data/charterData';
import { AccountMode } from '../types/wallet';
import { EvmStripIcon } from './BrandIcons';
import { HeroWalletPhone } from './PhoneMockups';

interface HeroSectionProps {
  mode: AccountMode;
  onModeChange: (mode: AccountMode) => void;
  onOpenWaitlist: () => void;
}

export function HeroSection({ mode, onModeChange, onOpenWaitlist }: HeroSectionProps) {
  const [activeChainId, setActiveChainId] = useState<string>('polygon');
  const activeChain = EVM_CHAINS.find((c) => c.id === activeChainId) ?? EVM_CHAINS[3];

  return (
    <section id="overview" className="relative overflow-hidden bg-[#F4F6F5] pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Hero Mode Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-[#E2E8E5]">
            <button
              type="button"
              onClick={() => onModeChange('personal')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                mode === 'personal'
                  ? 'bg-white text-[#0D1F1B] shadow-sm'
                  : 'text-[#465853] hover:text-[#0D1F1B]'
              }`}
            >
              Personal Wallet
            </button>
            <button
              type="button"
              onClick={() => onModeChange('business')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                mode === 'business'
                  ? 'bg-white text-[#0D1F1B] shadow-sm'
                  : 'text-[#465853] hover:text-[#0D1F1B]'
              }`}
            >
              Business Treasury
            </button>
          </div>
        </div>

        {/* Hero Typography & Floating Hardware Capsules */}
        <div className="relative max-w-[920px] mx-auto text-center select-none">
          <h1 className="font-display font-bold tracking-[-0.04em] text-[#0D1F1B] text-[44px] sm:text-[68px] md:text-[88px] lg:text-[104px] leading-[1.02]">
            {/* Line 1 */}
            <span className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <span>Make</span>
              <span className="relative inline-flex items-center justify-center w-[124px] sm:w-[168px] md:w-[205px] h-[52px] sm:h-[68px] md:h-[82px] rounded-full bg-gradient-to-br from-[#132B26] via-[#0B1917] to-[#1E3F37] shadow-[0_22px_40px_-12px_rgba(13,31,27,0.45)] -rotate-[4deg] align-middle mx-1 border border-white/15">
                <span className="w-[74%] h-[68%] rounded-full bg-gradient-to-r from-[#0F2420] via-[#1B3A33] to-[#99F6E4]/20 border border-white/10 flex items-center justify-end pr-3">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#CCFBF1] shadow-inner flex items-center justify-center text-[#0F766E] text-xs font-bold">
                    ↑
                  </span>
                </span>
                {/* Floating USDT badge */}
                <span className="absolute -top-6 -left-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0F766E] text-white font-bold text-base sm:text-lg shadow-lg flex items-center justify-center border-2 border-white/85 rotate-[-10deg]">
                  ₮
                </span>
                {/* Floating USDC badge */}
                <span className="absolute -top-3 left-10 sm:left-14 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0D9488] text-white font-bold text-sm shadow-lg flex items-center justify-center border-2 border-white/85 rotate-[8deg]">
                  $
                </span>
              </span>
            </span>

            <br />

            {/* Line 2 */}
            <span className="inline-flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5">
              <span className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#E2E8E5] border border-[#0D1F1B]/10 text-[#0F766E] text-lg sm:text-xl font-semibold align-middle shadow-sm">
                $
              </span>
              <span>your money</span>
              <span className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#E2E8E5] border border-[#0D1F1B]/10 text-[#0F766E] text-lg sm:text-xl font-semibold align-middle shadow-sm">
                €
              </span>
            </span>

            <br />

            {/* Line 3 */}
            <span className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-1">
              <span className="relative inline-flex items-center justify-center w-[124px] sm:w-[168px] md:w-[205px] h-[52px] sm:h-[68px] md:h-[82px] rounded-full bg-gradient-to-br from-[#132B26] via-[#0B1917] to-[#1E3F37] shadow-[0_22px_40px_-12px_rgba(13,31,27,0.45)] rotate-[3deg] align-middle mx-1 border border-white/15">
                <span className="w-[74%] h-[68%] rounded-full bg-gradient-to-r from-[#99F6E4]/15 via-[#1B3A33] to-[#0F2420] border border-white/10 flex items-center justify-start pl-3">
                  <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#0F766E] text-white text-[10px] font-bold flex items-center justify-center shadow">
                    OP
                  </span>
                </span>
                {/* Floating Base / Arbitrum badges */}
                <span className="absolute -bottom-5 left-10 sm:left-16 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#115E59] text-[#CCFBF1] font-bold text-[10px] shadow-lg flex items-center justify-center border-2 border-white/90">
                  BASE
                </span>
                <span className="absolute -bottom-7 right-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0D1F1B] text-[#5EEAD4] font-bold text-xs shadow-lg flex items-center justify-center border-2 border-white/90">
                  A
                </span>
              </span>
              <span className="inline-flex items-center gap-3">
                <span>move.</span>
                <Send className="w-6 h-6 sm:w-8 sm:h-8 text-[#0F766E] stroke-[1.5] -translate-y-1" aria-hidden="true" />
              </span>
            </span>
          </h1>
        </div>

        {/* Hero Value Copy & Primary CTA */}
        <div className="mt-10 md:mt-12 max-w-[920px] mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-xs">
            <p className="text-[14px] leading-relaxed text-[#465853]">
              {mode === 'business'
                ? 'Experience a new affordable and efficient way to manage multi-currency treasuries and pay global teams.'
                : 'Experience a new affordable and efficient way to send and receive digital payments worldwide.'}
            </p>
            <button
              type="button"
              onClick={onOpenWaitlist}
              className="mt-4 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0F766E] hover:bg-[#0B5B55] text-white text-xs font-medium transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
            >
              Join our waitlist
            </button>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#465853]">
            <div>
              <p className="font-display font-bold text-lg text-[#0D1F1B] tabular-nums">60+</p>
              <p>Countries supported</p>
            </div>
            <div className="h-8 w-px bg-[#D3DDD8]" />
            <div>
              <p className="font-display font-bold text-lg text-[#0D1F1B] tabular-nums">20+</p>
              <p>EVM blockchains</p>
            </div>
            <div className="h-8 w-px bg-[#D3DDD8]" />
            <div>
              <p className="font-display font-bold text-lg text-[#0D1F1B] tabular-nums">5s</p>
              <p>Avg. settlement</p>
            </div>
          </div>
        </div>

        {/* Section 2: A wallet that can do more */}
        <div className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col justify-between space-y-16 md:space-y-28">
            <h2 className="font-display font-bold text-[28px] sm:text-[34px] md:text-[38px] leading-[1.15] tracking-[-0.025em] text-[#0D1F1B] text-balance max-w-lg">
              A wallet that can do more. — Built to be your new and only payments app ever.
            </h2>

            <div className="max-w-sm">
              <h3 className="text-sm font-semibold text-[#0D1F1B] mb-2">Introducing Meridian Wallet</h3>
              <p className="text-sm leading-relaxed text-[#465853]">
                A digital wallet that gives back your financial control and enables true affordable and instant
                worldwide payments.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="hidden sm:block absolute -inset-8 rounded-[48px] bg-gradient-to-tr from-[#DCE5E1] via-[#EBF0ED]/60 to-transparent -z-10" />
              <div className="lg:rotate-[6deg] transition-transform duration-300 hover:lg:rotate-[3deg]">
                <HeroWalletPhone mode={mode} />
              </div>
            </div>
          </div>
        </div>

        {/* Full coverage list: EVM Chains Strip */}
        <div className="mt-20 md:mt-28 pt-10 border-t border-[#0D1F1B]/[0.07]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7">
            <div>
              <p className="text-sm font-semibold text-[#0D1F1B]">Full coverage list</p>
              <p className="text-xs text-[#465853] mt-0.5">Available on all EVM Chains</p>
            </div>
            <p className="text-xs text-[#465853] font-mono-num">
              {activeChain.name} · Settlement {activeChain.settlementTime} · Avg fee {activeChain.avgFee} · Treasury{' '}
              {activeChain.balanceUsd}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {EVM_CHAINS.map((chain) => {
              const isSelected = chain.id === activeChainId;
              return (
                <button
                  key={chain.id}
                  type="button"
                  onClick={() => setActiveChainId(chain.id)}
                  className={`flex items-center justify-center gap-2 px-3 py-3 rounded-xl border text-xs font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#0D1F1B] text-white border-[#0D1F1B] shadow-sm'
                      : 'bg-white text-[#465853] border-[#0D1F1B]/[0.07] hover:border-[#0F766E]/40 hover:text-[#0D1F1B]'
                  }`}
                >
                  <EvmStripIcon chainId={chain.id} />
                  <span>{chain.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
