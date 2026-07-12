# Forlantis Power Solutions — React SPA

A professional single-page application for Forlantis Power Solutions, a B2B power infrastructure company.

## Features

- **React 18** with Vite for fast development
- **React Router** for multi-page navigation
- **Design System**: Navy + Gold branding with reusable components
- **Responsive layout** with utility-first CSS tokens
- **Data-driven**: Products, specs, stats managed in separate data files
- **Component Library**: Button, Badge, Card, StatBlock, SpecRow, Hero, ProductGrid, StatsSection, CTA

## Project Structure

```
src/
  ├── components/
  │   ├── layout/       (Header, Footer, Navigation)
  │   ├── ui/           (Button, Badge, Card, StatBlock, SpecRow)
  │   └── sections/     (Hero, ProductGrid, SpecsTable, StatsSection, CTA)
  ├── pages/            (Home, Products, Solutions, About, Contact)
  ├── styles/           (tokens.css, globals.css, components.css)
  ├── data/             (products.js, stats.js, index.js)
  └── assets/icons/     (Brand glyphs placeholder)
public/
  ├── index.html
  └── images/           (Local image assets)
```

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the app.

## Build

```bash
npm run build
```

## Color Tokens

- **Navy**: Primary brand color (`--navy-900`, `--navy-800`, etc.)
- **Gold**: Accent color (`--gold-500`, `--gold-400`, etc.)
- **Neutral**: Grays for text and borders

## Customization

- Edit `src/data/` files to update products, stats, and testimonials
- Update `src/styles/tokens.css` to modify colors and typography
- Add images to `public/images/` for use in sections
- Add icons to `src/assets/icons/` for custom glyphs
