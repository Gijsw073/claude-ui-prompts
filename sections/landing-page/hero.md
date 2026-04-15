---
title: Hero Section
category: landing-page
tags: [hero, landing, cta, conversion, above-the-fold]
tested-with: claude-sonnet-4-6
---

# Hero Section

> High-converting hero with headline, subtext, dual CTAs, and social proof — the first thing users see.

---

## Prompt

Copy this into Claude:

```xml
<task>Build a hero section component for a SaaS landing page</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Large primary headline with subtle gradient text effect
- Subtext: max 2 lines, 16px, muted color
- Two CTA buttons: primary (solid) + secondary (ghost/outline)
- Social proof bar below CTAs: avatars + "X,000+ developers trust this"
- Fully responsive, mobile-first
- No external dependencies beyond Tailwind
</requirements>
<style>
- Clean, modern SaaS aesthetic (think Linear, Vercel, Resend)
- Dark-friendly (use CSS variables or dark: variants)
- Subtle background: radial gradient from primary color at low opacity
- Tight letter-spacing on headline (-0.03em)
</style>
<output>Single .tsx file, export default HeroSection</output>
```

---

## Plan Mode Version

Add to your `CLAUDE.md` for persistent hero rules:

```
## Hero Section Rules
- h1 for the primary headline, max 8 words
- Always include two CTAs: primary (solid bg) + secondary (ghost/outline)
- Social proof element within the hero: avatar stack or logo bar
- Radial gradient background at ≤10% opacity
- Mobile: stack vertically, CTAs full-width
- No decorative elements that shift layout on mobile
```

---

## Variants

**With email waitlist form**
Add to `<requirements>`: Replace secondary CTA with an email input + submit button inline. Show "Join 2,000+ on the waitlist" below.

**Image split layout**
Add to `<requirements>`: Two-column layout — headline/CTAs left, product screenshot or illustration right. On mobile, image below text.

**Video background**
Add to `<requirements>`: Fullscreen looping video background with dark overlay (rgba 0,0,0,0.6). Text must pass WCAG AA contrast.

**Minimal / text-only**
Add to `<requirements>`: No images, no gradients. Pure typography-driven layout. Extra tight spacing. Centered.

---

## SEO Notes

- `<h1>` must be the primary headline — only one per page
- Add `alt` text to any hero image describing the product
- Keep headline under 60 characters for clean social share previews
- If hero includes a form, add `aria-label` to inputs

---

## Example Output (condensed)

```tsx
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-zinc-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-100/30 dark:from-violet-900/10 to-transparent" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-7xl">
          Ship UI faster with{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            one prompt
          </span>
        </h1>
        <p className="mt-6 text-lg text-zinc-500 dark:text-zinc-400">
          Copy-paste Claude prompts for every UI component you'll ever need.
          <br />
          No iteration. No cleanup. First draft ships.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#" className="rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-500 transition-colors">
            Browse prompts
          </a>
          <a href="#" className="rounded-lg border border-zinc-200 dark:border-zinc-800 px-6 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
            View on GitHub
          </a>
        </div>
        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-zinc-500">
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="h-7 w-7 rounded-full border-2 border-white dark:border-zinc-950 bg-zinc-200 dark:bg-zinc-700" />
            ))}
          </div>
          <span>5,000+ developers use these prompts</span>
        </div>
      </div>
    </section>
  )
}
```
