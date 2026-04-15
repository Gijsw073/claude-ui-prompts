---
title: Features Grid
category: landing-page
tags: [features, grid, cards, landing, benefits]
tested-with: claude-sonnet-4-6
---

# Features Grid

> A scannable grid of feature cards — icon, title, description. The section that converts skeptics.

---

## Prompt

```xml
<task>Build a features grid section for a SaaS landing page</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- 6 feature cards in a 3x2 grid (2 columns on mobile, 3 on desktop)
- Each card: icon (lucide-react or inline SVG), bold title, 2-line description
- Subtle card border with hover state (slight elevation or border color change)
- Section title + optional subtitle above the grid
- Responsive, mobile-first
</requirements>
<style>
- Cards: white bg with 1px border on light, zinc-900 with zinc-800 border on dark
- Icons: colored with brand accent, 24px
- Hover: translateY(-2px) with box-shadow transition
- No external icon libraries required — use inline SVGs if preferred
</style>
<output>Single .tsx file, accepts features array as prop, export default FeaturesSection</output>
```

---

## Plan Mode Version

```
## Features Grid Rules
- Always accept a typed features array prop: { icon, title, description }[]
- 3-column grid on desktop, 2 on tablet, 1 on mobile
- Card hover: translateY(-2px) + shadow — never background-color flash
- Section always has a heading (h2) and optional subtitle paragraph
- Icons must be accessible: aria-hidden="true" on decorative icons
```

---

## Variants

**Icon-left layout** — Icon on the left, text on the right within each card. Better for longer descriptions.

**Numbered steps** — Replace icons with large step numbers (01, 02...). Good for "How it works" sections.

**Comparison table** — Instead of cards, a table comparing your product to alternatives. High-converting.

---

## SEO Notes

- Use `<h2>` for the section title
- Feature titles should be `<h3>` — helps Google understand page structure
- Avoid vague feature names — be specific ("Generates JSON-LD schema" not "Smart SEO")
