// Shared domain types used across the app.

export interface SubProject {
  slug: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  stack: string[];
  status: "shipped" | "in-progress" | "archived";
  year: number;
  link?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  cover: string; // emoji or short glyph used as a lightweight cover
  tags: string[];
  year: number;
  subProjects: SubProject[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
