---
title: FAQ Accordion
category: landing-page
tags: [faq, accordion, landing, trust, objections]
tested-with: claude-sonnet-4-6
---

# FAQ Accordion

> Collapsible Q&A section that handles objections and drives SEO through structured content.

---

## Prompt

```xml
<task>Build a FAQ section with accordion for a SaaS landing page</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Accordion component: click question to expand answer, click again to collapse
- Only one item open at a time (exclusive open)
- Smooth height animation on open/close (CSS transition, not JS height calculation)
- 6-8 FAQ items passed as a typed array prop
- Section heading + optional subtext
- Chevron icon rotates 180° when open
</requirements>
<style>
- Clean dividers between items (border-b)
- Question: font-semibold, text-zinc-900 dark:text-white
- Answer: text-zinc-600 dark:text-zinc-400, slightly smaller font
- No card border — flat list style is cleaner for FAQs
- Chevron: smooth rotation transition (duration-200)
</style>
<output>Single .tsx file using React useState, export default FAQSection, items as typed prop</output>
```

---

## Plan Mode Version

```
## FAQ Section Rules
- Accordion pattern: one open at a time
- Use CSS max-height transition for smooth animation (not JS-measured height)
- Questions as h3 elements inside the accordion trigger
- Items typed: { question: string; answer: string }[]
- Always add FAQPage JSON-LD schema — high SEO value
- Answers should be 2-4 sentences: concise but complete
```

---

## Variants

**Two-column FAQ** — Left column: question list. Right: active answer. Good for desktop-heavy products.

**Categorized FAQ** — Tab bar above (General / Billing / Technical) filters the FAQ list.

**Inline FAQ (no accordion)** — All answers visible, just typography separation. Best for short answers.

---

## SEO Notes

Always include `FAQPage` JSON-LD schema — this is one of the highest-value schema types for Google rich results:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Your question here?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Your answer here."
    }
  }]
}
```

Also valuable for GEO: FAQ-style content is highly cited by LLMs because it directly answers questions in a structured format.
