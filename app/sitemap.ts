import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE_URL = 'https://portfolio3112.pages.dev'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: '2026-09-07',
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}