import { Container } from "@/components/layout/Container";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "softezm-internship",
    role: "Web Development Intern",
    company: "Softezm",
    period: "May 2026 – August 2026",
    responsibilities: [
      "Developed and maintained modern, responsive web application interfaces using React, JavaScript, HTML5, and CSS3.",
      "Built clean, modular, and reusable frontend components ensuring cross-browser compatibility and responsive layouts.",
      "Collaborated on feature development, testing, and maintained code workflows using Git and GitHub.",
    ],
    technologies: ["JavaScript", "React", "HTML5", "CSS3", "Git", "Web Development"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-zinc-800/60 py-20 md:py-28">
      <Container className="space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-400">
            Career Journey
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Experience
          </h2>
          <p className="max-w-2xl text-base text-zinc-400 sm:text-lg">
            Practical experience in software engineering and web development.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-zinc-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div
                aria-hidden="true"
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-sky-400 bg-zinc-950 transition-transform group-hover:scale-125"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              </div>

              {/* Experience Card */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm transition-colors hover:border-zinc-700">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-sky-400">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-flex w-fit rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-xs font-medium text-zinc-400">
                    {exp.period}
                  </span>
                </div>

                {/* Professional Bullet Points */}
                <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/80" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2 py-0.5 text-xs font-medium text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

