"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface StatCounterProps {
  /** Pre-formatted value, e.g. "150+", "98%", "8+", "4.9", "1.4s", "1M+". */
  value: string;
  duration?: number;
}

/**
 * Animates the numeric portion of a formatted stat string, counting from 0 to
 * its final value exactly once when it scrolls into view. The final rendered
 * text is never altered — "150+" counts 0 → 150, "4.9" counts 0 → 4.9, etc.
 */
export function StatCounter({ value, duration = 1.8 }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const hasRun = useRef(false);

  // Parse once per `value` so the reference is stable across re-renders.
  const parsed = useMemo(() => {
    const m = value.match(/^([^\d-]*)(-?\d[\d,]*(?:\.\d+)?)(.*)$/);
    if (!m) return null;
    const numStr = m[2].replace(/,/g, "");
    return {
      prefix: m[1],
      target: parseFloat(numStr),
      suffix: m[3],
      decimals: numStr.includes(".") ? numStr.split(".")[1].length : 0,
    };
  }, [value]);

  const [display, setDisplay] = useState(() => (parsed ? "0" : value));

  useEffect(() => {
    if (!isInView || !parsed || hasRun.current) return;
    hasRun.current = true;

    const controls = animate(0, parsed.target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(parsed.decimals)),
      onComplete: () => setDisplay(parsed.target.toFixed(parsed.decimals)),
    });
    return () => controls.stop();
  }, [isInView, parsed, duration]);

  if (!parsed) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {parsed.prefix}
      {display}
      {parsed.suffix}
    </span>
  );
}
