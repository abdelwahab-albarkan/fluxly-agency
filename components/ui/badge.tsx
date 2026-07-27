import React from "react";
import { cn } from "@/lib/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function Badge({ children, icon, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface/60 px-4 py-1.5 text-xs font-medium tracking-wide text-ink-secondary backdrop-blur-sm",
        className
      )}
    >
      {icon && <span className="text-accent">{icon}</span>}
      {children}
    </span>
  );
}
