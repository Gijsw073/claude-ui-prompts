// This file was generated using prompts from claude-ui-prompts.
// Each section below was created by copying the prompt from the
// corresponding .md file and pasting it into Claude — no manual editing.

// Hero: sections/landing-page/hero.md
// Navbar: sections/navigation/navbar.md
// Features: sections/landing-page/features.md

import type { Metadata } from 'next'

// SEO: sections/seo-geo/meta-tags.md
export const metadata: Metadata = {
  title: 'claude-ui-prompts | Production-ready UI, one Claude prompt away',
  description:
    'A library of tested Claude prompts for every UI component — hero, navbar, pricing, dashboard, SEO, and more. Copy, paste, ship.',
  alternates: { canonical: 'https://github.com/gijswolfert/claude-ui-prompts' },
  openGraph: {
    title: 'claude-ui-prompts',
    description: 'Production-ready UI components, one Claude prompt away.',
    type: 'website',
  },
}

const features = [
  {
    icon: '⚡',
    title: 'First draft ships',
    description: 'Prompts are engineered and tested so Claude produces clean output on the first try.',
  },
  {
    icon: '📋',
    title: 'Plan Mode ready',
    description: 'Every prompt includes a CLAUDE.md version for persistent rules across your project.',
  },
  {
    icon: '🌐',
    title: 'SEO + GEO built in',
    description: 'Dedicated prompts for meta tags, JSON-LD schema, and Generative Engine Optimization.',
  },
  {
    icon: '📱',
    title: 'Mobile-first always',
    description: 'Every component is responsive by default — no extra work needed.',
  },
  {
    icon: '🎨',
    title: '30+ components',
    description: 'Landing pages, navigation, forms, data display, feedback — fully covered.',
  },
  {
    icon: '🔓',
    title: 'MIT licensed',
    description: 'Use freely in any project, commercial or personal. No attribution required.',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Navbar — generated with sections/navigation/navbar.md */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <span className="font-bold text-zinc-900 dark:text-white">claude-ui-prompts</span>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Features</a>
            <a href="#seo-geo" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">SEO/GEO</a>
            <a
              href="https://github.com/gijswolfert/claude-ui-prompts"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-500 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero — generated with sections/landing-page/hero.md */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-100/40 dark:from-violet-900/10 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-violet-600">
            claude-ui-prompts
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-7xl">
            Production-ready UI,{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
              one prompt away
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
            Tested Claude prompts for every UI component you&apos;ll ever build.
            <br />
            No iteration. No cleanup. The first draft ships.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/gijswolfert/claude-ui-prompts"
              className="w-full rounded-lg bg-violet-600 px-8 py-3 text-sm font-semibold text-white hover:bg-violet-500 transition-colors sm:w-auto"
            >
              Browse prompts
            </a>
            <a
              href="#features"
              className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 px-8 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors sm:w-auto"
            >
              See what&apos;s included
            </a>
          </div>
        </div>
      </section>

      {/* Features — generated with sections/landing-page/features.md */}
      <section id="features" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-3">What&apos;s inside</p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Everything you reach for, already written
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 text-2xl">{f.icon}</div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — generated with sections/landing-page/cta.md */}
      <section className="py-32 px-6 bg-zinc-950 dark:bg-black">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Start shipping better UI today
          </h2>
          <p className="mt-4 text-zinc-400">Free, open source, MIT licensed. No signup required.</p>
          <a
            href="https://github.com/gijswolfert/claude-ui-prompts"
            className="mt-10 inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            View on GitHub →
          </a>
        </div>
      </section>
    </main>
  )
}
