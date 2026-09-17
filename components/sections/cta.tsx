"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";

interface CtaProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /** Optional featured image shown on the right instead of the response-time card. */
  image?: string;
  imageAlt?: string;
}

export function Cta({
  title = "Let's Build Your Next Digital Product.",
  description = "Tell us about your project. We'll get back to you within one business day with next steps.",
  primaryLabel = "Book Free Consultation",
  primaryHref = "/book",
  secondaryLabel = "Talk to Us",
  secondaryHref = "/contact",
  image,
  imageAlt = "The Fluxly Agency team",
}: CtaProps) {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-surface px-8 py-16 md:px-16 md:py-20">
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_75%_75%_at_20%_30%,black,transparent)]" />
            <div className="pointer-events-none absolute left-[-5%] top-1/2 h-[380px] w-[480px] -translate-y-1/2 rounded-full bg-brand/25 blur-[130px]" />
            <div className="pointer-events-none absolute right-[5%] bottom-[-20%] h-[260px] w-[260px] rounded-full bg-accent/15 blur-[110px]" />

            <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-ink-secondary">
                  <Sparkles className="h-3 w-3 text-accent" strokeWidth={2} />
                  Let&apos;s work together
                </span>

                <h2 className="text-balance mt-6 max-w-xl text-3xl font-bold tracking-tight text-white md:text-5xl">
                  {title}
                </h2>
                <p className="text-balance mt-5 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">
                  {description}
                </p>

                <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <Button href={primaryHref} size="lg">
                    {primaryLabel}
                    <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </Button>
                  <Button href={secondaryHref} variant="secondary" size="lg">
                    {secondaryLabel}
                  </Button>
                  <a
                    href="https://wa.me/212625218443?text=Hi%20Fluxly%2C%20I%27d%20like%20a%20free%20quote%20for%20my%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with us on WhatsApp"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-[#0a1f14] shadow-[0_8px_24px_-6px_rgba(37,211,102,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20bd5a]"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {image ? (
                <div className="hidden lg:col-span-2 lg:block">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_70px_-25px_rgba(59,130,246,0.5)]"
                  >
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/50 via-transparent to-transparent" />
                  </motion.div>
                </div>
              ) : (
                <div className="hidden justify-self-end lg:col-span-2 lg:block">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-56 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 shadow-[0_24px_60px_-18px_rgba(59,130,246,0.4)] backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-2.5 text-xs font-medium text-ink-muted">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15 text-brand">
                        <Clock className="h-4 w-4" strokeWidth={2} />
                      </span>
                      Average response time
                    </div>
                    <p className="mt-4 text-3xl font-extrabold text-white">&lt; 24hrs</p>
                    <p className="mt-1 text-xs text-accent">Every inquiry, every time</p>
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
