# Assets and their terms

The code in this repository is MIT-licensed (`LICENSE`). The assets below are
not: each keeps its own terms.

## Photographs — Pexels License

Four photographs from Pexels, downloaded into the project (never hot-linked),
then cropped for their frames. Only the processed frames are in this
repository; the original downloads are not. Each photo page was checked on
2026-11-06 (pages and edits: `PHOTOS.md`).

| Files (`public/photos/`) | Pexels photo | Photographer |
|---|---|---|
| `hero-towel-wide-*.{avif,webp}`, `hero-towel-tall-*.{avif,webp}` | [20405689](https://www.pexels.com/photo/barber-putting-a-towel-on-the-customers-face-20405689/) | Mathias Reding |
| `room-evening-*.{avif,webp}` | [9146943](https://www.pexels.com/photo/interior-of-hairdresser-saloon-9146943/) | Лена Gromakova |
| `detail-scissors-*.{avif,webp}` | [15437571](https://www.pexels.com/photo/hairdresser-working-on-elderly-customer-15437571/) | Alex Albert |

**Terms (Pexels License, https://www.pexels.com/license/).** Free to use and
modify, commercially or not, attribution not required. Not allowed: selling
unaltered copies, redistributing or selling the photos on other stock-photo or
wallpaper platforms, implying endorsement by the people shown, or using them in
an offensive way. **If you build your own business site from this starter,
replace these with photos of your own shop** — nobody shown works at your shop.

## Not in this repository (installed by `npm install`)

| Package | Licence | Notes |
|---|---|---|
| `@profitstudio/booking-engine` 2.0.0-beta.3 | MIT | The booking engine and the packaged dashboard |
| `react`, `react-dom` | MIT | |
| `@fontsource/instrument-serif`, `@fontsource-variable/geist`, `@fontsource-variable/geist-mono` | OFL-1.1 | Typefaces |

Fonts are bundled into your build by Vite; the SIL Open Font License 1.1 allows
that (keep the fonts' licence files in `node_modules` — no action needed).

## Original work (MIT, see LICENSE)

- `public/favicon.svg` — drawn in SVG for this starter.
- The optional black-and-white photo style is a CSS filter (`--photo-filter-mono` in `src/styles/tokens.css`, chosen in Website → Brand → Photos).
