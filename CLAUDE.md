# Forlantis Power Solutions — Website

Marketing site for Forlantis Power Solutions (substation equipment: power
transformers, GIS, circuit breakers, surge arresters, padmount transformers,
solid state transformers, vanadium flow batteries, synchronous condensers,
instrument transformers). React + Vite SPA, deployed to GitHub Pages.

## Commands

- `npm run dev` — start dev server (port 3000)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run deploy` — build and push `dist/` to the `gh-pages` branch (via the `gh-pages` package)

## Architecture

- **Routing**: `react-router-dom`'s `HashRouter` (see `src/App.jsx`), so routes
  render as `/#/products/...`. This avoids needing a `404.html` SPA fallback
  on GitHub Pages. `Header`/`Footer` are rendered once in `App.jsx` around
  `<Routes>`, shared across all pages.
- **Pages** (`src/pages/`): `Home`, `Products` (listing), `ProductDetail`
  (`/products/:slug`, one shared template for every product), `About`,
  `Contact`. Each page has a co-located `.css` file.
- **Components**: `src/components/layout/` (Header, Footer),
  `src/components/sections/` (Hero, CTA, ProductGrid, StatsSection, SpecsTable
  — page building blocks), `src/components/ui/` (Button, Card, Badge, Logo,
  SpecRow, StatBlock — small reusable primitives).
- **Product data** (`src/data/products.js`): every product is one object in
  the `PRODUCTS` array. `ProductDetail.jsx` renders whatever fields a product
  has, so adding a new field to one product must not break the others.
  Optional fields already supported by the template:
  - `gallery`: `[{ src, alt, caption, size? }]` — renders a clickable photo
    grid with a lightbox (keyboard nav: Escape/←/→). `size: 'sm'` shrinks a
    single image without affecting other products.
  - `ratingsTable`: `{ title, columns, rows, note }` — renders a horizontally
    scrollable spec/ratings table.
  - `whitepaper`: a URL string — renders a "Download Whitepaper (PDF)" button
    in the sidebar CTA card.
- **Design tokens** (`src/styles/tokens.css`): navy/gold color scale and
  font/spacing tokens (`--navy-950`, `--gold-500`, etc.), reused throughout.
  Prefer existing tokens over new hardcoded colors.

## Asset & image conventions (important, easy to get wrong)

`vite.config.js` sets `publicDir: 'src/assets'` and `base: '/forlantisgrid/'`
— this repo does **not** use the default Vite `public/` folder at all.

- All static assets (photos, PDFs, icons served at runtime) live **flat** in
  `src/assets/` — no subfolders like `images/photos/`.
- Reference them at runtime with `import.meta.env.BASE_URL + 'filename.ext'`,
  **not** a hardcoded `/images/photos/filename.ext'` or `/filename.ext'`
  path. In `src/data/products.js` there's a `const BASE =
  import.meta.env.BASE_URL` at the top of the file — use `BASE + 'file.jpg'`
  for any new product image/gallery/whitepaper field.
- A separate, smaller set of assets (About page pillar icons) are imported as
  real ES modules (`import iconFactory from '../assets/icon-factory.png'`)
  and bundled/hashed by Vite normally — that pattern is fine to keep using
  for icons that are always present, but don't mix the two patterns for the
  same asset.
- `dist/` is committed directly to `main` (not just gitignored/generated) —
  be aware a local `npm run build` will modify tracked files with new content
  hashes. Don't commit local `dist/` rebuilds as part of unrelated feature
  work; if you build to verify changes, run `git checkout -- dist/ && git
  clean -fd dist/` afterward to discard the local build noise before
  committing/pushing.

## Content conventions

- No em dashes (—) anywhere — in visible copy or code comments. Use commas,
  periods, semicolons, or `·` (the separator already used in headings like
  "IEC · ANSI/IEEE") instead.
- Product copy should be traceable to Forlantis's own disclosed source
  material (spec sheets, the company presentation deck). Content from
  Forlantis's own named partners (e.g. XD Group) is fine to use directly.
  Undisclosed third-party branding/certificates incidental to an extracted
  image or PDF (e.g. another company's logo or certificate) needs explicit
  sign-off before use — crop, blur, or exclude otherwise.

## Working on this repo

- Verify UI changes with a real browser pass (Playwright is the tool used in
  this session) rather than relying on the build succeeding — check the
  actual rendered page and the console for errors. Remember routes are
  hash-based (`/#/products/...`), and the dev server serves under the
  `/forlantisgrid/` base path.
- This repo has a collaborator pushing directly to `main` (asset
  restructuring, copy tweaks) outside of PRs. Before rebasing a feature
  branch, re-check `origin/main` for new commits — it has moved more than
  once mid-session. Re-run `gh pr view <n> --json mergeable,mergeStateStatus`
  after pushing a rebase to confirm the PR is actually clean.
