import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "furniturelux",
    title: "FurnitureLux",
    description:
      "Full-stack furniture e-commerce platform with authentication, product management, cart functionality, and a modern responsive UI.",
    category: "Web Development",
    tags: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Mongoose", "NextAuth"],
    githubUrl: "https://github.com/faizan-523/Furniture-lux",
    liveUrl: "https://furniture-lux.vercel.app/",
  },
  {
    id: "workforge",
    title: "WorkForge",
    description:
      "Full-stack freelance marketplace platform featuring job postings, proposals, contracts, client-freelancer collaboration, and secure authentication.",
    category: "Web Development",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth"],
    githubUrl: "https://github.com/faizan-523/WorkForge",
    liveUrl: "https://work-forge-seven.vercel.app/",
  },
  {
    id: "chronicle-blog",
    title: "Chronicle Blog",
    description:
      "Full-stack blog platform with an admin dashboard, authentication, post management, and comments.",
    category: "Web Development",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/faizan-523/Chronicle-Blog",
  },
];
