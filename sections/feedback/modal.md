---
title: Modal Dialog
category: feedback
tags: [modal, dialog, overlay, confirmation, ux]
tested-with: claude-sonnet-4-6
---

# Modal Dialog

> Accessible modal dialog with backdrop, focus trap, keyboard navigation, and smooth animation.

---

## Prompt

```xml
<task>Build an accessible modal dialog component</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Backdrop: dark semi-transparent overlay, click to close
- Modal panel: centered, white bg, rounded-xl, shadow-2xl
- Header: title + close (X) button
- Body: scrollable if content overflows
- Footer: action buttons (confirm + cancel pattern)
- Keyboard: Escape closes, Tab cycles within modal (focus trap)
- Scroll lock: prevent body scroll when open
- Animation: backdrop fades in, panel scales from 95% + fades in
- Accessible: role="dialog", aria-modal, aria-labelledby
</requirements>
<style>
- Backdrop: bg-black/50, backdrop-blur-sm
- Panel: max-w-md w-full, p-6, max-h-[90vh] overflow-y-auto
- Header: flex justify-between, border-b, pb-4, mb-4
- Footer: flex justify-end gap-3, border-t, pt-4, mt-4
</style>
<output>Single .tsx file, composable (Modal, Modal.Header, Modal.Body, Modal.Footer), export default Modal</output>
```

---

## Plan Mode Version

```
## Modal Rules
- Focus trap: on open, move focus to first focusable element inside modal
- On close: return focus to the element that triggered the modal
- body overflow-hidden when open — restore on close and unmount
- Escape key closes — add/remove keydown listener on mount/unmount
- aria-labelledby pointing to the modal title element
- Never auto-close modals with critical information (confirmations, errors)
- Composable pattern: Modal + Modal.Header + Modal.Body + Modal.Footer
```

---

## Variants

**Confirmation modal** — Destructive action confirmation: red "Delete" button, clear warning text.

**Form modal** — Full form inside modal. Submit closes modal on success, shows inline errors on failure.

**Drawer (side modal)** — Slides in from right, full height. Better for complex content or forms.

**Alert dialog** — Non-dismissable via backdrop click. Requires explicit user choice. For critical warnings.
