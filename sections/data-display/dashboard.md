---
title: Dashboard Grid Layout
category: data-display
tags: [dashboard, grid, layout, widgets, overview]
tested-with: claude-sonnet-4-6
---

# Dashboard Grid Layout

> Full dashboard page layout — stat cards, charts placeholder, activity feed, and quick actions in a responsive grid.

---

## Prompt

```xml
<task>Build a full dashboard overview page layout</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Responsive CSS grid layout for dashboard widgets
- Top row: 4 KPI stat cards (full width)
- Middle row: main chart area (2/3 width) + recent activity list (1/3 width)
- Bottom row: two equal-width panels (e.g., top items list + quick actions)
- Each widget is a card (white bg, border, rounded-xl, shadow-sm)
- Grid collapses to single column on mobile
- No chart library — use placeholder div with "Chart coming soon" or SVG mock
</requirements>
<style>
- Grid: 12-column CSS grid, gap-6
- Cards: bg-white dark:bg-zinc-900, border border-zinc-200 dark:border-zinc-800
- Widget headers: border-b, p-4, flex justify-between, title left, action link right
- Mobile: all widgets full-width, stacked
</style>
<output>Single .tsx file showing the grid structure with placeholder content, export default DashboardPage</output>
```

---

## Plan Mode Version

```
## Dashboard Layout Rules
- 12-column CSS grid — never flexbox for the outer dashboard grid
- Widget structure: header (title + action) + content area, separated by border-b
- Stat cards always span full width (top of page)
- Main chart widget: col-span-8, Activity: col-span-4 on desktop
- All cards same border-radius and shadow — visual consistency
- Loading: each widget independently shows skeleton (not full-page spinner)
- Never nest grids more than 2 levels deep
```

---

## Variants

**Drag-and-drop grid** — Widgets are reorderable. Requires react-grid-layout or similar.

**Tabbed dashboard** — Top nav tabs switch between Overview / Analytics / Reports views.

**Minimal 2-column** — Just stats + activity. Clean, fast to build for MVPs.
