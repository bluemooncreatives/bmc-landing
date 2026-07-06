"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllProjects, siteConfig } from "@/lib/data";
import { SocialIcons } from "@/components/general/SocialIcons";
import { cn } from "@/lib/utils";

interface MenuLink {
  label: string;
  href: string;
  count?: boolean;
}

const menuLinks: MenuLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects", count: true },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Error 404", href: "/error-404" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState<string | null>(null);
  const pathname = usePathname();

  const projectCount = String(getAllProjects().length).padStart(2, "0");

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Live New York clock.
  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "America/New_York",
    });
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Lock body scroll + close on Escape while open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Dimming backdrop */}
      {open ? (
        <button
          aria-hidden
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 cursor-default bg-black/40 backdrop-blur-[2px]"
        />
      ) : null}

      <header className="fixed inset-x-0 top-[50px] z-50 mx-auto w-full max-w-150 px-6">
        {/* Bar: brand pill + toggle.
            Brand-pill box metrics taken from the design's computed styles:
            bg rgb(26,26,28), 18px padding, 54px tall, 12px font, flex-column,
            grow/shrink-0/basis-0, 10px gap, overflow clip. */}
        <div className="relative flex items-stretch">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="relative flex min-w-0 grow basis-0 flex-col items-start justify-center gap-2.5 rounded-l-sm bg-[#1a1a1c] p-4.5 text-xl font-medium text-white"
          >
            <span className="block max-w-full truncate">
              BLUE MOON CREATIVES
            </span>
          </Link>

          {/* Seam decoration from the reference's Framer structure: a 6px bar is
              glued flush to each section (pill and toggle), same color so it merges
              into it. Each bar breaks for 5px at the vertical middle with capsule
              end-caps, so the two breaks plus the 6px center gap read as a rounded
              notch punched through the sections' facing edges. The mating edges
              (pill right, toggle left, bar inner corners) are squared so the bars
              blend seamlessly; only the gap-facing corners keep the radius. */}
          <span aria-hidden className="mr-1.5 flex w-1.5 shrink-0 flex-col gap-1.25">
            <span className="flex-1 rounded-tr-sm bg-[#1a1a1c]" />
            <span className="flex-1 rounded-br-sm bg-[#1a1a1c]" />
          </span>
          <span aria-hidden className="flex w-1.5 shrink-0 flex-col gap-1.25">
            <span className="flex-1 rounded-tl-sm bg-[#1a1a1c]" />
            <span className="flex-1 rounded-bl-sm bg-[#1a1a1c]" />
          </span>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex w-16 items-center justify-center rounded-r-sm bg-[#1a1a1c] text-white/85 transition-colors hover:text-white sm:w-24"
          >
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M12 5v14M5 12h14" />
              )}
            </svg>
          </button>
        </div>

        {/* Mega-menu panel */}
        {open ? (
          <div className="mt-3 overflow-hidden rounded-sm bg-white shadow-[0_40px_100px_-30px_rgba(0,0,0,0.65)]">
            <div className="grid grid-cols-1 sm:grid-cols-[1.15fr_1fr]">
              {/* Left: navigation */}
              <nav className="flex flex-col gap-3 p-7">
                {menuLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "w-fit text-xl transition-colors",
                      isActive(link.href)
                        ? "text-black/45"
                        : "text-[#1a1a1a] hover:text-black/55"
                    )}
                  >
                    {link.label}
                    {link.count ? (
                      <sup className="ml-1 text-xs text-black/45">
                        ({projectCount})
                      </sup>
                    ) : null}
                  </Link>
                ))}
              </nav>

              {/* Right: clock + contact */}
              <div className="flex flex-col justify-between gap-10 border-t border-black/10 p-7 text-right sm:border-l sm:border-t-0">
                <div className="text-[15px] font-medium text-[#1a1a1a]">
                  <span suppressHydrationWarning>{time ?? "--:--:--"}</span> NY
                </div>
                <div className="flex flex-col items-end gap-3">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-[15px] font-medium text-[#1a1a1a] underline-offset-4 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="text-[15px] font-medium text-[#1a1a1a] underline-offset-4 hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                  <div className="mt-1">
                    <SocialIcons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}
