interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const items: TimelineItem[] = [
  {
    year: "2026",
    title: "Building Forge",
    description:
      "Focused on developer tooling — CLIs and automation that remove friction from shipping.",
  },
  {
    year: "2025",
    title: "Shipping Atlas",
    description:
      "Grew a set of internal-tool building blocks into a small, reusable design system.",
  },
  {
    year: "2024",
    title: "Exploring calm software",
    description:
      "Started Lumen to experiment with quieter, offline-first reading experiences.",
  },
];

export function Timeline() {
  return (
    <ol className="relative border-l border-black/[.1] dark:border-white/[.14]">
      {items.map((item) => (
        <li key={item.year} className="ml-6 pb-10 last:pb-0">
          <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-background bg-foreground" />
          <p className="text-sm font-medium text-zinc-500">{item.year}</p>
          <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
          <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
