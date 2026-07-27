// Kept for backward compatibility with case-studies, which reference a device style.
export type Device = "laptop" | "desktop" | "mobile";

export type FilterCategory =
  | "Business"
  | "Healthcare"
  | "Finance"
  | "Restaurant"
  | "Fitness"
  | "Beauty"
  | "AI"
  | "Mobile"
  | "SaaS"
  | "Real Estate"
  | "Accounting"
  | "Legal"
  | "E-commerce";

export interface ProjectResult {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  filterCategory: FilterCategory;
  tech: string;
  accent: string;
  image: string;
  url: string;
  description: string;
  featured: boolean;
  servicesProvided: string[];
  timeline: string;
  results: ProjectResult[];
}

const IMG = "/images/portfolio";

export const projects: Project[] = [
  {
    slug: "apex-analytics",
    name: "Apex Analytics",
    category: "SaaS",
    filterCategory: "SaaS",
    tech: "Next.js · TypeScript · PostgreSQL",
    accent: "#3B82F6",
    image: `${IMG}/apex-analytics.png`,
    url: "apexanalytics.com",
    description: "A real-time analytics dashboard and marketing site built for a Series A product launch.",
    featured: true,
    servicesProvided: ["SaaS Development", "UI/UX Design", "Web Applications"],
    timeline: "8 weeks",
    results: [
      { value: "+47%", label: "Trial-to-Paid Conversion" },
      { value: "-61%", label: "Onboarding Drop-off" },
      { value: "99", label: "PageSpeed Score" },
    ],
  },
  {
    slug: "nextgen-bank",
    name: "NextGen Bank",
    category: "Finance",
    filterCategory: "Finance",
    tech: "Next.js · Node.js · PostgreSQL",
    accent: "#2563EB",
    image: `${IMG}/nextgen-home.png`,
    url: "nextgenbank.com",
    description: "A secure digital banking experience spanning personal, business, loans, and wealth — built on a trust-first, blue-and-white brand system.",
    featured: true,
    servicesProvided: ["Web Development", "UI/UX Design", "Branding"],
    timeline: "9 weeks",
    results: [
      { value: "+72%", label: "Account Signups" },
      { value: "98", label: "PageSpeed Score" },
      { value: "+40%", label: "Conversion Rate" },
    ],
  },
  {
    slug: "neuron-ai",
    name: "Neuron AI",
    category: "AI",
    filterCategory: "AI",
    tech: "Next.js · Python · Framer Motion",
    accent: "#A78BFA",
    image: `${IMG}/ai-startup.png`,
    url: "neuron.ai",
    description: "A launch site for an AI startup, engineered to convert investor and enterprise interest.",
    featured: true,
    servicesProvided: ["Web Development", "Branding", "UI/UX Design"],
    timeline: "5 weeks",
    results: [
      { value: "+180%", label: "Demo Requests" },
      { value: "1.3s", label: "Load Time" },
      { value: "99", label: "PageSpeed Score" },
    ],
  },
  {
    slug: "haven-homes",
    name: "Haven Homes",
    category: "Real Estate",
    filterCategory: "Real Estate",
    tech: "Next.js · PostgreSQL · Mapbox",
    accent: "#D4AF37",
    image: `${IMG}/havenhomes-properties.png`,
    url: "havenhomes.com",
    description: "A luxury real-estate experience with map-based search, rich property pages, and agent lead capture.",
    featured: true,
    servicesProvided: ["Web Development", "Web Applications", "SEO Optimization"],
    timeline: "6 weeks",
    results: [
      { value: "+52%", label: "Qualified Leads" },
      { value: "98", label: "PageSpeed Score" },
      { value: "+70%", label: "Faster Loading" },
    ],
  },
  {
    slug: "savora-restaurant",
    name: "Savora",
    category: "Restaurant",
    filterCategory: "Restaurant",
    tech: "Next.js · Sanity · Stripe",
    accent: "#F59E0B",
    image: `${IMG}/restaurant.png`,
    url: "savora.com",
    description: "A reservations-first restaurant site with a visual menu and same-day booking flow.",
    featured: true,
    servicesProvided: ["Website Development", "UI/UX Design", "SEO Optimization"],
    timeline: "3 weeks",
    results: [
      { value: "+65%", label: "Online Reservations" },
      { value: "1.4s", label: "Load Time" },
      { value: "97", label: "PageSpeed Score" },
    ],
  },
  {
    slug: "glamora",
    name: "Glamora",
    category: "Beauty",
    filterCategory: "Beauty",
    tech: "Next.js · Sanity · Framer Motion",
    accent: "#D98CA6",
    image: `${IMG}/glamora-services.png`,
    url: "glamora.com",
    description: "An elegant salon booking experience with a full identity system for a premium beauty brand.",
    featured: true,
    servicesProvided: ["Branding", "UI/UX Design", "Website Development"],
    timeline: "4 weeks",
    results: [
      { value: "+120%", label: "Online Bookings" },
      { value: "+45%", label: "Social Engagement" },
      { value: "98", label: "PageSpeed Score" },
    ],
  },
  {
    slug: "pizza-palace",
    name: "Pizza Palace",
    category: "Restaurant",
    filterCategory: "Restaurant",
    tech: "Next.js · Stripe · Sanity",
    accent: "#EF4444",
    image: `${IMG}/pizzapalace-menu.png`,
    url: "pizzapalace.com",
    description: "An online ordering experience for a pizzeria chain with fast checkout and live tracking.",
    featured: false,
    servicesProvided: ["E-commerce Development", "UI/UX Design", "Website Development"],
    timeline: "4 weeks",
    results: [
      { value: "+58%", label: "Online Orders" },
      { value: "1.9s", label: "Checkout Time" },
      { value: "96", label: "PageSpeed Score" },
    ],
  },
  {
    slug: "brightsmile-dental",
    name: "BrightSmile Dental",
    category: "Healthcare",
    filterCategory: "Healthcare",
    tech: "Next.js · Prisma · PostgreSQL",
    accent: "#06B6D4",
    image: `${IMG}/brightsmile-home.png`,
    url: "brightsmiledental.com",
    description: "Patient intake, provider profiles, and 24/7 appointment scheduling for a dental practice.",
    featured: false,
    servicesProvided: ["Website Development", "UI/UX Design", "Booking System"],
    timeline: "5 weeks",
    results: [
      { value: "+58%", label: "Self-Service Bookings" },
      { value: "+22%", label: "New Patients" },
      { value: "97", label: "PageSpeed Score" },
    ],
  },
  {
    slug: "taskly-app",
    name: "Taskly",
    category: "Mobile",
    filterCategory: "Mobile",
    tech: "Next.js · React Native · Node.js",
    accent: "#8B5CF6",
    image: `${IMG}/taskly-dashboard.png`,
    url: "tasklyapp.com",
    description: "A product marketing site and app store funnel for a #1-ranked productivity app.",
    featured: false,
    servicesProvided: ["Web Applications", "UI/UX Design", "Branding"],
    timeline: "6 weeks",
    results: [
      { value: "1M+", label: "Downloads" },
      { value: "4.8", label: "App Store Rating" },
      { value: "+55%", label: "Daily Active Users" },
    ],
  },
  {
    slug: "fitforge-gym",
    name: "FitForge Gym",
    category: "Fitness",
    filterCategory: "Fitness",
    tech: "Next.js · Node.js · Stripe",
    accent: "#F97316",
    image: `${IMG}/fitforge-programs.png`,
    url: "fitforgegym.com",
    description: "Class scheduling, membership plans, and trainer profiles for a boutique gym chain.",
    featured: false,
    servicesProvided: ["Website Development", "Web Applications", "UI/UX Design"],
    timeline: "4 weeks",
    results: [
      { value: "+38%", label: "Membership Signups" },
      { value: "97", label: "PageSpeed Score" },
      { value: "+40%", label: "Conversion Rate" },
    ],
  },
  {
    slug: "luxora",
    name: "Luxora",
    category: "E-commerce",
    filterCategory: "E-commerce",
    tech: "Next.js · Stripe · Sanity",
    accent: "#8B5CF6",
    image: `${IMG}/luxora-home.png`,
    url: "luxora.com",
    description: "A dark, cinematic luxury fashion store with immersive product pages and a frictionless checkout.",
    featured: false,
    servicesProvided: ["E-commerce Development", "UI/UX Design", "Branding"],
    timeline: "7 weeks",
    results: [
      { value: "+64%", label: "Conversion Rate" },
      { value: "+38%", label: "Average Order Value" },
      { value: "1.6s", label: "Checkout Time" },
    ],
  },
  {
    slug: "lexford-law",
    name: "Lexford Law",
    category: "Legal",
    filterCategory: "Legal",
    tech: "Next.js · TypeScript · Sanity",
    accent: "#1D4ED8",
    image: `${IMG}/lexford-home.png`,
    url: "lexfordlaw.com",
    description: "A prestigious law-firm website with a dark navy and royal-blue identity, spanning practice areas, attorney profiles, case results, and consultation booking.",
    featured: false,
    servicesProvided: ["Web Development", "UI/UX Design", "Branding"],
    timeline: "8 weeks",
    results: [
      { value: "+58%", label: "Consultation Requests" },
      { value: "98", label: "PageSpeed Score" },
      { value: "+41%", label: "Qualified Leads" },
    ],
  },
];
