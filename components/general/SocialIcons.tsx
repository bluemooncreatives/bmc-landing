import { socialLinks } from "@/lib/data";

// Facebook + X render as bare glyphs; Instagram + LinkedIn sit in a filled chip.

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M13.4 21v-8h2.2l.4-2.6h-2.6V8.7c0-.75.2-1.26 1.3-1.26h1.4V5.1c-.24-.03-1.07-.1-2.04-.1-2.02 0-3.4 1.23-3.4 3.5v1.95H8.3V13h2.36v8h2.74z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden>
      <path d="M17.53 3h2.94l-6.42 7.34L21.6 21h-5.9l-4.62-6.04L5.8 21H2.86l6.87-7.85L2.4 3h6.05l4.18 5.52L17.53 3zm-1.03 16.2h1.63L7.6 4.72H5.85L16.5 19.2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden>
      <path d="M6.94 8.9H4.4V20h2.54V8.9zM5.67 7.7A1.47 1.47 0 105.65 4.76a1.47 1.47 0 00.02 2.94zM20 20h-2.53v-5.34c0-1.34-.48-2.25-1.68-2.25-.92 0-1.46.62-1.7 1.22-.09.21-.11.5-.11.8V20h-2.54s.03-9.5 0-11.1h2.54v1.57c.34-.52.94-1.26 2.28-1.26 1.66 0 2.91 1.09 2.91 3.43V20z" />
    </svg>
  );
}

const hrefByLabel: Record<string, string> = Object.fromEntries(
  socialLinks.map((s) => [s.label, s.href])
);

// The design's four icons, in order. `boxed` = filled dark chip (IG, LinkedIn).
const order: { label: string; boxed: boolean; Icon: () => React.JSX.Element; fallback: string }[] = [
  { label: "Facebook", boxed: false, Icon: FacebookIcon, fallback: "https://facebook.com" },
  { label: "Instagram", boxed: true, Icon: InstagramIcon, fallback: "https://instagram.com" },
  { label: "LinkedIn", boxed: true, Icon: LinkedInIcon, fallback: "https://linkedin.com" },
  { label: "X", boxed: false, Icon: XIcon, fallback: "https://x.com" },
];

export function SocialIcons() {
  return (
    <div className="flex items-center gap-2.5 text-[#1a1a1a]">
      {order.map(({ label, boxed, Icon, fallback }) => (
        <a
          key={label}
          href={hrefByLabel[label] ?? fallback}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={
            boxed
              ? "flex h-6 w-6 items-center justify-center rounded-[6px] bg-[#1a1a1a] text-white transition-transform hover:-translate-y-0.5"
              : "flex h-6 w-6 items-center justify-center transition-transform hover:-translate-y-0.5"
          }
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
