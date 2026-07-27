import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react";
import { PageHero, Cta } from "@/components/sections";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { RevealGroup, RevealItem, Reveal } from "@/components/animations/reveal";
import { benefits, openRoles } from "@/lib/constants/careers";

export const metadata: Metadata = {
  title: "Careers — Fluxly Agency",
  description: "Join a small, senior, remote-first team building premium digital products for growing businesses.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join the team behind the work"
        description="We're a small, remote-first studio of designers and engineers who care more about craft than headcount. If that sounds like you, we'd love to talk."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <SectionHeading eyebrow="Why Work With Us" title="Built for people who do their best work" />
          <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <RevealItem key={benefit.title}>
                <Card className="h-full p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                    <benefit.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-6 text-base font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{benefit.description}</p>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <SectionHeading eyebrow="Open Positions" title="Current openings" />

          <RevealGroup className="mx-auto mt-16 flex max-w-3xl flex-col gap-4">
            {openRoles.map((role) => (
              <RevealItem key={role.title}>
                <div className="flex flex-col gap-4 rounded-xl border border-border-subtle bg-surface/40 p-6 transition-all duration-300 hover:border-brand/40 hover:bg-surface sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-white">{role.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" strokeWidth={2} />
                        {role.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
                        {role.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <Button href="/contact" variant="secondary" className="shrink-0">
                    Apply
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </Button>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mx-auto mt-8 max-w-3xl text-center">
            <p className="text-sm text-ink-muted">
              Don&apos;t see a role that fits?{" "}
              <Link href="/contact" className="font-medium text-brand hover:text-brand-hover">
                Reach out anyway
              </Link>{" "}
              — we&apos;re always open to meeting people who do great work.
            </p>
          </Reveal>
        </Container>
      </section>

      <Cta
        title="Think you'd be a great fit?"
        description="Send us a note about yourself and the kind of work you want to be doing."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="Learn About Us"
        secondaryHref="/about"
      />
    </>
  );
}
