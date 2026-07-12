import { POSTS } from './constants';

export default async function sitemap() {
  const baseUrl = 'https://susan.vercel.app';

  const blogPosts = POSTS.map((post) => ({
    url: `${baseUrl}${post.link}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/cv`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    ...blogPosts,
  ];
}