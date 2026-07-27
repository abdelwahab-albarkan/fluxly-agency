"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BrowserMockup } from "@/components/portfolio/browser-mockup";

interface CaseStudyHeroProps {
  src: string;
  alt: string;
  url: string;
  accent: string;
}

const ease = [0.16, 1, 0.3, 1] as const;

export function CaseStudyHero({ src, alt, url, accent }: CaseStudyHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const springConfig = { stiffness: 110, damping: 18, mass: 0.6 };
  const springX = useSpring(px, springConfig);
  const springY = useSpring(py, springConfig);
  const rotateY = useTransform(springX, [-0.5, 0.5], [9, -9]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [-6, 6]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <div className="relative">
      {/* Ambient lighting */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
        style={{ background: `radial-gradient(closest-side, ${accent}33, transparent)` }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[120px]" />

      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="relative mx-auto max-w-4xl"
        style={{ perspective: "1600px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <BrowserMockup src={src} alt={alt} url={url} priority sizes="(min-width: 1024px) 900px, 100vw" />

            {/* Glass reflection + sheen */}
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-white/[0.08] via-transparent to-white/[0.04]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 rounded-t-xl bg-gradient-to-b from-white/[0.07] to-transparent" />
          </motion.div>
        </motion.div>

        {/* Floor glow */}
        <div className="pointer-events-none absolute inset-x-16 -bottom-6 h-14 rounded-full bg-brand/30 blur-2xl" />
      </div>
    </div>
  );
}
