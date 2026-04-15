# Contributing to claude-ui-prompts

Thanks for wanting to contribute! This library grows stronger with every tested prompt added.

## What makes a good prompt

A prompt file earns its place in this library when:

1. **It was actually tested** — you ran it in Claude and the output was production-usable without manual editing
2. **It has a clear scope** — one component, one section, one clear output
3. **It includes variants** — at least 2-3 common variations of the component
4. **It has a Plan Mode version** — a compact version safe for `CLAUDE.md`

## How to add a prompt

1. Fork the repository
2. Create a new `.md` file in the appropriate `sections/` subfolder
3. Follow the frontmatter + structure from any existing prompt file
4. Test the prompt in Claude Sonnet 4.6 (the `tested-with` field)
5. Add an entry to the index table in `README.md`
6. Open a PR with the title: `feat: add [component-name] prompt`

## Frontmatter template

```yaml
---
title: Component Name
category: section-name
tags: [tag1, tag2, tag3]
tested-with: claude-sonnet-4-6
---
```

## File structure template

```markdown
# Component Name

> One-line description of what this component does and why it exists.

---

## Prompt

[XML-wrapped prompt]

---

## Plan Mode Version

[Compact version for CLAUDE.md]

---

## Variants

[2-4 variants]

---

## SEO Notes (if applicable)

[SEO guidance]
```

## What we don't accept

- Prompts that require paid APIs to use (unless clearly marked)
- Prompts that only work with a specific third-party library
- Duplicate components without a meaningful differentiation
- Prompts that haven't been tested and produce messy output

## Questions?

Open an issue or start a Discussion — happy to help you shape a prompt before you PR.
