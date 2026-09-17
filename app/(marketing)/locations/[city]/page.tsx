import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MapPin } from "lucide-react";
import { PageHero, ServicesGrid, Testimonials, Cta } from "@/components/sections";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/animations/reveal";
import { locations, getLocation } from "@/lib/constants/locations";

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) return {};
  return {
    title: `Web Design & Development Agency in ${loc.city}, ${loc.stateAbbr} | Fluxly Agency`,
    description: `${loc.city} web design and development agency. We build custom websites, e-commerce stores, and SEO for ${loc.city} businesses. Free consultation.`,
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: {
      title: `Web Design & Development Agency in ${loc.city} | Fluxly Agency`,
      description: `Custom web design, development, e-commerce, and SEO for ${loc.city}, ${loc.stateAbbr} businesses.`,
      url: `/locations/${loc.slug}`,
    },
  };
}

// Services to internal-link from each city page (captures "<service> <city>" intent).
const cityServices = [
  { label: "Web Design", href: "/services/web-development" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "E-commerce Development", href: "/services/ecommerce" },
  { label: "UI/UX Design", href: "/services/ui-ux" },
  { label: "Branding", href: "/services/branding" },
  { label: "SEO", href: "/services/seo" },
];

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Fluxly Agency — Web Design & Development in ${loc.city}`,
    url: `https://agencyfluxly.com/locations/${loc.slug}`,
    telephone: "+212625218443",
    email: "abdelwahabalbarkan2018@gmail.com",
    priceRange: "$$",
    areaServed: { "@type": "City", name: `${loc.city}, ${loc.stateAbbr}` },
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.city,
      addressRegion: loc.stateAbbr,
      addressCountry: "US",
    },
    description: `Web design, development, e-commerce, and SEO for businesses in ${loc.city}, ${loc.state}.`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        eyebrow={`${loc.city}, ${loc.stateAbbr}`}
        title={`Web Design & Development Agency in ${loc.city}`}
        description={loc.intro}
      />

      {/* Unique, city-specific content block */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Local Expertise"
                title={`Your ${loc.city} Web Partner`}
              />
              <p className="mt-5 text-base leading-relaxed text-ink-muted">{loc.intro}</p>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                We work with {loc.localFocus} — combining custom web design, modern development, and
                data-driven SEO to help {loc.city} businesses turn their website into their best
                salesperson.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brand">
                <MapPin className="h-4 w-4" />
                Serving {loc.city} and the surrounding {loc.state} area
              </div>
            </div>

            {/* Services offered in this city (internal links) */}
            <div className="rounded-xl border border-border-subtle bg-surface/40 p-8 backdrop-blur-md">
              <h3 className="text-lg font-semibold text-white">
                Our services in {loc.city}
              </h3>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {cityServices.map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      className="group flex items-center gap-2.5 text-sm text-ink-secondary transition-colors hover:text-white"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/15 text-brand">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {s.label} in {loc.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Reused: full services grid */}
      <section className="pb-20 md:pb-28">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title={`Full-service web design & development for ${loc.city}`}
            description={`Everything ${loc.city} businesses need to launch, grow, and stand out online — under one roof.`}
          />
          <div className="mt-14">
            <ServicesGrid />
          </div>
        </Container>
      </section>

      {/* Reused: why choose us (kept generic but framed for the city) */}
      <section className="pb-20 md:pb-28">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Us"
            title={`Why ${loc.city} businesses work with Fluxly`}
            align="center"
          />
          <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Custom-built, never templated", d: `Every ${loc.city} project is designed and coded from scratch for your brand.` },
              { t: "Fast & SEO-ready", d: "Sites engineered for Core Web Vitals and built to rank in local search." },
              { t: "Conversion-focused", d: `We design for one thing: turning ${loc.city} visitors into customers.` },
              { t: "Transparent process", d: "Clear timelines, weekly updates, and fixed scope from day one." },
              { t: "Senior team", d: "You work directly with senior designers and developers — no juniors, no outsourcing." },
              { t: "Ongoing support", d: "Launch is the start — we maintain, monitor, and improve after go-live." },
            ].map((item) => (
              <RevealItem key={item.t}>
                <div className="h-full rounded-xl border border-border-subtle bg-surface/40 p-7 backdrop-blur-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                    <Check className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">{item.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.d}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <Testimonials />

      <Cta
        title={`Ready to grow your ${loc.city} business online?`}
        description={`Tell us about your project. We'll get back to you within two hours with a plan for your ${loc.city} website.`}
        primaryLabel="Get a Free Quote"
        primaryHref="/contact"
        secondaryLabel="View Our Work"
        secondaryHref="/portfolio"
      />
    </>
  );
}
