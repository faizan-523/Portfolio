import { Container } from "@/components/layout/Container";

interface ServiceItem {
  title: string;
  description: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

const SERVICES: ServiceItem[] = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications with clean architecture, responsive layouts, and seamless integration between frontend and backend.",
    icon: (props) => (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    title: "React / Next.js Development",
    description:
      "High-performance user interfaces utilizing modern React, Next.js App Router, Tailwind CSS, and efficient state handling.",
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
    title: "REST API Development",
    description:
      "Reliable and secure API architectures with endpoint routing, authentication handling, and structured data validation.",
    icon: (props) => (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Database Integration",
    description:
      "Data modeling, schema design, and seamless querying across relational (PostgreSQL) and NoSQL (MongoDB) databases with ORMs.",
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
    title: "Data Analysis",
    description:
      "Exploratory data analysis, data manipulation, pattern discovery, and insightful visualizations using Python libraries.",
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
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-zinc-800/60 py-20 md:py-28">
      <Container className="space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-400">
            What I Do
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Services &amp; Capabilities
          </h2>
          <p className="max-w-2xl text-base text-zinc-400 sm:text-lg">
            Specialized solutions across full-stack engineering, web technologies, and data analysis.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-sm transition-colors hover:border-zinc-700"
              >
                <div className="space-y-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-sky-400 transition-colors group-hover:border-zinc-700">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
