import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "sales-analysis-system",
    title: "Sales Analysis System",
    goal: "Deliver real-time sales performance, revenue analytics, and product insights through interactive data visualization.",
    keyFeatures: [
      "Interactive sales performance & revenue trend analytics",
      "Product metrics and category-level insights",
      "Modern full-stack dashboard powered by Next.js & Recharts",
    ],
    description:
      "An interactive full-stack sales analytics dashboard that visualizes sales performance, revenue trends, product insights, and key business metrics using a modern and responsive interface.",
    category: "Web Development",
    tags: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Tailwind CSS", "Recharts"],
    githubUrl: "https://github.com/faizan-523/Sales-Analysis-System",
    liveUrl: "https://apexpulse-sales-analytics.vercel.app/",
    imageUrl: "/images/projects/sales-analysis.jpg",
    featured: true,
  },
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
    imageUrl: "/images/projects/workforge.jpg",
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
    imageUrl: "/images/projects/furniturelux.jpg",
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
    imageUrl: "/images/projects/chronicle-blog.jpg",
  },
];

