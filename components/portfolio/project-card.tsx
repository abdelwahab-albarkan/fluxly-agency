import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrowserMockup } from "./browser-mockup";
import type { Project } from "@/lib/constants/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  sizes?: string;
}

export function ProjectCard({ project, priority = false, sizes }: ProjectCardProps) {
  const tech = project.tech.split(" · ");

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-surface transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_30px_70px_-20px_rgba(59,130,246,0.4)]"
    >
      {/* Blue ambient glow on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(120% 70% at 50% 0%, ${project.accent}24, transparent 62%)` }}
      />

      {/* Screenshot in browser frame */}
      <div className="relative p-4">
        <BrowserMockup src={project.image} alt={`${project.name} website`} url={project.url} priority={priority} sizes={sizes}>
          {/* Category badge */}
          <span className="absolute left-3 top-3 z-20 rounded-full border border-white/10 bg-canvas/70 px-3 py-1 text-[11px] font-medium text-ink-secondary backdrop-blur-md">
            {project.filterCategory}
          </span>

          {/* Gradient overlay + reveal CTA */}
          <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-canvas via-canvas/30 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="inline-flex translate-y-2 items-center gap-1.5 text-sm font-semibold text-white transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0">
              View Case Study
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </span>
          </div>
        </BrowserMockup>
      </div>

      {/* Metadata */}
      <div className="relative flex flex-1 flex-col px-6 pb-6">
        <h3 className="text-lg font-semibold text-white">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border-subtle bg-surface-section px-2.5 py-1 text-[11px] font-medium text-ink-secondary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
