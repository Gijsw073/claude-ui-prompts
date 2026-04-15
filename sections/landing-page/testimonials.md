---
title: Testimonials
category: landing-page
tags: [testimonials, social-proof, reviews, trust, landing]
tested-with: claude-sonnet-4-6
---

# Testimonials

> Social proof grid — quotes from real users that overcome objections and build trust.

---

## Prompt

```xml
<task>Build a testimonials section for a SaaS landing page</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Masonry or 3-column card grid of 6-9 testimonial cards
- Each card: quote text, avatar (circle), name, title/company
- Cards vary in height naturally based on quote length (masonry layout)
- Star rating (5 stars) on each card
- Section heading: "What developers are saying"
- Responsive: 1 col mobile, 2 col tablet, 3 col desktop
</requirements>
<style>
- Cards: white bg, subtle shadow, 1px border
- Quote: italic, zinc-700 dark:zinc-300
- Name: font-semibold, avatar 40px circle
- Stars: amber/yellow, filled SVG icons
- No carousel — static grid is more trustworthy
</style>
<output>Single .tsx file, testimonials as typed array prop, export default TestimonialsSection</output>
```

---

## Plan Mode Version

```
## Testimonials Section Rules
- Static grid only — no carousels (carousels hide social proof)
- Always 3 columns on desktop, masonry height allowed
- Each card must have: quote, full name, job title or company
- Avatars: real photos preferred, fallback to initials avatar
- Stars: only show if 4-5 stars — never show negative reviews
- Quote text: specific and outcome-focused, not generic praise
```

---

## Variants

**Logo bar** — Just a row of company logos ("trusted by teams at..."). Faster to build, less personal.

**Tweet wall** — Embed-style cards that look like tweets. High authenticity signal.

**Video testimonials** — Cards with a play button over a thumbnail. Highest trust, highest effort.

---

## SEO Notes

- Add `Review` schema (JSON-LD) for each testimonial — can show star ratings in search results
- Use real names and companies where possible — specificity signals authenticity to both users and LLMs
