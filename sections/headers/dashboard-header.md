---
title: Dashboard Header
category: headers
tags: [dashboard, header, stats, greeting, app-layout]
tested-with: claude-sonnet-4-6
---

# Dashboard Header

> Top section of a dashboard view — personalized greeting, date, summary stats, quick actions.

---

## Prompt

```xml
<task>Build a dashboard header / overview section for a web app</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Personalized greeting: "Good morning, [Name]" with current date
- 3-4 summary stat cards below the greeting (e.g., Total Users, Revenue, Active Sessions)
- Each stat: label, large value, percentage change vs last period (green up, red down)
- Optional quick action buttons top-right (e.g., "New project", "Export")
- Responsive: stats stack 2x2 on tablet, 1 col on mobile
</requirements>
<style>
- Greeting: text-2xl font-semibold
- Date: text-sm zinc-500, below greeting
- Stat cards: white bg with border, rounded-xl, p-5
- Change indicator: colored badge with arrow icon (↑ green, ↓ red)
- Subtle shadow on stat cards: shadow-sm
</style>
<output>Single .tsx file, stats as typed array prop, export default DashboardHeader</output>
```

---

## Plan Mode Version

```
## Dashboard Header Rules
- Greeting uses time-of-day: "Good morning/afternoon/evening, [Name]"
- Stats typed: { label, value, change: number, unit?: string }[]
- Positive change: text-emerald-600, arrow-up icon
- Negative change: text-red-500, arrow-down icon
- Neutral (0%): text-zinc-500, no arrow
- Actions top-right, hidden on mobile (moved to bottom or fab)
- Never hardcode values — always accept props
```

---

## Variants

**Minimal header** — Just greeting + one key metric. Clean for single-focus dashboards.

**With chart** — Sparkline or area chart inline in a stat card for trend visualization.

**With avatar and notifications** — User avatar + notification bell in top-right corner.
