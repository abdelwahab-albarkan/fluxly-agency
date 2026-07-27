import React from "react";
import type { Device } from "@/lib/constants/projects";

function SitePreview({ accent, dense = false }: { accent: string; dense?: boolean }) {
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-br from-[#0a1022] to-[#0d1428] p-3.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
          <div className="h-1.5 w-9 rounded-full bg-white/25" />
        </div>
        <div className="flex gap-1.5">
          <div className="h-1.5 w-4 rounded-full bg-white/10" />
          <div className="h-1.5 w-4 rounded-full bg-white/10" />
          <div className="h-1.5 w-4 rounded-full bg-white/10" />
        </div>
      </div>

      <div
        className="mt-3 flex-1 rounded-md p-3.5"
        style={{ background: `linear-gradient(135deg, ${accent}2E, transparent 70%)` }}
      >
        <div className="h-2 w-3/4 rounded-full bg-white/40" />
        <div className="mt-1.5 h-2 w-1/2 rounded-full bg-white/20" />
        <div className="mt-3 h-5 w-16 rounded-md" style={{ background: accent }} />

        <div className={dense ? "mt-4 grid grid-cols-2 gap-1.5" : "mt-4 grid grid-cols-3 gap-1.5"}>
          {Array.from({ length: dense ? 4 : 3 }).map((_, i) => (
            <div key={i} className="h-9 rounded-md border border-white/10 bg-white/[0.05]" />
          ))}
        </div>
      </div>
    </div>
  );
}

function LaptopFrame({ accent }: { accent: string }) {
  return (
    <div className="w-full max-w-[400px]">
      <div className="rounded-t-lg border border-white/10 bg-[#0a0d16] p-1.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-1 px-1.5 pb-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-green-400/60" />
        </div>
        <div className="aspect-[16/10] overflow-hidden rounded-sm">
          <SitePreview accent={accent} />
        </div>
      </div>
      <div className="mx-auto h-2 w-full rounded-b-md border-x border-b border-white/10 bg-gradient-to-b from-white/10 to-white/0" />
      <div className="mx-auto h-1 w-1/3 rounded-b-md bg-white/10" />
    </div>
  );
}

function DesktopFrame({ accent }: { accent: string }) {
  return (
    <div className="w-full max-w-[420px] rounded-lg border border-white/10 bg-[#0a0d16] p-1.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-1.5 px-1.5 pb-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-green-400/60" />
        <span className="ml-2 flex-1 rounded-full bg-white/5 py-0.5 text-center text-[8px] text-ink-muted">
          app.site
        </span>
      </div>
      <div className="aspect-[16/10] overflow-hidden rounded-sm">
        <SitePreview accent={accent} dense />
      </div>
    </div>
  );
}

function MobileFrame({ accent }: { accent: string }) {
  return (
    <div className="relative w-[170px] rounded-[1.5rem] border-4 border-[#0a0d16] bg-[#0a0d16] p-1 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
      <div className="absolute left-1/2 top-2.5 z-10 h-2.5 w-12 -translate-x-1/2 rounded-full bg-black" />
      <div className="aspect-[9/19] overflow-hidden rounded-[1.1rem]">
        <SitePreview accent={accent} />
      </div>
    </div>
  );
}

export function DeviceMockup({ device, accent }: { device: Device; accent: string }) {
  if (device === "laptop") return <LaptopFrame accent={accent} />;
  if (device === "mobile") return <MobileFrame accent={accent} />;
  return <DesktopFrame accent={accent} />;
}
