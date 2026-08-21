import { Container } from "@/components/layout/Container";

export default function Home() {
  return (
    <Container className="py-24 sm:py-32">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          Portfolio
        </h1>
        <p className="max-w-2xl text-lg text-zinc-400">
          Base visual design and responsive navigation setup completed. Ready for portfolio sections.
        </p>
      </div>
    </Container>
  );
}
