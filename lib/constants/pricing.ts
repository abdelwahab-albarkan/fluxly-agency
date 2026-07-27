export interface PricingPlan {
  name: string;
  description: string;
  priceLabel?: string;
  price: string;
  features: string[];
  highlighted: boolean;
  ctaLabel: string;
  ctaHref: string;
}

export const plans: PricingPlan[] = [
  {
    name: "Starter",
    description: "Perfect for startups and small businesses.",
    priceLabel: "Starting From",
    price: "$499",
    features: [
      "Responsive Website",
      "Up to 5 Pages",
      "Modern UI/UX",
      "Contact Form",
      "Basic SEO",
      "Mobile Optimized",
    ],
    highlighted: false,
    ctaLabel: "Get Started",
    ctaHref: "/contact",
  },
  {
    name: "Business",
    description: "For growing companies.",
    priceLabel: "Starting From",
    price: "$1,499",
    features: [
      "Custom Website",
      "Up to 15 Pages",
      "CMS Integration",
      "Advanced SEO",
      "Performance Optimization",
      "Analytics",
      "Premium Support",
    ],
    highlighted: true,
    ctaLabel: "Get Started",
    ctaHref: "/contact",
  },
  {
    name: "Enterprise",
    description: "Custom digital solutions.",
    price: "Custom Quote",
    features: [
      "Unlimited Pages",
      "Web Applications",
      "SaaS Development",
      "API Integrations",
      "Automation",
      "Dedicated Team",
      "Long-Term Support",
    ],
    highlighted: false,
    ctaLabel: "Request a Quote",
    ctaHref: "/contact",
  },
];

export interface ComparisonRow {
  feature: string;
  starter: string | boolean;
  business: string | boolean;
  enterprise: string | boolean;
}

export const comparisonRows: ComparisonRow[] = [
  { feature: "Responsive", starter: true, business: true, enterprise: true },
  { feature: "SEO", starter: "Basic", business: "Advanced", enterprise: "Advanced" },
  { feature: "CMS", starter: false, business: true, enterprise: true },
  { feature: "Blog", starter: false, business: true, enterprise: true },
  { feature: "Performance", starter: "Basic", business: "Optimized", enterprise: "Optimized" },
  { feature: "Analytics", starter: false, business: true, enterprise: true },
  { feature: "Support", starter: "Email", business: "Premium", enterprise: "Dedicated Team" },
  { feature: "Hosting", starter: "Guidance", business: "Setup Included", enterprise: "Managed" },
  { feature: "Maintenance", starter: false, business: "Optional", enterprise: true },
  { feature: "Custom Features", starter: false, business: false, enterprise: true },
];
