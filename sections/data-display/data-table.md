---
title: Data Table
category: data-display
tags: [table, data, sorting, pagination, dashboard]
tested-with: claude-sonnet-4-6
---

# Data Table

> Sortable, paginated data table with row selection and actions. The workhorse of any dashboard.

---

## Prompt

```xml
<task>Build a data table component for a dashboard</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Typed columns: { key, label, sortable?: boolean, render?: (value, row) => ReactNode }
- Typed rows: generic T extends Record
- Column header click: toggles sort asc/desc, shows sort arrow icon
- Row selection: checkbox per row + select-all in header
- Bulk action bar: appears above table when rows are selected
- Pagination: page info ("Showing 1-10 of 48"), prev/next buttons
- Empty state: centered illustration + message when no data
- Loading skeleton: animated pulse rows when isLoading=true
</requirements>
<style>
- Header: bg-zinc-50 dark:bg-zinc-900, text-xs uppercase tracking-wide, zinc-500
- Rows: hover:bg-zinc-50 dark:hover:bg-zinc-900/50, border-b
- Selected rows: bg-accent/5
- Bulk action bar: sticky top-0, accent background, white text
- Skeleton rows: animate-pulse, zinc-200 blocks
</style>
<output>Single .tsx file, fully generic typed component, export default DataTable</output>
```

---

## Plan Mode Version

```
## Data Table Rules
- Generic typed: DataTable<T extends Record<string, unknown>>
- Column render function for custom cell content (badges, avatars, actions)
- Sort state: { key: string; direction: 'asc' | 'desc' } | null
- Always include empty state and loading skeleton — never show blank rows
- Pagination: controlled (currentPage, onPageChange props)
- Select-all: tri-state (none / some / all) — indeterminate checkbox state
- Actions column always last, right-aligned, never sortable
```

---

## Variants

**Infinite scroll** — Replace pagination with intersection observer loading more rows.

**With filters** — Search input + filter dropdowns above the table.

**Expandable rows** — Click row to expand a detail panel beneath it.
