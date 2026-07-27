import React, { useId } from "react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiLaravel,
  SiPhp,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiShadcnui,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/animations/reveal";

/** Official two-tone Python mark (matches python.org brand SVG exactly). */
function PythonLogo({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0.21 -0.077 110 110" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient
          id={`${id}-blue`}
          x1="63.8159"
          y1="56.6829"
          x2="118.4934"
          y2="1.8225"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1 0 0 -1 -53.2974 66.4321)"
        >
          <stop offset="0" stopColor="#387EB8" />
          <stop offset="1" stopColor="#366994" />
        </linearGradient>
        <linearGradient
          id={`${id}-yellow`}
          x1="97.0444"
          y1="21.6321"
          x2="155.6665"
          y2="-34.5308"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1 0 0 -1 -53.2974 66.4321)"
        >
          <stop offset="0" stopColor="#FFE052" />
          <stop offset="1" stopColor="#FFC331" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id}-blue)`}
        d="M55.023-0.077c-25.971,0-26.25,10.081-26.25,12.156c0,3.148,0,12.594,0,12.594h26.75v3.781c0,0-27.852,0-37.375,0 c-7.949,0-17.938,4.833-17.938,26.25c0,19.673,7.792,27.281,15.656,27.281c2.335,0,9.344,0,9.344,0s0-9.765,0-13.125 c0-5.491,2.721-15.656,15.406-15.656c15.91,0,19.971,0,26.531,0c3.902,0,14.906-1.696,14.906-14.406 c0-13.452,0-17.89,0-24.219C82.054,11.426,81.515-0.077,55.023-0.077z M40.273,8.392c2.662,0,4.813,2.15,4.813,4.813 c0,2.661-2.151,4.813-4.813,4.813s-4.813-2.151-4.813-4.813C35.46,10.542,37.611,8.392,40.273,8.392z"
      />
      <path
        fill={`url(#${id}-yellow)`}
        d="M55.397,109.923c25.959,0,26.282-10.271,26.282-12.156c0-3.148,0-12.594,0-12.594H54.897v-3.781 c0,0,28.032,0,37.375,0c8.009,0,17.938-4.954,17.938-26.25c0-23.322-10.538-27.281-15.656-27.281c-2.336,0-9.344,0-9.344,0 s0,10.216,0,13.125c0,5.491-2.631,15.656-15.406,15.656c-15.91,0-19.476,0-26.532,0c-3.892,0-14.906,1.896-14.906,14.406 c0,14.475,0,18.265,0,24.219C28.366,100.497,31.562,109.923,55.397,109.923z M70.148,101.454c-2.662,0-4.813-2.151-4.813-4.813 s2.15-4.813,4.813-4.813c2.661,0,4.813,2.151,4.813,4.813S72.809,101.454,70.148,101.454z"
      />
    </svg>
  );
}

/** Official 5-piece multi-color Figma mark. */
function FigmaLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path fill="#0acf83" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" />
      <path fill="#a259ff" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" />
      <path fill="#f24e1e" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" />
      <path fill="#ff7262" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z" />
      <path fill="#1abcfe" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" />
    </svg>
  );
}

/** Framer Motion mark filled with a purple gradient. */
function FramerMotionLogo({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id={`${id}-framer`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
      <path fill={`url(#${id}-framer)`} d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </svg>
  );
}

interface Tech {
  name: string;
  description: string;
  icon: IconType;
  /** Official brand color. Omitted for icons that self-color (multi-tone marks). */
  color?: string;
}

const technologies: Tech[] = [
  { name: "React", description: "UI Library", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", description: "React Framework", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", description: "Typed JavaScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", description: "Scripting Language", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", description: "Runtime Environment", icon: SiNodedotjs, color: "#339933" },
  { name: "Laravel", description: "PHP Framework", icon: SiLaravel, color: "#FF2D20" },
  { name: "PHP", description: "Server Language", icon: SiPhp, color: "#777BB4" },
  { name: "Python", description: "Data & Automation", icon: PythonLogo },
  { name: "PostgreSQL", description: "Relational Database", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", description: "NoSQL Database", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", description: "Containerization", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", description: "Cloud Platform", icon: FaAws, color: "#FF9900" },
  { name: "Git", description: "Version Control", icon: SiGit, color: "#F05032" },
  { name: "GitHub", description: "Code Hosting", icon: SiGithub, color: "#FFFFFF" },
  { name: "Tailwind CSS", description: "Utility-first CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", description: "Animation Library", icon: FramerMotionLogo },
  { name: "shadcn/ui", description: "Component Library", icon: SiShadcnui, color: "#FFFFFF" },
  { name: "Figma", description: "Design Tool", icon: FigmaLogo },
];

export function TechStack() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Technologies" title="Built with tools that scale" />

        <RevealGroup className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {technologies.map((tech) => (
            <RevealItem key={tech.name}>
              <div className="group flex h-full flex-col items-center gap-3 rounded-xl border border-border-subtle bg-surface/60 px-4 py-7 text-center backdrop-blur-md transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-brand/40 hover:bg-surface hover:shadow-[0_20px_45px_-15px_rgba(59,130,246,0.45)]">
                <tech.icon className="h-9 w-9" style={tech.color ? { color: tech.color } : undefined} />
                <div>
                  <p className="text-sm font-semibold text-white">{tech.name}</p>
                  <p className="mt-1 text-xs text-ink-muted">{tech.description}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
