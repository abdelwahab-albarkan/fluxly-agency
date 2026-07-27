import type { LucideIcon } from "lucide-react";
import {
  Code2,
  ShoppingCart,
  Cloud,
  AppWindow,
  Palette,
  RefreshCw,
  LineChart,
  Sparkles,
  Plug,
  Wrench,
  Gauge,
  Workflow,
} from "lucide-react";
import type { FaqEntry } from "@/components/sections/faq";

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  technologies: string[];
  faq: FaqEntry[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Custom Website Development",
    shortDescription: "Build fast, responsive, and SEO-friendly websites tailored to your business.",
    description:
      "We design and build custom websites from the ground up — no page builders, no bloated themes. Every site is hand-crafted for your brand, optimized for speed, and built on a modern stack that scales as you grow.",
    icon: Code2,
    features: [
      "Fully custom design, no templates",
      "Mobile-first, responsive layouts",
      "Headless CMS for easy content updates",
      "Core Web Vitals optimized",
      "Accessibility (WCAG) compliant",
      "Analytics & conversion tracking built in",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Vercel"],
    faq: [
      {
        question: "How long does a custom website take to build?",
        answer: "Most marketing sites launch in 2-4 weeks, depending on page count and content readiness.",
      },
      {
        question: "Will I be able to update content myself?",
        answer: "Yes — every site ships with a CMS so your team can edit copy, images, and pages without touching code.",
      },
      {
        question: "Is SEO included?",
        answer: "Technical SEO fundamentals (metadata, sitemap, structured data, performance) are included on every build.",
      },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce Development",
    shortDescription: "Modern online stores with secure payments and optimized shopping experiences.",
    description:
      "We build e-commerce experiences that convert — fast product pages, frictionless checkout, and back-office tooling that makes running your store easy. From single-product stores to multi-vendor catalogs.",
    icon: ShoppingCart,
    features: [
      "Custom storefront design",
      "Stripe / Shopify payment integration",
      "Inventory & order management",
      "Abandoned cart recovery",
      "Discount codes & promotions",
      "Multi-currency support",
    ],
    technologies: ["Next.js", "Stripe", "Shopify", "PostgreSQL", "Tailwind CSS"],
    faq: [
      {
        question: "Can you migrate our existing store?",
        answer: "Yes, we regularly migrate stores from Shopify, WooCommerce, and custom platforms with zero data loss.",
      },
      {
        question: "Do you handle payment processing?",
        answer: "We integrate Stripe or Shopify Payments directly — you own the merchant account and all transaction data.",
      },
      {
        question: "Can it handle high traffic spikes?",
        answer: "Yes, our storefronts are built on edge-rendered infrastructure designed for sudden traffic surges.",
      },
    ],
  },
  {
    slug: "saas-development",
    name: "SaaS Development",
    shortDescription: "Scalable SaaS platforms with modern architecture and outstanding UX.",
    description:
      "We partner with founders to design and build SaaS products end-to-end: authentication, billing, multi-tenancy, and the core product experience — architected to support your first 10 users and your first 10,000.",
    icon: Cloud,
    features: [
      "Multi-tenant architecture",
      "Subscription billing (Stripe)",
      "Role-based access control",
      "Onboarding & activation flows",
      "Admin & analytics dashboards",
      "API-first backend design",
    ],
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Stripe", "AWS"],
    faq: [
      {
        question: "Can you build an MVP from scratch?",
        answer: "Yes — MVPs typically take 6-10 weeks depending on scope, with a clear roadmap to production.",
      },
      {
        question: "Do you help with technical architecture decisions?",
        answer: "Yes, we advise on stack, data modeling, and scaling strategy before writing a single line of code.",
      },
      {
        question: "Can you join an existing codebase?",
        answer: "Absolutely — we regularly embed with existing engineering teams to accelerate roadmaps.",
      },
    ],
  },
  {
    slug: "web-applications",
    name: "Web Applications",
    shortDescription: "Custom business applications built for performance and scalability.",
    description:
      "Beyond marketing sites — we build internal tools, customer portals, and data-intensive applications that your team relies on daily. Built for maintainability, not just launch day.",
    icon: AppWindow,
    features: [
      "Custom dashboards & data views",
      "Real-time updates & notifications",
      "Complex form & workflow logic",
      "Third-party API integrations",
      "Role-based permissions",
      "Automated testing coverage",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    faq: [
      {
        question: "What kind of web applications do you build?",
        answer: "Customer portals, internal admin tools, booking systems, and data dashboards — anything beyond a static site.",
      },
      {
        question: "How do you handle ongoing feature requests?",
        answer: "We offer retained engineering time so your application keeps evolving after the initial build.",
      },
      {
        question: "Can you integrate with our existing tools?",
        answer: "Yes, we regularly integrate with CRMs, ERPs, and other internal systems via API.",
      },
    ],
  },
  {
    slug: "ui-ux",
    name: "UI/UX Design",
    shortDescription: "User-centered interfaces that are beautiful, intuitive, and conversion-focused.",
    description:
      "We design interfaces that are both beautiful and usable — grounded in research, tested with real users, and documented as a reusable design system your team can build on long after launch.",
    icon: Palette,
    features: [
      "User research & journey mapping",
      "Wireframes & interactive prototypes",
      "Custom design system & component library",
      "Usability testing",
      "Design handoff & documentation",
      "Ongoing design support",
    ],
    technologies: ["Figma", "Framer Motion", "shadcn/ui", "Tailwind CSS"],
    faq: [
      {
        question: "Do you design before or during development?",
        answer: "Design always leads — we finalize the system in Figma before engineering begins building.",
      },
      {
        question: "Will we get a reusable design system?",
        answer: "Yes, every engagement includes a documented component library your team can extend.",
      },
      {
        question: "Can you redesign our existing product?",
        answer: "Yes, redesigns are one of our most common engagements — see our Website Redesign service.",
      },
    ],
  },
  {
    slug: "redesign",
    name: "Website Redesign",
    shortDescription: "Transform outdated websites into modern digital experiences.",
    description:
      "Your site works, but it looks and feels dated. We refresh the design, rebuild the front end on a modern stack, and preserve everything you've earned — SEO rankings, URLs, and brand recognition.",
    icon: RefreshCw,
    features: [
      "Full visual & UX audit",
      "SEO-safe migration plan",
      "Modern component-based rebuild",
      "Performance & accessibility upgrades",
      "Content migration",
      "Redirect mapping for zero link loss",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Prisma"],
    faq: [
      {
        question: "Will we lose our search rankings?",
        answer: "No — we map every redirect and preserve URL structure and metadata to protect existing SEO equity.",
      },
      {
        question: "How long does a redesign take?",
        answer: "Most redesigns take 3-6 weeks depending on page count and how much content needs restructuring.",
      },
      {
        question: "Can we redesign in phases?",
        answer: "Yes, we can prioritize high-traffic pages first and roll out the rest incrementally.",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO Optimization",
    shortDescription: "Improve visibility, speed, and search rankings with technical and on-page SEO.",
    description:
      "We fix the technical foundation search engines actually reward — site speed, structured data, crawlability — and pair it with a content strategy that builds authority in your niche over time.",
    icon: LineChart,
    features: [
      "Technical SEO audit",
      "Core Web Vitals optimization",
      "Structured data & schema markup",
      "Keyword & content strategy",
      "Local SEO for multi-location businesses",
      "Monthly performance reporting",
    ],
    technologies: ["Next.js", "Schema.org", "Google Search Console", "Ahrefs"],
    faq: [
      {
        question: "How long until we see results?",
        answer: "Technical fixes show impact within weeks; organic ranking growth typically compounds over 3-6 months.",
      },
      {
        question: "Do you write content too?",
        answer: "Yes, we can plan and write SEO-optimized content, or work alongside your existing content team.",
      },
      {
        question: "Do you guarantee rankings?",
        answer: "No agency can honestly guarantee specific rankings — we focus on the fundamentals that reliably drive growth.",
      },
    ],
  },
  {
    slug: "branding",
    name: "Branding",
    shortDescription: "Create a memorable visual identity that reflects your business.",
    description:
      "Your brand is more than a logo. We build complete identity systems — visual language, typography, color, and voice — so every touchpoint feels unmistakably yours.",
    icon: Sparkles,
    features: [
      "Logo & mark design",
      "Color & typography systems",
      "Brand guidelines documentation",
      "Business card & stationery design",
      "Social media templates",
      "Brand voice & messaging",
    ],
    technologies: ["Figma", "Illustrator"],
    faq: [
      {
        question: "Do you design logos only, or full brand systems?",
        answer: "Full systems — logo, color, type, and documented guidelines your team can apply consistently.",
      },
      {
        question: "Can you rebrand an existing company?",
        answer: "Yes, rebrands are common — we handle the transition plan alongside the new identity.",
      },
      {
        question: "How many logo concepts do we get?",
        answer: "Typically 3 distinct directions, refined into one final system based on your feedback.",
      },
    ],
  },
  {
    slug: "api-integrations",
    name: "API Integrations",
    shortDescription: "Connect your site or app to the tools your business already runs on.",
    description:
      "From payment processors to CRMs to internal APIs — we build reliable integrations that keep your systems in sync, with proper error handling and monitoring, not fragile one-off scripts.",
    icon: Plug,
    features: [
      "CRM & marketing tool integrations",
      "Payment gateway integrations",
      "Custom internal API development",
      "Webhook & event-driven workflows",
      "Third-party auth (OAuth/SSO)",
      "Monitoring & error alerting",
    ],
    technologies: ["Node.js", "REST", "GraphQL", "Webhooks", "AWS"],
    faq: [
      {
        question: "What systems can you integrate with?",
        answer: "Most modern SaaS tools with a public API — CRMs, payment processors, marketing platforms, and more.",
      },
      {
        question: "Do you build custom APIs too?",
        answer: "Yes, we design and build internal APIs when you need one system to talk to another reliably.",
      },
      {
        question: "How do you handle integration failures?",
        answer: "Every integration ships with retry logic, logging, and alerting so failures get caught immediately.",
      },
    ],
  },
  {
    slug: "maintenance",
    name: "Website Maintenance",
    shortDescription: "Keep your website secure, updated, optimized, and running smoothly.",
    description:
      "Launch day isn't the finish line. We keep your site secure, updated, and fast with proactive monitoring and a real team on standby — not a ticket queue that disappears after the invoice clears.",
    icon: Wrench,
    features: [
      "Uptime & performance monitoring",
      "Security patches & dependency updates",
      "Content & copy updates",
      "Monthly performance reports",
      "Priority bug fixes",
      "Direct line to your original team",
    ],
    technologies: ["Vercel", "Sentry", "GitHub Actions"],
    faq: [
      {
        question: "What's included in a maintenance plan?",
        answer: "Monitoring, security updates, small content changes, and priority support from the team that built your site.",
      },
      {
        question: "Can I add maintenance after launch?",
        answer: "Yes, maintenance plans can start any time, even for sites we didn't originally build.",
      },
      {
        question: "What if something breaks urgently?",
        answer: "Maintenance clients get priority response times for critical issues, typically same business day.",
      },
    ],
  },
  {
    slug: "performance",
    name: "Performance Optimization",
    shortDescription: "Edge-rendered, optimized assets, and static-first generation for perfect Core Web Vitals.",
    description:
      "Slow sites lose customers and rankings. We audit and optimize every layer — images, fonts, JavaScript, rendering strategy — to get your site loading fast on real-world connections, not just fiber.",
    icon: Gauge,
    features: [
      "Core Web Vitals audit",
      "Image & asset optimization",
      "Code splitting & lazy loading",
      "Caching & CDN strategy",
      "Render strategy optimization (SSG/ISR)",
      "Before/after performance reporting",
    ],
    technologies: ["Next.js", "Vercel Edge", "Lighthouse", "WebPageTest"],
    faq: [
      {
        question: "What kind of speed improvements can we expect?",
        answer: "Most audits identify 40-70% load time reductions, with the biggest wins in image and JS payload size.",
      },
      {
        question: "Do you work on non-Next.js sites?",
        answer: "Yes, we optimize any modern stack — the audit and most fixes are framework-agnostic.",
      },
      {
        question: "Does this affect our SEO rankings?",
        answer: "Yes — Core Web Vitals are a direct ranking factor, so performance work typically improves search visibility too.",
      },
    ],
  },
  {
    slug: "automation",
    name: "Business Automation",
    shortDescription: "Automate repetitive tasks and improve productivity with custom workflows.",
    description:
      "We build automations that eliminate repetitive manual work — syncing data between tools, triggering workflows on events, and generating reports — so your team spends time on work that actually matters.",
    icon: Workflow,
    features: [
      "Workflow automation design",
      "Cross-tool data syncing",
      "Automated reporting & alerts",
      "Custom internal admin tools",
      "Scheduled jobs & background processing",
      "Zapier / Make alternatives, built custom",
    ],
    technologies: ["Node.js", "PostgreSQL", "AWS", "Webhooks"],
    faq: [
      {
        question: "What tasks can be automated?",
        answer: "Anything repetitive and rule-based — data entry, notifications, report generation, and cross-tool syncing.",
      },
      {
        question: "Is this different from using Zapier?",
        answer: "Custom automation is more reliable at scale and can handle logic that no-code tools can't express.",
      },
      {
        question: "How do you measure ROI on automation?",
        answer: "We baseline the hours spent manually before the build, then track time saved after launch.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
