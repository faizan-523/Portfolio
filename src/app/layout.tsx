import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Faizan | Web Developer & Data Science Enthusiast",
    template: "%s | Faizan",
  },
  description:
    "Portfolio of Faizan, a Computer Science student and developer specializing in modern web development, full-stack applications, data analysis, and machine learning.",
  keywords: [
    "Faizan",
    "Web Developer",
    "Data Science",
    "Machine Learning",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Faizan" }],
  creator: "Faizan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/faizan-523",
    title: "Faizan | Web Developer & Data Science Enthusiast",
    description:
      "Explore web development projects, data science analyses, and machine learning models built by Faizan.",
    siteName: "Faizan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faizan | Web Developer & Data Science Enthusiast",
    description:
      "Explore web development projects, data science analyses, and machine learning models built by Faizan.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
