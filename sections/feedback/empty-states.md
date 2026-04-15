---
title: Empty States
category: feedback
tags: [empty-state, zero-state, onboarding, ux, feedback]
tested-with: claude-sonnet-4-6
---

# Empty States

> Friendly zero-data states that guide users to take the next action instead of showing a blank screen.

---

## Prompt

```xml
<task>Build an empty state component for various contexts</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Centered layout: illustration/icon, title, description, primary CTA button
- Multiple variants: no-data, no-results (search), no-access (permissions), error
- Illustration: either SVG inline or a simple icon in a large colored circle
- Customizable: title, description, CTA label, CTA href/onClick, icon — all as props
- Optional secondary link below primary CTA
- Works inside any container (full-page, card, table body, sidebar)
</requirements>
<style>
- Centered: flex flex-col items-center text-center, py-16
- Icon circle: h-16 w-16, bg-accent/10, icon in accent color
- Title: text-lg font-semibold, zinc-900 dark:white, mt-4
- Description: text-sm zinc-500, mt-2, max-w-xs
- CTA: standard primary button, mt-6
</style>
<output>Single .tsx file, export default EmptyState, all fields as optional props with sensible defaults</output>
```

---

## Plan Mode Version

```
## Empty State Rules
- Never show a blank container — always render an empty state
- Props: icon?, title, description?, action?: { label, onClick | href }, secondaryAction?
- Default icon: inbox or folder from lucide-react
- Empty state inside a table: colspan all columns, center the component
- Search empty state: show the search term in the message ("No results for "foo"")
- Error state: red icon, "Something went wrong" title, "Try again" button that retries
- No access state: lock icon, contact support or upgrade CTA
```

---

## Common Empty State Messages

| Context | Title | Description |
|---------|-------|-------------|
| No projects | "No projects yet" | "Create your first project to get started" |
| No search results | `No results for "${query}"` | "Try different keywords or clear your filters" |
| No notifications | "You're all caught up" | "No new notifications" |
| No access | "Access restricted" | "You don't have permission to view this page" |
| Error | "Something went wrong" | "An unexpected error occurred. Please try again." |

---

## Variants

**With illustration** — Replace icon with a custom SVG illustration. More personality, higher visual impact.

**Compact** — Small horizontal layout (icon left, text right). For use inside sidebars or small cards.

**Action-focused** — Large "+" button as the primary visual element. For list views where the next step is obvious.
