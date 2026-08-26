import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "workforge",
    title: "WorkForge",
    goal: "Connect clients and freelancers through a full-featured online talent marketplace.",
    keyFeatures: [
      "Job postings and proposal submission workflow",
      "Client-freelancer contract management & collaboration",
      "Secure authentication powered by NextAuth",
    ],
    description:
      "Full-stack freelance marketplace platform featuring job postings, proposals, contracts, client-freelancer collaboration, and secure authentication.",
    category: "Web Development",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth"],
    githubUrl: "https://github.com/faizan-523/WorkForge",
    liveUrl: "https://work-forge-seven.vercel.app/",
    featured: true,
  },
  {
    id: "furniturelux",
    title: "FurnitureLux",
    goal: "Provide a modern e-commerce shopping experience for furniture collections.",
    keyFeatures: [
      "Product catalog and category management",
      "Interactive cart functionality and responsive checkout layout",
      "User authentication and database integration with MongoDB",
    ],
    description:
      "Full-stack furniture e-commerce platform with authentication, product management, cart functionality, and a modern responsive UI.",
    category: "Web Development",
    tags: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Mongoose", "NextAuth"],
    githubUrl: "https://github.com/faizan-523/Furniture-lux",
    liveUrl: "https://furniture-lux.vercel.app/",
  },
  {
    id: "chronicle-blog",
    title: "Chronicle Blog",
    goal: "Deliver a streamlined publishing and reading experience for multi-topic blogs.",
    keyFeatures: [
      "Admin dashboard for full post creation and management",
      "User authentication and profile management",
      "Interactive post commenting and discussion features",
    ],
    description:
      "Full-stack blog platform with an admin dashboard, authentication, post management, and comments.",
    category: "Web Development",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/faizan-523/Chronicle-Blog",
  },
];

