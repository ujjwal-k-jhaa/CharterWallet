export type AccountMode = 'personal' | 'business';

export interface WalletTransaction {
  id: string;
  name: string;
  subtitle: string;
  amount: string;
  positive: boolean;
  network?: string;
  initials: string;
  avatarBg: string;
}

export interface EvmChain {
  id: string;
  name: string;
  symbol: string;
  balanceUsd: string;
  settlementTime: string;
  avgFee: string;
  accent: string;
}

export interface FiatCountry {
  id: string;
  country: string;
  currencyCode: string;
  currencyName: string;
  rate: string;
  flagColors: [string, string, string];
  flagPattern: 'horizontal' | 'vertical' | 'cross' | 'cambodia' | 'costarica';
}

export interface ScenarioVault {
  id: string;
  kicker: string;
  balanceUsd: string;
  ethAmount: string;
  accountName: string;
  description: string;
  image: string;
  imagePosition?: string;
  limitNote: string;
}

export interface CalendarPayment {
  day: number;
  title: string;
  amount: string;
  type: 'person' | 'coffee' | 'spotify' | 'netflix';
  recipient: string;
}
