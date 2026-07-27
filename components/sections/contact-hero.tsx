"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Star, Rocket, Clock, Globe2, Building2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const ease = [0.16, 1, 0.3, 1] as const;

const infoRows = [
  { icon: Clock, label: "Average Reply Time", value: "Under 2 Hours" },
  { icon: Globe2, label: "Availability", value: "Available Worldwide" },
  { icon: Building2, label: "Trusted by", value: "Startups & Businesses" },
];

function StatsPanel() {
  return (
    <div className="relative" style={{ perspective: "1400px" }}>
      {/* Floating decorative chips */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-5 top-10 z-20 hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-xs font-medium text-ink-secondary shadow-[0_16px_40px_-16px_rgba(59,130,246,0.5)] backdrop-blur-xl sm:flex"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        Online now
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -right-4 bottom-8 z-20 hidden items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 shadow-[0_16px_40px_-16px_rgba(59,130,246,0.5)] backdrop-blur-xl sm:flex"
      >
        <div className="flex -space-x-2">
          {["#3B82F6", "#06B6D4", "#6366F1"].map((c) => (
            <span key={c} className="h-6 w-6 rounded-full border-2 border-canvas" style={{ background: `linear-gradient(135deg, ${c}, #0B1120)` }} />
          ))}
        </div>
        <span className="text-xs font-medium text-white">120+ clients</span>
      </motion.div>

      {/* Glow */}
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-brand/15 blur-3xl" />

      {/* Main glass panel */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 6 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease }}
        className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-8 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)] backdrop-blur-xl"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 rounded-t-2xl bg-[radial-gradient(70%_100%_at_50%_0%,rgba(59,130,246,0.18),transparent_70%)]" />

        <div className="relative flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ink-secondary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Available for new projects
        </div>

        {/* Stat tiles */}
        <div className="relative mt-6 grid grid-cols-2 gap-4">
          {[
            { icon: Star, value: "98%", label: "Client Satisfaction" },
            { icon: Rocket, value: "120+", label: "Successful Projects" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-brand/20 bg-brand/10 text-brand">
                <s.icon className="h-4 w-4" strokeWidth={2} />
              </div>
              <p className="mt-4 text-3xl font-extrabold tracking-tight text-white">{s.value}</p>
              <p className="mt-1 text-xs text-ink-muted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Info rows */}
        <div className="relative mt-4 space-y-2.5">
          {infoRows.map((row) => (
            <div key={row.label} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <row.icon className="h-4 w-4" strokeWidth={2} />
              </span>
              <div className="flex flex-1 items-baseline justify-between gap-2">
                <span className="text-xs text-ink-muted">{row.label}</span>
                <span className="text-sm font-medium text-white">{row.value}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      {/* Animated gradient background + grid + glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_25%_-5%,rgba(59,130,246,0.2),transparent_62%)]" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_65%_55%_at_35%_0%,black,transparent)]" />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay" />
      <motion.div
        className="pointer-events-none absolute right-[-10%] top-[8%] h-[440px] w-[440px] rounded-full bg-brand/20 blur-[140px]"
        animate={{ x: [0, -34, 0], y: [0, 26, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute left-[-8%] bottom-[-12%] h-[340px] w-[340px] rounded-full bg-accent/15 blur-[120px]"
        animate={{ x: [0, 26, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ink-muted"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" strokeWidth={2} />
            <span className="text-ink-secondary">Contact</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
            className="text-balance mt-6 max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl"
          >
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">Amazing Together.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-balance mt-6 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg"
          >
            We help ambitious businesses design and build modern websites, SaaS products, and digital experiences that
            drive real growth. Tell us about your project — we reply within two hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease }}
            className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <Button href="/book" size="lg">
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Button>
            <Button href="/portfolio" variant="secondary" size="lg">
              View Our Work
            </Button>
          </motion.div>
        </div>

        {/* Right: premium stats panel */}
        <StatsPanel />
      </Container>
    </section>
  );
}
