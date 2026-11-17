import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AccountMode } from '../types/wallet';
import { MeridianLogoMark } from './BrandIcons';

interface NavbarProps {
  mode: AccountMode;
  onModeChange: (mode: AccountMode) => void;
  onOpenWaitlist: () => void;
}

export function Navbar({ mode, onModeChange, onOpenWaitlist }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleModeNav = (selected: AccountMode) => {
    onModeChange(selected);
    setMobileOpen(false);
    const el = document.getElementById('overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F4F6F5]/90 backdrop-blur-md border-b border-[#0D1F1B]/[0.07]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-8">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[#0D1F1B] font-display font-bold text-lg tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E] rounded-md"
        >
          <MeridianLogoMark className="w-5 h-5 text-[#0D1F1B]" />
          <span>Meridian</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-[#465853]">
          <button
            type="button"
            onClick={() => handleModeNav('personal')}
            className={`whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer hover:text-[#0D1F1B] ${
              mode === 'personal' ? 'text-[#0F766E] font-semibold' : ''
            }`}
          >
            Personal
          </button>
          <button
            type="button"
            onClick={() => handleModeNav('business')}
            className={`whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer hover:text-[#0D1F1B] ${
              mode === 'business' ? 'text-[#0F766E] font-semibold' : ''
            }`}
          >
            Business
          </button>
          <a
            href="#capabilities"
            className="whitespace-nowrap shrink-0 hover:text-[#0D1F1B] transition-colors duration-150"
          >
            Capabilities
          </a>
          <a
            href="#scenarios"
            className="whitespace-nowrap shrink-0 hover:text-[#0D1F1B] transition-colors duration-150"
          >
            Scenarios
          </a>
          <a
            href="#security"
            className="whitespace-nowrap shrink-0 hover:text-[#0D1F1B] transition-colors duration-150"
          >
            Security
          </a>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenWaitlist}
            className="px-4 py-2 text-xs font-medium text-white bg-[#0F766E] hover:bg-[#0B5B55] rounded-full transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F766E]"
          >
            Join waitlist
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-[#0D1F1B] hover:bg-[#E2E8E5] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#0D1F1B]/[0.07] bg-white px-5 py-4 space-y-2">
          <button
            type="button"
            onClick={() => handleModeNav('personal')}
            className={`block w-full text-left py-2.5 text-sm font-medium ${
              mode === 'personal' ? 'text-[#0F766E] font-semibold' : 'text-[#465853]'
            }`}
          >
            Personal
          </button>
          <button
            type="button"
            onClick={() => handleModeNav('business')}
            className={`block w-full text-left py-2.5 text-sm font-medium ${
              mode === 'business' ? 'text-[#0F766E] font-semibold' : 'text-[#465853]'
            }`}
          >
            Business
          </button>
          <a
            href="#capabilities"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-sm font-medium text-[#465853]"
          >
            Capabilities
          </a>
          <a
            href="#scenarios"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-sm font-medium text-[#465853]"
          >
            Scenarios
          </a>
          <a
            href="#security"
            onClick={() => setMobileOpen(false)}
            className="block py-2.5 text-sm font-medium text-[#465853]"
          >
            Security
          </a>
        </div>
      )}
    </header>
  );
}
