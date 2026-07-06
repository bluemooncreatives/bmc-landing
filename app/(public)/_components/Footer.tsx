import Link from "next/link";
import { navLinks, siteConfig, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-black/[.06] dark:border-white/[.08]">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-tight">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-zinc-500">
            © {new Date().getFullYear()} {siteConfig.author}. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <ul className="flex gap-4 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-zinc-600 hover:text-foreground dark:text-zinc-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-4 text-sm">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-foreground dark:text-zinc-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
