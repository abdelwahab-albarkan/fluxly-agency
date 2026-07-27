"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Award, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { num: "10+", label: "Years Experience", icon: Briefcase },
  { num: "250+", label: "Projects Completed", icon: CheckCircle },
  { num: "98%", label: "Client Satisfaction", icon: Users },
  { num: "50+", label: "Awards Won", icon: Award },
];

const trustedLogos = ["Google", "airbnb", "Figma", "slack", "shopify"];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-canvas text-white">
      {/* Ambient glow lighting */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.03]" />
      <div className="pointer-events-none absolute left-1/2 top-[25%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-brand/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-10%] top-[20%] h-[600px] w-[600px] rounded-full bg-accent/10 blur-[140px]" />

      {/* Hero body */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center gap-16 px-6 pb-12 pt-32 md:pb-20 md:pt-40">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left: headline + CTAs */}
          <div className="space-y-8 text-left lg:col-span-6">
            <div className="space-y-4">
              <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.25em] text-brand">
                We Design. We Build. We Grow.
              </span>

              <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl">
                Digital Experiences <br />
                that{" "}
                <span className="bg-gradient-to-r from-brand via-accent to-brand bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.35)]">
                  Inspire
                </span>
              </h1>
            </div>

            <p className="max-w-xl text-base font-normal leading-relaxed text-ink-muted sm:text-lg">
              We&apos;re a digital agency crafting innovative solutions that help brands stand out and grow in the
              digital world.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-brand to-brand-hover px-7 py-3.5 text-sm font-bold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_24px_-6px_rgba(59,130,246,0.55)] transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_16px_40px_-8px_rgba(59,130,246,0.7)]"
              >
                View Our Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-ink-secondary transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                Our Services
              </Link>
            </div>

            {/* Trust logos */}
            <div className="space-y-4 border-t border-border-subtle pt-8">
              <p className="text-[10px] font-bold uppercase tracking-widest text-ink-muted">
                Trusted by industry leaders
              </p>
              <div className="flex flex-wrap items-center gap-8">
                {trustedLogos.map((name) => (
                  <span
                    key={name}
                    className="select-none text-base font-bold tracking-tight text-ink-muted opacity-60 transition-all duration-300 hover:text-white hover:opacity-100"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: hero illustration */}
          <div className="relative flex w-full items-center justify-center lg:col-span-6">
            {/* Soft blue radial glow behind the image */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[130px]" />
            <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[340px] w-[340px] rounded-full bg-accent/15 blur-[110px]" />

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease }}
              className="relative mx-auto w-full max-w-[620px] lg:mx-0"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.75)]"
              >
                <Image
                  src="/images/agency-hero.png"
                  alt="Fluxly Agency — modern studio with UI/UX design screens, a code editor, and live analytics"
                  width={1344}
                  height={768}
                  priority
                  quality={80}
                  sizes="(min-width: 1024px) 55vw, 90vw"
                  className="h-auto w-full select-none object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats footer */}
        <div className="relative z-20 w-full rounded-3xl border border-border-subtle bg-surface/40 p-8 backdrop-blur-md sm:p-10">
          <div className="grid grid-cols-2 gap-8 divide-y divide-border-subtle md:grid-cols-4 md:gap-6 md:divide-y-0 md:divide-x">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`group flex items-start gap-4 text-left transition-transform duration-300 hover:-translate-y-0.5 ${
                  idx > 1 ? "pt-6 md:pt-0" : ""
                } ${idx > 0 ? "md:pl-8" : ""}`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 transition-colors duration-300 group-hover:border-brand/40 group-hover:bg-brand/15">
                  <stat.icon className="h-5 w-5 text-brand" strokeWidth={2} />
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-black leading-none tracking-tight text-white sm:text-3xl">
                    {stat.num}
                  </p>
                  <p className="text-xs font-medium text-ink-muted">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
