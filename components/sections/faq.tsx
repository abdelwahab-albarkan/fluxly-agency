"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils/cn";

export interface FaqEntry {
  question: string;
  answer: string;
}

const defaultFaqs: FaqEntry[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most marketing sites ship in 2-4 weeks. Larger web applications typically run 6-12 weeks depending on scope. We'll give you a fixed timeline before work begins.",
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer:
      "Both. Our Starter and Business plans are built for startups and SMEs, while our Enterprise engagements support larger organizations with dedicated teams and SLAs.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes a post-launch support window, and we offer ongoing maintenance plans for monitoring, updates, and continuous improvement.",
  },
  {
    question: "Can you work with our existing brand or codebase?",
    answer:
      "Yes. We regularly join existing codebases and design systems, and can either extend your current brand or design a new one from scratch.",
  },
  {
    question: "How do payments work?",
    answer:
      "Projects are typically split into milestone payments — a deposit to start, with the remainder tied to agreed deliverables throughout the engagement.",
  },
];

function FaqItem({ index, question, answer }: FaqEntry & { index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-xl border bg-surface/40 transition-colors duration-300",
        open ? "border-brand/40" : "border-border-subtle hover:border-white/15"
      )}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-4 px-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="pt-0.5 font-mono text-xs font-semibold text-ink-muted">{String(index + 1).padStart(2, "0")}</span>
        <span className="flex-1 text-base font-semibold leading-snug text-white">{question}</span>
        <span
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
            open ? "rotate-45 border-brand bg-brand text-white" : "border-border-subtle text-ink-muted"
          )}
        >
          <Plus className="h-3.5 w-3.5" strokeWidth={2} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 pl-[3.25rem] text-sm leading-relaxed text-ink-muted">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FaqProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: FaqEntry[];
}

export function Faq({ eyebrow = "FAQ", title = "Frequently asked questions", description, items = defaultFaqs }: FaqProps) {
  const mid = Math.ceil(items.length / 2);
  const columns = [items.slice(0, mid), items.slice(mid)];

  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <Reveal className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-start lg:gap-x-6">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4">
              {col.map((faq, i) => (
                <FaqItem key={faq.question} index={colIdx === 0 ? i : i + mid} {...faq} />
              ))}
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <Link
            href="/contact"
            className="group flex items-center justify-between rounded-xl border border-border-subtle bg-surface-section px-6 py-6 transition-colors duration-300 hover:border-brand/30"
          >
            <span className="text-sm font-medium text-ink-secondary">
              Still have questions? <span className="text-white">Get in touch</span> — we reply within one business day.
            </span>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-ink-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
              strokeWidth={2}
            />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
