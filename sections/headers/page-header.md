---
title: Page Header
category: headers
tags: [page-header, title, breadcrumb, actions, layout]
tested-with: claude-sonnet-4-6
---

# Page Header

> Top-of-page header for interior pages — title, optional breadcrumb, page-level actions.

---

## Prompt

```xml
<task>Build a page header component for interior pages of a web app or marketing site</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Page title (h1), optional subtitle/description below
- Optional breadcrumb above the title
- Optional action buttons on the right (e.g., "Edit", "Export", primary CTA)
- Divider or subtle border below the header
- Responsive: actions stack below title on mobile
</requirements>
<style>
- Title: text-2xl or text-3xl, font-bold, tracking-tight
- Subtitle: text-zinc-500 dark:text-zinc-400, mt-1
- Actions: right-aligned on desktop, full-width stack on mobile (flex-col sm:flex-row)
- Bottom border: border-b border-zinc-200 dark:border-zinc-800, pb-6
</style>
<output>Single .tsx file, all fields optional props, export default PageHeader</output>
```

---

## Plan Mode Version

```
## Page Header Rules
- h1 for the page title — only one h1 per page
- Props: title (required), subtitle?, breadcrumbs?, actions? (ReactNode)
- Breadcrumbs render above the title when provided
- Actions right-aligned on desktop, stacked below on mobile
- Always separated from page content with border-b
- Title tracking: tracking-tight (-0.025em)
```

---

## Variants

**Dashboard page header** — Includes status badge, last-updated timestamp, and avatar of owner.

**Docs page header** — Title + estimated read time + "Edit on GitHub" link.

**Gradient background header** — Full-width colored or gradient banner behind the header. Used on feature pages.
