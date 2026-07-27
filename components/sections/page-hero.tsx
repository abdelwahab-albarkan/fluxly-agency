"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

const ease = [0.16, 1, 0.3, 1] as const;

interface PageHeroProps {
  eyebrow?: string;
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: string;
}

export function PageHero({ eyebrow, icon, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(59,130,246,0.22),transparent_65%)]" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <motion.div
        className="pointer-events-none absolute left-[-12%] top-[-20%] h-[420px] w-[560px] rounded-full bg-brand/20 blur-[140px]"
        animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-[-10%] top-[0%] h-[320px] w-[320px] rounded-full bg-accent/15 blur-[120px]"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ghost watermark — depth behind the headline */}
      {eyebrow && (
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[18vw] font-black uppercase leading-none tracking-tighter text-white/[0.025]"
        >
          {eyebrow}
        </div>
      )}

      <Container className="relative flex flex-col items-center text-center">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ink-muted"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" strokeWidth={2} />
            <span className="text-ink-secondary">{eyebrow}</span>
          </motion.div>
        )}

        {eyebrow && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05, ease }}>
            <Badge icon={icon}>{eyebrow}</Badge>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease }}
          className="text-balance relative mt-7 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.02em] text-white sm:text-6xl md:text-7xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="text-balance relative mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg"
          >
            {description}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
