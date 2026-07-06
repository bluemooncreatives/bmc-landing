import type { Metadata } from "next";
import { PageHeader } from "@/components/general/PageHeader";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `Privacy Policy — ${siteConfig.name}`,
  description: `How ${siteConfig.name} handles your data.`,
};

const sections = [
  {
    heading: "Information we collect",
    body: "We only collect the information you choose to share with us — for example, when you send a message through the contact form. That includes your name, email address, and the contents of your message.",
  },
  {
    heading: "How we use it",
    body: "Your information is used solely to respond to your enquiry and, where relevant, to follow up about a potential project. We never sell or rent your data to third parties.",
  },
  {
    heading: "Cookies & analytics",
    body: "This site uses minimal, privacy-respecting analytics to understand which pages are useful. No personally identifying information is stored for this purpose.",
  },
  {
    heading: "Your rights",
    body: "You can request a copy of any data we hold about you, or ask us to delete it, at any time by emailing us.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-20">
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated July 2026. This is a template policy — replace it with your own before going live."
      />
      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold tracking-tight">
              {section.heading}
            </h2>
            <p className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
              {section.body}
            </p>
          </section>
        ))}
        <p className="text-sm text-zinc-500">
          Questions? Email{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium underline underline-offset-4"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
