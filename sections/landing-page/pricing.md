---
title: Pricing Cards
category: landing-page
tags: [pricing, cards, plans, cta, conversion]
tested-with: claude-sonnet-4-6
---

# Pricing Cards

> Three-tier pricing section with a highlighted recommended plan. The highest-intent section on any landing page.

---

## Prompt

```xml
<task>Build a pricing section with three plan cards</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Three plans: Free, Pro (highlighted/recommended), Enterprise
- Each card: plan name, price (with /month), feature list with checkmarks, CTA button
- Middle card visually elevated: ring border in accent color, "Most Popular" badge
- Monthly/Annual toggle at top (annual shows ~20% discount)
- Feature list: 5-7 items, checkmark icons, strikethrough on unavailable features in lower tiers
- Responsive: stack vertically on mobile, horizontal 3-col on desktop
</requirements>
<style>
- Recommended card: accent color ring + subtle gradient background
- Free plan CTA: ghost button; Pro: solid accent; Enterprise: outline
- Toggle: pill-style switch, smooth transition
- Prices: large font (text-4xl), currency symbol smaller (text-xl)
</style>
<output>Single .tsx file, export default PricingSection, prices/features configurable via props or constants</output>
```

---

## Plan Mode Version

```
## Pricing Section Rules
- Always three tiers: free/starter, main paid, enterprise/custom
- Middle tier is visually highlighted: ring + badge + slightly larger card
- Monthly/annual toggle — annual = ~20% cheaper, shown as "Save 20%"
- CTA buttons: tier-matched styles (ghost, solid, outline)
- Feature list items use checkmark (✓) for included, dash or strike for excluded
- Never hardcode prices — use a config object or props
```

---

## Variants

**Two-tier (simple)** — Just Free and Pro. Cleaner for early-stage products.

**Usage-based pricing** — Replace fixed price with slider (API calls, seats, GB). Show estimated cost dynamically.

**Comparison table below cards** — Full feature matrix beneath the cards for power users who want detail.

---

## SEO Notes

- Add `application/ld+json` with `Offer` schema for each plan — helps Google show pricing in rich results
- Plan names should be in `<h3>` tags
- Include `aria-label` on the toggle: `aria-label="Toggle billing period"`
