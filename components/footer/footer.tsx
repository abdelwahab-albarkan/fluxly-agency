"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Clock, ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Website Development", href: "/services/web-development" },
  { label: "E-commerce", href: "/services/ecommerce" },
  { label: "SaaS Development", href: "/services/saas-development" },
  { label: "Web Applications", href: "/services/web-applications" },
  { label: "UI/UX Design", href: "/services/ui-ux" },
  { label: "SEO", href: "/services/seo" },
  { label: "Branding", href: "/services/branding" },
  { label: "Website Maintenance", href: "/services/maintenance" },
];

const resourceLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Policy", href: "/cookies" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors duration-300 hover:text-white"
      >
        <span className="transition-transform duration-300 group-hover:translate-x-1">{label}</span>
      </Link>
    </li>
  );
}

function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubscribed(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <input
          type="email"
          required
          disabled={subscribed}
          aria-label="Email address for newsletter"
          placeholder="you@company.com"
          className="w-full rounded-full border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm text-white placeholder-ink-muted backdrop-blur-md transition-colors duration-300 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 disabled:opacity-60"
        />
      </div>
      <button
        type="submit"
        disabled={subscribed}
        className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-brand to-brand-hover px-6 py-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_24px_-6px_rgba(59,130,246,0.55)] transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-80"
      >
        {subscribed ? (
          <>
            Subscribed
            <Check className="h-4 w-4" strokeWidth={2} />
          </>
        ) : (
          <>
            Subscribe
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
          </>
        )}
      </button>
    </form>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border-subtle bg-canvas-secondary">
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[140px]" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.03]" />

      {/* Newsletter band */}
      <div className="relative border-b border-border-subtle">
        <Container className="flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Stay Updated.</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">
              Get the latest insights on web development, design, SEO, and digital innovation.
            </p>
          </div>
          <NewsletterForm />
        </Container>
      </div>

      {/* Main grid */}
      <Container className="relative grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 md:py-24 lg:grid-cols-5">
        <div className="space-y-6 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex w-fit items-center" aria-label="Fluxly Agency — home">
            <Image
              src="/logos/fluxly-logo.png"
              alt="Fluxly Agency Logo"
              width={990}
              height={273}
              quality={100}
              loading="lazy"
              className="h-[42px] w-auto object-contain"
            />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
            We design and engineer premium digital products, brand systems, and automation for companies that
            refuse to look ordinary.
          </p>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-ink-muted transition-all duration-300 hover:border-brand/40 hover:bg-brand/10 hover:text-white hover:shadow-[0_8px_20px_-8px_rgba(59,130,246,0.5)]"
              >
                <Icon className="h-4 w-4" strokeWidth={2} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="space-y-3.5">
            {companyLinks.map((link) => (
              <FooterLink key={link.href} {...link} />
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="space-y-3.5">
            {serviceLinks.map((link) => (
              <FooterLink key={link.href} {...link} />
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Resources</h3>
          <ul className="space-y-3.5">
            {resourceLinks.map((link) => (
              <FooterLink key={link.href} {...link} />
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="space-y-4">
            <li>
              <a
                href="mailto:hello@fluxlyagency.com"
                className="group flex items-start gap-2.5 text-sm text-ink-muted transition-colors duration-300 hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2} />
                hello@fluxlyagency.com
              </a>
            </li>
            <li>
              <a
                href="tel:+212XXXXXXXXX"
                className="group flex items-start gap-2.5 text-sm text-ink-muted transition-colors duration-300 hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2} />
                +212 XXX XXX XXX
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-ink-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2} />
              Morocco
            </li>
            <li className="flex items-start gap-2.5 text-sm text-ink-muted">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2} />
              <span>
                Monday – Friday
                <br />
                09:00 – 18:00
              </span>
            </li>
          </ul>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="relative border-t border-border-subtle">
        <Container className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-ink-muted sm:flex-row">
          <p>
            &copy; {year} Fluxly Agency.
            <br className="sm:hidden" /> All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <p>Made with ❤️ in Morocco</p>
        </Container>
      </div>
    </footer>
  );
}
