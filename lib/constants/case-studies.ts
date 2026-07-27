import type { Device } from "@/lib/constants/projects";

export interface CaseStudyResult {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  category: string;
  tech: string;
  accent: string;
  device: Device;
  summary: string;
  problem: string;
  research: string;
  solution: string;
  design: string;
  development: string;
  results: CaseStudyResult[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "bloom-and-table",
    name: "Bloom & Table",
    category: "Restaurant",
    tech: "Next.js · Sanity",
    accent: "#F59E0B",
    device: "laptop",
    summary: "Turning a single-location restaurant's outdated site into its top booking channel.",
    problem:
      "Bloom & Table relied entirely on phone reservations and a third-party listing site. Their existing website was a static single page with no way to browse the menu or check availability, and over 40% of visitors bounced within seconds.",
    research:
      "We audited competitor booking flows, interviewed front-of-house staff about common phone requests, and reviewed analytics to find where visitors dropped off. The clearest gap: no visual menu and no way to reserve a table online.",
    solution:
      "We proposed a reservations-first site: a visual, categorized menu, a same-day booking widget synced to their host stand, and location pages optimized for 'restaurants near me' search intent.",
    design:
      "A warm, editorial visual system built around food photography placeholders, generous whitespace, and a booking CTA present on every scroll position without feeling pushy.",
    development:
      "Built on Next.js with Sanity as a headless CMS so staff can update the menu and seasonal specials without a developer. The booking widget syncs availability in real time.",
    results: [
      { value: "3.2x", label: "Increase in online reservations" },
      { value: "-40%", label: "Reduction in phone call volume" },
      { value: "1.4s", label: "Average page load time" },
    ],
  },
  {
    slug: "clarity-clinic",
    name: "Clarity Clinic",
    category: "Healthcare",
    tech: "Next.js · Prisma",
    accent: "#06B6D4",
    device: "desktop",
    summary: "A multi-location clinic replaced a confusing legacy portal with a patient-first booking experience.",
    problem:
      "Clarity Clinic operated four locations, each with its own outdated microsite. Patients couldn't tell which providers were in-network or book appointments without calling during business hours.",
    research:
      "We mapped every patient journey from symptom search to appointment confirmation, and found that location and insurance filtering were the two biggest points of confusion across all four sites.",
    solution:
      "One unified platform consolidating all locations, with provider bios, insurance filtering, and self-service appointment scheduling available 24/7.",
    design:
      "A calm, trustworthy visual language — soft blues, clear typography hierarchy, and provider photography treated consistently across all four brands.",
    development:
      "Built with Next.js and Prisma against a shared provider/location database, so opening a new clinic location no longer requires a new microsite.",
    results: [
      { value: "58%", label: "Of bookings now self-service" },
      { value: "4", label: "Locations unified into one platform" },
      { value: "22%", label: "Increase in new patient bookings" },
    ],
  },
  {
    slug: "pulse-analytics",
    name: "Pulse Analytics",
    category: "SaaS",
    tech: "React · Node.js",
    accent: "#3B82F6",
    device: "laptop",
    summary: "Rebuilding a SaaS marketing site and onboarding flow ahead of a Series A launch.",
    problem:
      "Pulse Analytics had strong product-market fit but a marketing site that undersold the product, plus a self-serve signup flow with a 61% drop-off rate before activation.",
    research:
      "We ran funnel analysis on the existing signup flow and interviewed churned trial users, finding that unclear pricing and a confusing onboarding checklist were the top blockers.",
    solution:
      "A rebuilt marketing site with a clear value proposition and transparent pricing, paired with a redesigned onboarding flow that gets users to their first insight within minutes.",
    design:
      "A confident, data-forward visual system with real product screenshots standing in as UI mockups, and a pricing page built to reduce decision fatigue.",
    development:
      "Rebuilt on React and Node.js with a redesigned onboarding state machine, instrumented end-to-end for funnel analytics.",
    results: [
      { value: "+47%", label: "Trial-to-paid conversion rate" },
      { value: "-61%", label: "Reduction in onboarding drop-off" },
      { value: "2.1x", label: "Increase in demo requests" },
    ],
  },
  {
    slug: "aurora-market",
    name: "Aurora Market",
    category: "E-commerce",
    tech: "Next.js · Stripe",
    accent: "#EC4899",
    device: "mobile",
    summary: "A mobile-first rebuild that turned Aurora Market's checkout into its highest-converting page.",
    problem:
      "Over 70% of Aurora Market's traffic was mobile, but their storefront was a desktop-first theme with a five-step checkout that abandoned nearly two-thirds of carts.",
    research:
      "Session recordings showed users repeatedly zooming and mis-tapping through checkout on mobile. We benchmarked against best-in-class mobile commerce flows to reset the baseline.",
    solution:
      "A mobile-first storefront rebuild with a single-page, auto-filled checkout and persistent cart state across sessions and devices.",
    design:
      "A clean, thumb-friendly interface with large tap targets, sticky add-to-cart actions, and a streamlined product gallery optimized for small screens.",
    development:
      "Rebuilt on Next.js with Stripe Checkout embedded directly in-page, cutting the flow from five steps to one.",
    results: [
      { value: "1.8s", label: "Average checkout completion time" },
      { value: "+34%", label: "Cart recovery rate" },
      { value: "+29%", label: "Mobile conversion rate" },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
