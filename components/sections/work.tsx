import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { RevealGroup, RevealItem } from "@/components/animations/reveal";
import { ProjectCard } from "@/components/portfolio/project-card";
import { projects } from "@/lib/constants/projects";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

export function Work() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Featured Projects"
            title="Products we're proud to have shipped"
            description="A small sample of the systems we've designed and engineered end-to-end."
          />
          <Button href="/portfolio" variant="secondary" className="shrink-0">
            View all work
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </Button>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <RevealItem key={project.slug}>
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
