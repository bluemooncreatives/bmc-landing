import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import type { SubProject } from "@/lib/types";

const statusTone = {
  shipped: "success",
  "in-progress": "warning",
  archived: "muted",
} as const;

const statusLabel = {
  shipped: "Shipped",
  "in-progress": "In progress",
  archived: "Archived",
} as const;

export function SubProjectCard({
  projectSlug,
  subProject,
}: {
  projectSlug: string;
  subProject: SubProject;
}) {
  return (
    <Link
      href={`/projects/${projectSlug}/${subProject.slug}`}
      className="group block"
    >
      <Card className="h-full transition-colors group-hover:border-black/[.2] dark:group-hover:border-white/[.24]">
        <div className="flex items-center justify-between gap-4">
          <Badge tone={statusTone[subProject.status]}>
            {statusLabel[subProject.status]}
          </Badge>
          <span className="text-sm text-zinc-500">{subProject.year}</span>
        </div>
        <CardTitle className="mt-4">{subProject.title}</CardTitle>
        <CardDescription className="mt-2">{subProject.summary}</CardDescription>
        <div className="mt-4 flex flex-wrap gap-2">
          {subProject.stack.map((tech) => (
            <Badge key={tech} tone="muted">
              {tech}
            </Badge>
          ))}
        </div>
      </Card>
    </Link>
  );
}
