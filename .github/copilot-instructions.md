# Forlantis Power Solutions — Development Guide

## Scaffolding Complete ✓

The React SPA structure has been created with:
- Vite development server
- React Router for navigation
- Design system (navy + gold branding)
- Reusable component library
- Page templates
- Data files for products, stats, testimonials

## Next Steps

1. **Copy design assets** from `/Users/christinalu/Desktop/Forlantis Power Design System/`:
   - Icons: `assets/icons/` → `src/assets/icons/`
   - Photos: `assets/photos/` → `public/images/`

2. **Update data files** with your content:
   - `src/data/products.js` — Add full product specs
   - `src/data/stats.js` — Update metrics and testimonials

3. **Customize pages**:
   - Import and use photos in Hero, ProductGrid, Solutions sections
   - Add routes for product detail pages if needed

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Run development server**:
   ```bash
   npm run dev
   ```

## CSS Token System

Colors are defined in `src/styles/tokens.css` as CSS variables:
- `--navy-900`, `--navy-800`, etc. (Navy scale)
- `--gold-500`, `--gold-400`, etc. (Gold scale)
- `--white`, `--gray-100`, etc. (Neutrals)

Update these values if brand colors change.

## Component Usage

### Button
```jsx
<Button variant="primary">Click me</Button>
<Button variant="secondary">Secondary</Button>
```

### StatBlock
```jsx
<StatBlock value="120K+" label="Units in service" />
```

### Card
```jsx
<Card>
  <h3>Product Name</h3>
  <p>Description</p>
</Card>
```

### SpecRow
```jsx
<SpecRow label="Voltage Rating" value="Up to 40.5 kV" />
```

## Build for Production

```bash
npm run build
```

Output goes to `dist/` for deployment.
