import type { Metadata } from "next";
import { PageHeader } from "@/components/general/PageHeader";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import { Timeline } from "./_components/Timeline";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description: `About ${siteConfig.author} — the person behind ${siteConfig.name}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20">
      <PageHeader
        eyebrow="About"
        title={`Hi, I'm ${siteConfig.author}.`}
        description="I design and build software — mostly tools, products, and the occasional experiment. This is where I keep track of what I'm working on and why."
      />

      <div className="mt-16 grid gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          <p>
            I care about the small details that make software feel calm and
            considered — fast pages, honest empty states, and interfaces that get
            out of the way. Most of my work sits at the intersection of design and
            engineering.
          </p>
          <p>
            Outside of shipping features, I spend time refining the systems
            underneath: component libraries, file structure, and the conventions
            that keep a codebase understandable as it grows.
          </p>
          <p>
            If any of that resonates, I&apos;d love to hear from you.
          </p>
          <Button href="/contact" variant="secondary" size="sm">
            Get in touch
          </Button>
        </div>

        <div>
          <h2 className="mb-6 text-sm font-medium text-zinc-500">Timeline</h2>
          <Timeline />
        </div>
      </div>
    </div>
  );
}
