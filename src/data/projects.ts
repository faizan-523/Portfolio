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
    id: "sports-news",
    title: "Sports News",
    description:
      "Sports news platform with an admin dashboard and content management features.",
    category: "Web Development",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/faizan-523/sports-news",
    liveUrl: "https://sports-news-beta.vercel.app/",
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
