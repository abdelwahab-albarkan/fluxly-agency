import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-tight transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97] will-change-transform";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-b from-brand to-brand-hover text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_8px_24px_-6px_rgba(59,130,246,0.55)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),0_16px_44px_-8px_rgba(59,130,246,0.7)] hover:-translate-y-0.5 hover:scale-[1.015]",
  secondary:
    "border border-white/10 bg-white/[0.02] text-white backdrop-blur-md hover:border-brand/40 hover:bg-white/[0.05] hover:shadow-[0_12px_36px_-12px_rgba(59,130,246,0.4)] hover:-translate-y-0.5 hover:scale-[1.01]",
  ghost: "bg-transparent text-ink-secondary hover:text-white",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-12 px-7 text-sm",
  lg: "h-14 px-9 text-base",
};

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

type ButtonProps = ButtonOwnProps &
  (
    | ({ href: string } & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className">)
    | ({ href?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">)
  );

export function Button({ variant = "primary", size = "md", href, className, children, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as Omit<React.ComponentPropsWithoutRef<typeof Link>, "href">)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
