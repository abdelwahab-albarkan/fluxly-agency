import React from "react";
import type { Metadata } from "next";
import { Check, X, Eye, ShieldCheck, Gem, HeartHandshake, TrendingUp, LifeBuoy } from "lucide-react";
import { PageHero, PricingPreview, Process, Faq, Cta } from "@/components/sections";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/reveal";
import { cn } from "@/lib/utils/cn";
import { comparisonRows } from "@/lib/constants/pricing";

export const metadata: Metadata = {
  title: "Web Design & Development Pricing — Fluxly Agency",
  description:
    "Flexible, custom pricing for web design, development, e-commerce, SaaS, and SEO. Transparent quotes tailored to your project. Get a free estimate.",
  alternates: { canonical: "/pricing" },
};

const pricingProcessSteps = [
  { number: "01", title: "Discovery Call", description: "We learn about your business, goals, and challenges." },
  { number: "02", title: "Proposal", description: "A clear scope and quote tailored to your project." },
  { number: "03", title: "Design", description: "High-fidelity visuals refined with your feedback." },
  { number: "04", title: "Development", description: "Senior engineers build a fast, scalable product." },
  { number: "05", title: "Testing", description: "Cross-device QA and performance checks." },
  { number: "06", title: "Launch", description: "A smooth, monitored release." },
];

const whyOurPricing = [
  { icon: Eye, title: "Transparent Pricing", description: "You'll always know what's included and why, before any work begins." },
  { icon: ShieldCheck, title: "No Hidden Fees", description: "Your quote covers design, development, and launch — no surprise invoices." },
  { icon: Gem, title: "Premium Quality", description: "Every package is held to the same senior-level standard, regardless of size." },
  { icon: HeartHandshake, title: "Long-Term Partnership", description: "Most clients stay with us well past launch as their needs grow." },
  { icon: TrendingUp, title: "Scalable Solutions", description: "We build on a foundation that grows with your business, not against it." },
  { icon: LifeBuoy, title: "Dedicated Support", description: "A direct line to the team that built your product, whenever you need it." },
];

const pricingFaqs = [
  {
    question: "How long does a project take?",
    answer:
      "Most marketing sites ship in 2-4 weeks. Larger web applications and SaaS builds typically run 6-12 weeks depending on scope. You'll get a fixed timeline before work begins.",
  },
  {
    question: "Can I request custom features?",
    answer:
      "Yes — since every project is custom-scoped, we can accommodate specific integrations, workflows, or features. Just tell us what you need in your project details.",
  },
  {
    question: "Do you provide maintenance?",
    answer:
      "Yes, we offer ongoing maintenance plans covering monitoring, security updates, and small content changes after launch.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "Absolutely. Most clients start with a Starter or Business scope and expand as their needs grow. We'll credit prior work toward the new scope.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes, redesigns are one of our most common engagements. We audit what you have, preserve your SEO equity, and rebuild on a modern foundation.",
  },
];

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-4 w-4 text-accent" strokeWidth={2} />
    ) : (
      <X className="mx-auto h-4 w-4 text-ink-muted/40" strokeWidth={2} />
    );
  }
  return <span className="text-sm text-ink-secondary">{value}</span>;
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Flexible Pricing for Every Business."
        description="Every business is different. We create custom digital solutions based on your goals, requirements, and budget — not off-the-shelf packages."
      />

      <PricingPreview />

      {/* Comparison table */}
      <section className="pb-24 md:pb-32">
        <Container>
          <SectionHeading eyebrow="Compare Plans" title="Every feature, side by side" />

          <Reveal className="mt-16 overflow-x-auto">
            <table className="w-full min-w-[640px] border-separate border-spacing-0 overflow-hidden rounded-xl border border-border-subtle">
              <thead>
                <tr>
                  <th className="border-b border-border-subtle bg-surface/60 p-5 text-left text-sm font-semibold text-white">
                    Feature
                  </th>
                  <th className="border-b border-l border-border-subtle bg-surface/60 p-5 text-center text-sm font-semibold text-white">
                    Starter
                  </th>
                  <th className="border-b border-l border-border-subtle bg-brand/10 p-5 text-center text-sm font-semibold text-brand">
                    Business
                  </th>
                  <th className="border-b border-l border-border-subtle bg-surface/60 p-5 text-center text-sm font-semibold text-white">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={cn(i % 2 === 1 && "bg-surface/20")}>
                    <td className="border-b border-border-subtle p-5 text-sm text-ink-secondary">{row.feature}</td>
                    <td className="border-b border-l border-border-subtle p-5 text-center">
                      <CellValue value={row.starter} />
                    </td>
                    <td className="border-b border-l border-border-subtle bg-brand/5 p-5 text-center">
                      <CellValue value={row.business} />
                    </td>
                    <td className="border-b border-l border-border-subtle p-5 text-center">
                      <CellValue value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </Container>
      </section>

      <Process
        eyebrow="Our Process"
        title="From first call to launch"
        description="A clear, structured path — so you always know what's happening next."
        steps={pricingProcessSteps}
      />

      {/* Why Our Pricing */}
      <section className="pb-24 md:pb-32">
        <Container>
          <SectionHeading eyebrow="Why Our Pricing" title="Built around trust, not tiers" />
          <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyOurPricing.map((item) => (
              <RevealItem key={item.title}>
                <Card className="h-full p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                    <item.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-6 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <Faq eyebrow="Pricing FAQ" title="Questions about pricing" items={pricingFaqs} />

      <Cta
        title="Need a Custom Quote?"
        description="Every business has unique requirements. Let's discuss your project and create the perfect solution together."
        primaryLabel="Book a Free Consultation"
        primaryHref="/book"
        secondaryLabel="Request a Custom Quote"
        secondaryHref="/contact"
      />
    </>
  );
}
