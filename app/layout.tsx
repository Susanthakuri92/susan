import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Susan Thakuri | Full Stack Developer",
  description: "Portfolio of Susan Thakuri, a passionate full-stack developer specializing in React, Next.js, and modern web technologies. Building beautiful, responsive web applications.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Portfolio"],
  authors: [{ name: "Susan Thakuri" }],
  openGraph: {
    title: "Susan Thakuri | Full Stack Developer",
    description: "Portfolio of Susan Thakuri, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:text-sm focus:font-mono focus:uppercase focus:tracking-widest"
          style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
