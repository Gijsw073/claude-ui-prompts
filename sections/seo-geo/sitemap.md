---
title: Dynamic Sitemap
category: seo-geo
tags: [sitemap, seo, nextjs, crawling, indexing]
tested-with: claude-sonnet-4-6
---

# Dynamic Sitemap

> Generate a dynamic `sitemap.ts` for Next.js that includes static pages and fetched dynamic content.

---

## Prompt

```xml
<task>Build a dynamic sitemap.ts for a Next.js 14 App Router site</task>
<stack>Next.js 14 App Router, TypeScript</stack>
<requirements>
- Exports a sitemap() function returning MetadataRoute.Sitemap
- Includes static pages (home, about, pricing, contact)
- Fetches dynamic content (blog posts, products, docs pages) from API or CMS
- Correct lastModified, changeFrequency, and priority per page type
- Split into multiple sitemaps if >50,000 URLs (generateSitemaps)
- robots.ts that references the sitemap URL
</requirements>
<output>
1. app/sitemap.ts — dynamic sitemap
2. app/robots.ts — robots file pointing to sitemap
</output>
```

---

## Plan Mode Version

```
## Sitemap Rules
- Always a Server function — never "use client"
- Static pages: changeFrequency "monthly", priority 0.8
- Homepage: priority 1.0, changeFrequency "weekly"
- Blog/docs: priority 0.7, changeFrequency "weekly", lastModified = post.updatedAt
- Exclude: /dashboard, /login, /signup, /api/*, /admin/*
- Over 50k URLs: use generateSitemaps() with sitemap index
- robots.ts: always include Sitemap: https://yourdomain.com/sitemap.xml
```

---

## Sitemap Template

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

const BASE_URL = 'https://yourdomain.com'

async function getBlogPosts() {
  // Replace with your CMS/API call
  return fetch(`${BASE_URL}/api/posts`).then(r => r.json())
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ]

  const dynamicPages: MetadataRoute.Sitemap = posts.map((post: { slug: string; updatedAt: string }) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...dynamicPages]
}
```

## Robots Template

```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard/', '/api/', '/admin/', '/login', '/signup'],
      },
    ],
    sitemap: 'https://yourdomain.com/sitemap.xml',
  }
}
```

---

## Priority Guide

| Page type | Priority | Change frequency |
|-----------|----------|-----------------|
| Homepage | 1.0 | weekly |
| Pricing / key landing pages | 0.9 | monthly |
| Blog index, docs index | 0.8 | weekly |
| Individual blog posts | 0.7 | weekly |
| Category pages | 0.6 | weekly |
| Tag pages | 0.4 | monthly |
