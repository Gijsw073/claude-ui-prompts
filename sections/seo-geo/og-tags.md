---
title: Open Graph Tags
category: seo-geo
tags: [og-tags, open-graph, twitter-card, social, sharing]
tested-with: claude-sonnet-4-6
---

# Open Graph Tags

> Generate a dynamic OG image and complete Open Graph + Twitter Card tags for beautiful social shares.

---

## Prompt

```xml
<task>Generate Open Graph tags and a dynamic OG image component for Next.js</task>
<stack>Next.js 14 App Router, TypeScript</stack>
<requirements>
- Complete og: and twitter: metadata via Next.js Metadata API
- Dynamic OG image using Next.js /app/opengraph-image.tsx (ImageResponse API)
- OG image: 1200x630px, brand-consistent, shows page title + logo + subtle bg
- Fallback static og-image.png for pages without dynamic OG
- Twitter: summary_large_image card type
</requirements>
<output>
1. metadata object with complete og and twitter fields
2. app/opengraph-image.tsx using ImageResponse
3. app/twitter-image.tsx (same or adapted)
</output>
```

---

## Plan Mode Version

```
## Open Graph Rules
- og:image: always absolute URL, always 1200x630
- Dynamic OG images via /opengraph-image.tsx — never static for content pages
- og:type: "website" for homepage, "article" for blog posts, "product" for SaaS pages
- Twitter card: always "summary_large_image" (the big image version)
- og:title and twitter:title can differ from page <title> — optimize for sharing
- Test with: https://www.opengraph.xyz/ or LinkedIn Post Inspector
```

---

## Dynamic OG Image Template

```typescript
// app/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Page title'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui',
        }}
      >
        <div style={{ color: '#a78bfa', fontSize: 18, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 24 }}>
          Your Brand
        </div>
        <div style={{ color: 'white', fontSize: 64, fontWeight: 700, textAlign: 'center', lineHeight: 1.1, maxWidth: 900 }}>
          Page Title Goes Here
        </div>
        <div style={{ color: '#71717a', fontSize: 24, marginTop: 24, textAlign: 'center' }}>
          Page subtitle or tagline
        </div>
      </div>
    ),
    { ...size }
  )
}
```

## Per-Page Dynamic OG Image (with params)

```typescript
// app/blog/[slug]/opengraph-image.tsx
import { ImageResponse } from 'next/og'
import { getPost } from '@/lib/posts'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  return new ImageResponse(
    (
      <div style={{ /* same base styles */ }}>
        <div style={{ color: 'white', fontSize: 56, fontWeight: 700 }}>
          {post.title}
        </div>
      </div>
    ),
    { ...size }
  )
}
```

---

## Testing Your OG Tags

| Tool | URL |
|------|-----|
| OpenGraph.xyz | https://www.opengraph.xyz/ |
| Twitter Card Validator | https://cards-dev.twitter.com/validator |
| LinkedIn Inspector | https://www.linkedin.com/post-inspector/ |
| Facebook Debugger | https://developers.facebook.com/tools/debug/ |
