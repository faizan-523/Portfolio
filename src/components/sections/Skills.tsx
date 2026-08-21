import { Container } from "@/components/layout/Container";

interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Web Development",
    description: "Building responsive, modern, and high-performance web applications.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js"],
    icon: (props) => (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Data Science",
    description: "Data exploration, numerical computing, and visualization.",
    skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
    icon: (props) => (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Databases",
    description: "Designing, querying, and managing relational and NoSQL databases.",
    skills: ["MongoDB", "PostgreSQL", "SQL"],
    icon: (props) => (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
  },
  {
    title: "Machine Learning",
    description: "Developing statistical models and predictive algorithms.",
    skills: [
      "Scikit-learn",
      "Linear Regression",
      "Logistic Regression",
      "Decision Trees",
    ],
    icon: (props) => (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Tools & Workflow",
    description: "Version control, development environments, and team collaboration.",
    skills: ["Git", "GitHub", "VS Code"],
    icon: (props) => (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-t border-zinc-800/60 py-20 md:py-28">
      <Container className="space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-400">
            Technical Skills
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Skills &amp; Technologies
          </h2>
          <p className="max-w-2xl text-base text-zinc-400 sm:text-lg">
            Core technologies and tools I utilize across web development and data science projects.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm transition-colors hover:border-zinc-700"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-sky-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-6">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
