import type { MetadataRoute } from 'next'

const BASE_URL = 'https://portfoliovivek-eight.vercel.app'

// Add a real entry here for every route that actually exists on your site
// (e.g. /projects, /blog, /projects/[slug]) — an accurate sitemap is one of
// the highest-leverage, most commonly-skipped SEO wins for portfolio sites.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // {
    //   url: `${BASE_URL}/projects`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}
