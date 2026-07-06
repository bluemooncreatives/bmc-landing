import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="h-full transition-colors group-hover:border-black/[.2] dark:group-hover:border-white/[.24]">
        <div className="flex items-start justify-between gap-4">
          <div className="text-3xl" aria-hidden>
            {project.cover}
          </div>
          <span className="text-sm text-zinc-500">{project.year}</span>
        </div>
        <CardTitle className="mt-4">{project.title}</CardTitle>
        <CardDescription className="mt-2">{project.tagline}</CardDescription>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} tone="muted">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="mt-5 text-sm font-medium text-zinc-500">
          {project.subProjects.length} sub-project
          {project.subProjects.length === 1 ? "" : "s"}
          <span className="ml-1 transition-transform group-hover:translate-x-0.5 inline-block">
            →
          </span>
        </p>
      </Card>
    </Link>
  );
}
