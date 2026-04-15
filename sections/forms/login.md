---
title: Login Form
category: forms
tags: [login, auth, form, email, password]
tested-with: claude-sonnet-4-6
---

# Login Form

> Clean email + password login form with social auth options and forgot password link.

---

## Prompt

```xml
<task>Build a login form component</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Email input + password input with show/hide toggle
- Primary submit button ("Sign in")
- "Forgot password?" link below password field
- Divider with "or" + social login buttons (Google, GitHub)
- Link to sign-up page at bottom
- Form validation: show inline error messages below each field
- Loading state on submit button (spinner)
</requirements>
<style>
- Centered card layout, max-w-sm, shadow-lg
- Inputs: rounded-md, focus ring in accent color, error state: red border
- Submit: full-width, accent color bg
- Social buttons: white bg with border, icon left-aligned
- Error messages: text-red-500 text-sm mt-1
</style>
<output>Single .tsx file using React state for validation, export default LoginForm</output>
```

---

## Plan Mode Version

```
## Login Form Rules
- Always include show/hide password toggle (eye icon)
- Social auth section separated by "or continue with" divider
- Error states: red border + text-red-500 message below field
- Submit button: loading spinner replaces text on submit (not disabled flicker)
- Link to /signup always present
- Never log or expose password values in dev console
- autocomplete="email" and autocomplete="current-password" on inputs
```

---

## Variants

**Magic link / passwordless** — Replace password field with "Send magic link" button. Email-only flow.

**OTP verification** — After email, show 6-digit OTP code input. Split digit inputs or single field.

**Full-page split layout** — Form on left, brand image/illustration on right. Common in marketing-forward auth pages.

---

## SEO Notes

- Login page should be `noindex` in most cases — it's not a content page
- Add `<link rel="canonical">` if the login page has multiple URL variants
