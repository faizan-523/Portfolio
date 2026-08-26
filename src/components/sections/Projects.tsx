"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Project, ProjectCategory } from "@/types";
import { PROJECTS } from "@/data/projects";

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Web Development",
  "Data Science",
  "Machine Learning",
];

function ProjectPlaceholderImage({ category, title }: { category: Project["category"]; title: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 flex flex-col items-center justify-center p-4 text-center">
      {/* Ambient background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px opacity-20 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 blur-xl"
      />
      
      {/* Category badge */}
      <span className="font-mono text-xs uppercase tracking-widest text-sky-400">
        {category}
      </span>
      <p className="mt-1 line-clamp-1 text-sm font-semibold text-zinc-300">
        {title}
      </p>

      {/* Stylized vector icon placeholder */}
      <div className="mt-3 flex h-8 w-8 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900/80 text-zinc-400">
        {category === "Web Development" && (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        )}
        {category === "Data Science" && (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )}
        {category === "Machine Learning" && (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="scroll-mt-20 border-t border-zinc-800/60 py-20 md:py-28">
      <Container className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-400">
              Featured Work
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Projects &amp; Case Studies
            </h2>
            <p className="max-w-2xl text-base text-zinc-400 sm:text-lg">
              Explore selected projects spanning full-stack web applications, data science analyses, and machine learning models.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                    isActive
                      ? "bg-zinc-100 text-zinc-900"
                      : "border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`flex flex-col justify-between rounded-xl border bg-zinc-900/40 p-6 backdrop-blur-sm transition-all hover:border-zinc-700 ${
                project.featured
                  ? "border-sky-500/40 shadow-sm shadow-sky-500/5 relative"
                  : "border-zinc-800"
              }`}
            >
              <div className="space-y-5">
                {/* Project Header / Top Row */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-sky-400">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-sky-400/30 bg-sky-400/10 px-2.5 py-0.5 text-[11px] font-semibold text-sky-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Title & Goal */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-tight text-zinc-100">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-300 font-medium leading-relaxed">
                    {project.goal}
                  </p>
                </div>

                {/* Key Features */}
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div className="space-y-2 pt-1 border-t border-zinc-800/80">
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Key Highlights
                    </p>
                    <ul className="space-y-1.5 text-xs text-zinc-400">
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/80" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="space-y-2 pt-1 border-t border-zinc-800/80">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-zinc-800 bg-zinc-900/90 px-2 py-0.5 text-xs font-medium text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-6 border-t border-zinc-800/80 mt-6">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/80 px-3 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Code</span>
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} Live Preview`}
                    className="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-lg border border-sky-500/30 bg-sky-500/10 px-3 text-xs font-medium text-sky-300 transition-colors hover:border-sky-400 hover:bg-sky-500/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

