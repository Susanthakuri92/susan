import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { POSTS } from '../../constants';

// These components are stored in the app/blog folder as separate files for simplicity
import CachyOSPost from '../cachyos';
import ClaudeCodePost from '../claude-code';
import TauCLIPost from '../tau';
import GeminiCLIPost from '../gemini';

const POST_COMPONENTS: Record<string, React.ComponentType> = {
  'installing-cachyos-for-beginners': CachyOSPost,
  'using-claude-code-for-free': ClaudeCodePost,
  'getting-started-with-tau-cli': TauCLIPost,
  'gemini-cli-installation': GeminiCLIPost,
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.link === `/blog/${slug}`);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Susan Thakuri`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const PostComponent = POST_COMPONENTS[slug];

  if (!PostComponent) {
    notFound();
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--fg)' }}>
      <PostComponent />
    </div>
  );
}
