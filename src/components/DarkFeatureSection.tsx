import React, { useState } from 'react';
import { Coffee, KeyRound, Shield, Smartphone } from 'lucide-react';
import { RECURRING_CALENDAR_EVENTS } from '../data/charterData';
import { SecurityPhones, SendAmountPhone } from './PhoneMockups';

export function DarkFeatureSection() {
  const [selectedDay, setSelectedDay] = useState<number>(23);
  const selectedEvent = RECURRING_CALENDAR_EVENTS.find((ev) => ev.day === selectedDay);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekHeaders = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <section id="security" className="bg-[#0B1917] text-[#F8FAF9] py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-md mx-auto mb-16">
          <h2 className="font-display font-bold text-[34px] sm:text-[44px] tracking-[-0.03em] leading-tight">
            And that is not all.
          </h2>
          <p className="text-xs sm:text-sm text-[#9DB2AC] mt-3 leading-relaxed">
            Your Meridian wallet is packed with neat features that further assist you in operating your daily finances.
          </p>
        </div>

        {/* Full-Width Dark Bento Card: Managing your money */}
        <div className="rounded-[28px] bg-[#122622] border border-white/[0.09] p-6 sm:p-10 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <h3 className="font-display font-medium text-[24px] sm:text-[30px] leading-[1.25] tracking-[-0.02em] text-[#9DB2AC] max-w-md">
              Managing your money should not be hard —{' '}
              <span className="text-white font-semibold">
                Meridian makes it easy to share, schedule and secure your funds.
              </span>
            </h3>
            <p className="text-xs text-[#9DB2AC] mt-6 max-w-sm leading-relaxed">
              Try tapping the keypad on the right to preview an instant cross-border USDC transfer to a saved contact.
            </p>
          </div>
          <div className="lg:col-span-6">
            <SendAmountPhone />
          </div>
        </div>

        {/* 2-Column Bento: Shared Vaults + Scheduled Recurring Payments */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Shared Vaults */}
          <div className="rounded-[28px] bg-[#122622] border border-white/[0.09] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold text-white">Store funds in Shared Vaults</h3>
              <p className="text-xs text-[#9DB2AC] mt-2 leading-relaxed max-w-md">
                Explore greater security when sharing money with Multi-Signature Vaults. A safe place to store funds
                long-term.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 items-center">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 -rotate-2">
                <img
                  src="/src/assets/images/instant_loved_ones_1794898235645.jpg"
                  alt="Family co-signers reviewing shared vault activity"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-white/15 scale-105 shadow-2xl relative z-10">
                <img
                  src="/src/assets/images/shared_vault_friends_1794898235667.jpg"
                  alt="Shared group treasury members outdoors"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 rotate-2">
                <img
                  src="/src/assets/images/local_shop_payment_1794898234923.jpg"
                  alt="Small business partners managing a shared vault"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#9DB2AC]">
              <span>Multi-Signature Policy</span>
              <span className="font-mono-num text-[#5EEAD4]">2 of 3 Signers Required</span>
            </div>
          </div>

          {/* Scheduled Recurring Payments */}
          <div className="rounded-[28px] bg-[#122622] border border-white/[0.09] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold text-white">Scheduled Recurring Payments</h3>
              <p className="text-xs text-[#9DB2AC] mt-2 leading-relaxed max-w-md">
                Budget your monthly expenses in advance or easily schedule recurring payments to friends and family.
              </p>
            </div>

            <div className="mt-6">
              <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-medium text-[#739088] mb-3">
                {weekHeaders.map((d, idx) => (
                  <span key={idx}>{d}</span>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2 text-center items-center">
                {/* Leading offset for clean calendar flow */}
                <span />
                <span />
                {days.map((day) => {
                  const event = RECURRING_CALENDAR_EVENTS.find((ev) => ev.day === day);
                  const isSelected = selectedDay === day;

                  if (event) {
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setSelectedDay(day)}
                        title={`${event.title} · ${event.amount}`}
                        className={`h-8 rounded-lg flex items-center justify-center text-[10px] font-bold transition-transform duration-150 cursor-pointer ${
                          isSelected ? 'ring-2 ring-[#5EEAD4] scale-105' : 'hover:scale-105'
                        } ${
                          event.type === 'spotify'
                            ? 'bg-[#1DB954] text-black'
                            : event.type === 'netflix'
                            ? 'bg-[#E50914] text-white'
                            : event.type === 'coffee'
                            ? 'bg-amber-200 text-amber-950'
                            : 'bg-[#CCFBF1] text-[#0D1F1B]'
                        }`}
                      >
                        {event.type === 'coffee' && <Coffee className="w-3.5 h-3.5" />}
                        {event.type === 'spotify' && 'S'}
                        {event.type === 'netflix' && 'N'}
                        {event.type === 'person' && event.title.slice(0, 2).toUpperCase()}
                      </button>
                    );
                  }

                  return (
                    <span
                      key={day}
                      className="h-8 flex items-center justify-center text-xs font-mono-num text-[#739088]"
                    >
                      {day}
                    </span>
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                {selectedEvent ? (
                  <>
                    <span className="text-[#9DB2AC]">
                      Day {selectedEvent.day} · <strong className="text-white">{selectedEvent.title}</strong> (
                      {selectedEvent.recipient})
                    </span>
                    <span className="font-mono-num font-semibold text-[#5EEAD4]">{selectedEvent.amount}</span>
                  </>
                ) : (
                  <span className="text-[#9DB2AC]">Select a scheduled icon to inspect payment details</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Non-Custodial Security Split Section */}
        <div className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h2 className="font-display font-bold text-[34px] sm:text-[44px] leading-[1.08] tracking-[-0.03em] text-balance">
              Your wallet means your funds.
            </h2>
            <p className="text-xs sm:text-sm text-[#9DB2AC] mt-4 leading-relaxed max-w-sm">
              Meridian is fully non-custodial, which means only you have control over your funds and private keys.
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#1A3530] border border-white/10 flex items-center justify-center mb-3">
                  <Shield className="w-4 h-4 text-[#5EEAD4]" />
                </div>
                <h3 className="text-sm font-semibold text-white">Full Non-Custodial control</h3>
                <p className="text-xs text-[#9DB2AC] mt-1.5 leading-relaxed max-w-xs">
                  Meridian will never hold any of your funds. Your money is completely stored on your device and cloud.
                </p>
              </div>

              <div>
                <div className="w-8 h-8 rounded-lg bg-[#1A3530] border border-white/10 flex items-center justify-center mb-3">
                  <KeyRound className="w-4 h-4 text-[#5EEAD4]" />
                </div>
                <h3 className="text-sm font-semibold text-white">Passkeys</h3>
                <p className="text-xs text-[#9DB2AC] mt-1.5 leading-relaxed max-w-xs">
                  Meridian stores your wallet cryptographic keys within your device&apos;s secure enclave.
                </p>
              </div>

              <div>
                <div className="w-8 h-8 rounded-lg bg-[#1A3530] border border-white/10 flex items-center justify-center mb-3">
                  <Smartphone className="w-4 h-4 text-[#5EEAD4]" />
                </div>
                <h3 className="text-sm font-semibold text-white">Wallet Recovery</h3>
                <p className="text-xs text-[#9DB2AC] mt-1.5 leading-relaxed max-w-xs">
                  We provide you with multiple recovery methods utilizing your Cloud or Social Accounts.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <SecurityPhones />
          </div>
        </div>
      </div>
    </section>
  );
}
