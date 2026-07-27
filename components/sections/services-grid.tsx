import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/animations/reveal";
import { services } from "@/lib/constants/services";

const featuredSlugs = [
  "web-development",
  "ecommerce",
  "saas-development",
  "web-applications",
  "ui-ux",
  "redesign",
  "seo",
  "branding",
  "automation",
  "maintenance",
];

const featuredServices = featuredSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is (typeof services)[number] => Boolean(service));

export function ServicesGrid() {
  return (
    <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featuredServices.map((service) => (
        <RevealItem key={service.slug}>
          <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-surface/40 p-8 backdrop-blur-md transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-brand/40 hover:bg-surface/70 hover:shadow-[0_30px_70px_-25px_rgba(59,130,246,0.45)]">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/0 blur-3xl transition-colors duration-500 group-hover:bg-brand/20" />

            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-all duration-300 group-hover:scale-105 group-hover:border-brand/40 group-hover:bg-brand/15">
              <service.icon className="h-6 w-6" strokeWidth={2} />
            </div>

            <h3 className="relative mt-6 text-lg font-semibold text-white">{service.name}</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">{service.shortDescription}</p>

            <ul className="relative mt-6 flex-1 space-y-2.5">
              {service.features.slice(0, 3).map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href={`/services/${service.slug}`}
              className="relative mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors duration-300 group-hover:text-brand"
            >
              Learn More
              <ArrowRight
                className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
              />
            </Link>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
