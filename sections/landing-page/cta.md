---
title: CTA Section
category: landing-page
tags: [cta, conversion, call-to-action, landing, bottom]
tested-with: claude-sonnet-4-6
---

# CTA Section

> The closing argument — a high-contrast, focused call-to-action section at the bottom of a landing page.

---

## Prompt

```xml
<task>Build a closing CTA section for a landing page</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Bold headline (2 lines max): action-oriented, e.g. "Start building in 30 seconds"
- Short subtext (1 line): remove friction, e.g. "No credit card required. Free forever."
- Primary CTA button + optional secondary link ("View docs →")
- High visual contrast — this section should stand out from the page
- Optional: subtle background pattern (dots, grid, or noise texture via SVG)
</requirements>
<style>
- Dark background with light text (invert of page background)
- OR accent-color background with white text
- CTA button: white with dark text (inverted from section bg)
- Large padding: py-32 on desktop
- Centered layout, max-w-2xl
</style>
<output>Single .tsx file, export default CTASection</output>
```

---

## Plan Mode Version

```
## CTA Section Rules
- Always at bottom of page, before footer
- High-contrast background (dark or accent color) — must visually pop
- Headline: active verb + time frame ("Start shipping in minutes")
- Remove-friction line below headline ("No credit card · Cancel anytime")
- One primary CTA button — inverted colors from section background
- Never more than 2 interactive elements in this section
```

---

## Variants

**Email capture CTA** — Replace button with inline email form. "Enter your email → Get started free."

**Split CTA** — Two columns: left has headline + text, right has form or button. Works well above mobile.

**Minimal text CTA** — Just the headline and button, maximum whitespace. Works for simple products.

---

## SEO Notes

- This section's headline can reinforce the primary keyword from `<h1>`
- Anchor the CTA button with descriptive text ("Start for free") not generic ("Click here")
