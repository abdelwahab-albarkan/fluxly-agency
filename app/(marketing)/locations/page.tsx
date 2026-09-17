import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { PageHero, Cta } from "@/components/sections";
import { Container } from "@/components/ui/container";
import { RevealGroup, RevealItem } from "@/components/animations/reveal";
import { locations } from "@/lib/constants/locations";

export const metadata: Metadata = {
  title: "Web Design & Development Agency by City — Fluxly Agency",
  description:
    "Fluxly is a US web design and development agency serving businesses in New York, Los Angeles, Chicago, Houston, Dallas, and more. Find your city.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Web Design & Development Across the US"
        description="We partner with businesses in major markets nationwide — combining custom web design, development, and SEO with an understanding of your local market. Find your city below."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => (
              <RevealItem key={loc.slug}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-border-subtle bg-surface/40 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-surface/70"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                      <MapPin className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-ink-muted transition-colors group-hover:text-brand" />
                  </div>
                  <h2 className="mt-5 text-lg font-semibold text-white">
                    {loc.city}, {loc.stateAbbr}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    Web design & development for {loc.localFocus}.
                  </p>
                  <span className="mt-4 text-sm font-semibold text-brand">
                    Web design in {loc.city} →
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <Cta
        title="Don't see your city?"
        description="We work with clients remotely across the entire US. Tell us where you are and what you need — we'll take it from there."
        primaryLabel="Get a Free Quote"
        primaryHref="/contact"
        secondaryLabel="Browse Services"
        secondaryHref="/services"
      />
    </>
  );
}
