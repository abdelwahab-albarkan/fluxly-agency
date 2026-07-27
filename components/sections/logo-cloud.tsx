import React from "react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/animations/reveal";

const logos = ["Northwind", "Vertex Labs", "Solace", "Meridian", "Nova Health", "Orbital"];

export function LogoCloud() {
  return (
    <section className="border-y border-border-subtle bg-canvas-secondary/40 py-14">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-medium uppercase tracking-widest text-ink-muted">
            Trusted by product teams at
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((logo) => (
            <div key={logo} className="flex items-center justify-center text-center text-sm font-semibold tracking-wide text-ink-muted/70 grayscale transition-all hover:text-white hover:grayscale-0">
              {logo}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
