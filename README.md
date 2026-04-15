# claude-ui-prompts

[![Stars](https://img.shields.io/github/stars/Gijsw073/claude-ui-prompts?style=flat-square)](https://github.com/Gijsw073/claude-ui-prompts/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)
[![Tested with Claude](https://img.shields.io/badge/Tested%20with-Claude%20Sonnet%204.6-blueviolet?style=flat-square)](https://claude.ai)

> **Production-ready UI components, one Claude prompt away.**

**[→ View demo site](https://gijsw073.github.io/claude-ui-prompts/)** · **[→ Interactive demo](https://gijsw073.github.io/claude-ui-prompts/demo.html)**

---

## The Problem

You open a new project. You need a hero section. You type something vague into Claude, get something generic, iterate 5 times, and still spend 30 minutes cleaning up the output.

**The fix:** use a prompt that was already engineered, tested, and refined to produce exactly what you need — first try.

## The Solution

`claude-ui-prompts` is a component library — but instead of giving you the code, it gives you the **prompt that generates the code**. Each prompt is:

- Tested against Claude Sonnet 4.6
- Structured in XML for maximum Claude comprehension
- Organized by UI section (landing page, navigation, forms, SEO...)
- Includes a **Plan Mode version** you can drop into your `CLAUDE.md`

## The Result

Copy prompt → paste into Claude → get a production-ready Tailwind + Next.js component. No iteration. No cleanup.

---

## Component Index

### 🏠 Landing Page
| Component | Prompt | Plan Mode |
|-----------|--------|-----------|
| Hero Section | [hero.md](sections/landing-page/hero.md) | ✅ |
| Features Grid | [features.md](sections/landing-page/features.md) | ✅ |
| Pricing Cards | [pricing.md](sections/landing-page/pricing.md) | ✅ |
| CTA Section | [cta.md](sections/landing-page/cta.md) | ✅ |
| Testimonials | [testimonials.md](sections/landing-page/testimonials.md) | ✅ |
| FAQ Accordion | [faq.md](sections/landing-page/faq.md) | ✅ |

### 🧭 Navigation
| Component | Prompt | Plan Mode |
|-----------|--------|-----------|
| Navbar | [navbar.md](sections/navigation/navbar.md) | ✅ |
| Sidebar | [sidebar.md](sections/navigation/sidebar.md) | ✅ |
| Mobile Menu | [mobile-menu.md](sections/navigation/mobile-menu.md) | ✅ |
| Breadcrumbs | [breadcrumbs.md](sections/navigation/breadcrumbs.md) | ✅ |

### 📋 Headers
| Component | Prompt | Plan Mode |
|-----------|--------|-----------|
| Page Header | [page-header.md](sections/headers/page-header.md) | ✅ |
| Section Header | [section-header.md](sections/headers/section-header.md) | ✅ |
| Dashboard Header | [dashboard-header.md](sections/headers/dashboard-header.md) | ✅ |

### 📝 Forms
| Component | Prompt | Plan Mode |
|-----------|--------|-----------|
| Login Form | [login.md](sections/forms/login.md) | ✅ |
| Sign Up Form | [signup.md](sections/forms/signup.md) | ✅ |
| Contact Form | [contact.md](sections/forms/contact.md) | ✅ |
| Newsletter | [newsletter.md](sections/forms/newsletter.md) | ✅ |

### 📊 Data Display
| Component | Prompt | Plan Mode |
|-----------|--------|-----------|
| Stats Cards | [stats-cards.md](sections/data-display/stats-cards.md) | ✅ |
| Data Table | [data-table.md](sections/data-display/data-table.md) | ✅ |
| Timeline | [timeline.md](sections/data-display/timeline.md) | ✅ |
| Dashboard Grid | [dashboard.md](sections/data-display/dashboard.md) | ✅ |

### 🌐 SEO + GEO _(unique — see below)_
| Component | Prompt | Plan Mode |
|-----------|--------|-----------|
| Meta Tags | [meta-tags.md](sections/seo-geo/meta-tags.md) | ✅ |
| Schema.org / JSON-LD | [schema-org.md](sections/seo-geo/schema-org.md) | ✅ |
| Open Graph Tags | [og-tags.md](sections/seo-geo/og-tags.md) | ✅ |
| Dynamic Sitemap | [sitemap.md](sections/seo-geo/sitemap.md) | ✅ |
| GEO Landing Pages | [geo-landing-pages.md](sections/seo-geo/geo-landing-pages.md) | ✅ |

### 💬 Feedback
| Component | Prompt | Plan Mode |
|-----------|--------|-----------|
| Toast Notification | [toast.md](sections/feedback/toast.md) | ✅ |
| Modal Dialog | [modal.md](sections/feedback/modal.md) | ✅ |
| Empty States | [empty-states.md](sections/feedback/empty-states.md) | ✅ |

---

## Quick Start

**Step 1** — Find the component you need in the index above

**Step 2** — Open the `.md` file, copy the prompt from the `## Prompt` section

**Step 3** — Paste into [Claude](https://claude.ai) or [Claude Code](https://claude.ai/code) and hit enter

That's it. You get a complete, production-ready component.

---

## Plan Mode (Drop into CLAUDE.md)

Every prompt includes a **Plan Mode version** — a compact instruction you can paste into your project's `CLAUDE.md` file. Claude will then follow these rules automatically across your entire codebase, without needing to repeat the prompt.

See the full drop-in template: [plan-mode/CLAUDE.md](plan-mode/CLAUDE.md)

```
# How to use it
1. Copy plan-mode/CLAUDE.md to your project root
2. Customize with your brand colors, fonts, preferred libraries
3. Claude will now apply these rules to every component it builds
```

---

## SEO + GEO — What's the Difference?

This repo includes prompts for both:

**SEO** (Search Engine Optimization) — optimizing for Google crawlers: meta tags, structured data, sitemaps, canonical URLs, Open Graph.

**GEO** (Generative Engine Optimization) — a newer discipline focused on optimizing content so that LLMs like Perplexity, ChatGPT Search, and Google AI Overviews cite and surface your content. This means: structured factual sentences, clear entity definitions, FAQ schemas, and content that answers questions directly.

See the full guide: [sections/seo-geo/README.md](sections/seo-geo/README.md)

---

## Stack

All prompts are optimized for:
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Tested with:** Claude Sonnet 4.6

Most prompts work with React without Next.js. Adaptations for other frameworks are welcome via PR.

---

## Contributing

Found a better prompt? Built a new component? See [CONTRIBUTING.md](.github/CONTRIBUTING.md).

Every merged PR gets credited in the component file.

---

## License

MIT — use freely, commercially, no attribution required.

---

_Built by a developer who was tired of bad first-drafts from Claude. Now the first draft is the final draft._
