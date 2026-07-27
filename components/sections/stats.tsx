"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Rocket, Heart, Award, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { StatCounter } from "@/components/animations/stat-counter";

const stats = [
  { value: "150+", label: "Projects Delivered", icon: Rocket },
  { value: "98%", label: "Client Satisfaction", icon: Heart },
  { value: "8+", label: "Years Experience", icon: Award },
  { value: "4.9", label: "Average Rating", icon: Star },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-border-subtle bg-surface-section py-24 md:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/20 blur-[150px]" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay" />
      <motion.div
        className="pointer-events-none absolute -left-12 top-1/4 h-64 w-64 rounded-full bg-brand/10 blur-[90px]"
        animate={{ x: [0, 24, 0], y: [0, -18, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-12 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-[100px]"
        animate={{ x: [0, -24, 0], y: [0, 18, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">By the numbers</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">Measurable Impact</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">
            Our results are built on successful partnerships, thoughtful design, and scalable digital products that
            help businesses grow.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-7 text-center backdrop-blur-md transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-brand/40 hover:shadow-[0_30px_70px_-25px_rgba(59,130,246,0.55)]"
            >
              {/* radial hover glow */}
              <div className="pointer-events-none absolute -top-12 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-brand/0 blur-2xl transition-colors duration-500 group-hover:bg-brand/30" />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-60"
                style={{ background: "radial-gradient(60% 100% at 50% 0%, rgba(59,130,246,0.14), transparent 70%)" }}
              />

              <div className="relative mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:border-brand/40 group-hover:bg-brand/15">
                <stat.icon className="h-5 w-5" strokeWidth={2} />
              </div>

              <p className="relative mt-6 bg-gradient-to-b from-white to-ink-secondary bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl">
                <StatCounter value={stat.value} />
              </p>
              <p className="relative mt-2 text-sm text-ink-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
