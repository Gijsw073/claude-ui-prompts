# Feature Plan Template

Use this when adding a new feature to an existing app.

```xml
<task>Add [feature name] to the existing [app type] app</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<feature>
  Name: [Feature name]
  User story: As a [user], I want to [action] so that [outcome]
  Entry point: [Where user accesses this feature]
</feature>
<scope>
  New pages: [list routes]
  New components: [list components]
  API routes needed: [list endpoints]
  State management: [local state / context / external store]
</scope>
<constraints>
  - Follow existing file structure in /app and /components
  - Match existing design tokens (colors, spacing, typography)
  - Mobile-first, dark mode compatible
  - No new dependencies without explicit approval
</constraints>
<output>
  List files to create/modify in order of dependency.
  Start with types, then data layer, then UI components, then pages.
</output>
```
