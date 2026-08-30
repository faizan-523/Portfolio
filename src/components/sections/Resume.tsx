import { Container } from "@/components/layout/Container";

export function Resume() {
  return (
    <section id="resume" className="scroll-mt-20 border-t border-zinc-800/60 py-20 md:py-28">
      <Container className="space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-400">
            Curriculum Vitae
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Resume
          </h2>
          <p className="max-w-2xl text-base text-zinc-400 sm:text-lg">
            Detailed overview of technical skills, full-stack experience, education, and project accomplishments.
          </p>
        </div>

        {/* Resume Card Container */}
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 backdrop-blur-sm transition-all hover:border-zinc-700 md:p-10">
          {/* Subtle Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl"
          />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            {/* Left Info Column */}
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 font-mono text-xs font-medium text-sky-300">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                Updated &amp; Ready for Review
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
                Muhammad Faizan &mdash; Full-Stack Web Developer
              </h3>

              <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                Includes comprehensive details on production web development, frontend architecture, backend RESTful APIs, database engineering (PostgreSQL, MongoDB), and academic coursework.
              </p>

              {/* Highlights Summary Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-3">
                <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/60 p-3">
                  <span className="text-xs font-medium text-zinc-500">Focus</span>
                  <p className="text-sm font-semibold text-zinc-200">Full-Stack Dev</p>
                </div>
                <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/60 p-3">
                  <span className="text-xs font-medium text-zinc-500">Education</span>
                  <p className="text-sm font-semibold text-zinc-200">BS CS (IST)</p>
                </div>
                <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/60 p-3 col-span-2 sm:col-span-1">
                  <span className="text-xs font-medium text-zinc-500">Format</span>
                  <p className="text-sm font-semibold text-zinc-200">PDF Document</p>
                </div>
              </div>
            </div>

            {/* Right Actions Column */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col shrink-0">
              {/* View Resume Button */}
              <a
                href="/resume/Faizan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-zinc-100 px-6 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>View Resume</span>
              </a>

              {/* Download Resume Button */}
              <a
                href="/resume/Faizan_Resume.pdf"
                download="Faizan_Resume.pdf"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
