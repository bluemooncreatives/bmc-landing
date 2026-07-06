import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type Tone = "default" | "success" | "warning" | "muted";

const tones: Record<Tone, string> = {
  default:
    "border-black/[.1] bg-black/[.03] text-zinc-700 dark:border-white/[.14] dark:bg-white/[.04] dark:text-zinc-300",
  success:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  warning:
    "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400",
  muted:
    "border-black/[.06] bg-transparent text-zinc-500 dark:border-white/[.1] dark:text-zinc-500",
};

export function Badge({
  tone = "default",
  className,
  ...props
}: ComponentProps<"span"> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
