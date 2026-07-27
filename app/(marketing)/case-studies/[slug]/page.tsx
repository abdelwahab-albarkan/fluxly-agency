import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero, Cta } from "@/components/sections";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/reveal";
import { DeviceMockup } from "@/components/portfolio/device-mockup";
import { caseStudies } from "@/lib/constants/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return { title: `${study.name} — Case Study — Fluxly Agency`, description: study.summary };
}

const narrative = (study: (typeof caseStudies)[number]) => [
  { label: "Problem", text: study.problem },
  { label: "Research", text: study.research },
  { label: "Solution", text: study.solution },
  { label: "Design", text: study.design },
  { label: "Development", text: study.development },
];

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return notFound();

  return (
    <>
      <PageHero eyebrow={study.category} title={study.name} description={study.summary} />

      <section className="pb-24 md:pb-32">
        <Container>
          <Reveal>
            <div className="flex items-center justify-center rounded-xl border border-border-subtle bg-surface-section p-10 md:p-16">
              <DeviceMockup device={study.device} accent={study.accent} />
            </div>
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap justify-center gap-3">
            {study.tech.split(" · ").map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-14">
            {narrative(study).map((block) => (
              <Reveal key={block.label}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{block.label}</h2>
                <p className="mt-4 text-base leading-relaxed text-ink-secondary md:text-lg">{block.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border-subtle bg-surface-section py-20">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {study.results.map((result) => (
              <RevealItem key={result.label} className="flex flex-col items-center text-center">
                <span className="bg-gradient-to-b from-white to-ink-secondary bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
                  {result.value}
                </span>
                <span className="mt-2 text-sm text-ink-muted">{result.label}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <Cta
        title="Want results like this for your business?"
        description="Tell us about your project. We'll get back to you within one business day with next steps."
        primaryLabel="Start Your Project"
        primaryHref="/book"
      />
    </>
  );
}
