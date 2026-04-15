# Component Plan Template

Use this when building a single complex component.

```xml
<task>Build a [component name] component</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<component>
  Name: [ComponentName]
  Purpose: [What it does in one sentence]
  Used in: [Which pages/sections use it]
</component>
<props>
  Required: [list required props with types]
  Optional: [list optional props with defaults]
  Children: [yes/no — does it accept ReactNode children]
</props>
<states>
  [List all UI states: default, hover, active, disabled, loading, error, empty, success]
</states>
<behavior>
  [Describe interactions, animations, keyboard behavior, accessibility requirements]
</behavior>
<constraints>
  - Single .tsx file
  - No external dependencies (or specify allowed ones)
  - Export as named export: export function [ComponentName]
  - Props interface exported as [ComponentName]Props
</constraints>
```
