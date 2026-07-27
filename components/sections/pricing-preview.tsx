import React from "react";
import { Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { RevealGroup, RevealItem } from "@/components/animations/reveal";
import { plans } from "@/lib/constants/pricing";

export function PricingPreview() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Every project is custom-built"
          description="We don't sell fixed products — every engagement is scoped around your goals, requirements, and budget. These packages are a starting point for the conversation."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <RevealItem key={plan.name}>
              {/* Wrapper stays overflow-visible so the badge can sit above the
                  card, while the card keeps overflow-hidden to contain its glow. */}
              <div className="relative h-full">
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-b from-brand to-brand-hover px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-brand/30">
                    <Sparkles className="h-3 w-3" strokeWidth={2} />
                    Most Popular
                  </span>
                )}

                <div
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-xl border p-8 backdrop-blur-md transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5",
                    plan.highlighted
                      ? "glow-brand border-brand/40 bg-surface"
                      : "border-border-subtle bg-surface/40 hover:border-white/15 hover:bg-surface/70"
                  )}
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/0 blur-3xl transition-colors duration-500 group-hover:bg-brand/15" />

                  <div className="relative">
                  <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{plan.description}</p>

                  <div className="mt-8 flex items-baseline gap-2">
                    {plan.priceLabel && (
                      <span className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                        {plan.priceLabel}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-4xl font-extrabold tracking-tight text-white">{plan.price}</p>

                  <ul className="mt-8 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-ink-secondary">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={plan.ctaHref}
                    variant={plan.highlighted ? "primary" : "secondary"}
                    className="mt-8 w-full"
                  >
                    {plan.ctaLabel}
                  </Button>
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
