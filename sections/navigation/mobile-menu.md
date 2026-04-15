---
title: Mobile Menu
category: navigation
tags: [mobile, menu, hamburger, drawer, responsive]
tested-with: claude-sonnet-4-6
---

# Mobile Menu

> Full-screen or drawer mobile navigation — triggered by hamburger, covers the viewport, smooth animation.

---

## Prompt

```xml
<task>Build a mobile menu component for a marketing website</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Hamburger button (3 lines → X animation on open)
- Full-screen overlay menu when open
- Large, tappable nav links (min 48px tap target)
- CTA button prominently placed
- Close on link click or backdrop tap
- Prevent body scroll when menu is open
- Accessible: focus trap inside open menu, close on Escape key
</requirements>
<style>
- Overlay: dark background (zinc-950/95 or accent color)
- Links: large text (text-2xl), white, centered or left-aligned
- Enter animation: fade + slight translateY from top
- Hamburger icon: smooth morph to X using CSS transforms
</style>
<output>Single .tsx file using useState + useEffect for scroll lock, export default MobileMenu</output>
```

---

## Plan Mode Version

```
## Mobile Menu Rules
- Prevent body scroll when open: document.body.style.overflow = 'hidden'
- Restore scroll on close and on unmount (useEffect cleanup)
- Focus trap: first link gets focus on open, Escape closes
- Hamburger → X: CSS transform, not icon swap (smoother)
- All links: min height 48px for touch targets
- Close menu on Next.js route change (usePathname effect)
```

---

## Variants

**Drawer (slide from left/right)** — Off-canvas panel that slides in instead of full-screen overlay.

**Bottom sheet** — Slides up from bottom. Common mobile pattern, especially for apps.

**Minimal dropdown** — Small dropdown beneath hamburger rather than full-screen. For sites with few links.
