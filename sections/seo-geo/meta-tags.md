---
title: Meta Tags — Next.js Metadata API
category: seo-geo
tags: [seo, meta-tags, metadata, nextjs, open-graph, canonical]
tested-with: claude-sonnet-4-6
---

# Meta Tags — Next.js Metadata API

> Generate a complete, production-ready `metadata` export for any Next.js 14+ page.

---

## Prompt

```xml
<task>Generate a complete metadata export for a Next.js 14 App Router page</task>
<stack>Next.js 14 App Router, TypeScript</stack>
<context>
Page type: [SaaS landing page / blog post / product page / docs page]
Primary keyword: [your main keyword]
Brand name: [your brand]
Page URL: [https://yourdomain.com/page-path]
</context>
<requirements>
- Static metadata export with title, description, keywords
- Full Open Graph: og:title, og:description, og:image, og:url, og:type
- Twitter card: summary_large_image
- Canonical URL
- robots: index, follow (or noindex for auth/private pages)
- viewport and themeColor
- alternates for hreflang if multi-language
</requirements>
<output>
TypeScript Metadata object using Next.js generateMetadata() for dynamic pages,
or static export const metadata: Metadata = {} for static pages.
Include both variants.
</output>
```

---

## Plan Mode Version

```
## Metadata Rules
- Every page exports a Metadata object — no exceptions
- Title: "[Page Title] | [Brand Name]" — max 60 characters total
- Description: 120-158 characters, includes primary keyword naturally
- canonical: always set, even on the homepage
- og:image: absolute URL, 1200x630px, brand-consistent
- Dynamic pages use generateMetadata() — never static metadata on user-generated content
- noindex pages: login, signup, checkout, dashboard, search results with params
```

---

## Static Metadata Template

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title | Brand Name',
  description: 'Page description — 120-158 characters, include primary keyword.',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  authors: [{ name: 'Brand Name', url: 'https://yourdomain.com' }],
  alternates: {
    canonical: 'https://yourdomain.com/page-path',
  },
  openGraph: {
    title: 'Page Title | Brand Name',
    description: 'Page description for social sharing.',
    url: 'https://yourdomain.com/page-path',
    siteName: 'Brand Name',
    images: [{ url: 'https://yourdomain.com/og-image.png', width: 1200, height: 630 }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title | Brand Name',
    description: 'Page description for Twitter.',
    images: ['https://yourdomain.com/og-image.png'],
    creator: '@yourhandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}
```

## Dynamic Metadata Template (for blog posts, products, etc.)

```typescript
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) return { title: 'Not Found' }

  return {
    title: `${post.title} | Brand Name`,
    description: post.excerpt,
    alternates: { canonical: `https://yourdomain.com/blog/${params.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://yourdomain.com/blog/${params.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      images: [{ url: post.ogImage || 'https://yourdomain.com/og-default.png', width: 1200, height: 630 }],
    },
  }
}
```

---

## SEO Checklist

- [ ] Title under 60 characters
- [ ] Description 120-158 characters
- [ ] Canonical URL set
- [ ] og:image is absolute URL, 1200x630
- [ ] Dynamic pages use `generateMetadata()`
- [ ] Auth/private pages have `robots: { index: false }`
- [ ] Validate with: [Rich Results Test](https://search.google.com/test/rich-results)
