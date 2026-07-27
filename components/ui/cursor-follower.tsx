"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorFollower() {
  const [cursorType, setCursorType] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Exact coordinates
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Springs for large ambient spotlight (slower follow, high inertia)
  const spotConfig = { damping: 60, stiffness: 200, mass: 1 };
  const spotX = useSpring(mouseX, spotConfig);
  const spotY = useSpring(mouseY, spotConfig);

  // Springs for target cursor badge (snappy follow)
  const ringConfig = { damping: 30, stiffness: 450, mass: 0.3 };
  const ringX = useSpring(mouseX, ringConfig);
  const ringY = useSpring(mouseY, ringConfig);

  useEffect(() => {
    // Hide standard cursor on desktop
    const htmlElement = document.documentElement;
    htmlElement.classList.add("cursor-none");

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverElement = target.closest("[data-cursor]") as HTMLElement | null;

      if (hoverElement) {
        setCursorType(hoverElement.getAttribute("data-cursor"));
      } else {
        setCursorType(null);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      htmlElement.classList.remove("cursor-none");
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Large Ambient GPU-Accelerated Spotlight Glow Mask */}
      <motion.div
        className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-10 hidden md:block"
        style={{
          x: spotX,
          y: spotY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(59, 130, 246, 0.02) 45%, rgba(0, 0, 0, 0) 70%)",
        }}
        animate={{
          scale: cursorType ? 1.3 : 1.0,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />

      {/* 2. Snappy Interactive Follower Ring with contextual labels */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white/30 pointer-events-none z-50 flex items-center justify-center font-sans uppercase tracking-[0.2em] text-[8px] font-bold text-black hidden md:flex"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorType ? 90 : 8,
          height: cursorType ? 90 : 8,
          backgroundColor: cursorType ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          borderColor: cursorType ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
      >
        {cursorType && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-canvas font-black"
          >
            {cursorType}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}

export default CursorFollower;
