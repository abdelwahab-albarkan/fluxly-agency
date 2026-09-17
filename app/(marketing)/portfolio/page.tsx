import React from "react";
import type { Metadata } from "next";
import { PageHero, Process, TechStack, Testimonials, Cta } from "@/components/sections";
import { Container } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/animations/reveal";
import { Counter } from "@/components/animations/counter";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

export const metadata: Metadata = {
  title: "Web Design Portfolio | Our Work — Fluxly Agency",
  description:
    "Our web design portfolio — custom websites, e-commerce stores, and SaaS platforms we've designed and built, with real client results.",
  alternates: { canonical: "/portfolio" },
};

const resultStats = [
  { prefix: "+", value: 180, suffix: "%", label: "Online Leads" },
  { prefix: "+", value: 95, suffix: "", label: "Performance Score" },
  { prefix: "+", value: 70, suffix: "%", label: "Faster Loading" },
  { prefix: "+", value: 40, suffix: "%", label: "Conversion Rate" },
];

const portfolioProcessSteps = [
  { number: "01", title: "Discovery", description: "Understanding your business, goals, and challenges." },
  { number: "02", title: "Research", description: "Competitive analysis and user research to inform strategy." },
  { number: "03", title: "Design", description: "High-fidelity visuals refined with your feedback." },
  { number: "04", title: "Development", description: "Clean, scalable, production-grade code." },
  { number: "05", title: "Testing", description: "Cross-device QA and performance checks." },
  { number: "06", title: "Launch", description: "A smooth, monitored release." },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Our Work Speaks for Itself."
        description="Explore a selection of premium websites, SaaS platforms, e-commerce stores, and digital experiences we've designed and developed for businesses across different industries."
      />

      {/* Featured projects with filters */}
      <section className="pb-24 md:pb-32">
        <Container>
          <h2 className="sr-only">Portfolio projects</h2>
          <PortfolioGrid />
        </Container>
      </section>

      {/* Results */}
      <section className="border-y border-border-subtle bg-surface-section py-20">
        <Container>
          <RevealGroup className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {resultStats.map((stat) => (
              <RevealItem key={stat.label} className="flex flex-col items-center text-center">
                <span className="bg-gradient-to-b from-white to-ink-secondary bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
                  {stat.prefix}
                  <Counter to={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-2 text-sm text-ink-muted">{stat.label}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <Process
        eyebrow="Our Process"
        title="How we bring projects to life"
        description="A clear, structured path from first call to launch."
        steps={portfolioProcessSteps}
      />

      <TechStack />

      <Testimonials />

      <Cta
        title="Ready to Become Our Next Success Story?"
        description="Let's create a modern digital experience that helps your business grow."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="Book a Free Consultation"
        secondaryHref="/book"
      />
    </>
  );
}
