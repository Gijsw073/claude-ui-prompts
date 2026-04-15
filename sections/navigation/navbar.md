---
title: Navbar
category: navigation
tags: [navbar, navigation, header, responsive, sticky]
tested-with: claude-sonnet-4-6
---

# Navbar

> Top navigation bar — logo, links, CTA button, mobile menu. The first UI element users interact with.

---

## Prompt

```xml
<task>Build a responsive navbar component</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Logo left, nav links center, CTA button right
- Sticky on scroll with backdrop-blur and subtle border on scroll
- Mobile: hamburger icon, full-screen or slide-down menu
- Active link state (current page highlighted)
- Dark mode support
- Nav links: array prop for flexibility
</requirements>
<style>
- Default: transparent bg, becomes white/dark with border after scrolling 20px
- Use Next.js Link for navigation
- Hamburger: animated 3-line to X transition
- Mobile menu: slides down smoothly, full-width, stacks links vertically
- CTA: solid accent color button, same as hero CTA
</style>
<output>Single .tsx file with useScrollPosition hook inline, export default Navbar</output>
```

---

## Plan Mode Version

```
## Navbar Rules
- Sticky positioning with scroll-triggered background change (transparent → frosted)
- Logo always links to "/"
- Mobile breakpoint: hidden below md, show hamburger
- Active link: underline or accent color, detected via usePathname()
- CTA button always rightmost element
- Backdrop-blur on scroll: backdrop-blur-md bg-white/80 dark:bg-zinc-950/80
- Close mobile menu on route change
```

---

## Variants

**Mega menu** — On hover, nav link opens a large dropdown with icon cards. Good for products with many features.

**Sidebar nav (app layout)** — See [sidebar.md](sidebar.md) for app-style left-rail navigation.

**Centered logo navbar** — Logo centered, nav links split left and right. Brand-forward aesthetic.

**Minimal announcement bar** — Thin colored bar above navbar with a dismissible announcement or promo code.

---

## SEO Notes

- Use `<nav aria-label="Main navigation">` for accessibility and SEO
- Current page link should have `aria-current="page"`
- Logo image needs descriptive `alt` text with brand name
