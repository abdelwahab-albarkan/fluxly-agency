import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/animations/reveal";
import { processSteps, type ProcessStep } from "@/lib/constants/process";

interface ProcessProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  steps?: ProcessStep[];
}

// Literal strings so the Tailwind scanner can find and generate them.
const gridColsClass: Record<number, string> = {
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
  7: "lg:grid-cols-7",
};

export function Process({
  eyebrow = "Development Process",
  title = "A process built for momentum",
  description = "Six focused phases. No bloated timelines, no surprises.",
  steps = processSteps,
}: ProcessProps) {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border-subtle lg:block" />
          <RevealGroup className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-6 ${gridColsClass[steps.length] ?? "lg:grid-cols-6"}`}>

            {steps.map((step) => (
              <RevealItem key={step.number} className="relative flex flex-col items-start">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-canvas font-mono text-sm font-semibold text-brand">
                  {step.number}
                </span>
                <h3 className="mt-5 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
