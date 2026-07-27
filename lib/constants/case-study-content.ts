export interface GalleryShot {
  /** Path under /public, e.g. "/images/portfolio/restaurant-menu.png" */
  src: string;
  /** Short label shown under the shot, e.g. "Menu Page" */
  label: string;
  /** One-line caption explaining the page. */
  caption?: string;
  /** Frame style. Defaults to a browser window; use "phone" for mobile screens. */
  device?: "browser" | "phone";
}

export interface CaseStudyContent {
  overview: string;
  challenge: string;
  solution: string;
  /**
   * Additional page screenshots. Empty for now — add entries here (and drop the
   * images into /public/images/portfolio/) and the case-study gallery expands
   * automatically with premium alternating layouts.
   */
  gallery?: GalleryShot[];
}

export const caseStudyContent: Record<string, CaseStudyContent> = {
  "apex-analytics": {
    overview:
      "Apex Analytics is a real-time product analytics platform that helps teams understand user behavior at a glance. We were brought in ahead of their Series A to rebuild both the marketing site and the core dashboard experience.",
    challenge:
      "The product had strong fundamentals but a marketing site that undersold it, paired with a self-serve signup flow where 61% of trials dropped off before ever reaching activation.",
    solution:
      "We rebuilt the marketing site around a single, sharp value proposition and transparent pricing, then re-engineered onboarding into a guided flow that gets users to their first insight within minutes.",
  },
  "nextgen-bank": {
    overview:
      "NextGen Bank is a digital-first bank offering personal and business banking, lending, and wealth management. We designed and built a trust-forward, blue-and-white web experience spanning every product line — from the marketing home to onboarding.",
    challenge:
      "In finance, trust is everything. The brand needed to feel established and secure while making it effortless for new customers to explore products and open an account entirely online — across a wide range of services.",
    solution:
      "We built a calm, confident blue-and-white visual system and carried it consistently across every page — personal, business, loans, investments, resources, and support — so customers feel the same sense of security at every step.",
  },
  "neuron-ai": {
    overview:
      "Neuron AI is an enterprise AI platform. We designed and developed a launch site engineered to convert both investor attention and high-intent enterprise demo requests.",
    challenge:
      "AI is a crowded, hype-heavy space. Neuron needed a site that communicated genuine technical credibility without leaning on buzzwords, and that converted serious visitors quickly.",
    solution:
      "We led with clear outcomes over jargon, paired with fluid motion and a confident dark identity — then made the demo request the unmistakable next step on every screen.",
  },
  "haven-homes": {
    overview:
      "Haven Homes is a luxury real-estate agency. We designed and built an elegant, navy-and-gold experience — from map-based property search to rich listing pages, agent profiles, and lead capture — that matches the caliber of the homes it sells.",
    challenge:
      "Buyers were bouncing on a slow, dated site that made it hard to browse listings or filter by location — and almost none were converting into agent leads.",
    solution:
      "We built a premium platform around fast, map-driven search, cinematic property pages with floor plans and amenities, and lead capture placed at exactly the moments buyers were most engaged.",
  },
  "savora-restaurant": {
    overview:
      "Savora is a modern fine-dining restaurant. We designed a reservations-first website with a visual menu and a same-day booking experience.",
    challenge:
      "The restaurant relied entirely on phone reservations and a third-party listing, with no way for guests to browse the menu or book a table online.",
    solution:
      "We built a warm, editorial site centered on the food, with a real-time booking widget synced to the host stand and location pages tuned for local search.",
  },
  "glamora": {
    overview:
      "Glamora is a premium salon and skincare brand. We created a full visual identity and a booking-ready website — soft pinks, rose-gold details, and high-end photography — that feels as refined as the salon itself.",
    challenge:
      "The brand had a loyal in-person following but no cohesive online identity, and no way for clients to book appointments outside of business hours.",
    solution:
      "We built an elegant identity system and a refined booking experience — service menus, packages, a gallery, and 24/7 appointment booking — that lets clients reserve treatments in a few effortless taps.",
  },
  "pizza-palace": {
    overview:
      "Pizza Palace is a growing pizzeria chain. We built a bold, dark-themed online ordering experience with a full menu, product customization, fast checkout, and live order tracking.",
    challenge:
      "Orders were split across phone calls and a clunky third-party app that ate into margins and gave the team no control over the customer experience.",
    solution:
      "We built a fast, mobile-first ordering flow with a streamlined cart and checkout and live tracking — bringing orders in-house and lifting average order value.",
  },
  "brightsmile-dental": {
    overview:
      "BrightSmile Dental is a modern dental practice. We built a patient-friendly site with provider profiles and 24/7 appointment scheduling.",
    challenge:
      "New patients couldn't book without calling during office hours, and the old site did little to build confidence ahead of a first visit.",
    solution:
      "We designed a calm, reassuring experience with clear provider bios and self-service scheduling, so patients can book in seconds — any time of day.",
  },
  "taskly-app": {
    overview:
      "Taskly is a premium productivity SaaS that helps teams plan, track, and complete their work. We designed and built the full product — from the marketing site to the dashboard, task boards, calendar, analytics, team collaboration, and mobile apps.",
    challenge:
      "Taskly needed a cohesive, Apple-level experience across web and mobile that made a deep feature set feel effortless — without overwhelming new users.",
    solution:
      "We built a clean, minimal interface on a single design system: a widget-based dashboard, a drag-and-drop Kanban board, a smart calendar, productivity analytics, team collaboration, and native-feeling mobile apps in light and dark mode.",
  },
  "fitforge-gym": {
    overview:
      "FitForge Gym is a boutique fitness brand. We built a bold, high-energy site with class scheduling, membership plans, trainer profiles, and a member dashboard.",
    challenge:
      "Prospective members had no easy way to see class schedules or sign up online, and the team was managing everything manually.",
    solution:
      "We built a fast, motivating site with live class schedules, self-serve memberships, trainer profiles, and a member dashboard — turning browsers into members without the manual back-and-forth.",
  },
  "luxora": {
    overview:
      "Luxora is a luxury fashion house. We designed and built a dark, cinematic e-commerce experience — from the storefront to product pages, cart, and a frictionless checkout — that makes browsing feel as premium as the products.",
    challenge:
      "Luxury shoppers expect an experience that matches the price point. The previous store felt generic and slow, undercutting the products and losing high-intent buyers before checkout.",
    solution:
      "We built a dark, product-first storefront with large photography, refined filtering, immersive product pages, and a streamlined multi-step checkout — all on a cohesive luxury design system.",
  },
  "lexford-law": {
    overview:
      "Lexford Law is a prestigious full-service law firm. We designed and built an authoritative, dark-navy and royal-blue web experience — spanning practice areas, attorney profiles, case results, and consultation booking — that conveys credibility and converts high-intent visitors into consultations.",
    challenge:
      "Legal clients choose on trust and track record. The firm needed a site that felt established, discreet, and prestigious, while making it effortless for prospective clients to understand its expertise and book a consultation.",
    solution:
      "We built a refined, luxury identity in deep navy and royal blue, carried consistently across every page — clear practice-area breakdowns, credible attorney profiles, proven case results, and a frictionless consultation flow that turns visitors into booked clients.",
  },
};

export function getCaseStudyContent(slug: string): CaseStudyContent | undefined {
  return caseStudyContent[slug];
}
