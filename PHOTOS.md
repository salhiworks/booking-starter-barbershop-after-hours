# Photographs

Four licensed photographs, all from Pexels under the
[Pexels License](https://www.pexels.com/license/) (free to use and modify,
attribution not required — credited here anyway). No image-generation tool was
used. **This starter ships only the processed frames in `public/photos/`** — the
original downloads stay with the source project, so the repository never
redistributes an unaltered copy. Each was cropped for its frame (no colour
grade: the photos are already warm and low-lit) and written as AVIF + WebP at
three widths. Each page was checked on 2026-11-06 (License: Free).

| Served as (`public/photos/`) | Where | Source page | Photographer | Licence | Edits |
|---|---|---|---|---|---|
| `hero-towel-wide-{960,1600,2400}.{avif,webp}` (2.39:1) | Hero (`hero.photo`), tablets and wider | https://www.pexels.com/photo/barber-putting-a-towel-on-the-customers-face-20405689/ | Mathias Reding | Pexels License | Cropped below the back shelf: a small skull ornament and lettering on the barber's shirt are left out of frame |
| `hero-towel-tall-{480,720,960}.{avif,webp}` (4:5) | Hero on phones | same as above | Mathias Reding | Pexels License | A tall crop around the towel and hands, also below the shelf |
| `room-evening-{800,1280,1920}.{avif,webp}` (16:9) | The room (`shop.photo`) | https://www.pexels.com/photo/interior-of-hairdresser-saloon-9146943/ | Лена Gromakova | Pexels License | The left 80 % of the room: a brand sticker on the right-hand mirror and a poster of a person are left out of frame |
| `detail-scissors-{480,720,1060}.{avif,webp}` (4:5) | The room, detail (`shop.detail`) | https://www.pexels.com/photo/hairdresser-working-on-elderly-customer-15437571/ | Alex Albert | Pexels License | Only the barber and client: the window lettering of another shop, a crest on the mirror and a photographer's reflection are left out of frame |

Working copies (downloaded from images.pexels.com at 2400 px; kept with the
source project, not shipped in this starter): `pexels-20405689-mathias-reding.jpg`,
`pexels-9146943-lena-gromakova.jpg`, `pexels-15437571-alex-albert.jpg`.

## Rules these photos follow

- **Nobody photographed is presented as Marlowe staff.** The sample barber
  profiles are words only — no stand-in portrait, no tools dressed up as a
  person — and are labelled as samples until the owner adds the team with
  their own portraits (Website → The barbers). The hero and the detail show
  barbers and clients at work in other shops; their faces are turned away or
  incidental, the alt text describes the scene, and nothing on the page names
  them or says they work here.
- **Service photos are not stock.** The menu shows only the photos the owner
  adds per service in the dashboard (Services); with none, the menu is
  complete on its own.
- **No shopfront photo by default.** Every licensed storefront I found showed
  another shop's name, a barber pole (a cliché the brief rules out) or
  identifiable people, so "Hours & directions" shows the address and the hours
  only. The owner can add a photo of the real shopfront: Website → Hours &
  directions → Shopfront photo.
- **Natural colour by default.** The owner can choose black and white for
  every photo (Website → Brand → Photos), done by one CSS filter
  (`--photo-filter-mono` in `src/styles/tokens.css`).
- **Direction for replacements:** low, warm light; the shop at work with some of
  the room around it; no extreme close-ups of heads or clippers, no barber
  poles, no other businesses' logos. The hero's subject should sit near the
  middle — phones show a taller crop from the centre.
- Owner uploads never pass through `scripts/photos.mjs`: the engine resizes
  them (WebP, longest side 2400 px) and the site renders them in the same
  fixed-ratio frames with `object-fit: cover`.
