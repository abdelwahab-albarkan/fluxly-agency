import React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/animations/reveal";

export interface LegalSectionEntry {
  title: string;
  content: string;
}

interface LegalContentProps {
  lastUpdated: string;
  sections: LegalSectionEntry[];
}

export function LegalContent({ lastUpdated, sections }: LegalContentProps) {
  return (
    <section className="pb-24 md:pb-32">
      <Container className="max-w-3xl">
        <Reveal className="flex justify-center">
          <Badge>Last updated {lastUpdated}</Badge>
        </Reveal>

        <div className="mt-14 flex flex-col gap-12">
          {sections.map((section) => (
            <Reveal key={section.title}>
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-ink-secondary">{section.content}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
