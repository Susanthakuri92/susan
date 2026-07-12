import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV / Resume | Susan Thakuri',
  description: 'Curriculum vitae of Susan Thakuri — a beginner web developer learning React, Next.js, and modern web technologies.',
  openGraph: {
    title: 'CV / Resume | Susan Thakuri',
    description: 'Curriculum vitae of Susan Thakuri — a beginner web developer.',
    type: 'profile',
  },
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return children;
}