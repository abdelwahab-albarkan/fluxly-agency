import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Cta } from "@/components/sections";
import { Container } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/animations/reveal";
import { industries } from "@/lib/constants/industries";

export const metadata: Metadata = {
  title: "Industries We Serve | Web Design by Industry — Fluxly Agency",
  description:
    "Web design and development for restaurants, healthcare, real estate, law, education, and more — custom digital products tailored to your industry.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for the businesses we serve"
        description="Every industry has different customers and different constraints. Here's how we tailor our work to yours."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <RevealItem key={industry.slug}>
                <div className="group h-full overflow-hidden rounded-xl border border-border-subtle bg-surface transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_24px_60px_-18px_rgba(59,130,246,0.35)]">
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={`${industry.name} — premium website design by Agency`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-surface/10" />
                    <div className="absolute inset-0 bg-canvas/20" />
                    <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-canvas/70 text-brand backdrop-blur-md">
                      <industry.icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="p-7">
                    <h2 className="text-base font-semibold text-white">{industry.name}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{industry.description}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <Cta />
    </>
  );
}
