import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/general/Breadcrumb";
import { getAllProjects, getSubProject } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string; subSlug: string }>;
}

const statusLabel = {
  shipped: "Shipped",
  "in-progress": "In progress",
  archived: "Archived",
} as const;

const statusTone = {
  shipped: "success",
  "in-progress": "warning",
  archived: "muted",
} as const;

export function generateStaticParams() {
  return getAllProjects().flatMap((project) =>
    project.subProjects.map((sub) => ({
      slug: project.slug,
      subSlug: sub.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, subSlug } = await params;
  const found = getSubProject(slug, subSlug);
  if (!found) return { title: "Sub-project not found" };
  return {
    title: `${found.subProject.title} — ${found.project.title}`,
    description: found.subProject.summary,
  };
}

export default async function SubProjectPage({ params }: PageProps) {
  const { slug, subSlug } = await params;
  const found = getSubProject(slug, subSlug);

  if (!found) notFound();

  const { project, subProject } = found;

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <Breadcrumb
        items={[
          { label: "Projects", href: "/projects" },
          { label: project.title, href: `/projects/${project.slug}` },
          { label: subProject.title },
        ]}
      />

      <header className="mt-8">
        <div className="flex items-center gap-3">
          <Badge tone={statusTone[subProject.status]}>
            {statusLabel[subProject.status]}
          </Badge>
          <span className="text-sm text-zinc-500">{subProject.year}</span>
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {subProject.title}
        </h1>
        <p className="mt-3 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {subProject.summary}
        </p>
      </header>

      <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-black/[.08] py-6 dark:border-white/[.1]">
        <div>
          <dt className="text-sm text-zinc-500">Role</dt>
          <dd className="mt-1 text-sm font-medium">{subProject.role}</dd>
        </div>
        <div>
          <dt className="text-sm text-zinc-500">Part of</dt>
          <dd className="mt-1 text-sm font-medium">{project.title}</dd>
        </div>
      </dl>

      <div className="mt-10">
        <h2 className="text-sm font-medium text-zinc-500">Overview</h2>
        <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          {subProject.description}
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-sm font-medium text-zinc-500">Stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {subProject.stack.map((tech) => (
            <Badge key={tech} tone="muted">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        {subProject.link ? (
          <Button href={subProject.link} target="_blank" rel="noopener noreferrer">
            Visit project
          </Button>
        ) : null}
        <Button href={`/projects/${project.slug}`} variant="secondary">
          ← Back to {project.title}
        </Button>
      </div>
    </div>
  );
}
