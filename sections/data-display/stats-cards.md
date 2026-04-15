---
title: Stats Cards
category: data-display
tags: [stats, metrics, kpi, dashboard, cards]
tested-with: claude-sonnet-4-6
---

# Stats Cards

> KPI / metric overview cards — the first thing users see in any dashboard. Shows key numbers at a glance.

---

## Prompt

```xml
<task>Build a stats cards row for a dashboard</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Row of 4 stat cards, responsive grid (4 col desktop, 2 col tablet, 1 col mobile)
- Each card: metric label, large value, optional unit, trend indicator (% vs last period)
- Trend: green arrow-up for positive, red arrow-down for negative, neutral for flat
- Optional sparkline mini-chart inside card (SVG path, no chart library)
- Cards accept a typed array prop: { label, value, unit?, change?, trend?: 'up'|'down'|'flat' }[]
</requirements>
<style>
- Card: white bg, border, rounded-xl, p-5, shadow-sm
- Value: text-3xl font-bold, tight tracking
- Trend badge: colored pill (emerald-50/emerald-700 for positive)
- Sparkline: 60x30px SVG, accent color stroke, no fill or subtle fill
</style>
<output>Single .tsx file, export default StatsCards, sparkline as optional SVG component</output>
```

---

## Plan Mode Version

```
## Stats Cards Rules
- Always 4 cards — if fewer metrics, leave cards blank rather than stretching
- Value formatted: use Intl.NumberFormat for large numbers (1,234,567 not 1234567)
- Trend: positive = emerald, negative = red, flat = zinc
- Never hardcode values — always accept typed props
- Sparkline is optional but increases perceived value significantly
- Cards at same height: use grid, not flexbox (prevents height mismatch)
```

---

## Variants

**With chart below cards** — Area or line chart beneath the stats row showing the same metrics over time.

**Horizontal card** — Icon left, number + label right. More compact, fits more metrics per row.

**With progress bars** — Adds a progress bar beneath each metric showing % of goal reached.

---

## SEO Notes

Dashboard stats are internal pages — `noindex` by default. Focus on performance (fast number rendering) over SEO.
