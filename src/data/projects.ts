import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "ecommerce-web-platform",
    title: "E-Commerce Web Application",
    description:
      "A modern, responsive full-stack e-commerce web platform featuring product filtering, cart management, and secure checkout simulation.",
    category: "Web Development",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "customer-churn-analysis",
    title: "Customer Churn Data Analysis",
    description:
      "Exploratory data analysis and visualization pipeline uncovering behavioral trends, customer retention factors, and key risk indicators.",
    category: "Data Science",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "housing-price-predictor",
    title: "Housing Price Prediction Model",
    description:
      "Supervised machine learning model comparing regression techniques and decision trees to estimate property market valuations.",
    category: "Machine Learning",
    tags: ["Python", "Scikit-learn", "Decision Trees", "Linear Regression"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];
