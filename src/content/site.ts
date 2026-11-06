import { defineSiteContent } from '@profitstudio/booking-engine';

/**
 * What the owner can change in the dashboard (Website). The defaults are the
 * site's own copy and photos: until the owner publishes, the page shows
 * exactly these.
 *
 * Not here on purpose: services, prices, durations, opening hours, the
 * business name, address, phone and email — they come from the engine.
 *
 * Titles marked "*emphasis*" set the starred words in the lamp-lit italic
 * (src/components/Emphasis.tsx) — plain text, never HTML.
 *
 * Never rename or reuse an id once the site is live (the owner's text is stored
 * under it). Add a new id instead.
 *
 * This file is also imported by vite.config.ts (build-time content), so it may
 * only import from the engine package.
 */

const SEO_HELP =
  'Search engines and link previews show new text after the website is next deployed.';
const EMPHASIS_HELP = 'Put *stars* around a word or two to set them in the italic highlight.';

export const siteContent = defineSiteContent({
  sections: [
    {
      id: 'brand',
      label: 'Brand',
      description: 'Logo, colours, the heading style and the photo style. The layout stays the same.',
      fields: [
        {
          type: 'image',
          id: 'brand.logo',
          label: 'Logo',
          help: 'Optional. A wide, light-coloured logo on a transparent background (it sits on the dark header). Until you add one, the shop name is set in the heading typeface.',
          default: null,
          aspectRatio: 4,
        },
        {
          type: 'color',
          id: 'brand.board',
          label: 'Background',
          help: 'The dark ground of the whole site. Cream text sits on it, so it must stay dark.',
          default: '#17110E',
          contrastWith: '#F1E6D4',
          minContrast: 7,
        },
        {
          type: 'color',
          id: 'brand.accent',
          label: 'Highlight',
          help: 'The lamp: the italic highlights, the chosen day and time, and focus rings. It sits on the dark background, and dark text sits on it, so it must stay light.',
          default: '#E6AE68',
          contrastWith: '#17110E',
          minContrast: 4.5,
        },
        {
          type: 'choice',
          id: 'brand.headings',
          label: 'Heading style',
          default: 'serif',
          options: [
            { value: 'serif', label: 'Editorial serif', description: 'Fine, cinematic headlines with a true italic (Instrument Serif).' },
            { value: 'sans', label: 'Modern sans', description: 'Clean and confident (Geist).' },
          ],
        },
        {
          type: 'choice',
          id: 'brand.photos',
          label: 'Photos',
          default: 'natural',
          options: [
            { value: 'natural', label: 'Natural colour', description: 'Every photo as you uploaded it.' },
            { value: 'mono', label: 'Black and white', description: 'Every photo, yours included, in black and white so different photos read as one set.' },
          ],
        },
      ],
    },
    {
      id: 'seo',
      label: 'Search & sharing',
      description: 'How the site appears in search results and link previews.',
      fields: [
        {
          type: 'text',
          id: 'seo.title',
          label: 'Page title',
          help: SEO_HELP,
          default: 'Marlowe Barbers — Barbershop in Chicago',
          maxLength: 70,
          required: true,
        },
        {
          type: 'longText',
          id: 'seo.description',
          label: 'Description',
          help: SEO_HELP,
          default:
            'Cuts, fades, beard work and hot-towel shaves in Chicago. See the services and prices, check our hours and book an appointment online.',
          maxLength: 160,
          rows: 3,
          required: true,
        },
      ],
    },
    {
      id: 'hero',
      label: 'Hero',
      description: 'The first screen visitors see.',
      fields: [
        {
          type: 'text',
          id: 'hero.kicker',
          label: 'Small line above the headline',
          default: 'Marlowe Barbers · Chicago',
          maxLength: 48,
        },
        {
          type: 'text',
          id: 'hero.title',
          label: 'Headline',
          help: EMPHASIS_HELP,
          default: 'A good cut, *unhurried*.',
          maxLength: 48,
          required: true,
        },
        {
          type: 'longText',
          id: 'hero.lede',
          label: 'Introduction',
          default:
            'Cuts, fades, beard work and hot-towel shaves in a warm, lamp-lit room. Your appointment is yours alone — book it online in a minute.',
          maxLength: 200,
          rows: 3,
        },
        {
          type: 'text',
          id: 'hero.cta',
          label: 'Button',
          default: 'Book an appointment',
          maxLength: 24,
          required: true,
        },
        {
          type: 'image',
          id: 'hero.photo',
          label: 'Photo',
          help: 'A wide, atmospheric photo of the shop at work. Large screens show it as a wide film frame with the headline over its left side; phones show a taller crop from the middle, so keep the subject near the centre.',
          default: {
            src: '/photos/hero-towel-wide-1600.webp',
            alt: 'A barber lays a hot towel over a client’s face in a lamp-lit shop with framed pictures and a round mirror',
            width: 1600,
            height: 669,
          },
          aspectRatio: 2.39,
        },
      ],
    },
    {
      id: 'menu',
      label: 'Services',
      description: 'Services, prices and times come from Services in this dashboard.',
      fields: [
        { type: 'text', id: 'menu.title', label: 'Title', help: EMPHASIS_HELP, default: 'On the *menu*', maxLength: 40, required: true },
        {
          type: 'longText',
          id: 'menu.lede',
          label: 'Introduction',
          default: 'Straight prices and honest timings. Choose a service to see its open times.',
          maxLength: 200,
          rows: 3,
        },
      ],
    },
    {
      id: 'book',
      label: 'Booking',
      description: 'The booking section. The steps themselves are part of the site.',
      fields: [
        { type: 'text', id: 'book.title', label: 'Title', help: EMPHASIS_HELP, default: 'Book an *appointment*', maxLength: 40, required: true },
        {
          type: 'longText',
          id: 'book.lede',
          label: 'Introduction',
          default: 'Pick a service, then a day and a time, and confirm it with a 6-digit code.',
          maxLength: 200,
          rows: 2,
        },
        {
          type: 'text',
          id: 'book.pending',
          label: 'Message after a request',
          help: 'Shown when a client has confirmed their email and you still need to confirm the appointment.',
          default: "Request received — we'll confirm your appointment shortly.",
          maxLength: 90,
          required: true,
        },
        {
          type: 'text',
          id: 'book.confirmed',
          label: 'Message after an instant booking',
          help: 'Shown when instant confirmation is on (Settings).',
          default: "You're booked. See you in the chair.",
          maxLength: 90,
          required: true,
        },
      ],
    },
    {
      id: 'shop',
      label: 'The room',
      description: 'The atmosphere, and what a first-timer can expect.',
      fields: [
        { type: 'text', id: 'shop.title', label: 'Title', help: EMPHASIS_HELP, default: 'The *room*', maxLength: 40, required: true },
        {
          type: 'longText',
          id: 'shop.lede',
          label: 'Introduction',
          default:
            'Low lamps, deep chairs and a record playing — a room built for taking your time. Every appointment has its own slot, so nobody is rushed.',
          maxLength: 260,
          rows: 3,
        },
        {
          type: 'image',
          id: 'shop.photo',
          label: 'Photo of the room',
          help: 'A wide photo of your shop. Large screens show it as a wide film frame (2.39:1), phones at 4:3; the top and bottom may be cropped.',
          default: {
            src: '/photos/room-evening-1280.webp',
            alt: 'An empty barbershop in the evening: leather chairs, mirrors and warm wall lamps',
            width: 1280,
            height: 720,
          },
          aspectRatio: 16 / 9,
        },
        {
          type: 'image',
          id: 'shop.detail',
          label: 'Detail photo',
          help: 'Portrait (4:5): a moment of the work.',
          default: {
            src: '/photos/detail-scissors-720.webp',
            alt: 'A barber cuts an older client’s hair with scissors and a comb in a wood-panelled shop',
            width: 720,
            height: 900,
          },
          aspectRatio: 4 / 5,
        },
        {
          type: 'list',
          id: 'shop.notes',
          label: 'About the room',
          itemLabel: 'Note',
          maxItems: 4,
          fields: [
            { type: 'text', id: 'title', label: 'Title', default: '', maxLength: 32, required: true },
            { type: 'longText', id: 'text', label: 'Text', default: '', maxLength: 180, rows: 2 },
          ],
          default: [
            { title: 'The light', text: 'Warm lamps instead of strip lights: easy on the eyes, kind in the mirror.' },
            { title: 'The sound', text: 'Records through the day — soul, jazz, the odd surprise. Too loud? Say the word.' },
            { title: 'The pace', text: 'Your appointment is yours. No queue behind you and no rush out of the chair.' },
          ],
        },
        {
          type: 'list',
          id: 'shop.steps',
          label: 'A first visit, scene by scene',
          itemLabel: 'Scene',
          maxItems: 5,
          fields: [
            { type: 'text', id: 'title', label: 'Title', default: '', maxLength: 32, required: true },
            { type: 'longText', id: 'text', label: 'Text', default: '', maxLength: 180, rows: 2 },
          ],
          default: [
            { title: 'Arrive', text: 'Come at your time. Coffee, a glass of water, or just a seat.' },
            { title: 'Talk it through', text: "How you wear it, what's bugging you, what you'd like next time. Photos welcome." },
            { title: 'The work', text: 'Clippers, scissors or a razor — whatever the cut needs, and nothing it doesn’t.' },
            { title: 'The finish', text: 'A hot towel, a clean neckline and a look in the mirror together.' },
          ],
        },
      ],
    },
    {
      id: 'team',
      label: 'The barbers',
      description: 'Until you save your own team, the site shows sample profiles labelled as samples.',
      fields: [
        { type: 'text', id: 'team.title', label: 'Title', help: EMPHASIS_HELP, default: 'The *barbers*', maxLength: 40, required: true },
        {
          type: 'longText',
          id: 'team.lede',
          label: 'Introduction',
          default: 'You book a time, not a barber: one calendar for the shop, and a chair ready when you arrive.',
          maxLength: 200,
          rows: 2,
        },
        {
          type: 'list',
          id: 'team.members',
          label: 'Team',
          itemLabel: 'Barber',
          maxItems: 8,
          minItems: 1,
          fields: [
            { type: 'text', id: 'name', label: 'Name', default: '', maxLength: 40, required: true },
            { type: 'text', id: 'role', label: 'Speciality', default: '', maxLength: 48 },
            { type: 'longText', id: 'bio', label: 'Short bio', default: '', maxLength: 220, rows: 3 },
            {
              type: 'image',
              id: 'photo',
              label: 'Portrait',
              help: 'Portrait (4:5). Without one, the profile is shown as words only — never a stand-in photo.',
              default: null,
              aspectRatio: 4 / 5,
            },
          ],
          default: [
            {
              name: 'Theo R.',
              role: 'Fades, tapers & line-ups',
              bio: 'Precise fades that still look right in week three. Talks music if you want to, works in silence if you don’t.',
            },
            {
              name: 'Inez D.',
              role: 'Scissor work & longer hair',
              bio: 'Textured crops, grown-out styles and the patience to plan the next six weeks with you.',
            },
            {
              name: 'Marcus L.',
              role: 'Shaves & beard work',
              bio: 'Hot towels, a steady razor and beard shaping that suits your face, not a trend.',
            },
          ],
        },
      ],
    },
    {
      id: 'reviews',
      label: 'Kind words',
      description: 'This section appears on your site once you save quotes clients really wrote. The examples below are only a guide and are never shown to visitors.',
      fields: [
        { type: 'toggle', id: 'reviews.show', label: 'Show this section', default: true },
        { type: 'text', id: 'reviews.title', label: 'Title', help: EMPHASIS_HELP, default: 'Kind *words*', maxLength: 40, required: true },
        {
          type: 'list',
          id: 'reviews.items',
          label: 'Quotes',
          itemLabel: 'Quote',
          maxItems: 6,
          minItems: 1,
          fields: [
            { type: 'longText', id: 'quote', label: 'Quote', default: '', maxLength: 240, rows: 3, required: true },
            { type: 'text', id: 'name', label: 'Who said it', default: '', maxLength: 48 },
          ],
          default: [
            { quote: 'Best hot-towel shave I’ve had. Didn’t want to get out of the chair.', name: 'Example: a regular' },
            { quote: 'Booked on my phone in a minute, in the chair the same afternoon.', name: 'Example: a first-timer' },
          ],
        },
      ],
    },
    {
      id: 'visit',
      label: 'Hours & directions',
      description: 'Hours, address, phone and email come from Settings and Hours in this dashboard.',
      fields: [
        { type: 'text', id: 'visit.title', label: 'Title', help: EMPHASIS_HELP, default: 'Hours & *directions*', maxLength: 40, required: true },
        {
          type: 'longText',
          id: 'visit.directions',
          label: 'Getting here',
          default:
            'Tap Directions for the easiest route. Running late or need to move your appointment? Call us and we’ll sort it out.',
          maxLength: 280,
          rows: 3,
        },
        {
          type: 'image',
          id: 'visit.photo',
          label: 'Shopfront photo',
          help: 'Optional: your own shopfront, portrait (4:5), shown beside the opening hours.',
          default: null,
          aspectRatio: 4 / 5,
        },
      ],
    },
    {
      id: 'closing',
      label: 'Closing',
      description: 'The last screen before the footer, with the Book button.',
      fields: [
        { type: 'text', id: 'closing.title', label: 'Closing line', help: EMPHASIS_HELP, default: 'See you in the *chair*.', maxLength: 48, required: true },
      ],
    },
    {
      id: 'footer',
      label: 'Footer',
      fields: [
        {
          type: 'text',
          id: 'footer.note',
          label: 'Footer line',
          default: 'Cuts, fades, beard work and hot-towel shaves in Chicago.',
          maxLength: 100,
        },
      ],
    },
  ],
});

export type SiteContent = typeof siteContent;
