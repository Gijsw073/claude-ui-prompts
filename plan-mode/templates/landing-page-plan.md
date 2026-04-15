# Landing Page Plan Template

Use this in Plan Mode to give Claude a complete spec for building a full landing page.

```xml
<task>Build a complete landing page for [Product Name]</task>
<stack>Next.js 14 App Router, Tailwind CSS, TypeScript</stack>
<product>
  Name: [Product Name]
  Tagline: [One sentence value proposition]
  Primary CTA: [Button label + destination]
  Target user: [Who is this for]
</product>
<sections>
  1. Navbar (sticky, logo + 4 links + CTA button)
  2. Hero (headline, subtext, dual CTA, social proof bar)
  3. Features (6-card grid with icons)
  4. How it works (3-step numbered section)
  5. Testimonials (3-column card grid)
  6. Pricing (3 tiers, middle highlighted)
  7. FAQ (accordion, 6 items)
  8. CTA section (dark bg, closing argument)
  9. Footer (links, social, copyright)
</sections>
<style>
  Primary color: [hex or Tailwind color]
  Aesthetic: [minimal SaaS / bold startup / enterprise / creative]
  Dark mode: [yes / no]
</style>
<seo>
  Primary keyword: [your keyword]
  Meta description: [120-158 chars]
  JSON-LD: Organization + FAQPage
</seo>
<output>
  Single index.tsx with all sections as separate components in the same file.
  Export metadata object for SEO.
  All placeholder content clearly marked with [REPLACE] comments.
</output>
```
