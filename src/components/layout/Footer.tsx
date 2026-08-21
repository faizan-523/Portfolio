import { Container } from "./Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-800/80 py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-center text-sm text-zinc-500 sm:flex-row sm:text-left">
        <p>© {currentYear} Portfolio. All rights reserved.</p>
        <p className="text-xs text-zinc-600">Built with Next.js & Tailwind CSS</p>
      </Container>
    </footer>
  );
}
