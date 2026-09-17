import React from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { Process } from "@/components/sections/process";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import type { Service } from "@/lib/constants/services";

export function ServiceDetail({ service }: { service: Service }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    serviceType: service.name,
    areaServed: { "@type": "Country", name: "United States" },
    provider: { "@type": "Organization", name: "Fluxly Agency", url: "https://agencyfluxly.com" },
  };
  const faqSchema =
    service.faq && service.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faq.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <PageHero
        eyebrow="Service"
        icon={<service.icon className="h-3.5 w-3.5" strokeWidth={2} />}
        title={service.name}
        description={service.shortDescription}
      />

      <section className="pb-24 md:pb-32">
        <Container className="max-w-3xl">
          <Reveal>
            <p className="text-balance text-center text-base leading-relaxed text-ink-secondary md:text-lg">
              {service.description}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <SectionHeading eyebrow="What's Included" title="Features" />
          <RevealGroup className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {service.features.map((feature) => (
              <RevealItem key={feature}>
                <div className="flex items-start gap-3 rounded-xl border border-border-subtle bg-surface/40 p-4">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                  <span className="text-sm leading-relaxed text-ink-secondary">{feature}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <SectionHeading eyebrow="Tech Stack" title="Technologies we use" />
          <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
            {service.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </Reveal>
        </Container>
      </section>

      <Process />

      <Faq eyebrow="FAQ" title="Common questions" items={service.faq} />

      <Cta
        title={`Ready to start your ${service.name.toLowerCase()} project?`}
        description="Tell us about your goals. We'll get back to you within one business day with next steps."
      />
    </>
  );
}
