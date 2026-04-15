# SEO + GEO Prompts

This section contains Claude prompts for two related but distinct disciplines:

---

## SEO — Search Engine Optimization

Optimizing for **Google's crawler** — technical signals that affect how your pages rank in traditional search results.

In Next.js 14+, this means:
- The `metadata` export API for meta tags, Open Graph, and Twitter cards
- JSON-LD structured data via `<script type="application/ld+json">`
- Dynamic `sitemap.ts` and `robots.ts` files
- Canonical URLs, hreflang, and pagination signals

**Prompts in this section:**
- [meta-tags.md](meta-tags.md) — Next.js metadata API, dynamic OG tags, canonical URLs
- [schema-org.md](schema-org.md) — JSON-LD structured data for rich results
- [og-tags.md](og-tags.md) — Open Graph and Twitter Card optimization
- [sitemap.md](sitemap.md) — Dynamic sitemap generation for large sites

---

## GEO — Generative Engine Optimization

A newer discipline: optimizing your content so that **AI-powered search engines** (Perplexity, ChatGPT Search, Google AI Overviews, Bing Copilot) cite and surface your content.

GEO is different from SEO because LLMs don't crawl in the same way. They prefer:

| What LLMs cite | What they avoid |
|----------------|-----------------|
| Direct, declarative answers | Vague, hedged content |
| Structured facts (lists, tables) | Dense unstructured prose |
| Clear entity definitions | Ambiguous references |
| FAQ-style Q&A | Marketing-heavy copy |
| Specific numbers and sources | Generic claims |

**Why this matters now:** AI Overviews appear in ~40% of Google searches. Perplexity is growing 4x/year. If your content isn't GEO-optimized, you're invisible in the fastest-growing discovery channel.

**Prompts in this section:**
- [geo-landing-pages.md](geo-landing-pages.md) — Generate city/region landing pages with localized content and GEO-optimized copy

---

## Quick Reference: SEO vs GEO

```
Goal: Rank in Google          → SEO (technical signals + backlinks)
Goal: Be cited by Perplexity  → GEO (structure + factual content)
Goal: Both                    → SEO + GEO (this section covers both)
```

---

## Stack

All prompts assume:
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Testing:** Google Search Console, Rich Results Test, Perplexity search
