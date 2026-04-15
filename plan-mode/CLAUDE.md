# UI Rules — Drop this into your project's CLAUDE.md

Copy this entire file into your project root as `CLAUDE.md` and Claude will apply these rules automatically across every component it builds.

Customize the values in brackets `[like this]` for your project.

---

## Stack

- Framework: Next.js 14 App Router
- Styling: Tailwind CSS (no CSS modules, no inline styles)
- Language: TypeScript — always typed, never `any`
- Icons: lucide-react (preferred) or inline SVGs
- No UI library dependencies unless explicitly requested

## Component Standards

- Mobile-first responsive: design for mobile, then add `sm:`, `md:`, `lg:` breakpoints
- Every interactive element needs: hover state, focus-visible ring, active state
- Use semantic HTML: `nav`, `main`, `section`, `article`, `header`, `footer`, `aside`
- No hardcoded values — colors, sizes, and content via props or Tailwind tokens
- Export components as `export default` with named TypeScript props interface

## Brand

- Primary color: [your-color] (e.g., `violet-600`)
- Accent color: [your-accent]
- Font: [your-font-stack] (e.g., `font-sans` with Inter)
- Border radius style: [rounded / sharp] (e.g., `rounded-lg`)
- Dark mode: always include `dark:` variants

## Landing Page Rules

- `<h1>` appears exactly once per page — in the hero headline
- `<h2>` for section headings (Features, Pricing, Testimonials, etc.)
- `<h3>` for card/item titles within sections
- CTA buttons: always a primary (solid) + secondary (ghost) pair
- Social proof element within 2 sections of the hero
- Every section has a `<section>` wrapper with a meaningful `id` attribute

## Navigation Rules

- Sticky navbar: transparent → frosted glass after 20px scroll
- Active link: detected via `usePathname()`, not manual prop
- Mobile: hamburger below `md` breakpoint, hamburger animates to X
- Close mobile menu on route change

## Form Rules

- Validate on blur, not on keystroke
- Error messages: `text-red-500 text-sm mt-1`, below the field
- Submit button shows spinner on loading, not disabled state
- Always `autocomplete` attributes on auth fields
- Success states replace the form, don't just show a toast

## SEO Rules

- Every page exports a `Metadata` object (static or via `generateMetadata`)
- Title format: `[Page Title] | [Brand Name]` — max 60 characters
- Description: 120-158 characters, primary keyword included naturally
- `canonical` always set
- JSON-LD schema on: homepage (Organization), blog posts (Article), FAQ sections (FAQPage)
- `noindex` on: login, signup, dashboard, checkout, search-with-params pages

## Animation Rules

- Only animate `transform` and `opacity` — never layout properties
- Never use `transition-all` — always specify properties explicitly
- Easing: `ease-out` for enter, `ease-in` for exit
- Duration: 150ms for micro-interactions, 250ms for panels/modals, 350ms for page transitions
- Respect `prefers-reduced-motion`: wrap animations in `@media (prefers-reduced-motion: no-preference)`

## Accessibility Rules

- All images: descriptive `alt` text (empty `alt=""` for decorative)
- Icon-only buttons: `aria-label` required
- Form inputs: always associated `<label>` (via `htmlFor` or wrapping)
- Modal/drawer: `role="dialog"` + `aria-modal` + focus trap + Escape to close
- Color alone never conveys meaning — add icon or text alongside color indicators
