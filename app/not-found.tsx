"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const ease = [0.16, 1, 0.3, 1] as const;

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-canvas">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-5%,rgba(59,130,246,0.24),transparent_65%)]" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)]" />
      <motion.div
        className="pointer-events-none absolute left-[-14%] top-[-10%] h-[460px] w-[600px] rounded-full bg-brand/25 blur-[150px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-[-12%] bottom-[-10%] h-[360px] w-[360px] rounded-full bg-accent/20 blur-[130px]"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <header className="relative flex h-24 items-center">
        <Container>
          <Link href="/" className="group flex w-fit items-center" aria-label="Fluxly Agency — home">
            <Image
              src="/logos/fluxly-logo.png"
              alt="Fluxly Agency Logo"
              width={990}
              height={273}
              quality={100}
              className="h-[38px] w-auto object-contain transition-transform duration-500 group-hover:scale-105 sm:h-[42px] lg:h-[46px]"
            />
          </Link>
        </Container>
      </header>

      <main className="relative flex flex-1 items-center justify-center">
        <Container className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="bg-gradient-to-b from-white to-ink-secondary bg-clip-text text-[120px] font-black leading-none tracking-[-0.02em] text-transparent sm:text-[160px]"
          >
            404
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            This page doesn&apos;t exist
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-4 max-w-md text-base leading-relaxed text-ink-muted"
          >
            The page you&apos;re looking for may have been moved or no longer exists. Let&apos;s get you back on
            track.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button href="/" size="lg">
              <Home className="h-4 w-4" strokeWidth={2} />
              Return Home
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Button>
          </motion.div>
        </Container>
      </main>
    </div>
  );
}
