"use client";

import React from "react";
import { motion } from "framer-motion";

export function AnimatedRule({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "left" }}
      className={`h-px w-full bg-gradient-to-r from-brand/60 via-border-subtle to-transparent ${className ?? ""}`}
    />
  );
}
