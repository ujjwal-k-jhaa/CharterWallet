import React, { useState } from 'react';
import { Globe, QrCode } from 'lucide-react';
import { FIAT_COUNTRIES, SCENARIO_VAULTS, TRACK_TRANSACTIONS } from '../data/charterData';
import { ChainBadge, CountryFlag } from './BrandIcons';
import { DualSendPhones } from './PhoneMockups';

export function CapabilitiesSection() {
  const [activeVaultId, setActiveVaultId] = useState<string>('organizations');
  const activeVault = SCENARIO_VAULTS.find((v) => v.id === activeVaultId) ?? SCENARIO_VAULTS[3];

  return (
    <>
      {/* Section 3: One app that takes care of it all */}
      <section id="capabilities" className="py-20 md:py-28 bg-white border-t border-[#0D1F1B]/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="max-w-xs mb-10">
            <h2 className="text-sm font-semibold text-[#0D1F1B] mb-2">One app that takes care of it all.</h2>
            <p className="text-xs leading-relaxed text-[#465853]">
              Whether you are looking to send money overseas or would like to diversify your digital portfolio, Meridian
              wallet has you covered.
            </p>
          </div>

          <div className="rounded-[32px] bg-[#EBF0ED] px-4 sm:px-10 py-10 md:py-14 border border-[#0D1F1B]/[0.05]">
            <DualSendPhones />
          </div>

          {/* 3 Feature Cards beneath Dual Phones */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Send and Receive Fiat */}
            <div className="flex flex-col">
              <div className="rounded-2xl bg-[#EBF0ED] p-5 border border-[#0D1F1B]/[0.05] flex-1 flex flex-col justify-center space-y-2.5">
                {FIAT_COUNTRIES.slice(4).concat(FIAT_COUNTRIES[2]).map((c) => (
                  <div
                    key={c.id}
                    className="flex items-center justify-between bg-white rounded-xl px-3.5 py-2.5 border border-[#0D1F1B]/[0.05]"
                  >
                    <div className="flex items-center gap-3">
                      <CountryFlag country={c} />
                      <div>
                        <p className="text-xs font-semibold text-[#0D1F1B] leading-tight">{c.currencyCode}</p>
                        <p className="text-[11px] text-[#5F726C]">{c.currencyName}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono-num text-[#5F726C]">{c.rate.split('= ')[1]}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 px-1">
                <h3 className="text-sm font-semibold text-[#0D1F1B]">Send and Receive Fiat</h3>
                <p className="text-xs leading-relaxed text-[#465853] mt-1">
                  Make payments to almost anywhere. Enjoy the convenience of bank transfers to more than 60 countries.
                </p>
              </div>
            </div>

            {/* Card 2: Invest and Transfer Crypto */}
            <div className="flex flex-col">
              <div className="rounded-2xl bg-[#EBF0ED] p-5 border border-[#0D1F1B]/[0.05] flex-1 flex flex-col justify-center space-y-2.5">
                {[
                  { id: 'polygon', name: 'Polygon', symbol: 'MATIC', balance: '$6,282.69' },
                  { id: 'optimism', name: 'Optimism', symbol: 'OP', balance: '$9,550.07' },
                  { id: 'usdc', name: 'USDC', symbol: 'USD Coin', balance: '$4,006.02' },
                ].map((asset) => (
                  <div
                    key={asset.id}
                    className="flex items-center justify-between bg-white rounded-xl px-3.5 py-2.5 border border-[#0D1F1B]/[0.05]"
                  >
                    <div className="flex items-center gap-3">
                      <ChainBadge chainId={asset.id} className="w-7 h-7" />
                      <div>
                        <p className="text-xs font-semibold text-[#0D1F1B] leading-tight">{asset.name}</p>
                        <p className="text-[11px] text-[#5F726C]">{asset.symbol}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono-num font-semibold text-[#0D1F1B]">{asset.balance}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 px-1">
                <h3 className="text-sm font-semibold text-[#0D1F1B]">Invest and Transfer Crypto</h3>
                <p className="text-xs leading-relaxed text-[#465853] mt-1">
                  We support digital cryptocurrency payments and trading on more than 20+ EVM blockchains.
                </p>
              </div>
            </div>

            {/* Card 3: Track Digital Payments */}
            <div className="flex flex-col">
              <div className="rounded-2xl bg-[#EBF0ED] p-5 border border-[#0D1F1B]/[0.05] flex-1 flex flex-col justify-center space-y-2.5">
                {TRACK_TRANSACTIONS.map((tx) => (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between bg-white rounded-xl px-3.5 py-2.5 border border-[#0D1F1B]/[0.05]"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`w-7 h-7 rounded-full text-[10px] font-semibold flex items-center justify-center shrink-0 ${tx.avatarBg}`}
                      >
                        {tx.initials}
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-[#0D1F1B] truncate leading-tight">{tx.name}</p>
                        <p className="text-[10px] text-[#5F726C] truncate">{tx.subtitle}</p>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-mono-num font-semibold shrink-0 ${
                        tx.positive ? 'text-[#0F766E]' : 'text-[#0D1F1B]'
                      }`}
                    >
                      {tx.amount}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 px-1">
                <h3 className="text-sm font-semibold text-[#0D1F1B]">Track Digital Payments</h3>
                <p className="text-xs leading-relaxed text-[#465853] mt-1">
                  Easily track and manage all your transactions from multiple blockchain networks within the mobile app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Suited for every scenario */}
      <section id="scenarios" className="py-20 md:py-28 bg-[#F4F6F5] border-t border-[#0D1F1B]/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="mb-10">
            <p className="text-xs text-[#465853] mb-2">Flexible to each different individual needs and occasions</p>
            <h2 className="font-display font-bold text-[34px] sm:text-[44px] md:text-[52px] tracking-[-0.03em] leading-tight text-[#0D1F1B]">
              Suited for every scenario.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SCENARIO_VAULTS.map((vault) => {
              const isSelected = vault.id === activeVaultId;
              return (
                <button
                  key={vault.id}
                  type="button"
                  onClick={() => setActiveVaultId(vault.id)}
                  className={`group relative h-[320px] rounded-2xl overflow-hidden text-left transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] ${
                    isSelected ? 'ring-2 ring-[#0F766E] shadow-xl' : 'hover:shadow-lg'
                  }`}
                >
                  <img
                    src={vault.image}
                    alt={`${vault.kicker} ${vault.accountName} architecture`}
                    referrerPolicy="no-referrer"
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      vault.imagePosition ?? 'object-center'
                    }`}
                  />
                  {/* Scrim for guaranteed WCAG AA legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071311]/90 via-[#0D1F1B]/40 to-[#0D1F1B]/25" />

                  <div className="relative h-full p-5 flex flex-col justify-between text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-medium text-white/85">{vault.kicker}</span>
                      {isSelected && <span className="text-[10px] font-mono-num text-[#5EEAD4]">Active</span>}
                    </div>

                    <div>
                      <p className="font-display font-bold text-[22px] tracking-tight font-mono-num leading-none">
                        {vault.balanceUsd}
                        <span className="text-[10px] font-normal text-white/75 ml-1">USD</span>
                      </p>
                      <p className="text-[12px] font-mono-num text-white/80 mt-1.5">
                        {vault.ethAmount} <span className="text-[10px] text-white/60">ETH</span>
                      </p>
                      <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
                        <span className="text-xs font-medium">{vault.accountName}</span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Scenario Context */}
          <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-sm">
              <h3 className="text-sm font-semibold text-[#0D1F1B]">Organize your funds across accounts</h3>
              <p className="text-xs leading-relaxed text-[#465853] mt-1.5">
                Add multiple personal accounts to better overview your funds and expenses. Easily adjust any spending
                limits and budgets within each of them.
              </p>
            </div>
            <div className="bg-white border border-[#0D1F1B]/[0.07] rounded-2xl px-5 py-4 max-w-md">
              <div className="flex items-center justify-between gap-4 mb-1">
                <span className="text-xs font-semibold text-[#0D1F1B]">
                  {activeVault.accountName} · {activeVault.kicker}
                </span>
                <span className="text-[11px] font-mono-num text-[#0F766E] font-medium">{activeVault.limitNote}</span>
              </div>
              <p className="text-xs text-[#465853] leading-relaxed">{activeVault.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: 3 Editorial Global Proof Rows */}
      <section className="py-16 md:py-24 bg-[#EBF0ED]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 space-y-6">
          {/* Row 1: 60+ Countries */}
          <div className="bg-white rounded-[28px] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-[#0D1F1B]/[0.05]">
            <div className="lg:col-span-5 flex flex-col justify-between py-2">
              <h2 className="font-display font-bold text-[28px] sm:text-[34px] leading-[1.15] tracking-[-0.025em] text-[#0D1F1B]">
                Your transfers
                <br />
                just got global.
              </h2>
              <div className="mt-12 lg:mt-0 max-w-xs">
                <p className="text-xs font-semibold text-[#0D1F1B] mb-1.5">Enter multi-currency accounts</p>
                <p className="text-xs leading-relaxed text-[#465853]">
                  Seamlessly transfer funds to over 60 countries, with support for both fiat and digital currencies.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[340px] rounded-2xl overflow-hidden">
              <img
                src="/src/assets/images/global_golden_gate_1794898237462.jpg"
                alt="Golden Gate Bridge overlooking global transfer corridors"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/15" />

              {/* Floating country selector strip */}
              <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl w-[190px] space-y-2 border border-white/40">
                {FIAT_COUNTRIES.slice(0, 4).map((c) => (
                  <div key={c.id} className="flex items-center gap-2.5 text-xs font-medium text-zinc-900">
                    <CountryFlag country={c} />
                    <span>{c.country}</span>
                  </div>
                ))}
              </div>

              <div className="absolute right-5 bottom-5 sm:right-7 sm:bottom-6 text-right text-white">
                <p className="font-display font-bold text-[44px] sm:text-[56px] leading-none font-mono-num">
                  60<span className="text-2xl align-top ml-0.5">+</span>
                </p>
                <p className="text-[11px] text-white/85 mt-1">Available Supported Countries</p>
              </div>
            </div>
          </div>

          {/* Row 2: 5s Average Settlement Time */}
          <div className="bg-white rounded-[28px] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-[#0D1F1B]/[0.05]">
            <div className="lg:col-span-5 flex flex-col justify-between py-2">
              <h2 className="font-display font-bold text-[28px] sm:text-[34px] leading-[1.15] tracking-[-0.025em] text-[#0D1F1B]">
                Send money to loved
                <br />
                ones in an instant
              </h2>
              <div className="mt-12 lg:mt-0 max-w-xs">
                <p className="text-xs font-semibold text-[#0D1F1B] mb-1.5">No more waiting days, just seconds</p>
                <p className="text-xs leading-relaxed text-[#465853]">
                  Embrace instant stablecoins such as USDC, or opt for same-day settlement in the local currency of your
                  choice.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[340px] rounded-2xl overflow-hidden">
              <img
                src="/src/assets/images/instant_loved_ones_1794898235645.jpg"
                alt="Friends receiving an instant Meridian Wallet transfer together"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071311]/80 via-[#0D1F1B]/20 to-transparent" />
              <div className="absolute right-5 bottom-5 sm:right-7 sm:bottom-6 text-right text-white">
                <p className="font-display font-bold text-[44px] sm:text-[56px] leading-none font-mono-num">
                  5<span className="text-2xl font-normal ml-1">s</span>
                </p>
                <p className="text-[11px] text-white/85 mt-1">Average Settlement Time</p>
              </div>
            </div>
          </div>

          {/* Row 3: 1% Average Processing Fees */}
          <div className="bg-white rounded-[28px] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border border-[#0D1F1B]/[0.05]">
            <div className="lg:col-span-5 flex flex-col justify-between py-2">
              <h2 className="font-display font-bold text-[28px] sm:text-[34px] leading-[1.15] tracking-[-0.025em] text-[#0D1F1B]">
                Spend USDC or Fiat
                <br />
                at your local shop
              </h2>
              <div className="mt-12 lg:mt-0 max-w-xs">
                <p className="text-xs font-semibold text-[#0D1F1B] mb-1.5">Transact like a true local</p>
                <p className="text-xs leading-relaxed text-[#465853]">
                  Effortlessly spend USDC or any other supported fiat currency at your local merchant, instantly at low
                  costs.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[340px] rounded-2xl overflow-hidden">
              <img
                src="/src/assets/images/local_shop_payment_1794898234923.jpg"
                alt="Scanning a QR code to pay in USDC at a local botanical shop"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071311]/80 via-[#0D1F1B]/20 to-transparent" />

              {/* Crisp Instant Pay QR Overlay */}
              <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-white/40 flex flex-col items-center">
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#0D1F1B] mb-2">
                  <Globe className="w-3 h-3 text-[#0F766E]" />
                  <span>Instant Pay</span>
                </div>
                <div className="w-16 h-16 rounded-lg bg-[#0D1F1B] text-white flex items-center justify-center">
                  <QrCode className="w-11 h-11" />
                </div>
                <span className="text-[9px] text-[#465853] mt-1.5 font-mono-num">USDC · Local Fiat</span>
              </div>

              <div className="absolute right-5 bottom-5 sm:right-7 sm:bottom-6 text-right text-white">
                <p className="font-display font-bold text-[44px] sm:text-[56px] leading-none font-mono-num">
                  1<span className="text-2xl font-normal ml-0.5">%</span>
                </p>
                <p className="text-[11px] text-white/85 mt-1">Average Processing Fees</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
