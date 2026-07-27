"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { BrowserMockup, PhoneMockup } from "@/components/portfolio/browser-mockup";
import { cn } from "@/lib/utils/cn";
import type { GalleryShot } from "@/lib/constants/case-study-content";

interface CaseStudyGalleryProps {
  shots?: GalleryShot[];
  url: string;
  accent: string;
}

type Row =
  | { kind: "hero"; items: [GalleryShot] }
  | { kind: "full"; items: [GalleryShot] }
  | { kind: "phone"; items: [GalleryShot] }
  | { kind: "pair"; items: [GalleryShot, GalleryShot] };

/** Build a storytelling rhythm: large hero, then alternating pairs / full-widths,
 *  with phone screenshots given their own centered moment. Never leaves a lonely half. */
function buildRows(shots: GalleryShot[]): Row[] {
  const rows: Row[] = [];
  let i = 0;
  if (shots.length > 0) {
    rows.push({ kind: "hero", items: [shots[0]] });
    i = 1;
  }
  while (i < shots.length) {
    const shot = shots[i];
    if (shot.device === "phone") {
      rows.push({ kind: "phone", items: [shot] });
      i += 1;
      continue;
    }
    const next = shots[i + 1];
    if (next && next.device !== "phone") {
      rows.push({ kind: "pair", items: [shot, next] });
      i += 2;
    } else {
      rows.push({ kind: "full", items: [shot] });
      i += 1;
    }
  }
  return rows;
}

function GalleryItem({
  shot,
  url,
  accent,
  onOpen,
  priority,
  sizes,
}: {
  shot: GalleryShot;
  url: string;
  accent: string;
  onOpen: () => void;
  priority?: boolean;
  sizes?: string;
}) {
  const isPhone = shot.device === "phone";
  return (
    <figure className="group">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View ${shot.label}`}
        className="relative block w-full cursor-zoom-in rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-xl opacity-70 blur-2xl"
          style={{ background: `radial-gradient(60% 60% at 50% 0%, ${accent}26, transparent 70%)` }}
        />

        {isPhone ? (
          <div className="py-4">
            <PhoneMockup src={shot.src} alt={shot.label} priority={priority} />
          </div>
        ) : (
          <BrowserMockup src={shot.src} alt={shot.label} url={url} priority={priority} sizes={sizes} />
        )}

        <span className="pointer-events-none absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-canvas/70 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
          <ZoomIn className="h-4 w-4" strokeWidth={2} />
        </span>
      </button>

      <figcaption className="mt-4 text-center">
        <span className="text-sm font-semibold text-white">{shot.label}</span>
        {shot.caption && <span className="mx-auto mt-1 block max-w-md text-sm text-ink-muted">{shot.caption}</span>}
      </figcaption>
    </figure>
  );
}

export function CaseStudyGallery({ shots, url, accent }: CaseStudyGalleryProps) {
  const [active, setActive] = useState<GalleryShot | null>(null);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  if (!shots || shots.length === 0) return null;

  const rows = buildRows(shots);

  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Inside the product"
          description="A guided walkthrough of the screens and flows we designed and built."
        />

        <div className="mt-16 flex flex-col gap-8 md:gap-12">
          {rows.map((row, r) => {
            if (row.kind === "pair") {
              return (
                <div key={r} className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {row.items.map((shot) => (
                    <Reveal key={shot.src}>
                      <GalleryItem
                        shot={shot}
                        url={url}
                        accent={accent}
                        onOpen={() => setActive(shot)}
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </Reveal>
                  ))}
                </div>
              );
            }

            if (row.kind === "phone") {
              return (
                <Reveal key={r}>
                  <GalleryItem shot={row.items[0]} url={url} accent={accent} onOpen={() => setActive(row.items[0])} />
                </Reveal>
              );
            }

            // hero + full: full-width
            const shot = row.items[0];
            return (
              <Reveal key={r} className={cn(row.kind === "hero" && "mx-auto w-full max-w-5xl")}>
                <GalleryItem
                  shot={shot}
                  url={url}
                  accent={accent}
                  onOpen={() => setActive(shot)}
                  priority={row.kind === "hero"}
                  sizes="(min-width: 768px) 1000px, 100vw"
                />
              </Reveal>
            );
          })}
        </div>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-canvas/90 p-6 backdrop-blur-md md:p-12"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>

            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className={cn("relative w-full", active.device === "phone" ? "max-w-sm" : "max-w-6xl")}
            >
              <div
                className={cn(
                  "relative w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl",
                  active.device === "phone" ? "aspect-[9/19.5]" : "aspect-[3/2]"
                )}
              >
                <Image src={active.src} alt={active.label} fill sizes="(min-width: 768px) 1100px, 100vw" className="object-contain" />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-ink-secondary">
                <span className="text-white">{active.label}</span>
                {active.caption && <span className="text-ink-muted"> — {active.caption}</span>}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
