import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'
import { BASE_URL, IS_PRODUCTION } from '@/lib/site'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!IS_PRODUCTION) return []

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/skin-expertise`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const posts = await getAllPosts()
  const postRoutes: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...postRoutes]
}
