# Marlowe Barbers — visual system ("After Hours")

## Concept

A neighbourhood shop seen by lamplight: smoked walnut and espresso walls, warm
cream type, one amber lamp. The page reads like the opening of a film. A
letterboxed frame of a barber at work carries the headline, and the rest of
the page unfolds in quiet scenes: the menu, the room, a first visit, the
barbers and the way in.

"After Hours" describes the light, not the opening hours. The page never says
"tonight", "open late" or "after-hours appointments". Every open time and
"next chair" comes from the engine (`getOpeningTimes`, `getAvailability`).

Signature: **the cinema frame**. On wide screens the hero photo sits in a
2.39:1 letterbox with the headline set over its dark side in a large italic
serif. On phones it becomes a tall 4:5 frame, with the headline and the Book
button over the photo's lower third, so both show on the first screen.

Second voice: **starred words**. The owner writes `*word*` in any title and it
turns into the italic amber highlight (`Emphasis.tsx`, rendered as React
elements, never as HTML).

## Type

| Role | Face | Use |
|---|---|---|
| Display | Instrument Serif 400, roman + italic | Hero, section titles, service and barber names, closing line, booking step titles |
| Body / UI | Geist (variable, 400–700) | Paragraphs, buttons, fields, the booking sheet |
| Credit | Geist Mono (variable) | Kickers, prices, durations, step numbers, photo credits, uppercase at 0.14em |

The owner can switch headings to Geist 600 (Website → Brand → Heading style →
`html[data-headings='sans']`). Every face is self-hosted through Fontsource
(OFL-1.1, see `ASSETS.md`). Nothing loads from a font CDN.

Scale (`tokens.css`):
- `--text-hero` 52 → 144 px and `--text-2xl` 44 → 92 px (section titles).
- `--text-close` 48 → 120 px and `--text-name` 26 → 38 px.
- `--text-step-title` 32 → 44 px.
- Body `--text-base` 17 px, input 17 px (no iOS zoom).
- Display line height 0.92, tracking −0.015em.

## Colour

| Token | Default | Role |
|---|---|---|
| `--ground` | `#17110E` espresso | Page ground (owner: **Background**, `brand.board`) |
| `--surface` | `#211A16` (mixed) | Bands, booking sheet |
| `--surface-2` | `#2C231E` (mixed) | Chosen cards, hover |
| `--text` | `#F1E6D4` cream | Type, primary button |
| `--text-dim` | `#B8A994` | Secondary text |
| `--accent` | `#E6AE68` amber | The lamp (owner: **Highlight**, `brand.accent`): emphasis, selection, focus |
| `--field` | `#7A6A5C` | Input, day and time outlines |
| `--open` | `#7FC28B` | Open-now dot (always with words) |
| `--error` | `#F0A08A` | Error text |

The surfaces and lines are `color-mix()`ed from `--ground`, so an owner's
background colour carries through the whole page. The owner editor checks
Background against cream (≥ 7:1) and Highlight against Background (≥ 4.5:1)
before saving.

Contrast (WCAG 2.x, defaults):

| Pair | Ratio |
|---|---|
| text / ground | 15.2 : 1 |
| text / surface | 13.9 : 1 |
| text-dim / ground | 8.1 : 1 |
| text-dim / surface-2 | 6.7 : 1 |
| accent / ground | 9.5 : 1 |
| on-accent (espresso) / accent | 9.5 : 1 |
| on-action (espresso) / cream button | 15.2 : 1 |
| field / surface (UI) | 3.3 : 1 |
| error / surface | 8.4 : 1 |

The admin dashboard is branded only through `src/admin-theme.css`:
- light mode: `#8A5524` with white text, 6.2 : 1;
- dark mode: `#E6AE68` with `#17110E` text.

## Space, shape and depth

- Spacing: a 4 → 144 px scale. Sections pad 72 → 152 px. The gutter is 20 → 56 px. Content width maxes at 1400 px.
- Shape: square photo frames; buttons 6 px radius; the booking sheet 14 px on its top corners (phones).
- Rules: hairlines are 1 px `--line`; rules that carry meaning are 1.5 px `--line-strong`.
- Depth comes from light, not shadow:
  - a bottom scrim on photos (`--scrim-photo`), and a side scrim behind the desktop hero headline (`--scrim-side`);
  - a soft amber glow under the closing line (`--lamp-glow`);
  - the only real shadow is the booking sheet's.
