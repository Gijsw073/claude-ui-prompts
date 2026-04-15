---
title: Breadcrumbs
category: navigation
tags: [breadcrumbs, navigation, seo, schema, wayfinding]
tested-with: claude-sonnet-4-6
---

# Breadcrumbs

> Hierarchical wayfinding navigation — shows current location in site structure. High SEO value.

---

## Prompt

```xml
<task>Build a breadcrumb navigation component</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Renders a breadcrumb trail from an array of { label, href } items
- Last item (current page): not a link, visually distinct (muted color)
- Separator: "/" or chevron icon between items
- Auto-generates from current URL path if no prop provided (parse usePathname)
- Includes BreadcrumbList JSON-LD schema for SEO
- Accessible: nav element with aria-label="Breadcrumb", aria-current="page" on last item
</requirements>
<style>
- Small text (text-sm), muted colors (zinc-500)
- Links: hover underline
- Current page: zinc-900 dark:white, no underline, no hover
- Chevron separator: 12px, zinc-400
</style>
<output>Single .tsx file, export default Breadcrumbs, generates schema in <script type="application/ld+json"></output>
```

---

## Plan Mode Version

```
## Breadcrumb Rules
- Always include BreadcrumbList JSON-LD schema — high SEO value, low effort
- Last crumb: aria-current="page", not a link, visually muted
- Auto-derive from pathname when no explicit items prop provided
- Max 4 levels — truncate middle items with ellipsis on longer paths
- nav aria-label="Breadcrumb" wrapper required
```

---

## SEO Notes

Breadcrumbs with JSON-LD unlock **breadcrumb rich results** in Google — your URL is replaced with the breadcrumb trail in search results. High CTR uplift.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://example.com" },
    { "@type": "ListItem", "position": 2, "name": "Docs", "item": "https://example.com/docs" },
    { "@type": "ListItem", "position": 3, "name": "Getting Started" }
  ]
}
```
