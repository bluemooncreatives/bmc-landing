import type { NavLink, Project, SocialLink, SubProject } from "@/lib/types";

// --- Site-wide config ---------------------------------------------------

export const siteConfig = {
  name: "BMC",
  title: "BMC — Building, Making, Crafting",
  description:
    "A personal workspace for the things I build, make, and craft. Projects, experiments, and the stories behind them.",
  author: "Pratik Das",
  email: "kalyan260@gmail.com",
  phone: "+99 125 458 999",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:kalyan260@gmail.com" },
];

// --- Project data (mock source of truth) --------------------------------
// In a real app this would come from a DB/CMS/API. The getters below give
// pages a single, typed access point — the same pattern the reference used.

const projects: Project[] = [
  {
    slug: "atlas",
    title: "Atlas",
    tagline: "A modular platform for spinning up internal tools fast.",
    description:
      "Atlas is a collection of building blocks — auth, data tables, dashboards — that snap together into internal tools. It started as a way to stop rewriting the same CRUD screens on every project and grew into a small design system with a shared component library.",
    cover: "🧭",
    tags: ["Platform", "Design System", "TypeScript"],
    year: 2025,
    subProjects: [
      {
        slug: "atlas-tables",
        title: "Atlas Tables",
        summary: "Headless, virtualized data grid with server-side paging.",
        description:
          "A headless table primitive that handles sorting, filtering, column pinning and virtualization while leaving markup fully to the consumer. Powers every list view across Atlas.",
        role: "Design + Engineering",
        stack: ["React", "TypeScript", "TanStack Virtual"],
        status: "shipped",
        year: 2025,
        link: "https://github.com",
      },
      {
        slug: "atlas-auth",
        title: "Atlas Auth",
        summary: "Drop-in auth with org, role and invite flows.",
        description:
          "Multi-tenant authentication with organizations, role-based access and email invites. Ships as a set of route handlers plus prebuilt screens that theme to the host app.",
        role: "Engineering",
        stack: ["Next.js", "Prisma", "PostgreSQL"],
        status: "in-progress",
        year: 2026,
      },
    ],
  },
  {
    slug: "lumen",
    title: "Lumen",
    tagline: "Reading tools that get out of the way.",
    description:
      "Lumen is an ongoing experiment in calmer reading software — annotation, highlights and a distraction-free reader that syncs across devices without an account you have to babysit.",
    cover: "💡",
    tags: ["Product", "Reading", "Offline-first"],
    year: 2024,
    subProjects: [
      {
        slug: "lumen-reader",
        title: "Lumen Reader",
        summary: "Offline-first reader with typographic controls.",
        description:
          "A focused reading surface with fine-grained typography, theme-aware rendering and full offline support via a local-first sync engine.",
        role: "Design + Engineering",
        stack: ["React", "IndexedDB", "Service Workers"],
        status: "shipped",
        year: 2024,
        link: "https://github.com",
      },
      {
        slug: "lumen-highlights",
        title: "Lumen Highlights",
        summary: "Portable highlights you actually own.",
        description:
          "Highlights and notes stored as plain, exportable data so your marginalia is never locked inside one app. Syncs peer-to-peer, no server required.",
        role: "Engineering",
        stack: ["TypeScript", "CRDTs", "WebRTC"],
        status: "archived",
        year: 2023,
      },
    ],
  },
  {
    slug: "forge",
    title: "Forge",
    tagline: "CLI-first automation for repetitive dev chores.",
    description:
      "Forge is a small toolkit of composable commands that automate the boring parts of shipping software — scaffolding, release notes, and environment checks — with sensible defaults you can override.",
    cover: "🔨",
    tags: ["CLI", "DX", "Automation"],
    year: 2026,
    subProjects: [
      {
        slug: "forge-scaffold",
        title: "Forge Scaffold",
        summary: "Template-driven project and file generators.",
        description:
          "Generate features from templates with typed prompts and post-generation hooks. Keeps file structure consistent across a team without a heavyweight generator framework.",
        role: "Engineering",
        stack: ["Node.js", "TypeScript"],
        status: "in-progress",
        year: 2026,
      },
    ],
  },
];

// --- Getters ------------------------------------------------------------

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getSubProject(
  projectSlug: string,
  subSlug: string
): { project: Project; subProject: SubProject } | undefined {
  const project = getProjectBySlug(projectSlug);
  if (!project) return undefined;
  const subProject = project.subProjects.find((s) => s.slug === subSlug);
  if (!subProject) return undefined;
  return { project, subProject };
}
