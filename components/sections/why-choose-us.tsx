import React from "react";
import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";

const otherAgencies = [
  "Generic templates, reskinned",
  "Slow, unpredictable timelines",
  "Junior teams, senior invoices",
  "Handed off and forgotten",
];

const ourAgency = [
  "Custom-designed for your brand",
  "Fixed scope, fixed timeline",
  "One senior team, start to finish",
  "Ongoing care after launch",
];

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Why Choose Us" title="A different kind of agency" />

        <Reveal className="mt-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border-subtle bg-surface/40 p-8 md:p-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">Other Agencies</h3>
              <ul className="mt-6 space-y-4">
                {otherAgencies.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-muted">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted/60" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glow-brand rounded-xl border border-brand/30 bg-surface p-8 md:p-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">Our Agency</h3>
              <ul className="mt-6 space-y-4">
                {ourAgency.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-secondary">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
