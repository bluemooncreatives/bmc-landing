import type { Metadata } from "next";
import { PageHeader } from "@/components/general/PageHeader";
import { EmptyState } from "@/components/general/EmptyState";
import { getAllProjects, siteConfig } from "@/lib/data";
import { ProjectCard } from "./_components/ProjectCard";

export const metadata: Metadata = {
  title: `Projects — ${siteConfig.name}`,
  description: "A catalogue of projects and the sub-projects within them.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20">
      <PageHeader
        eyebrow="Projects"
        title="Everything I'm building"
        description="Each project is an umbrella for smaller efforts — pick one to see its sub-projects."
      />

      {projects.length === 0 ? (
        <div className="mt-12">
          <EmptyState
            title="No projects yet"
            description="Projects will show up here once they're published."
          />
        </div>
      ) : (
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
