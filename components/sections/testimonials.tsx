import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/reveal";

const featured = {
  quote:
    "Fluxly rebuilt our entire platform in eight weeks, and it felt like working with an in-house team that already understood the business. Conversions are up, the site is lightning fast, and every detail was deliberate — nothing generic, nothing off-the-shelf.",
  name: "Sarah Mitchell",
  role: "CEO, NovaTech",
  image: "/images/team/agency-testimonial-1.jpg",
};

const supporting = [
  {
    quote:
      "The design quality is on another level. Every screen feels premium and intentional — exactly what we needed to stand out and raise our round.",
    name: "James Carter",
    role: "Founder, BrightLabs",
    image: "/images/team/agency-testimonial-2.jpg",
  },
  {
    quote:
      "Our organic traffic and lead conversion both climbed within a month of launch. Genuinely the best agency we've worked with.",
    name: "Emily Johnson",
    role: "Marketing Director, Elevate Digital",
    image: "/images/team/agency-testimonial-3.jpg",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" strokeWidth={0} />
      ))}
    </div>
  );
}

function Avatar({ src, name, size }: { src: string; name: string; size: number }) {
  return (
    <span
      className="relative shrink-0 overflow-hidden rounded-full ring-2 ring-white/10 transition-all duration-300 group-hover:ring-brand/40"
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={name} fill sizes={`${size}px`} className="object-cover" />
    </span>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Client stories" title="Loved by teams who expect the best" />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Featured testimonial */}
          <Reveal className="lg:col-span-3">
            <div className="group glow-brand relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-brand/25 bg-surface p-10 md:p-12">
              <Quote className="pointer-events-none absolute -right-4 -top-4 h-32 w-32 text-brand/5" strokeWidth={1} />
              <div className="relative">
                <Stars />
                <p className="text-balance mt-6 text-xl font-medium leading-relaxed text-white md:text-2xl">
                  &ldquo;{featured.quote}&rdquo;
                </p>
              </div>
              <div className="relative mt-10 flex items-center gap-4 border-t border-border-subtle pt-6">
                <Avatar src={featured.image} name={featured.name} size={52} />
                <div>
                  <p className="text-base font-semibold text-white">{featured.name}</p>
                  <p className="text-sm text-ink-muted">{featured.role}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Supporting testimonials */}
          <RevealGroup className="flex flex-col gap-6 lg:col-span-2">
            {supporting.map((t) => (
              <RevealItem key={t.name} className="flex-1">
                <div className="group flex h-full flex-col justify-between rounded-xl border border-border-subtle bg-surface/40 p-7 transition-all duration-300 hover:border-brand/30 hover:bg-surface">
                  <div>
                    <Stars />
                    <p className="mt-4 text-sm leading-relaxed text-ink-secondary">&ldquo;{t.quote}&rdquo;</p>
                  </div>
                  <div className="mt-6 flex items-center gap-3 border-t border-border-subtle pt-5">
                    <Avatar src={t.image} name={t.name} size={40} />
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-ink-muted">{t.role}</p>
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
