# AGENTS.md — sistemapp (Astro + Tailwind v4 + i18n)

## Commands

```bash
pnpm dev              # dev server at localhost:3000 (background: astro dev --background)
pnpm build            # static output to ./dist/
pnpm preview          # serve dist locally
pnpm check            # typecheck with @astrojs/check (TS 6.0)
```

## Architecture (high-signal facts)

- **Single-page per locale**: `src/pages/[...lang]/index.astro` renders all 5 sections (`#home`, `#experience`, `#projects`, `#skills`, `#contact`) via anclas. No recargas.
- **i18n**: `es` (default, no prefix) + `en` (prefixed `/en/`). Config in `astro.config.mjs` with `prefixDefaultLocale: false`.
- **Header** is inside `#home` (not in Layout) so anchor `#home` scrolls to top with header visible.
- **Navbar** is fixed bottom dock (`fixed bottom-6`), glass/blur, MDI icons, scroll-spy marks active section.
- **Layout** wraps everything in `.container` (67.5rem max-width, vertical rules) — ver `src/styles/global.css`.
- **JSON-LD** `schema.org/Person` in `<head>` for rich results.

## Gotchas an agent would miss

- **Header inside `#home`**: `Header.astro` lives in `Home.astro`, NOT in `Layout.astro`. Moving it breaks anchor scroll.
- **Order of headings**: `Header` handle uses `<p>` (not `<h2>`) so `<h1>` in Home stays first in DOM order.
- **Tailwind v4 uses `@theme static`**: tokens in `global.css` → both utilities AND CSS vars. Keyframes outside `@theme` or they get dropped.
- **`redirectToDefaultLocale` is invalid** with `prefixDefaultLocale: false` — blocks dev/build.
- **TypeScript 7 breaks `astro check`** → locked to TS 6.0 in package.json.
- **`sharp` required** for image optimization (pnpm doesn't hoist it from Astro deps).
- **`vite` needed in deps** for `loadEnv()` in config.
- **Avatar has white background** → glares on dark theme. Needs transparent PNG.

## File tree (key paths)

```
src/
├── components/
│   ├── App.astro           # composes 5 sections
│   ├── Header.astro        # handle + lang selector (inside #home)
│   ├── Navbar.astro        # fixed dock, scroll-spy, MDI icons
│   └── sections/           # Home, Experience, Projects, Skills, Contact
├── i18n/
│   ├── index.ts            # getI18N({ currentLocale })
│   ├── es.ts / en.ts       # ALL copy + SEO + placeholders (TODO)
├── layouts/Layout.astro    # shell, SEO, JSON-LD, .container wrapper
├── lib/locales.ts          # SECTIONS, localePrefix, localeStaticPaths
├── pages/
│   ├── [...lang]/index.astro  # single page per locale
│   └── 404.astro
├── styles/global.css       # @theme static + base + utilidades
└── lib/locales.ts
```

## Content placeholders (all in `src/i18n/{es,en}.ts`)

Search for `TODO`:
- `experience.items[]` — companies, roles, dates
- `projects.items[]` — names, descriptions, tags, links
- `skills.groups[]` — real stack
- `contact.email` + `contact.links[]` — real email/social

## Verification checklist

```bash
pnpm check      # 0 errors, 0 warnings, 0 hints
pnpm build      # 3 pages: /, /en/, 404.html
```

## Deploy

`pnpm build` → `dist/` → GitHub Pages (root: `https://dgarcia024.github.io/`).
Workflow: `.github/workflows/deploy.yml` on push to main/master.

## Branch

- `feature_diseno` (active) → push to GitHub
- `master` is behind