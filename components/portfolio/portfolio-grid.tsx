"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/components/portfolio/project-card";
import { projects, type FilterCategory } from "@/lib/constants/projects";
import { cn } from "@/lib/utils/cn";

const filters: Array<FilterCategory | "All"> = [
  "All",
  "SaaS",
  "AI",
  "E-commerce",
  "Finance",
  "Healthcare",
  "Real Estate",
  "Restaurant",
  "Beauty",
  "Fitness",
  "Mobile",
  "Legal",
];

export function PortfolioGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible = active === "All" ? projects : projects.filter((p) => p.filterCategory === active);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
              active === filter ? "text-white" : "text-ink-muted hover:text-white"
            )}
          >
            {active === filter && (
              <motion.span
                layoutId="portfolio-filter-pill"
                className="glow-brand absolute inset-0 rounded-full bg-gradient-to-b from-brand to-brand-hover"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{filter}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="[perspective:1400px]"
            >
              <motion.div
                whileHover={{ rotateX: 3, rotateY: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state — defensive fallback if a filter has no matching projects */}
      {visible.length === 0 && (
        <div className="mt-14 rounded-xl border border-dashed border-border-subtle bg-surface/30 py-20 text-center">
          <p className="text-lg font-semibold text-white">No projects in this category yet</p>
          <p className="mt-2 text-sm text-ink-muted">Check back soon, or explore all of our work.</p>
          <button
            type="button"
            onClick={() => setActive("All")}
            className="mt-6 rounded-full bg-gradient-to-b from-brand to-brand-hover px-5 py-2.5 text-sm font-semibold text-white"
          >
            View all projects
          </button>
        </div>
      )}
    </div>
  );
}
