import { Container } from "@/components/layout/Container";

const LEARNING_TOPICS = [
  "Deep Learning & Neural Networks",
  "Full-Stack Next.js & React",
  "Machine Learning Pipelines",
  "Data Visualization",
  "Cloud Deployment & Docker",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-zinc-800/60 py-20 md:py-28">
      <Container className="space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-400">
            About Me
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Background &amp; Focus
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Main Introduction */}
          <div className="space-y-6 text-base leading-relaxed text-zinc-400 sm:text-lg lg:col-span-7">
            <p>
              I am a Computer Science student with a strong passion for software
              engineering, modern web development, and data science. I enjoy
              building reliable web applications and exploring how data can be
              leveraged to solve complex problems.
            </p>
            <p>
              My primary focus revolves around building clean, responsive user
              interfaces, writing efficient backend logic, and delving into data
              analysis and machine learning techniques to derive meaningful
              insights.
            </p>
          </div>

          {/* Sidebar: Education & Currently Learning */}
          <div className="space-y-6 lg:col-span-5">
            {/* Education Card */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm transition-colors hover:border-zinc-700">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-sky-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5"
                    />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-zinc-100">
                    BS in Computer Science
                  </h3>
                  <p className="text-sm text-zinc-400">Undergraduate Degree</p>
                  <p className="pt-2 text-xs text-zinc-500">
                    Focus on software engineering, algorithms, database systems,
                    and data analysis.
                  </p>
                </div>
              </div>
            </div>

            {/* Currently Learning Area */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm transition-colors hover:border-zinc-700">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-sky-400" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">
                    Currently Exploring
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {LEARNING_TOPICS.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs font-medium text-zinc-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
