"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
        scrolled
          ? "border-b border-white/[0.06] bg-canvas/70 shadow-[0_1px_0_0_rgba(255,255,255,0.04),0_20px_50px_-20px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-24 max-w-[1280px] items-center justify-between px-6 lg:px-8">
        <Link href="/" className="group flex items-center" aria-label="Fluxly Agency — home">
          <Image
            src="/logos/fluxly-logo.png"
            alt="Fluxly Agency Logo"
            width={990}
            height={273}
            priority
            quality={100}
            className="h-[38px] w-auto object-contain transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] sm:h-[42px] lg:h-[46px]"
          />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative py-2 text-sm font-medium transition-colors duration-300",
                  isActive ? "text-white" : "text-ink-secondary hover:text-white"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-brand to-accent transition-all duration-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/book"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-brand to-brand-hover px-5 py-2.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_24px_-6px_rgba(59,130,246,0.5)] transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_16px_36px_-8px_rgba(59,130,246,0.65)]"
          >
            Book a Call
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
          </Link>
        </div>

        <button
          onClick={() => setIsOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-secondary transition-colors hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-white/[0.06] bg-canvas/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    pathname === link.href ? "bg-white/[0.04] text-white" : "text-ink-secondary hover:bg-surface hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-3 border-t border-border-subtle pt-4">
                <Link
                  href="/book"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-brand to-brand-hover px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-6px_rgba(59,130,246,0.5)]"
                >
                  Book a Call
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
