"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/constants/services";

export function ServicesList() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border-subtle border-t border-border-subtle">
      {services.map((service, idx) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          onMouseEnter={() => setActive(idx)}
          onMouseLeave={() => setActive(null)}
          className="group relative block"
        >
          <div className="relative z-10 flex flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:gap-10 md:py-12">
            <span className="font-mono text-xs font-semibold text-ink-muted sm:w-10">
              {String(idx + 1).padStart(2, "0")}
            </span>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-all duration-300 group-hover:scale-105 group-hover:border-brand/40 group-hover:bg-brand/15">
              <service.icon className="h-5 w-5" strokeWidth={2} />
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-bold tracking-tight text-white transition-colors sm:text-2xl">
                {service.name}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
                {service.shortDescription}
              </p>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-ink-muted transition-all duration-300 group-hover:rotate-45 group-hover:border-brand/40 group-hover:bg-brand group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </div>
          </div>

          <AnimatePresence>
            {active === idx && (
              <motion.div
                layoutId="services-row-highlight"
                className="absolute inset-0 -z-0 rounded-2xl bg-white/[0.03]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            )}
          </AnimatePresence>
        </Link>
      ))}
    </div>
  );
}
