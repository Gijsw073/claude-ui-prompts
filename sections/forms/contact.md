---
title: Contact Form
category: forms
tags: [contact, form, email, support, landing]
tested-with: claude-sonnet-4-6
---

# Contact Form

> Simple contact form with name, email, subject, message — ready to hook into any email API.

---

## Prompt

```xml
<task>Build a contact form for a marketing website</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Fields: name, email, subject (optional select dropdown), message (textarea, min 4 rows)
- Submit button with loading state
- Success state: replace form with thank-you message
- Error state: show API error message at top of form
- Optional: office location or email address next to form in two-column layout
- Form action: POST to /api/contact route (placeholder)
</requirements>
<style>
- Two column layout on desktop: contact info left, form right
- Mobile: single column, info above form
- Textarea: resize-none, min 120px height
- Success: green checkmark icon + message, centered
- Error banner: red bg, white text at form top
</style>
<output>Single .tsx file with useState for form state, export default ContactForm</output>
```

---

## Plan Mode Version

```
## Contact Form Rules
- Three states: idle, loading, success, error — always handle all four
- Success replaces the form (don't just show a toast)
- Error shows at top of form, not just in console
- Subject dropdown: "General", "Sales", "Support", "Bug report", "Other"
- Textarea min-rows: 4, no resize
- POST to /api/contact — server action or API route, never client-side email
- Never expose email credentials in frontend code
```

---

## Variants

**Minimal (email only)** — One field, one button. "Reach us at hello@company.com or:" + email input.

**Support ticket form** — Adds priority select, file attachment, product area dropdown.

**Calendar booking** — Replaces form with calendar embed (Calendly, Cal.com) or custom time-picker.
