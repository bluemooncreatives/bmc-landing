import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
  action?: { label: string; href: string };
}

export function EmptyState({ icon = "🗂️", title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-black/[.12] px-6 py-16 text-center dark:border-white/[.14]">
      <div className="mb-4 text-4xl" aria-hidden>
        {icon}
      </div>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      {action ? (
        <Button href={action.href} variant="secondary" size="sm" className="mt-6">
          {action.label}
        </Button>
      ) : null}
    </div>
  );
}
