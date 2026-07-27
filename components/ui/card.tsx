import React from "react";
import { cn } from "@/lib/utils/cn";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "group relative rounded-xl border border-border-subtle bg-surface/60 p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/40 hover:bg-surface hover:shadow-2xl hover:shadow-black/40",
        className
      )}
    >
      {children}
    </div>
  );
}
