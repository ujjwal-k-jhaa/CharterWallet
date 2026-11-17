import React, { useState } from 'react';
import { BottomCtaFooter } from './components/BottomCtaFooter';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { DarkFeatureSection } from './components/DarkFeatureSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { WaitlistModal } from './components/WaitlistModal';
import { AccountMode } from './types/wallet';

export default function App() {
  const [mode, setMode] = useState<AccountMode>('personal');
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [lastJoinedEmail, setLastJoinedEmail] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F5] text-[#0D1F1B]">
      <Navbar
        mode={mode}
        onModeChange={setMode}
        onOpenWaitlist={() => setWaitlistOpen(true)}
      />

      <main className="flex-1">
        <HeroSection
          mode={mode}
          onModeChange={setMode}
          onOpenWaitlist={() => setWaitlistOpen(true)}
        />
        <CapabilitiesSection />
        <DarkFeatureSection />
      </main>

      <BottomCtaFooter onWaitlistSuccess={(email) => setLastJoinedEmail(email)} />

      <WaitlistModal
        open={waitlistOpen}
        initialMode={mode}
        onClose={() => setWaitlistOpen(false)}
        onSuccess={(email) => setLastJoinedEmail(email)}
      />

      {lastJoinedEmail && !waitlistOpen && (
        <div
          role="status"
          aria-live="polite"
          className="sr-only"
        >
          Waitlist confirmed for {lastJoinedEmail}
        </div>
      )}
    </div>
  );
}
