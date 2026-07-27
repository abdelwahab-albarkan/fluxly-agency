import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Cta } from "@/components/sections";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { RevealGroup, RevealItem } from "@/components/animations/reveal";
import { caseStudies } from "@/lib/constants/case-studies";

export const metadata: Metadata = {
  title: "Case Studies — Fluxly Agency",
  description: "In-depth breakdowns of the problems, process, and measurable results behind our client projects.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Problems solved, results delivered"
        description="A closer look at the research, decisions, and outcomes behind a few of our favorite engagements."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <RevealItem key={study.slug}>
                <Link href={`/case-studies/${study.slug}`} className="group block h-full">
                  <Card className="flex h-full flex-col p-8">
                    <span
                      className="w-fit rounded-full border border-border-subtle px-3 py-1 text-[11px] font-medium text-ink-secondary"
                      style={{ backgroundColor: `${study.accent}14` }}
                    >
                      {study.category}
                    </span>
                    <h2 className="mt-5 text-xl font-semibold text-white">{study.name}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{study.summary}</p>

                    <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border-subtle pt-6">
                      {study.results.map((result) => (
                        <div key={result.label}>
                          <p className="text-lg font-extrabold text-white">{result.value}</p>
                          <p className="mt-0.5 text-[11px] leading-snug text-ink-muted">{result.label}</p>
                        </div>
                      ))}
                    </div>

                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink-muted transition-colors duration-300 group-hover:text-brand">
                      Read the case study
                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        strokeWidth={2}
                      />
                    </span>
                  </Card>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <Cta />
    </>
  );
}
