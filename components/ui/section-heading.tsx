import React from "react";
import { cn } from "@/lib/utils/cn";
import { Badge } from "./badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "center", className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h2 className="text-balance max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {description && (
        <p className={cn("text-balance max-w-xl text-base leading-relaxed text-ink-muted md:text-lg", align === "center" ? "mx-auto" : "")}>
          {description}
        </p>
      )}
    </div>
  );
}
