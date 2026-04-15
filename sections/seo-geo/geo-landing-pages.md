---
title: GEO Landing Pages — Generative Engine Optimization
category: seo-geo
tags: [geo, generative-engine-optimization, landing-page, ai-search, perplexity, localization]
tested-with: claude-sonnet-4-6
---

# GEO Landing Pages — Generative Engine Optimization

> Prompts for creating content that gets cited by AI search engines (Perplexity, ChatGPT Search, Google AI Overviews).

---

## What is GEO?

**Generative Engine Optimization (GEO)** is the practice of structuring content so that LLM-powered search engines retrieve, cite, and surface it when users ask questions.

Unlike traditional SEO (which targets Google's PageRank algorithm), GEO targets:
- **Perplexity** — cites sources inline, high CTR from cited links
- **ChatGPT Search** — browses and summarizes web content
- **Google AI Overviews** — appears above organic results for ~40% of queries
- **Bing Copilot** — integrated into Microsoft's search

**Why it matters:** AI search is growing 4x faster than traditional search. If your content isn't structured for LLM retrieval, you're invisible to a rapidly growing audience.

---

## The 5 GEO Principles

| Principle | What it means | Example |
|-----------|--------------|---------|
| **Direct answers** | Answer the question in the first sentence | "Tailwind CSS is a utility-first CSS framework for..." |
| **Factual specificity** | Use numbers, dates, proper nouns | "As of 2024, over 3.7M projects use Tailwind" |
| **Structured format** | Lists, tables, headers — LLMs parse structure | Use `##`, `-`, and `|` formatting |
| **Entity clarity** | Define your brand/product explicitly | "claude-ui-prompts is a library of..." |
| **FAQ format** | Directly answer common questions | See FAQ schema prompt |

---

## Prompt: GEO-Optimized Page Content

```xml
<task>Write GEO-optimized content for a web page that will be cited by AI search engines</task>
<topic>[Your topic or product]</topic>
<target-queries>
  [List 3-5 questions your target user might ask Perplexity or ChatGPT]
  Example: "What is the best tool for building Next.js landing pages with AI?"
</target-queries>
<requirements>
- Open with a direct, factual definition of the topic (1 sentence)
- Include specific numbers, dates, comparisons
- Use structured format: headers, bullet points, comparison tables
- Add a FAQ section answering the target queries directly
- Write in third-person, encyclopedic tone (not marketing copy)
- Avoid vague claims ("the best", "amazing") — use specific attributes
</requirements>
<output>Full page content in markdown, ready to render in Next.js MDX or as a React component</output>
```

---

## Prompt: City/Region Landing Pages (Local GEO)

```xml
<task>Generate a localized landing page for a specific city or region</task>
<stack>Next.js 14 App Router, TypeScript, Tailwind CSS</stack>
<product>[Your product/service]</product>
<locations>["Amsterdam", "Rotterdam", "Utrecht"] (or generate from array)</locations>
<requirements>
- Dynamic route: /locations/[city] with generateStaticParams()
- Localized headline mentioning the city
- City-specific content paragraph (local context, timezone, language)
- LocalBusiness or Service JSON-LD schema with city address
- Unique page metadata per city (title, description, canonical)
- Shared component structure — only content prop differs per city
</requirements>
<output>
1. app/locations/[city]/page.tsx — dynamic page component
2. lib/locations.ts — city data and generateStaticParams
3. JSON-LD schema component for LocalBusiness
</output>
```

### City Data Template

```typescript
// lib/locations.ts
export const locations = [
  {
    slug: 'amsterdam',
    name: 'Amsterdam',
    region: 'North Holland',
    country: 'Netherlands',
    description: 'Serving developers and agencies in the Amsterdam tech hub.',
    timezone: 'Europe/Amsterdam',
  },
  {
    slug: 'new-york',
    name: 'New York',
    region: 'New York',
    country: 'United States',
    description: 'Trusted by NYC startups and Fortune 500 teams.',
    timezone: 'America/New_York',
  },
]

export function generateStaticParams() {
  return locations.map(l => ({ city: l.slug }))
}
```

---

## GEO Content Checklist

Before publishing any page you want AI engines to cite:

- [ ] First sentence directly answers the most likely user question
- [ ] Page contains at least one comparison table or structured list
- [ ] FAQ section present with 4-6 Q&A pairs
- [ ] FAQPage JSON-LD schema included (see [schema-org.md](schema-org.md))
- [ ] Product/brand is named and defined explicitly (not assumed)
- [ ] No vague superlatives — only specific, verifiable claims
- [ ] Page is indexed (not noindex) and in sitemap

---

## GEO vs SEO Quick Reference

```
SEO → optimize for crawlers   → technical signals (schema, speed, backlinks)
GEO → optimize for LLMs       → content signals (structure, specificity, directness)
Both → index the page         → sitemap.xml + robots.txt
Both → structured data        → JSON-LD (parsed by both Google and LLMs)
```