- Breakpoints: 380 px (very small phones), 720 px (tablet: the 16:9 hero), 1000 px (desktop: the 2.39:1 hero and two-column sections). The booking sheet becomes a side panel at 900 px.

## Composition

1. **Header**: italic serif wordmark, plain nav (Menu, The room, Barbers,
   Visit), and a cream Book button.
2. **Hero**: the cinema frame (4:5 phone → 16:9 → 2.39:1, at most 820 px tall
   on short desktops), kicker and headline over the photo. Below it are the
   lede, Book, and a bordered **Next chair** card with the next open time
   from the engine.
3. **On the menu**: a list of engine services. Each row has the serif name, a mono price
   and duration, and a description. On hover or focus the name turns amber
   and "See times →" appears. On touch it is always visible. A row opens booking
   with that service chosen.
4. **Book an appointment**: the surface band with the three steps
   (01 Choose · 02 Pick a time · 03 Confirm by email), the in-page entry
   point, and the contact card when online booking is off.
5. **The room**: the evening room in a wide frame, the owner's notes, and a
   tall detail photo.
6. **A first visit, scene by scene**: the owner's steps numbered with
   italic amber Roman numerals. The title counts them in words.
7. **Barbers**: a text roster (name, role, note). Portraits appear only once the owner
   uploads them. Labelled "Sample" until the owner saves their own.
8. **Kind words**: hidden until the owner saves real quotes.
9. **Hours & directions**: the address large, the week's hours from the engine
   with today in amber, an open-now line, and a tall photo frame. In demo/preview
   the details carry a "Sample details" tag.
10. **Closing and footer**: "See you in the *chair*." over the lamp glow with
    the Book button, then the shop's details and a discreet Staff login.

While online booking is off (or can't load), every Book button says
"How to book" and leads to the `#book` section's contact details.

## The booking sheet

A native modal `<dialog>` at `#book` (`BookingSheet.tsx`, `src/lib/dialog.ts`).
The flow and reducer are the shared starter flow, unchanged. Only the styling is After Hours.

Layout:
- Phones: full height (94 dvh) with rounded top corners.
- From 900 px: a 36 rem panel on the right.
- Every Book action opens it. ✕, Esc, Back or a click beside the panel close it, and focus returns to the button that opened it.

Styling:
- The panel is the `--surface` colour, the progress bar amber, and step titles in serif.
- Choice names are in italic serif.
- The selected day, the chosen time and the active part-of-day tab are amber with espresso text.
- Fields sit on the ground colour with an amber focus ring. The done "ticket" has amber captions.
- Days come as a 14-day strip from today with open-time counts (closed and full days dashed), plus a Month view.
- Times are grouped morning / afternoon / evening, as tabs past 18 times.
- Time slots are at least 48 px tall.

## Motion

Few and slow, like a lamp warming up.

- **Hero**: the photo "develops" once, with an opacity fade and a 1.03 → 1 scale over 1.1 s. The kicker, headline, lede and action then rise 12 px, staggered 90 ms. Content is never hidden waiting for JavaScript.
- **Menu rows**: the name warms to amber, "See times →" slides in and the arrow nudges 3 px.
- **Booking sheet**: slides up (phones) or in from the right (wide). Each step slides in.
- Nothing animates on scroll, nothing scroll-jacks, and nothing delays booking.
- `prefers-reduced-motion: reduce` turns every animation and transition off.

## Photography

Low, warm light, with the shop at work and the room around it. Natural colour by
default. The owner can choose black and white for every photo (Website →
Brand → Photos → `html[data-photos='mono']` → `--photo-filter-mono`).

Frames are art-directed with `<picture>`:
- The hero has a 2.39:1 wide crop and a separate 4:5 crop for screens under 720 px (`photo-variants.ts` `narrow`).
- Every frame ships as AVIF + WebP at three widths.

Rules:
- No barber poles, skulls or other businesses' logos.
- Nobody photographed is presented as staff.

Sources and licences: `PHOTOS.md`.
