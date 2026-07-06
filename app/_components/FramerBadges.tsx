// Floating template badges shown in the bottom-right of the reference design.

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5a2 2 0 012-2h10" />
    </svg>
  );
}

function FramerLogo() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden>
      <path d="M3 0h10v5.33H8L3 0zm0 5.33h5l5 5.34H8V16l-5-5.33V5.33z" />
    </svg>
  );
}

export function FramerBadges() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <a
        href="https://www.framer.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
      >
        Get it for FREE
        <CopyIcon />
      </a>
      <a
        href="https://www.framer.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
      >
        <FramerLogo />
        Made in Framer
      </a>
    </div>
  );
}
