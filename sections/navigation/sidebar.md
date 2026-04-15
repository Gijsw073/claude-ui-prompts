---
title: Sidebar Navigation
category: navigation
tags: [sidebar, navigation, dashboard, app-layout, collapsible]
tested-with: claude-sonnet-4-6
---

# Sidebar Navigation

> Left-rail navigation for app dashboards — icon + label links, collapsible, with user profile at bottom.

---

## Prompt

```xml
<task>Build a sidebar navigation component for a dashboard app</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Fixed left sidebar, full viewport height
- Logo/brand at top
- Navigation sections with labels (e.g., "Main", "Settings")
- Each nav item: icon (lucide-react) + label, active state
- Collapsible: toggle button to collapse to icon-only mode (64px → 240px)
- User profile section at bottom: avatar, name, email, logout button
- Smooth collapse animation
</requirements>
<style>
- Background: zinc-950 or zinc-900 (dark sidebar is standard)
- Active item: accent color bg at low opacity, accent text
- Hover: subtle bg-zinc-800
- Collapsed state: hide labels, show only icons centered
- Bottom profile: border-t, compact layout
</style>
<output>Single .tsx file, nav items as typed prop, export default Sidebar</output>
```

---

## Plan Mode Version

```
## Sidebar Rules
- Always fixed left rail in dashboard layouts
- Two states: expanded (240px) and collapsed (64px icon-only)
- Toggle stored in localStorage so preference persists across routes
- Active detection via usePathname() — highlight exact matches
- Nav items typed: { href, label, icon: LucideIcon }[]
- User info at bottom, above nothing — pinned to bottom with mt-auto
- Never use overflow-hidden on sidebar — tooltips must escape in collapsed mode
```

---

## Variants

**Floating sidebar** — Not full-height, floats inside content area with rounded corners and shadow.

**Mobile drawer** — On mobile, sidebar becomes an off-canvas drawer triggered by hamburger in top bar.

**Multi-level sidebar** — Nav items with expandable sub-items (accordion style). Good for complex apps.
