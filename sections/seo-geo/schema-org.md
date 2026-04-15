---
title: Schema.org / JSON-LD Structured Data
category: seo-geo
tags: [schema, json-ld, structured-data, seo, rich-results]
tested-with: claude-sonnet-4-6
---

# Schema.org / JSON-LD Structured Data

> Generate JSON-LD structured data for Google rich results and GEO citation optimization.

---

## Prompt

```xml
<task>Generate JSON-LD structured data for a Next.js page</task>
<stack>Next.js 14 App Router, TypeScript</stack>
<page-type>[Choose: SaaS Product / Blog Article / FAQ / Local Business / Software App / Course / Event]</page-type>
<requirements>
- Correct Schema.org type for the page
- All required and recommended properties filled
- Inline as <script type="application/ld+json"> in a Next.js Server Component
- TypeScript typed schema object
- Validate against Google's Rich Results Test
</requirements>
<output>
A Next.js Server Component called JsonLd that accepts the schema as a prop,
plus the specific schema object for the requested page type.
</output>
```

---

## Plan Mode Version

```
## JSON-LD Rules
- Always a Server Component — no "use client" directive
- Inject via <script type="application/ld+json">{JSON.stringify(schema)}</script>
- One schema per page component, co-located with the page file
- Required for: blog posts (Article), product pages (SoftwareApplication), FAQ sections (FAQPage), landing pages (WebPage + Organization)
- Validate every schema change at: https://search.google.com/test/rich-results
- GEO benefit: structured data is directly parsed by LLMs — it's like metadata for AI
```

---

## Reusable JsonLd Component

```typescript
// components/json-ld.tsx
export function JsonLd({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

---

## Schema Templates

### SaaS Product / Software

```typescript
const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Your Product Name",
  "description": "What your product does in one sentence.",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web",
  "url": "https://yourdomain.com",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free tier available"
  },
  "author": {
    "@type": "Organization",
    "name": "Your Company",
    "url": "https://yourdomain.com"
  }
}
```

### Blog Article

```typescript
const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Your Article Title",
  "description": "Article description",
  "datePublished": "2024-01-15T00:00:00Z",
  "dateModified": "2024-01-20T00:00:00Z",
  "author": { "@type": "Person", "name": "Author Name" },
  "publisher": {
    "@type": "Organization",
    "name": "Brand Name",
    "logo": { "@type": "ImageObject", "url": "https://yourdomain.com/logo.png" }
  },
  "image": "https://yourdomain.com/blog/article-og.png"
}
```

### FAQ

```typescript
const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is your product?",
      "acceptedAnswer": { "@type": "Answer", "text": "Direct, factual answer here." }
    }
  ]
}
```

### Organization (homepage)

```typescript
const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Brand Name",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/logo.png",
  "sameAs": [
    "https://twitter.com/yourhandle",
    "https://github.com/yourorg"
  ]
}
```

---

## GEO Note

JSON-LD is parsed by Perplexity, ChatGPT Search, and Google AI Overviews directly. A correctly typed `SoftwareApplication` schema makes your product recognizable to LLMs as a distinct entity — increasing the chance of being cited when users ask about tools in your category.
