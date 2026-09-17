// ---------------------------------------------------------------------------
// Location (city) landing pages for US local SEO.
// Each city has UNIQUE intro/context copy so pages are not duplicate content.
// Targets keywords like "web design agency <city>", "web development company
// <city>", "<city> web design", etc.
// ---------------------------------------------------------------------------

export interface Location {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  /** Unique 2–3 sentence intro (mentions the city + local business context). */
  intro: string;
  /** Local industries/context for a unique "who we serve" line. */
  localFocus: string;
}

export const locations: Location[] = [
  {
    slug: "new-york",
    city: "New York",
    state: "New York",
    stateAbbr: "NY",
    intro:
      "In a market as fast and competitive as New York, your website has seconds to earn trust. We build custom, high-performance sites for NYC startups, agencies, and established brands that need to stand out from Manhattan to Brooklyn.",
    localFocus: "finance, media, fashion, and tech startups across the five boroughs",
  },
  {
    slug: "los-angeles",
    city: "Los Angeles",
    state: "California",
    stateAbbr: "CA",
    intro:
      "Los Angeles brands live or die by their visual identity. We design and develop cinematic, conversion-focused websites for LA companies in entertainment, e-commerce, and lifestyle — built to look as premium as the market demands.",
    localFocus: "entertainment, DTC e-commerce, and lifestyle brands across LA and Southern California",
  },
  {
    slug: "chicago",
    city: "Chicago",
    state: "Illinois",
    stateAbbr: "IL",
    intro:
      "Chicago businesses need websites that mean business. We build clean, reliable, and SEO-driven sites for Chicago B2B companies, professional services, and manufacturers looking to generate real leads across Chicagoland.",
    localFocus: "B2B, professional services, and manufacturing across Chicagoland",
  },
  {
    slug: "houston",
    city: "Houston",
    state: "Texas",
    stateAbbr: "TX",
    intro:
      "From energy to healthcare, Houston runs on serious industries — and serious websites. We develop custom, scalable sites for Houston companies that need credibility, speed, and a steady pipeline of qualified leads.",
    localFocus: "energy, healthcare, and industrial companies across Greater Houston",
  },
  {
    slug: "dallas",
    city: "Dallas",
    state: "Texas",
    stateAbbr: "TX",
    intro:
      "Dallas–Fort Worth is one of the fastest-growing business hubs in the country. We help DFW companies win online with custom web design, development, and SEO built to capture demand across the metroplex.",
    localFocus: "growth companies, real estate, and professional services across DFW",
  },
  {
    slug: "atlanta",
    city: "Atlanta",
    state: "Georgia",
    stateAbbr: "GA",
    intro:
      "Atlanta is a launchpad for ambitious brands. We design and build modern, high-converting websites for Atlanta startups, e-commerce stores, and service businesses ready to scale across Metro Atlanta and the Southeast.",
    localFocus: "startups, e-commerce, and service businesses across Metro Atlanta",
  },
  {
    slug: "miami",
    city: "Miami",
    state: "Florida",
    stateAbbr: "FL",
    intro:
      "Miami is bilingual, design-obsessed, and moving fast. We build bold, mobile-first websites for Miami brands in real estate, hospitality, and e-commerce that need to convert an international, style-conscious audience.",
    localFocus: "real estate, hospitality, and e-commerce across South Florida",
  },
  {
    slug: "san-francisco",
    city: "San Francisco",
    state: "California",
    stateAbbr: "CA",
    intro:
      "San Francisco sets the bar for product and web experiences. We build fast, technically excellent websites and web apps for Bay Area startups and SaaS companies where design and performance are non-negotiable.",
    localFocus: "SaaS, startups, and tech companies across the Bay Area",
  },
  {
    slug: "seattle",
    city: "Seattle",
    state: "Washington",
    stateAbbr: "WA",
    intro:
      "Seattle blends deep tech with a clean design sensibility. We craft modern, accessible, and high-performing websites for Seattle software companies, startups, and professional firms across the Puget Sound region.",
    localFocus: "software, cloud, and professional firms across the Seattle area",
  },
  {
    slug: "phoenix",
    city: "Phoenix",
    state: "Arizona",
    stateAbbr: "AZ",
    intro:
      "Phoenix is booming, and local businesses are competing harder than ever online. We build affordable, conversion-focused websites and local SEO for Phoenix service businesses, contractors, and startups across the Valley.",
    localFocus: "service businesses, contractors, and startups across the Valley of the Sun",
  },
  {
    slug: "denver",
    city: "Denver",
    state: "Colorado",
    stateAbbr: "CO",
    intro:
      "Denver's business scene is outdoorsy, modern, and growing fast. We design clean, story-driven websites for Denver startups, outdoor brands, and professional services that want to stand out along the Front Range.",
    localFocus: "startups, outdoor brands, and professional services across the Front Range",
  },
  {
    slug: "austin",
    city: "Austin",
    state: "Texas",
    stateAbbr: "TX",
    intro:
      "Austin is where tech meets creativity. We build fast, distinctive websites and web apps for Austin startups, SaaS teams, and local brands that want a site as forward-thinking as the city itself.",
    localFocus: "startups, SaaS, and creative brands across Austin and Central Texas",
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
