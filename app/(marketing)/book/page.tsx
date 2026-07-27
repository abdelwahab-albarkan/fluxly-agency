import React from "react";
import type { Metadata } from "next";
import { MessageSquare, Clock3, Sparkles } from "lucide-react";
import { PageHero, Faq } from "@/components/sections";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { RevealGroup, RevealItem, Reveal } from "@/components/animations/reveal";
import { BookingForm } from "@/components/forms/booking-form";

export const metadata: Metadata = {
  title: "Book a Call — Fluxly Agency",
  description: "Book a free 30-minute consultation to talk through your project.",
};

const expectations = [
  { icon: Clock3, title: "30 minutes", description: "A focused conversation, not a sales pitch." },
  { icon: MessageSquare, title: "No pressure", description: "We'll talk through your goals and see if we're a fit." },
  { icon: Sparkles, title: "A clear next step", description: "You'll leave with a scoped plan, whether you hire us or not." },
];

const bookingFaqs = [
  {
    question: "What happens on the call?",
    answer: "We'll ask about your business, goals, and timeline, then outline how we'd approach the project and what it might cost.",
  },
  {
    question: "Is this call free?",
    answer: "Yes, the consultation is completely free with no obligation to move forward.",
  },
  {
    question: "Who will I be speaking with?",
    answer: "You'll speak directly with a senior member of our team — never a sales rep reading from a script.",
  },
];

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Call"
        title="Let's talk through your project"
        description="Pick a time that works for you. We'll spend 30 minutes understanding your goals and mapping out next steps."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <h2 className="sr-only">What to expect from the call</h2>
          <RevealGroup className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {expectations.map((item) => (
              <RevealItem key={item.title}>
                <Card className="h-full p-6 text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                    <item.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mx-auto max-w-2xl">
            <BookingForm />
          </Reveal>
        </Container>
      </section>

      <Faq eyebrow="Before You Book" title="Common questions" items={bookingFaqs} />
    </>
  );
}
