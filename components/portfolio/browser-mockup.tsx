import React from "react";
import Image from "next/image";

interface BrowserMockupProps {
  src: string;
  alt: string;
  url?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * A premium browser-window frame around a real product screenshot.
 * Server-safe (no hooks) — usable in both server and client components.
 * The image scales on hover when the frame sits inside a `group` element.
 */
export function BrowserMockup({
  src,
  alt,
  url = "preview.app",
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className = "",
  children,
}: BrowserMockupProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-[#0a0d16] shadow-[0_30px_60px_-28px_rgba(0,0,0,0.75)] ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        <span className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-center text-[10px] text-ink-muted">
          {url}
        </span>
      </div>
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="object-cover object-top transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
        {children}
      </div>
    </div>
  );
}

interface PhoneMockupProps {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  children?: React.ReactNode;
}

/** A premium phone frame for mobile screenshots. Server-safe. */
export function PhoneMockup({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 768px) 280px, 70vw",
  className = "",
  children,
}: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[280px] rounded-[2.2rem] border-[6px] border-[#0a0d16] bg-[#0a0d16] shadow-[0_40px_70px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/10 ${className}`}
    >
      <div className="absolute left-1/2 top-3 z-10 h-4 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.7rem]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="object-cover object-top transition-transform duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
        />
        {children}
      </div>
    </div>
  );
}
