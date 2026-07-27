"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Check, Palette, Code2, Users, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils/cn";

const ease = [0.16, 1, 0.3, 1] as const;

interface WorkItem {
  icon: LucideIcon;
  title: string;
  image: string;
  description: string;
  features: string[];
}

const items: WorkItem[] = [
  {
    icon: Palette,
    title: "UI/UX Design",
    image: "/images/team/agency-designer.jpg",
    description: "We craft interface systems that are beautiful, intuitive, and built to convert.",
    features: [
      "Design systems & component libraries",
      "Interactive, clickable prototypes",
      "Usability testing with real users",
    ],
  },
  {
    icon: Code2,
    title: "Development",
    image: "/images/team/agency-developer.jpg",
    description: "Senior engineers ship clean, fast, production-grade code that scales with you.",
    features: [
      "Next.js, TypeScript & modern tooling",
      "Scalable, maintainable architecture",
      "Automated testing & CI/CD",
    ],
  },
  {
    icon: Users,
    title: "Consultation & Collaboration",
    image: "/images/team/agency-client-meeting.jpg",
    description: "We work as one team with you — clear communication from the first call to launch.",
    features: ["Discovery workshops & strategy", "Weekly progress updates", "Clear milestones & fixed scope"],
  },
];

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

function Row({ item, index }: { item: WorkItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const reversed = index % 2 === 1;
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      variants={rowVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "group grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14",
        reversed && "md:[direction:rtl]"
      )}
    >
      {/* Image card */}
      <div className="md:[direction:ltr]">
        <div className="relative rounded-[26px] bg-gradient-to-br from-brand/50 via-brand/15 to-accent/30 p-[1.5px] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 group-hover:from-brand/80 group-hover:via-brand/30 group-hover:to-accent/50 group-hover:shadow-[0_45px_100px_-25px_rgba(59,130,246,0.55)]">
          {/* Ambient blue glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-4 -z-10 rounded-[32px] bg-brand/25 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] bg-surface">
            <motion.div style={{ y: parallaxY }} className="absolute inset-[-8%]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                quality={90}
                className="object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/45 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="md:[direction:ltr]">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-brand transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-6 group-hover:scale-110 group-hover:border-brand/40 group-hover:bg-brand/20">
            <Icon className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="font-mono text-sm font-semibold text-ink-muted">{String(index + 1).padStart(2, "0")}</span>
        </div>

        <h3 className="mt-6 text-2xl font-bold tracking-tight text-white md:text-3xl">{item.title}</h3>
        <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">{item.description}</p>

        <ul className="mt-6 space-y-3">
          {item.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-ink-secondary">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                <Check className="h-3 w-3" strokeWidth={2.5} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function HowWeWork() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="How We Work"
          title="Design, engineering, and partnership"
          description="One senior team across every phase — the craft behind products that look premium and perform."
        />
        <div className="mt-16 flex flex-col gap-16 md:mt-20 md:gap-28">
          {items.map((item, i) => (
            <Row key={item.title} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
