---
title: Timeline / Activity Feed
category: data-display
tags: [timeline, activity, feed, history, events]
tested-with: claude-sonnet-4-6
---

# Timeline / Activity Feed

> Vertical chronological event list — user activity, audit log, project history.

---

## Prompt

```xml
<task>Build a timeline / activity feed component</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<requirements>
- Vertical list of events with connecting line between items
- Each event: icon/avatar, event description, timestamp (relative: "2 hours ago")
- Group events by date ("Today", "Yesterday", specific date)
- Typed events: { id, type, description, user?, timestamp, icon? }[]
- Support different event types with different icon colors (success=green, error=red, info=blue)
- Load more button at bottom (or infinite scroll variant)
</requirements>
<style>
- Connecting line: 2px left border, zinc-200 dark:zinc-800
- Event dots: 8-10px circle with white center, colored by type
- Timestamp: text-xs zinc-400, relative time
- Icon in circle: 32px, colored bg at 10% opacity, icon in accent
- Group date header: text-xs uppercase zinc-500, with horizontal rules
</style>
<output>Single .tsx file, export default Timeline, events as typed prop</output>
```

---

## Plan Mode Version

```
## Timeline Rules
- Always group events by day — "Today", "Yesterday", then date strings
- Relative timestamps: use date-fns formatDistanceToNow or native Intl.RelativeTimeFormat
- Event type drives icon color: success=emerald, error=red, warning=amber, info=blue
- Connecting line: absolute positioned ::before on each item, not a separate element
- Load more: append to existing list — never replace (preserve scroll position)
- Empty state: "No activity yet" with subtle icon
```

---

## Variants

**Compact feed** — No connecting line, just a simple list with tight padding. Good for sidebars.

**Branching timeline** — Two columns for parallel tracks (e.g., design vs dev progress).

**With comments** — Each event is expandable to show threaded comments beneath it.
