import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/general/Breadcrumb";
import { EmptyState } from "@/components/general/EmptyState";
import { getAllProjects, getProjectBySlug } from "@/lib/data";
import { SubProjectCard } from "./_components/SubProjectCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Projects`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <Breadcrumb
        items={[
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      />

      <header className="mt-8 flex flex-col gap-6">
        <div className="text-5xl" aria-hidden>
          {project.cover}
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {project.tagline}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </header>

      <p className="mt-8 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">Sub-projects</h2>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          The individual efforts that make up {project.title}.
        </p>

        {project.subProjects.length === 0 ? (
          <div className="mt-8">
            <EmptyState
              title="No sub-projects yet"
              description="This project doesn't have any sub-projects published."
              action={{ label: "Back to projects", href: "/projects" }}
            />
          </div>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {project.subProjects.map((subProject) => (
              <SubProjectCard
                key={subProject.slug}
                projectSlug={project.slug}
                subProject={subProject}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
