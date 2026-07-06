// Small utility helpers shared across components.

type ClassValue = string | number | null | false | undefined;

/**
 * Merge conditional class names into a single string.
 * Lightweight stand-in for `clsx` so we avoid extra dependencies.
 */
export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}

/** Format a year, with an optional "present" for in-progress work. */
export function formatYear(year: number): string {
  return String(year);
}
