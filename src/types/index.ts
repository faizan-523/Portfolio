export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url?: string;
}

export type ProjectCategory =
  | "All"
  | "Web Development"
  | "Data Science"
  | "Machine Learning";

export interface Project {
  id: string;
  title: string;
  goal: string;
  keyFeatures: string[];
  description: string;
  category: "Web Development" | "Data Science" | "Machine Learning";
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

