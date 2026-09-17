import React from "react";
import type { Metadata } from "next";
import { Wand2, Palette, Gauge, TrendingUp, Smartphone, ShieldCheck, LifeBuoy, Layers } from "lucide-react";
import { PageHero, ServicesGrid, HowWeWork, Process, TechStack, Faq, Cta } from "@/components/sections";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/animations/reveal";

export const metadata: Metadata = {
  title: "Web Design & Development Services — Fluxly Agency",
  description:
    "Full-service web agency: custom website development, e-commerce, SaaS, web applications, UI/UX design, SEO, and branding for growing US businesses.",
  alternates: { canonical: "/services" },
};

const whyChooseUs = [
  { icon: Wand2, title: "Custom Solutions" },
  { icon: Palette, title: "Premium Design" },
  { icon: Gauge, title: "Fast Performance" },
  { icon: TrendingUp, title: "SEO Ready" },
  { icon: Smartphone, title: "Mobile First" },
  { icon: ShieldCheck, title: "Secure Development" },
  { icon: LifeBuoy, title: "Dedicated Support" },
  { icon: Layers, title: "Scalable Architecture" },
];

const servicesProcessSteps = [
  { number: "01", title: "Discovery", description: "Understanding your business, goals, and challenges." },
  { number: "02", title: "Strategy", description: "A clear plan mapped to real outcomes." },
  { number: "03", title: "UI/UX Design", description: "High-fidelity visuals refined with your feedback." },
  { number: "04", title: "Development", description: "Clean, scalable, production-grade code." },
  { number: "05", title: "Testing", description: "Cross-device QA and performance checks." },
  { number: "06", title: "Launch", description: "A smooth, monitored release." },
  { number: "07", title: "Ongoing Support", description: "Continued monitoring, updates, and improvements." },
];

const servicesFaqs = [
  {
    question: "How long does a project take?",
    answer:
      "Most marketing sites ship in 2-4 weeks. Larger web applications and SaaS builds typically run 6-12 weeks depending on scope. You'll get a fixed timeline before work begins.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes, redesigns are one of our most common engagements. We audit what you have, preserve your SEO equity, and rebuild on a modern foundation.",
  },
  {
    question: "Can you build custom features?",
    answer:
      "Absolutely. Every project is custom-scoped, so we can accommodate specific integrations, workflows, or functionality your business needs.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer ongoing maintenance plans covering monitoring, security updates, performance checks, and small content changes after launch.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Every project we build is mobile-first by default, tested across real devices to make sure it looks and performs well on any screen size.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Digital Solutions Designed for Growth."
        description="We create modern websites, web applications, SaaS platforms, and digital experiences that help businesses grow, improve performance, and build a stronger online presence."
      />

      {/* Services grid */}
      <section className="pb-24 md:pb-32">
        <Container>
          <h2 className="sr-only">Our services</h2>
          <ServicesGrid />
        </Container>
      </section>

      {/* Why choose our agency */}
      <section className="pb-24 md:pb-32">
        <Container>
          <SectionHeading eyebrow="Why Choose Our Agency" title="Built for businesses that expect more" />
          <RevealGroup className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <RevealItem key={item.title}>
                <Card className="flex h-full flex-col items-center p-6 text-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                    <item.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-white">{item.title}</h3>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <HowWeWork />

      <TechStack />

      <Process
        eyebrow="Our Development Process"
        title="From first call to ongoing support"
        description="Seven focused phases, built for momentum and clarity at every step."
        steps={servicesProcessSteps}
      />

      <Faq eyebrow="FAQ" title="Questions about our services" items={servicesFaqs} />

      <Cta
        title="Let's Build Your Next Digital Project."
        description="Whether you need a business website, an e-commerce platform, or a custom web application, we're ready to help."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="Book a Free Consultation"
        secondaryHref="/book"
      />
    </>
  );
}
