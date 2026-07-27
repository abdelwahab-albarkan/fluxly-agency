import React from "react";
import { MapPin, Navigation } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/animations/reveal";

/** A dark, premium stylized map card for the office location. */
export function ContactMap() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-[#0a0f1e] shadow-[0_40px_100px_-40px_rgba(59,130,246,0.5)]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[120px]" />

            <div className="relative h-[360px] w-full md:h-[460px]">
              {/* Street grid + river */}
              <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 460" aria-hidden>
                <defs>
                  <linearGradient id="map-fade" x1="0" y1="0" x2="0" y2="460" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#0a0f1e" stopOpacity="0" />
                    <stop offset="1" stopColor="#050816" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                {/* minor streets */}
                <g stroke="#1b2740" strokeWidth="1.5">
                  {Array.from({ length: 13 }).map((_, i) => (
                    <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="460" />
                  ))}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <line key={`h${i}`} x1="0" y1={i * 90} x2="1200" y2={i * 90} />
                  ))}
                </g>
                {/* major roads */}
                <g stroke="#26344f" strokeWidth="4" strokeLinecap="round">
                  <line x1="0" y1="180" x2="1200" y2="150" />
                  <line x1="300" y1="0" x2="360" y2="460" />
                  <line x1="820" y1="0" x2="760" y2="460" />
                </g>
                {/* river Thames */}
                <path
                  d="M-20,320 C220,260 380,400 620,340 S980,300 1220,360 L1220,460 L-20,460 Z"
                  fill="#0d1b33"
                  stroke="#1d3a63"
                  strokeWidth="2"
                />
                <rect x="0" y="0" width="1200" height="460" fill="url(#map-fade)" />
              </svg>

              {/* Office marker */}
              <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2">
                <span className="relative flex h-14 w-14 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/40" />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-brand/40 bg-brand/20 text-white shadow-[0_0_30px_-4px_rgba(59,130,246,0.8)] backdrop-blur-sm">
                    <MapPin className="h-5 w-5" strokeWidth={2} />
                  </span>
                </span>
              </div>

              {/* Location info card */}
              <div className="absolute left-5 top-5 max-w-[280px] rounded-xl border border-white/10 bg-canvas/80 p-5 backdrop-blur-xl md:left-8 md:top-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">Our Office</p>
                <p className="mt-2 text-base font-semibold text-white">Agency Studio</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  Canary Wharf, London E14
                  <br />
                  United Kingdom
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Canary+Wharf+London"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
                >
                  <Navigation className="h-3.5 w-3.5" strokeWidth={2} />
                  Open in Maps
                </a>
              </div>

              {/* Decorative zoom control */}
              <div className="absolute bottom-6 right-6 flex flex-col overflow-hidden rounded-lg border border-white/10 bg-canvas/70 backdrop-blur-md">
                <span className="flex h-9 w-9 items-center justify-center border-b border-white/10 text-lg text-ink-secondary">+</span>
                <span className="flex h-9 w-9 items-center justify-center text-lg text-ink-secondary">−</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
