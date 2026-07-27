import fs from "fs";
import path from "path";
import type { GalleryShot } from "./case-study-content";

// ---------------------------------------------------------------------------
// Automatic case-study galleries.
//
// Instead of hand-listing every screenshot, each project declares a filename
// PREFIX. At build time we scan /public/images/portfolio and register every
// file that starts with that prefix. Drop a new `<prefix>-something.png` into
// the folder and it appears in the matching gallery automatically — no code
// changes, no hardcoded image lists.
// ---------------------------------------------------------------------------

/** Project slug → screenshot filename prefix (files look like `<prefix>-<page>.png`). */
export const PROJECT_PREFIX: Record<string, string> = {
  "apex-analytics": "apex",
  "nextgen-bank": "nextgen",
  "lexford-law": "lexford",
  "neuron-ai": "neurogen",
  "savora-restaurant": "savorybites",
  "haven-homes": "havenhomes",
  luxora: "luxora",
  "pizza-palace": "pizzapalace",
  "taskly-app": "taskly",
  "brightsmile-dental": "brightsmile",
  "fitforge-gym": "fitforge",
  glamora: "glamora",
};

const PORTFOLIO_DIR = path.join(process.cwd(), "public", "images", "portfolio");

/** Suffixes (the part after the prefix) that make a good leading hero, in order. */
const HERO_PRIORITY = [
  "home",
  "dashboard",
  "storefront",
  "shop",
  "menu",
  "properties",
  "analytics",
  "overview",
  "solutions",
  "services",
  "product",
];

/** Tokens that should render in a phone mockup rather than a browser frame. */
const PHONE_TOKENS = new Set(["mobile", "app"]);

/** Words that have a canonical capitalization when title-casing a label. */
const SPECIAL_CASE: Record<string, string> = {
  ai: "AI",
  ui: "UI",
  ux: "UX",
  seo: "SEO",
  crm: "CRM",
  api: "API",
  faq: "FAQ",
  saas: "SaaS",
};

function toLabel(suffix: string): string {
  return suffix
    .split("-")
    .map((word) => SPECIAL_CASE[word] ?? word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/** Read every screenshot for a project's prefix, ordered with a sensible hero first. */
export function getProjectGallery(slug: string): GalleryShot[] {
  const prefix = PROJECT_PREFIX[slug];
  if (!prefix) return [];

  let files: string[];
  try {
    files = fs.readdirSync(PORTFOLIO_DIR);
  } catch {
    return [];
  }

  // Only clean, well-formed names: `<prefix>-<lowercase-tokens>.png`
  const matchRe = new RegExp(`^${prefix}-[a-z0-9-]+\\.png$`);
  const matches = files.filter((f) => matchRe.test(f));

  const rank = (file: string) => {
    const suffix = file.slice(prefix.length + 1, -".png".length);
    const idx = HERO_PRIORITY.indexOf(suffix);
    return idx === -1 ? HERO_PRIORITY.length : idx;
  };

  matches.sort((a, b) => {
    const ra = rank(a);
    const rb = rank(b);
    if (ra !== rb) return ra - rb;
    return a.localeCompare(b);
  });

  return matches.map((file) => {
    const suffix = file.slice(prefix.length + 1, -".png".length);
    const isPhone = suffix.split("-").some((t) => PHONE_TOKENS.has(t));
    return {
      src: `/images/portfolio/${file}`,
      label: toLabel(suffix),
      ...(isPhone ? { device: "phone" as const } : {}),
    };
  });
}
