import type { Metadata } from "next";
import { PageHeader } from "@/components/general/PageHeader";
import { siteConfig, socialLinks } from "@/lib/data";
import { ContactForm } from "./_components/ContactForm";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.author}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20">
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        description="Have a project in mind, a question, or just want to say hello? Drop a message below."
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <ContactForm />

        <aside className="space-y-6">
          <div>
            <h2 className="text-sm font-medium text-zinc-500">Email</h2>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-1 block text-sm font-medium hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
          <div>
            <h2 className="text-sm font-medium text-zinc-500">Elsewhere</h2>
            <ul className="mt-2 space-y-1.5">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
