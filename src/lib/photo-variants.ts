// Responsive variants of the website's own default photos, keyed by the
// default `src` used in src/content/site.ts. Sources and processing: PHOTOS.md.

export interface PhotoSet {
  avif: string;
  webp: string;
  width: number;
  height: number;
}

export interface PhotoVariants extends PhotoSet {
  /** Optional art-directed crop for narrow screens (below 1000px). */
  narrow?: PhotoSet;
}

export const PHOTO_VARIANTS: Readonly<Record<string, PhotoVariants>> = {
  '/photos/hero-towel-wide-1600.webp': {
    avif: '/photos/hero-towel-wide-960.avif 960w, /photos/hero-towel-wide-1600.avif 1600w, /photos/hero-towel-wide-2400.avif 2400w',
    webp: '/photos/hero-towel-wide-960.webp 960w, /photos/hero-towel-wide-1600.webp 1600w, /photos/hero-towel-wide-2400.webp 2400w',
    width: 1600,
    height: 669,
    narrow: {
      avif: '/photos/hero-towel-tall-480.avif 480w, /photos/hero-towel-tall-720.avif 720w, /photos/hero-towel-tall-960.avif 960w',
      webp: '/photos/hero-towel-tall-480.webp 480w, /photos/hero-towel-tall-720.webp 720w, /photos/hero-towel-tall-960.webp 960w',
      width: 720,
      height: 900,
    },
  },
  '/photos/room-evening-1280.webp': {
    avif: '/photos/room-evening-800.avif 800w, /photos/room-evening-1280.avif 1280w, /photos/room-evening-1920.avif 1920w',
    webp: '/photos/room-evening-800.webp 800w, /photos/room-evening-1280.webp 1280w, /photos/room-evening-1920.webp 1920w',
    width: 1280,
    height: 720,
  },
  '/photos/detail-scissors-720.webp': {
    avif: '/photos/detail-scissors-480.avif 480w, /photos/detail-scissors-720.avif 720w, /photos/detail-scissors-1060.avif 1060w',
    webp: '/photos/detail-scissors-480.webp 480w, /photos/detail-scissors-720.webp 720w, /photos/detail-scissors-1060.webp 1060w',
    width: 720,
    height: 900,
  },
};
