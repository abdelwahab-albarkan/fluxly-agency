import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Building2, Clock, Layers, Cpu } from "lucide-react";
import { PageHero, Cta } from "@/components/sections";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem, StatCounter, AnimatedRule } from "@/components/animations";
import { CaseStudyHero } from "@/components/portfolio/case-study-hero";
import { CaseStudyGallery } from "@/components/portfolio/case-study-gallery";
import { BrowserMockup } from "@/components/portfolio/browser-mockup";
import { projects } from "@/lib/constants/projects";
import { getCaseStudyContent } from "@/lib/constants/case-study-content";
import { getProjectGallery } from "@/lib/constants/portfolio-gallery";
import { cn } from "@/lib/utils/cn";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const content = getCaseStudyContent(slug);
  return {
    title: `${project.name} — Case Study — Fluxly Agency`,
    description: content?.overview ?? project.description,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return notFound();

  const project = projects[index];
  const content = getCaseStudyContent(slug);
  // Gallery is built automatically from files in /public/images/portfolio that
  // match the project's prefix (see lib/constants/portfolio-gallery.ts).
  const gallery = getProjectGallery(slug);
  const hasGallery = gallery.length > 0;
  const tech = project.tech.split(" · ");
  const prevProject = projects[(index - 1 + projects.length) % projects.length];
  const nextProject = projects[(index + 1) % projects.length];

  const metaCards = [
    { icon: Building2, label: "Client Industry", value: project.category },
    { icon: Clock, label: "Timeline", value: project.timeline },
  ];

  const narrative = content
    ? [
        { num: "01", label: "Project Overview", body: content.overview },
        { num: "02", label: "The Challenge", body: content.challenge },
        { num: "03", label: "Our Solution", body: content.solution },
      ]
    : [];

  return (
    <>
      <PageHero eyebrow={project.category} title={project.name} description={content?.overview ?? project.description} />

      {/* Floating hero mockup — only when the project has no full gallery
          (a gallery leads with its own large hero, so we avoid a duplicate). */}
      {!hasGallery && (
        <section className="pb-24 md:pb-32">
          <Container>
            <CaseStudyHero
              src={project.image}
              alt={`${project.name} website`}
              url={project.url}
              accent={project.accent}
            />
          </Container>
        </section>
      )}

      {/* Meta cards */}
      <section className="pb-24 md:pb-32">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {metaCards.map((card) => (
              <RevealItem key={card.label}>
                <div className="group h-full rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.45)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand/20 bg-brand/10 text-brand transition-colors duration-300 group-hover:border-brand/40 group-hover:bg-brand/15">
                    <card.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-muted">{card.label}</p>
                  <p className="mt-1.5 text-base font-medium text-white">{card.value}</p>
                </div>
              </RevealItem>
            ))}

            <RevealItem>
              <div className="group h-full rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.45)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand/20 bg-brand/10 text-brand transition-colors duration-300 group-hover:border-brand/40 group-hover:bg-brand/15">
                  <Layers className="h-5 w-5" strokeWidth={2} />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-muted">Services</p>
                <ul className="mt-1.5 space-y-1">
                  {project.servicesProvided.map((service) => (
                    <li key={service} className="text-sm text-ink-secondary">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>

            <RevealItem>
              <div className="group h-full rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_-20px_rgba(59,130,246,0.45)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand/20 bg-brand/10 text-brand transition-colors duration-300 group-hover:border-brand/40 group-hover:bg-brand/15">
                  <Cpu className="h-5 w-5" strokeWidth={2} />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-muted">Technologies</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </RevealItem>
          </RevealGroup>
        </Container>
      </section>

      {/* Alternating narrative with large section numbers */}
      {narrative.length > 0 && (
        <section className="pb-24 md:pb-32">
          <Container>
            <div className="flex flex-col gap-20 md:gap-28">
              {narrative.map((block, i) => (
                <div key={block.num}>
                  {i > 0 && <AnimatedRule className="mb-20 md:mb-28" />}
                  <Reveal>
                    <div
                      className={cn(
                        "grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12",
                        i % 2 === 1 && "lg:[direction:rtl]"
                      )}
                    >
                      <div className="lg:col-span-5 lg:[direction:ltr]">
                        <div className="flex items-baseline gap-4">
                          <span className="bg-gradient-to-b from-brand to-accent bg-clip-text font-mono text-6xl font-black leading-none text-transparent md:text-7xl">
                            {block.num}
                          </span>
                          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">{block.label}</h2>
                        </div>
                      </div>
                      <p className="text-balance text-lg leading-relaxed text-ink-secondary lg:col-span-7 lg:[direction:ltr] md:text-xl">
                        {block.body}
                      </p>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Gallery — auto-expands when screenshots are added */}
      <CaseStudyGallery shots={gallery} url={project.url} accent={project.accent} />

      {/* Results — premium metric cards */}
      <section className="relative overflow-hidden border-y border-border-subtle bg-surface-section py-24 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[130px]" />
        <Container className="relative">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">The Results</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Measurable impact</h2>
          </Reveal>

          <RevealGroup className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
            {project.results.map((result) => (
              <RevealItem key={result.label}>
                <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-8 text-center backdrop-blur-md transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_30px_70px_-25px_rgba(59,130,246,0.5)]">
                  <div className="pointer-events-none absolute -top-12 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-brand/0 blur-2xl transition-colors duration-500 group-hover:bg-brand/25" />
                  <p className="relative bg-gradient-to-b from-white to-ink-secondary bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl">
                    <StatCounter value={result.value} />
                  </p>
                  <p className="relative mt-3 text-sm text-ink-muted">{result.label}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Prev / Next with thumbnails */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { project: prevProject, label: "Previous Project", dir: "prev" as const },
              { project: nextProject, label: "Next Project", dir: "next" as const },
            ].map(({ project: p, label, dir }) => (
              <Link
                key={dir}
                href={`/portfolio/${p.slug}`}
                className={cn(
                  "group flex items-center gap-5 rounded-xl border border-border-subtle bg-surface/40 p-4 transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-brand/40 hover:bg-surface hover:shadow-[0_24px_60px_-25px_rgba(59,130,246,0.4)]",
                  dir === "next" && "md:flex-row-reverse md:text-right"
                )}
              >
                <div className="w-40 shrink-0 overflow-hidden rounded-lg">
                  <BrowserMockup src={p.image} alt={p.name} url={p.url} sizes="160px" />
                </div>
                <div className={cn("min-w-0 flex-1", dir === "next" && "md:flex md:flex-col md:items-end")}>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-ink-muted",
                      dir === "next" && "md:flex-row-reverse"
                    )}
                  >
                    {dir === "prev" ? (
                      <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={2} />
                    ) : (
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                    )}
                    {label}
                  </span>
                  <p className="mt-1 truncate text-lg font-semibold text-white transition-colors group-hover:text-brand">
                    {p.name}
                  </p>
                  <p className="truncate text-sm text-ink-muted">{p.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Cta
        title="Want results like this for your business?"
        description="Tell us about your project. We'll get back to you within one business day with next steps."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="Book a Free Consultation"
        secondaryHref="/book"
      />
    </>
  );
}
