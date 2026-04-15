# Plan Mode Templates

Claude's Plan Mode lets you paste persistent instructions into a `CLAUDE.md` file so Claude follows your UI rules automatically — across every component, every session.

## Quick Setup

1. Copy [CLAUDE.md](CLAUDE.md) to your project root
2. Edit the `[bracketed]` values to match your brand
3. Start Claude Code — it will read the file automatically

From this point, every component Claude builds follows your rules without you having to repeat them.

## How it Works

When Claude Code starts, it reads `CLAUDE.md` from your project root. The rules you define there become persistent instructions — like a standing brief. You write them once, Claude applies them everywhere.

This is especially powerful for UI work because you're never:
- Repeating "use Tailwind, mobile-first" in every prompt
- Getting components with `transition-all` or hardcoded colors
- Forgetting to add `aria-label` to icon buttons

## Templates

| Template | Use for |
|----------|---------|
| [CLAUDE.md](CLAUDE.md) | Full UI rules — drop into any Next.js project |
| [templates/landing-page-plan.md](templates/landing-page-plan.md) | Planning a complete landing page build |
| [templates/feature-plan.md](templates/feature-plan.md) | Planning a new app feature |
| [templates/component-plan.md](templates/component-plan.md) | Planning a single complex component |

## Per-Prompt Plan Mode

Every prompt file in `sections/` includes a **Plan Mode Version** — a compact version of the prompt designed to go into `CLAUDE.md` rather than be used once. These are shorter and work as standing rules.

Example: instead of pasting the full hero prompt every time you need a hero section, add the Plan Mode version to your `CLAUDE.md` once and Claude will build heroes correctly by default.
