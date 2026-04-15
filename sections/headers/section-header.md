---
title: Section Header
category: headers
tags: [section-header, h2, eyebrow, landing, typography]
tested-with: claude-sonnet-4-6
---

# Section Header

> Reusable section title block — eyebrow label, h2 headline, subtitle. Used above features, pricing, testimonials.

---

## Prompt

```xml
<task>Build a reusable section header component for landing page sections</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Optional eyebrow label above headline (small, accent color, uppercase tracking)
- Main headline (h2), large and bold
- Optional subtitle/description (2-3 lines max, muted color)
- Centered or left-aligned layout via prop
- Used above features, pricing, testimonials sections
</requirements>
<style>
- Eyebrow: text-xs uppercase tracking-widest, accent color, font-semibold
- Headline: text-3xl sm:text-4xl, font-bold, tracking-tight, zinc-900 dark:white
- Subtitle: text-base or text-lg, zinc-500 dark:zinc-400, max-w-2xl mx-auto
- Centered variant: text-center, subtitle centered
</style>
<output>Single .tsx file, export default SectionHeader, all fields optional except title</output>
```

---

## Plan Mode Version

```
## Section Header Rules
- Props: eyebrow?, title (required), subtitle?, align?: 'left' | 'center'
- Default alignment: centered for landing page sections, left for app pages
- Eyebrow always in accent color — signals section category
- h2 for all section headings (h1 is reserved for page/hero headline)
- Subtitle max-w-2xl to prevent overly wide text on large screens
```

---

## Variants

**With decorative line** — Accent-colored horizontal rule beneath the eyebrow label.

**Badge style eyebrow** — Pill badge with icon instead of plain text eyebrow.

**Animated entry** — Staggered fade-in: eyebrow first, then headline, then subtitle. Use `animation-delay`.
