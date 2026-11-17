import React, { useState } from 'react';
import { ArrowDownLeft, ArrowUpRight, Check, ChevronRight, Lock, Search, ShieldCheck } from 'lucide-react';
import { HERO_TRANSACTIONS, FIAT_COUNTRIES } from '../data/charterData';
import { AccountMode } from '../types/wallet';
import { ChainBadge, CountryFlag } from './BrandIcons';

export function HeroWalletPhone({ mode = 'personal', compact = false }: { mode?: AccountMode; compact?: boolean }) {
  const [selectedTxId, setSelectedTxId] = useState<string>('tx-1');
  const balance = mode === 'business' ? '$48,910.40' : '$12,220.70';
  const accountLabel = mode === 'business' ? 'Treasury Vault · 4.24 ETH' : 'Main Account · 4.24 ETH';

  return (
    <div
      className={`relative mx-auto w-full ${
        compact ? 'max-w-[270px]' : 'max-w-[296px]'
      } rounded-[44px] bg-[#141416] p-[10px] shadow-[0_30px_70px_-18px_rgba(0,0,0,0.28)] border border-white/10 select-none`}
    >
      {/* Dynamic Island */}
      <div className="absolute top-[16px] left-1/2 -translate-x-1/2 w-[82px] h-[22px] bg-black rounded-full z-20 flex items-center justify-end pr-2">
        <span className="w-2 h-2 rounded-full bg-[#1C2A3A]" />
      </div>

      {/* Screen */}
      <div className="bg-white rounded-[35px] overflow-hidden text-[#0D1F1B]">
        {/* Top Deep Forest Header inside phone */}
        <div className="bg-gradient-to-br from-[#0D1F1B] via-[#13352E] to-[#1D4E44] text-white pt-10 pb-5 px-5 relative overflow-hidden">
          <div className="flex items-center justify-between text-[10px] text-white/75 mb-3">
            <span className="font-mono-num">9:41</span>
            <span>{accountLabel}</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2.5 flex items-center justify-between mb-4 border border-white/10">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-6 h-6 rounded-lg bg-black text-red-500 font-bold text-xs flex items-center justify-center shrink-0">
                N
              </span>
              <div className="truncate">
                <p className="text-[11px] font-medium leading-tight truncate">Netflix Subscription</p>
                <p className="text-[9px] text-white/60">Monthly Plan · Auto</p>
              </div>
            </div>
            <span className="text-[11px] font-mono-num font-medium shrink-0">-$11.99</span>
          </div>

          <p className="text-[11px] text-white/65 mb-0.5">Total Balance</p>
          <p className="text-[28px] font-display font-bold tracking-tight font-mono-num leading-none">
            {balance}
          </p>
          <p className="text-[11px] text-white/65 mt-1 font-mono-num">4.24 ETH</p>
        </div>

        {/* Transfers Body */}
        <div className="px-4 pt-3.5 pb-5 bg-white">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[11px] font-semibold text-zinc-900">Transfers</span>
            <span className="text-[10px] text-zinc-400">May 2026</span>
          </div>

          <div className="space-y-1.5">
            {HERO_TRANSACTIONS.slice(1).map((tx) => {
              const active = selectedTxId === tx.id;
              return (
                <button
                  key={tx.id}
                  type="button"
                  onClick={() => setSelectedTxId(tx.id)}
                  className={`w-full flex items-center justify-between px-2 py-1.5 rounded-xl text-left transition-colors duration-150 cursor-pointer ${
                    active ? 'bg-zinc-100' : 'hover:bg-zinc-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`w-7 h-7 rounded-full text-[10px] font-semibold flex items-center justify-center shrink-0 ${tx.avatarBg}`}
                    >
                      {tx.initials}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-zinc-900 truncate">{tx.name}</p>
                      <p className="text-[9px] text-zinc-400 truncate">{tx.network}</p>
                    </div>
                  </div>
                  <span
                    className={`text-[11px] font-mono-num font-medium shrink-0 ${
                      tx.positive ? 'text-emerald-600' : 'text-zinc-900'
                    }`}
                  >
                    {tx.amount}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Home Indicator */}
          <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-zinc-200" />
        </div>
      </div>
    </div>
  );
}

export function DualSendPhones() {
  const [countryQuery, setCountryQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('ca');
  const [selectedNetwork, setSelectedNetwork] = useState('polygon');

  const filteredCountries = FIAT_COUNTRIES.filter(
    (c) =>
      c.country.toLowerCase().includes(countryQuery.toLowerCase()) ||
      c.currencyCode.toLowerCase().includes(countryQuery.toLowerCase())
  ).slice(0, 4);

  const networks = [
    { id: 'polygon', name: 'Polygon', amount: '$6,282.69' },
    { id: 'optimism', name: 'Optimism', amount: '$9,550.07' },
    { id: 'ethereum', name: 'Ethereum', amount: '$32,018.24' },
    { id: 'arbitrum', name: 'Arbitrum', amount: '$5,100.48' },
    { id: 'gnosis', name: 'Gnosis', amount: '$2,400.48' },
  ];

  const keyRows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ];

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 py-8">
      {/* Left Phone: Fiat Country Selector */}
      <div className="w-full max-w-[285px] rounded-[42px] bg-[#141416] p-[10px] shadow-[0_28px_64px_-16px_rgba(0,0,0,0.22)] lg:-rotate-[8deg] lg:translate-y-8 transition-transform duration-300 hover:lg:-rotate-[5deg]">
        <div className="bg-white rounded-[33px] overflow-hidden text-[#111111]">
          <div className="px-4 pt-4 pb-2">
            <div className="flex items-center justify-between text-[10px] font-semibold text-zinc-800 mb-3">
              <span>9:41</span>
              <span className="w-16 h-4 rounded-full bg-black inline-block" />
              <span>5G</span>
            </div>

            <div className="flex items-center justify-between mb-3">
              <span className="text-[15px] font-display font-bold">Send</span>
              <span className="text-[11px] text-zinc-400">60+ countries</span>
            </div>

            <div className="flex items-center gap-2 bg-zinc-100 rounded-xl px-2.5 py-2 mb-3">
              <Search className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              <input
                type="text"
                value={countryQuery}
                onChange={(e) => setCountryQuery(e.target.value)}
                placeholder="Search country..."
                aria-label="Search supported fiat country"
                className="w-full bg-transparent text-[11px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
              />
            </div>

            <div className="space-y-1.5 min-h-[156px]">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((c) => {
                  const isActive = selectedCountry === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedCountry(c.id)}
                      className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-left transition-colors cursor-pointer ${
                        isActive ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-50 text-zinc-900'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <CountryFlag country={c} />
                        <div className="min-w-0">
                          <p className="text-[11px] font-medium truncate">{c.country}</p>
                          <p className={`text-[9px] truncate ${isActive ? 'text-zinc-300' : 'text-zinc-400'}`}>
                            {c.currencyCode} · {c.currencyName}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-zinc-300'}`} />
                    </button>
                  );
                })
              ) : (
                <p className="text-[11px] text-zinc-400 text-center py-8">No matching country</p>
              )}
            </div>
          </div>

          {/* Interactive iOS Keyboard Visual */}
          <div className="bg-[#D4D6DC] px-1.5 pt-2 pb-3 space-y-1.5">
            {keyRows.map((row, rIdx) => (
              <div key={rIdx} className="flex justify-center gap-1">
                {row.map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setCountryQuery((prev) => (prev.length < 10 ? prev + k : prev))}
                    className="h-6 min-w-[21px] px-1 rounded-[4px] bg-white shadow-[0_1px_0_rgba(0,0,0,0.25)] text-[10px] font-medium text-zinc-900 flex items-center justify-center cursor-pointer active:bg-zinc-200"
                  >
                    {k}
                  </button>
                ))}
              </div>
            ))}
            <div className="flex justify-center gap-1 pt-0.5">
              <button
                type="button"
                onClick={() => setCountryQuery('')}
                className="h-6 px-3 rounded-[4px] bg-[#AEB3BD] text-[9px] font-medium text-zinc-900 cursor-pointer"
              >
                clear
              </button>
              <button
                type="button"
                onClick={() => setCountryQuery((prev) => prev + ' ')}
                className="h-6 flex-1 max-w-[110px] rounded-[4px] bg-white shadow-[0_1px_0_rgba(0,0,0,0.25)] text-[9px] text-zinc-600 cursor-pointer"
              >
                space
              </button>
              <button
                type="button"
                onClick={() => setCountryQuery((prev) => prev.slice(0, -1))}
                className="h-6 px-3 rounded-[4px] bg-[#AEB3BD] text-[9px] font-medium text-zinc-900 cursor-pointer"
              >
                del
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Phone: EVM Crypto Network Selector */}
      <div className="w-full max-w-[285px] rounded-[42px] bg-[#141416] p-[10px] shadow-[0_28px_64px_-16px_rgba(0,0,0,0.24)] lg:rotate-[9deg] lg:-translate-y-6 transition-transform duration-300 hover:lg:rotate-[6deg]">
        <div className="bg-white rounded-[33px] overflow-hidden text-[#111111]">
          <div className="px-4 pt-4 pb-2">
            <div className="flex items-center justify-between text-[10px] font-semibold text-zinc-800 mb-3">
              <span>9:41</span>
              <span className="w-16 h-4 rounded-full bg-black inline-block" />
              <span>5G</span>
            </div>

            <div className="flex items-center justify-between mb-3">
              <span className="text-[15px] font-display font-bold">Send</span>
              <span className="text-[11px] text-zinc-400">20+ EVM chains</span>
            </div>

            <div className="space-y-1.5 min-h-[196px]">
              {networks.map((net) => {
                const active = selectedNetwork === net.id;
                return (
                  <button
                    key={net.id}
                    type="button"
                    onClick={() => setSelectedNetwork(net.id)}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-left transition-colors cursor-pointer ${
                      active ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-50 text-zinc-900'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <ChainBadge chainId={net.id} className="w-6 h-6" />
                      <span className="text-[11px] font-medium">{net.name}</span>
                    </div>
                    <span className={`text-[11px] font-mono-num ${active ? 'text-white' : 'text-zinc-600'}`}>
                      {net.amount}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-[#D4D6DC] px-1.5 pt-2 pb-3 space-y-1.5">
            {keyRows.map((row, rIdx) => (
              <div key={rIdx} className="flex justify-center gap-1">
                {row.map((k) => (
                  <span
                    key={k}
                    className="h-6 min-w-[21px] px-1 rounded-[4px] bg-white shadow-[0_1px_0_rgba(0,0,0,0.25)] text-[10px] font-medium text-zinc-900 flex items-center justify-center"
                  >
                    {k}
                  </span>
                ))}
              </div>
            ))}
            <div className="flex justify-center gap-1 pt-0.5">
              <span className="h-6 px-3 rounded-[4px] bg-[#AEB3BD] text-[9px] font-medium text-zinc-900 flex items-center">
                123
              </span>
              <span className="h-6 flex-1 max-w-[110px] rounded-[4px] bg-white shadow-[0_1px_0_rgba(0,0,0,0.25)] text-[9px] text-zinc-600 flex items-center justify-center">
                space
              </span>
              <span className="h-6 px-3 rounded-[4px] bg-[#AEB3BD] text-[9px] font-medium text-zinc-900 flex items-center">
                send
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SendAmountPhone() {
  const [amountStr, setAmountStr] = useState('450');
  const [sentNotice, setSentNotice] = useState(false);

  const handleDigit = (digit: string) => {
    setSentNotice(false);
    if (digit === 'del') {
      setAmountStr((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
      return;
    }
    setAmountStr((prev) => {
      if (prev === '0') return digit;
      if (prev.length >= 5) return prev;
      return prev + digit;
    });
  };

  return (
    <div className="w-full max-w-[272px] mx-auto rounded-[42px] bg-[#0B0B0D] p-[9px] border border-white/15 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.65)]">
      <div className="bg-white rounded-[33px] overflow-hidden text-[#111111] px-4 pt-4 pb-4">
        <div className="flex items-center justify-between text-[10px] font-semibold text-zinc-800 mb-3">
          <span>9:41</span>
          <span className="w-16 h-4 rounded-full bg-black inline-block" />
          <span>5G</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-medium text-zinc-400">Cancel</span>
          <span className="text-xs font-display font-bold">Send</span>
          <span className="text-xs font-medium text-zinc-400">Max</span>
        </div>

        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-[11px] text-zinc-400">To:</span>
          <span className="inline-flex items-center gap-1.5 bg-zinc-100 rounded-full pl-1 pr-2.5 py-0.5">
            <span className="w-4 h-4 rounded-full bg-zinc-900 text-white text-[8px] font-bold flex items-center justify-center">
              EH
            </span>
            <span className="text-[11px] font-medium text-zinc-900">Esther Howard</span>
          </span>
        </div>

        <div className="text-center my-4">
          <p className="text-[36px] font-display font-bold tracking-tight font-mono-num leading-none">
            ${amountStr}
          </p>
          <p className="text-[10px] text-zinc-400 mt-1.5">Main Account · Instant Settlement</p>
        </div>

        <div className="flex items-center justify-between bg-zinc-50 border border-zinc-200/80 rounded-2xl px-3 py-2 mb-3">
          <div className="flex items-center gap-2">
            <ChainBadge chainId="usdc" className="w-5 h-5" />
            <div>
              <p className="text-[11px] font-semibold leading-tight">USDC</p>
              <p className="text-[9px] text-zinc-400">USD Coin</p>
            </div>
          </div>
          <span className="text-[11px] font-mono-num font-medium text-zinc-700">$6,282.69</span>
        </div>

        <button
          type="button"
          onClick={() => setSentNotice(true)}
          className="w-full py-2.5 rounded-full bg-[#0F766E] text-white text-[11px] font-medium hover:bg-[#0B5B55] transition-colors mb-3 cursor-pointer flex items-center justify-center gap-1.5"
        >
          {sentNotice ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#CCFBF1]" />
              <span>Queued ${amountStr} to Esther</span>
            </>
          ) : (
            <>
              <span>Send ${amountStr}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>

        {/* Working numeric keypad */}
        <div className="grid grid-cols-3 gap-1.5 text-center">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'del'].map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => handleDigit(key)}
              className="py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-300 text-xs font-mono-num font-medium text-zinc-900 transition-colors cursor-pointer"
            >
              {key === 'del' ? '⌫' : key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SecurityPhones() {
  const [authMethod, setAuthMethod] = useState<'passkey' | 'social' | 'wallet'>('passkey');

  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 py-4">
      {/* Back-right phone: Face ID & Transfer Confirmation */}
      <div className="w-full max-w-[248px] rounded-[38px] bg-[#162C27] p-[8px] border border-white/15 shadow-2xl sm:translate-x-8 sm:-translate-y-10 sm:rotate-[8deg]">
        <div className="bg-[#F4F6F5] rounded-[31px] px-4 py-5 text-[#0D1F1B]">
          <div className="flex items-center justify-between text-[9px] text-[#465853] mb-3">
            <span>9:41</span>
            <ShieldCheck className="w-3.5 h-3.5 text-[#0F766E]" />
          </div>

          <div className="text-center mb-4">
            <div className="w-10 h-10 mx-auto mb-2 rounded-2xl bg-white shadow-sm flex items-center justify-center">
              <Lock className="w-4 h-4 text-[#0D1F1B]" />
            </div>
            <p className="text-[22px] font-display font-bold font-mono-num">$450</p>
            <p className="text-[10px] text-[#465853]">Signed by Secure Enclave</p>
          </div>

          <div className="bg-white rounded-2xl p-3 space-y-2 border border-[#0D1F1B]/[0.06] text-[10px]">
            <div className="flex items-center justify-between">
              <span className="text-[#5F726C]">Amount</span>
              <span className="font-mono-num font-semibold">- $450</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#5F726C]">Recipient</span>
              <span className="font-medium text-[#0D1F1B]">Roger Donin</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#5F726C]">Status</span>
              <span className="inline-flex items-center gap-1 text-[#0F766E] font-medium">
                <ArrowDownLeft className="w-3 h-3" />
                Settled · 4.2s
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#5F726C]">Network Fee</span>
              <span className="font-mono-num text-[#465853]">$0.01 USDC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Front-left phone: Create a new account (Passkeys) */}
      <div className="w-full max-w-[258px] rounded-[38px] bg-[#162C27] p-[8px] border border-white/15 shadow-2xl sm:-translate-x-10 sm:translate-y-10 sm:-rotate-[7deg] relative z-10">
        <div className="bg-[#0B1715] rounded-[31px] px-4 py-5 text-white">
          <div className="flex items-center justify-between text-[9px] text-[#9DB2AC] mb-4">
            <span>9:41</span>
            <span className="w-14 h-3.5 rounded-full bg-black inline-block" />
            <span>5G</span>
          </div>

          <p className="text-[15px] font-display font-bold mb-1">Create a new account</p>
          <p className="text-[10px] text-[#9DB2AC] mb-4 leading-relaxed">
            Your private keys stay inside your device hardware enclave.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 mb-3">
            <p className="text-[9px] text-[#9DB2AC]">Account Email</p>
            <p className="text-[11px] text-white/90 font-mono-num">alex.rivera@meridian.app</p>
          </div>

          <div className="space-y-2 mb-4">
            <button
              type="button"
              onClick={() => setAuthMethod('passkey')}
              className={`w-full py-2 px-3 rounded-xl text-[11px] font-medium flex items-center justify-between border transition-colors cursor-pointer ${
                authMethod === 'passkey'
                  ? 'bg-[#0F766E] text-white border-[#0F766E]'
                  : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
              }`}
            >
              <span>Create with Passkey</span>
              <Lock className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setAuthMethod('social')}
              className={`w-full py-2 px-3 rounded-xl text-[11px] font-medium flex items-center justify-between border transition-colors cursor-pointer ${
                authMethod === 'social'
                  ? 'bg-[#0F766E] text-white border-[#0F766E]'
                  : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
              }`}
            >
              <span>Continue with Cloud Backup</span>
              <ShieldCheck className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setAuthMethod('wallet')}
              className={`w-full py-2 px-3 rounded-xl text-[11px] font-medium flex items-center justify-between border transition-colors cursor-pointer ${
                authMethod === 'wallet'
                  ? 'bg-[#0F766E] text-white border-[#0F766E]'
                  : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
              }`}
            >
              <span>Link Hardware Wallet</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="rounded-xl bg-white/5 p-2.5 text-center border border-white/5">
            <p className="text-[9px] text-[#9DB2AC] leading-relaxed">
              {authMethod === 'passkey' && 'Biometric enclave key generated locally. Zero seed phrase risk.'}
              {authMethod === 'social' && 'Encrypted shard recovery synced via your personal cloud account.'}
              {authMethod === 'wallet' && 'Pair external EVM signer via WalletConnect v2.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
