---
title: Sign Up Form
category: forms
tags: [signup, registration, form, onboarding, auth]
tested-with: claude-sonnet-4-6
---

# Sign Up Form

> Registration form with name, email, password, and terms acceptance — optimized for conversion.

---

## Prompt

```xml
<task>Build a sign up / registration form</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Fields: full name, email, password (with strength indicator), confirm password
- Password strength meter: weak/medium/strong bar below password input
- Terms of service checkbox with links
- Social sign-up buttons (Google, GitHub) above the form with "or" divider
- Submit button: "Create account"
- Link to login page at bottom
- Inline validation on blur (not on every keystroke)
</requirements>
<style>
- Same card layout as login form for consistency
- Password strength bar: red → orange → green based on entropy
- Checkbox: custom styled, accent color when checked
- All errors: text-red-500, shown below the field after blur
</style>
<output>Single .tsx file, export default SignUpForm</output>
```

---

## Plan Mode Version

```
## Sign Up Form Rules
- Social auth at top ("Continue with Google") — higher conversion than bottom placement
- Validate on blur, not on change — reduces anxiety while typing
- Password strength: check length ≥8, has number, has special char
- Never validate password match until confirm field is blurred
- Terms checkbox: required, show error if unchecked on submit
- After submit: redirect to /onboarding or /dashboard, not back to /signup
```

---

## Variants

**Minimal (email only)** — Just email + submit. "We'll email you a setup link." Lowest friction, highest conversion.

**Multi-step onboarding** — Step 1: email/password. Step 2: profile details. Step 3: preferences. Progress bar at top.

**Invite-only** — Locked form with invite code field. Creates exclusivity and controls growth.
