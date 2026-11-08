# Sparrowstep website — Matt's context

Read `CLAUDE.md` first (deploy is manual: `vercel --prod --yes`).

## Recent Session
**Date:** 2026-11-08
**Branch:** main

Matt: *"We need to add Crossleague to the Sparrowstep website."*

- Added a third product card for Crossleague (`src/App.jsx`), using the wordmark from `crossleague-website/assets/logo-light.svg` (copied to `src/assets/crossleague-logo.svg`), the app site's own tagline ("Advanced Crossword Time Tracking and Community"), Merriweather as the card font (added to `src/index.css`), and a link to `crossleague.app`. Blurb was written fresh; Matt accepted it as-is.
- Widened the grid (`src/App.css`: max-width 1000 → 1140px, min column 320 → 300px) so the three cards sit in one row on desktop instead of wrapping 2+1.
- Noticed and fixed a pre-existing phone bug: the page scrolled sideways because `.header-logo` rendered 419px wide on a 375px screen. Added `max-width: 100%`; re-measured scrollWidth = viewport.
- Verified with screenshots (desktop + phone, local and live). Committed `ad1cd85`, pushed, deployed with `vercel --prod` — confirmed the push alone did NOT trigger a Vercel build (repo not Git-connected). Deploy accidentally ran twice (identical builds; harmless).

### Open Items / Next Steps
- None.
