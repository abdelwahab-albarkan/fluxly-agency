import React from "react";
import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Globe2,
  MessageSquareText,
  ClipboardCheck,
  HeartHandshake,
} from "lucide-react";
import { ContactHero, ContactMap, Process, Faq, Cta } from "@/components/sections";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/reveal";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact Our Web Agency | Free Consultation — Fluxly Agency",
  description:
    "Contact Fluxly Agency for a free consultation on web design, development, e-commerce, or SEO. We reply within two hours. Get a quote today.",
  alternates: { canonical: "/contact" },
};

const contactInfo = [
  { icon: Mail, label: "Email", value: "abdelwahabalbarkan2018@gmail.com", href: "mailto:abdelwahabalbarkan2018@gmail.com" },
  { icon: Phone, label: "Phone", value: "+212 625 218 443", href: "tel:+212625218443" },
  { icon: MessageCircle, label: "WhatsApp", value: "+212 625 218 443", href: "https://wa.me/212625218443" },
  { icon: MapPin, label: "Office", value: "New York, NY, United States", href: undefined },
  { icon: Clock, label: "Working Hours", value: "Monday – Friday, 9:00 AM – 6:00 PM ET", href: undefined },
  { icon: Globe2, label: "Availability", value: "Remote — serving clients across the US", href: undefined },
];

const whyWorkWithUs = [
  {
    icon: MessageSquareText,
    title: "Fast Communication",
    description: "Average response within 2 hours.",
  },
  {
    icon: ClipboardCheck,
    title: "Transparent Process",
    description: "Weekly updates and clear milestones.",
  },
  {
    icon: Globe2,
    title: "Worldwide Collaboration",
    description: "Remote-first agency serving global clients.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description: "We build products that grow with your business.",
  },
];

const processSteps = [
  { number: "01", title: "Discovery Call", description: "We learn about your business, goals, and what success looks like." },
  { number: "02", title: "Planning", description: "A clear scope, timeline, and roadmap before any work begins." },
  { number: "03", title: "Design", description: "High-fidelity designs refined with your feedback at every step." },
  { number: "04", title: "Development", description: "Senior engineers build a fast, scalable, production-ready product." },
  { number: "05", title: "Launch", description: "We ship, monitor closely, and make sure everything runs smoothly." },
  { number: "06", title: "Ongoing Support", description: "Continued monitoring, updates, and improvements after launch." },
];

const contactFaqs = [
  {
    question: "How quickly will I hear back?",
    answer: "We reply to every inquiry within two hours during working hours, and within one business day otherwise.",
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
    question: "Do you work with clients outside the UK?",
    answer: "Yes, we're a remote-first agency working with clients worldwide across every time zone.",
  },
];

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      {/* Contact info + form */}
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            {/* Left: contact info */}
            <div className="flex flex-col gap-4 lg:col-span-2">
              {contactInfo.map((info) => {
                const CardInner = (
                  <div className="group relative overflow-hidden rounded-xl border border-border-subtle bg-surface/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-surface/70 hover:shadow-[0_20px_45px_-20px_rgba(59,130,246,0.5)]">
                    <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand/0 blur-2xl transition-colors duration-300 group-hover:bg-brand/20" />
                    <div className="relative flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-colors duration-300 group-hover:border-brand/40 group-hover:bg-brand/15">
                        <info.icon className="h-5 w-5" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">{info.label}</p>
                        <p className="mt-1 text-sm font-medium text-white">{info.value}</p>
                      </div>
                    </div>
                  </div>
                );

                return (
                  <Reveal key={info.label}>
                    {info.href ? <a href={info.href}>{CardInner}</a> : CardInner}
                  </Reveal>
                );
              })}
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Map */}
      <ContactMap />

      {/* Why work with us */}
      <section className="pb-24 md:pb-32">
        <Container>
          <SectionHeading
            eyebrow="Why Work With Us"
            title="A partner you can count on"
            description="The things that make working with us feel effortless from the first message onward."
          />
          <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyWorkWithUs.map((item) => (
              <RevealItem key={item.title}>
                <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-brand/40 hover:bg-white/[0.05] hover:shadow-[0_30px_70px_-25px_rgba(59,130,246,0.45)]">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/0 blur-3xl transition-colors duration-500 group-hover:bg-brand/20" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-all duration-300 group-hover:scale-105 group-hover:border-brand/40 group-hover:bg-brand/15">
                    <item.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="relative mt-6 text-base font-semibold text-white">{item.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Process */}
      <Process
        eyebrow="Project Process"
        title="What happens after you reach out"
        description="A clear, structured path from first call to launch — and beyond."
        steps={processSteps}
      />

      <Faq eyebrow="Contact FAQ" title="Common questions" items={contactFaqs} />

      <Cta
        title="Ready to start your next project?"
        description="Tell us about your goals. We'll get back to you within two hours with next steps."
        primaryLabel="Book a Free Consultation"
        primaryHref="/book"
        secondaryLabel="View Portfolio"
        secondaryHref="/portfolio"
      />
    </>
  );
}
