import React from 'react';
import { FiatCountry } from '../types/wallet';

export function MeridianLogoMark({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
      <circle cx="14" cy="14" r="10.5" stroke="currentColor" strokeWidth="2.4" />
      <ellipse cx="14" cy="14" rx="4.8" ry="10.5" stroke="currentColor" strokeWidth="2.1" />
      <path d="M4.2 14h19.6" stroke="currentColor" strokeWidth="2.1" />
      <circle cx="14" cy="14" r="2.4" fill="#0F766E" />
    </svg>
  );
}

export function CountryFlag({ country }: { country: FiatCountry }) {
  const [c1, c2, c3] = country.flagColors;

  if (country.flagPattern === 'horizontal') {
    return (
      <span className="inline-flex flex-col w-6 h-6 rounded-full overflow-hidden border border-black/10 shrink-0">
        <span className="h-1/2 w-full" style={{ backgroundColor: c1 }} />
        <span className="h-1/4 w-full" style={{ backgroundColor: c2 }} />
        <span className="h-1/4 w-full" style={{ backgroundColor: c3 }} />
      </span>
    );
  }

  if (country.flagPattern === 'cambodia') {
    return (
      <span className="inline-flex flex-col w-6 h-6 rounded-full overflow-hidden border border-black/10 shrink-0">
        <span className="h-1/4 w-full" style={{ backgroundColor: c1 }} />
        <span className="h-2/4 w-full flex items-center justify-center" style={{ backgroundColor: c2 }}>
          <span className="w-2 h-1.5 bg-white/90 rounded-[1px]" />
        </span>
        <span className="h-1/4 w-full" style={{ backgroundColor: c3 }} />
      </span>
    );
  }

  if (country.flagPattern === 'costarica') {
    return (
      <span className="inline-flex flex-col w-6 h-6 rounded-full overflow-hidden border border-black/10 shrink-0">
        <span className="h-[18%] w-full" style={{ backgroundColor: c1 }} />
        <span className="h-[16%] w-full bg-white" />
        <span className="h-[32%] w-full" style={{ backgroundColor: c2 }} />
        <span className="h-[16%] w-full bg-white" />
        <span className="h-[18%] w-full" style={{ backgroundColor: c1 }} />
      </span>
    );
  }

  return (
    <span className="inline-flex w-6 h-6 rounded-full overflow-hidden border border-black/10 shrink-0">
      <span className="w-1/3 h-full" style={{ backgroundColor: c1 }} />
      <span className="w-1/3 h-full flex items-center justify-center" style={{ backgroundColor: c2 }}>
        {country.id === 'ca' && <span className="w-1.5 h-1.5 rotate-45 bg-[#D80621]" />}
        {country.id === 'cm' && <span className="w-1.5 h-1.5 rounded-full bg-[#FCD116]" />}
      </span>
      <span className="w-1/3 h-full" style={{ backgroundColor: c3 }} />
    </span>
  );
}

export function ChainBadge({ chainId, className = 'w-6 h-6' }: { chainId: string; className?: string }) {
  switch (chainId) {
    case 'polygon':
      return (
        <span className={`inline-flex items-center justify-center rounded-full bg-[#8247E5] text-white font-bold text-[10px] shrink-0 ${className}`}>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
            <path d="M16.2 8.7L12 6.3 7.8 8.7v4.8l4.2 2.4 4.2-2.4V8.7zm-4.2 5.4l-2.6-1.5V9.6L12 8.1l2.6 1.5v3L12 14.1z" />
          </svg>
        </span>
      );
    case 'optimism':
      return (
        <span className={`inline-flex items-center justify-center rounded-full bg-[#FF0420] text-white font-bold text-[9px] tracking-tighter shrink-0 ${className}`}>
          OP
        </span>
      );
    case 'ethereum':
      return (
        <span className={`inline-flex items-center justify-center rounded-full bg-[#627EEA] text-white shrink-0 ${className}`}>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
            <path d="M12 3L6.5 12.2 12 15.4l5.5-3.2L12 3zm0 13.7l-5.5-3.2L12 21l5.5-7.5-5.5 3.2z" />
          </svg>
        </span>
      );
    case 'arbitrum':
      return (
        <span className={`inline-flex items-center justify-center rounded-full bg-[#213147] text-[#12AAFF] font-bold text-[9px] shrink-0 ${className}`}>
          A
        </span>
      );
    case 'gnosis':
      return (
        <span className={`inline-flex items-center justify-center rounded-full bg-[#04795B] text-white font-bold text-[9px] shrink-0 ${className}`}>
          G
        </span>
      );
    case 'usdc':
      return (
        <span className={`inline-flex items-center justify-center rounded-full bg-[#2775CA] text-white font-bold text-[11px] shrink-0 ${className}`}>
          $
        </span>
      );
    case 'usdt':
      return (
        <span className={`inline-flex items-center justify-center rounded-full bg-[#26A17B] text-white font-bold text-[11px] shrink-0 ${className}`}>
          ₮
        </span>
      );
    default:
      return (
        <span className={`inline-flex items-center justify-center rounded-full bg-zinc-900 text-white font-bold text-[9px] shrink-0 ${className}`}>
          {chainId.slice(0, 2).toUpperCase()}
        </span>
      );
  }
}

export function EvmStripIcon({ chainId }: { chainId: string }) {
  switch (chainId) {
    case 'avalanche':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor">
          <path d="M12 3L3 19h5.2l3.8-6.8L15.8 19H21L12 3zm4.8 11.4L14.2 19h5.6l-3-4.6z" />
        </svg>
      );
    case 'zksync':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor">
          <path d="M3 12l6-5v3.5l6-3.5-6 10V13.5L3 12zm18 0l-6 5v-3.5l-6 3.5 6-10v3.5L21 12z" />
        </svg>
      );
    case 'ethereum':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor">
          <path d="M12 2.5L6.2 12.1 12 15.6l5.8-3.5L12 2.5zm0 14.5l-5.8-3.5L12 21.5l5.8-8-5.8 3.5z" />
        </svg>
      );
    case 'polygon':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor">
          <path d="M16.5 8.5L12 6 7.5 8.5v5L12 16l4.5-2.5v-5zM12 14.2L9.2 12.6V9.4L12 7.8l2.8 1.6v3.2L12 14.2z" />
        </svg>
      );
    case 'optimism':
      return (
        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-current text-[8px] font-bold">
          <span className="text-white">OP</span>
        </span>
      );
    case 'gnosis':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="8" />
          <path d="M8.5 10.5l3.5 3.5 3.5-3.5" />
        </svg>
      );
    case 'bnb':
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor">
          <path d="M12 3l3.2 3.2-3.2 3.2-3.2-3.2L12 3zm-6.8 6.8L8.4 13l-3.2 3.2L2 13l3.2-3.2zm13.6 0L22 13l-3.2 3.2-3.2-3.2 3.2-3.2zM12 14.6l3.2 3.2L12 21l-3.2-3.2 3.2-3.2z" />
        </svg>
      );
    default:
      return null;
  }
}
