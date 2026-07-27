import React from "react";
import type { Metadata } from "next";
import { PageHero, Faq, Cta } from "@/components/sections";

export const metadata: Metadata = {
  title: "FAQ — Fluxly Agency",
  description: "Answers to common questions about our process, pricing, timelines, and support.",
};

const allFaqs = [
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
    question: "Which plan is right for my business?",
    answer:
      "Starter suits a single-location business launching its first premium site. Business fits growing companies needing a full custom build. Enterprise is for organizations with complex, ongoing product needs.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No. Your quote covers design, development, and launch. Hosting and third-party services (like a CMS or payment provider) are billed separately at cost.",
  },
  {
    question: "How do payments work?",
    answer:
      "Projects are typically split into milestone payments — a deposit to start, with the remainder tied to agreed deliverables throughout the engagement.",
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
    question: "Do you offer free consultations?",
    answer: "Yes — book a free 30-minute call to talk through your project before committing to anything.",
  },
  {
    question: "I'm not sure what I need yet. Can I still reach out?",
    answer: "Absolutely. Most of our best projects start as a rough idea — we'll help you shape the scope.",
  },
  {
    question: "Do you provide ongoing support after the project ends?",
    answer:
      "Yes, we offer monthly maintenance plans covering monitoring, security updates, and small content changes.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know about how we work, what things cost, and what to expect."
      />

      <Faq eyebrow="All Questions" title="Have a question?" items={allFaqs} />

      <Cta />
    </>
  );
}
