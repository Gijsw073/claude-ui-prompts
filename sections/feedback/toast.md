---
title: Toast Notification
category: feedback
tags: [toast, notification, feedback, alert, ux]
tested-with: claude-sonnet-4-6
---

# Toast Notification

> Non-blocking notification system — success, error, warning, info toasts with auto-dismiss.

---

## Prompt

```xml
<task>Build a toast notification system</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Toast provider wrapping the app (Context API)
- useToast() hook for triggering toasts anywhere
- Four types: success (green), error (red), warning (amber), info (blue)
- Each toast: icon + message + optional description + close button
- Auto-dismiss after 4 seconds (configurable)
- Stack multiple toasts (max 3 visible, queue the rest)
- Enter: slide in from right. Exit: fade out + slide right
- Position: bottom-right on desktop, bottom-center on mobile
</requirements>
<style>
- Toast: rounded-lg, shadow-lg, white bg, left border in type color (4px)
- Max width: 380px
- Close button: X icon, top-right of toast
- Progress bar: thin colored bar at bottom draining over dismiss duration
</style>
<output>
1. components/toast-provider.tsx — Context + Provider
2. hooks/use-toast.ts — hook
3. components/toast.tsx — individual toast UI
Usage: wrap layout with <ToastProvider>, call useToast().toast({ type, message })
</output>
```

---

## Plan Mode Version

```
## Toast Rules
- Always Context + hook pattern — no global singleton
- Max 3 toasts visible, queue excess — never stack infinitely
- Auto-dismiss: 4s default, 6s for error (errors need more reading time)
- Pause auto-dismiss on hover
- Accessible: role="alert" aria-live="assertive" for errors, "polite" for success/info
- Never use toasts for form validation — use inline errors
- Never use toasts for critical errors — use modal or inline alert
```

---

## Variants

**Sonner drop-in** — For speed, use the `sonner` package (`npm i sonner`) — 1.5kb, same API. Include this as a note.

**Top-center position** — Some design systems prefer top-center toasts (like GitHub).

**Action toast** — Toast with an "Undo" or "View" action button. Common for delete confirmations.
