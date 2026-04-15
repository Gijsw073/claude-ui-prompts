---
title: Newsletter Signup
category: forms
tags: [newsletter, email, signup, conversion, landing]
tested-with: claude-sonnet-4-6
---

# Newsletter Signup

> Inline or section-style email capture for newsletter or waitlist signup.

---

## Prompt

```xml
<task>Build a newsletter signup form component</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Inline layout: email input + submit button on the same row
- Success state: input replaced by "You're in! Check your inbox." with checkmark
- Error state: red border + message below input
- Optional social proof below: "Join 3,200+ subscribers" or avatar stack
- Variant: full section with headline + subtext above the inline form
- POST to /api/newsletter (placeholder)
</requirements>
<style>
- Input and button share same border radius (grouped pill style)
- Button: solid accent color, same height as input
- Mobile: stack input and button vertically
- Success: smooth fade transition, green checkmark
</style>
<output>Single .tsx file, export default NewsletterSignup, accepts sectionVariant?: boolean prop</output>
```

---

## Plan Mode Version

```
## Newsletter Form Rules
- Inline layout: input + button on one line, pill-grouped border radius
- Mobile: stack vertically (flex-col on small screens)
- Success: replace entire form with confirmation text — never just disable button
- Validate email format before submit (regex or input type="email")
- Social proof line below form increases conversion — always include if known count
- Use Server Actions or API route — never send directly from browser
```

---

## Variants

**Modal trigger** — Small "Subscribe" link that opens a modal with the form. Low visual footprint.

**Sticky bottom bar** — Fixed bottom bar on scroll past hero. High visibility, can be dismissed.

**Exit intent popup** — Shows when user moves cursor toward browser tab bar. High conversion, use sparingly.
