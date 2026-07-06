import type { Metadata } from "next";
import { PageHeader } from "@/components/general/PageHeader";
import { EmptyState } from "@/components/general/EmptyState";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `Blog — ${siteConfig.name}`,
  description: "Notes, essays, and updates.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20">
      <PageHeader
        eyebrow="Blog"
        title="Writing & notes"
        description="Occasional essays on design, engineering, and the craft of shipping software."
      />
      <div className="mt-12">
        <EmptyState
          icon="✍️"
          title="No posts yet"
          description="The first article is in the works. Check back soon."
          action={{ label: "Get in touch", href: "/contact" }}
        />
      </div>
    </div>
  );
}
