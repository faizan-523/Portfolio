import { Container } from "@/components/layout/Container";

const CORE_COMPETENCIES = [
  "Full-Stack Web Development",
  "Deep Learning & Neural Networks",
  "Machine Learning Pipelines",
  "Data Visualization & Analytics",
  "Cloud Deployment & Docker",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-zinc-800/60 py-20 md:py-28">
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
              Hi, I&apos;m Muhammad Faizan &mdash; a passionate Computer Science student who loves
              building, learning, and exploring technology. I&apos;m always looking for new
              challenges and opportunities to turn ideas into meaningful digital experiences.
            </p>
            <p>
              My focus spans modern web development, full-stack applications, data analysis,
              and machine learning &mdash; building clean, responsive interfaces backed by
              efficient logic and data-driven insights.
            </p>
          </div>

          {/* Sidebar: Education & Core Competencies */}
          <div className="space-y-6 lg:col-span-5">
            {/* Education Card */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all hover:border-zinc-700">
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-sky-400" />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                    Education
                  </h3>
                </div>
                <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-0.5 text-xs font-medium text-sky-400">
                  2024 &ndash; Present
                </span>
              </div>

              <div className="mt-4 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-sky-400">
                  <svg
                    className="h-6 w-6"
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
                <div className="space-y-1 min-w-0 flex-1">
                  <h4 className="text-base font-semibold text-zinc-100 tracking-tight">
                    BS in Computer Science
                  </h4>
                  <p className="text-sm text-zinc-400 font-medium">
                    Institute of Space Technology
                  </p>
                </div>
              </div>
            </div>

            {/* Core Competencies Area */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm transition-colors hover:border-zinc-700">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-sky-400" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">
                    Core Competencies
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {CORE_COMPETENCIES.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs font-medium text-zinc-300"
                    >
                      {skill}
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
