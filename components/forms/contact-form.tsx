"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const inputClasses =
  "w-full rounded-xl border border-border-subtle bg-surface/60 px-4 py-3.5 text-sm text-white placeholder-ink-muted transition-colors duration-300 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20";

const services = [
  "Custom Website Development",
  "E-commerce Development",
  "SaaS Applications",
  "Web Applications",
  "UI/UX Design",
  "Website Redesign",
  "SEO Optimization",
  "Branding",
  "Business Automation",
  "Website Maintenance",
];

const budgets = ["Under $5,000", "$5,000 – $15,000", "$15,000 – $40,000", "$40,000+"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex h-full min-h-[520px] flex-col items-center justify-center rounded-xl border border-border-subtle bg-surface/60 p-10 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-accent" strokeWidth={1.5} />
        <h3 className="mt-4 text-lg font-semibold text-white">Message received</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
          Thanks for reaching out. We&apos;ll get back to you within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <AnimatePresence>
      <motion.form
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        onSubmit={handleSubmit}
        className="relative overflow-hidden rounded-xl border border-border-subtle bg-surface/60 p-8 md:p-10"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/10 blur-[100px]" />

        <div className="relative">
          <h2 className="text-lg font-semibold text-white">Tell us about your project</h2>
          <p className="mt-1.5 text-sm text-ink-muted">
            The more detail you share, the faster we can put together a plan.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-medium text-ink-secondary">
                Full name
              </label>
              <input id="name" name="name" type="text" required placeholder="Jane Cooper" className={inputClasses} />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-medium text-ink-secondary">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="company" className="mb-2 block text-xs font-medium text-ink-secondary">
                Company
              </label>
              <input id="company" name="company" type="text" placeholder="Company, Inc." className={inputClasses} />
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-xs font-medium text-ink-secondary">
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 010-2938"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="service" className="mb-2 block text-xs font-medium text-ink-secondary">
                Service required
              </label>
              <select id="service" name="service" defaultValue="" className={inputClasses}>
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="mb-2 block text-xs font-medium text-ink-secondary">
                Budget range
              </label>
              <select id="budget" name="budget" defaultValue="" className={inputClasses}>
                <option value="" disabled>
                  Select a range
                </option>
                {budgets.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="mb-2 block text-xs font-medium text-ink-secondary">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="What are you looking to build?"
              className={`${inputClasses} resize-none`}
            />
          </div>

          <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto">
            Send Message
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Button>
        </div>
      </motion.form>
    </AnimatePresence>
  );
}
