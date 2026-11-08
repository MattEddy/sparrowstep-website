# Sparrowstep website (`sparrowstep.com`)

Company site for Sparrowstep LLC — one page, Vite + React, no router. Read this file, then `src/App.jsx`; that's the whole site.

## Deploy — MANUAL

**A push to GitHub does NOT deploy.** The Vercel project (`sparrowstep-website`, linked via `.vercel/project.json`) has no Git connection — verified 2026-11-08: a push to `main` produced no new deployment. Deploy with:

```sh
vercel --prod --yes
```

It aliases `www.sparrowstep.com`. Re-check before trusting this (`vercel ls` right after a push — a new deployment appearing means Vercel linked the repo on its own, as it did with Locality). Confirm a deploy by grepping the live JS bundle for a new string, not by the CLI's exit.

## Structure

- `src/App.jsx` — header, hero, products grid, contact, footer.
- `src/App.css` — brand tokens on `:root` (`--primary` #4E46E5, `--secondary` #A200AA, `--accent` #6CEBFF), all layout.
- `src/index.css` — base styles + Google Fonts `@import`s (Inter for the site; one font per product card).
- `src/assets/` — logos.

## Product cards

Each product is a `.product-card.<name>` in `.products-grid`, in this order: **Subscriptix, Vivi, Crossleague**. Each card wears its product's own brand: its logo, and its font set on `.product-card.<name>` (Subscriptix → Assistant, Vivi → Public Sans, Crossleague → Merriweather). Card contents: logo, `.product-tagline`, `.product-description`, `.product-link` ("Visit <domain>").

- Logos are copied from the product's own website repo (Crossleague's is `crossleague-website/assets/logo-light.svg`). Wide wordmarks size by `width: 100%` + `max-width` rather than height.
- Grid is `repeat(auto-fit, minmax(300px, 1fr))` in a 1140px max-width — sized so three cards sit side by side on a laptop. A fourth card will wrap; re-check the grid when adding one.

## Accessibility

Audited and fixed 2026-10-06 (axe, WCAG 2.1 AA): the highlight cyan is lightened to `#B0F5FF` for contrast over the hero gradient; the page needs its `<main>` and single `<h1>`. Keep both when editing. Images must not exceed the phone width (`.header-logo` has `max-width: 100%` — it was 419px on a 375px phone).
