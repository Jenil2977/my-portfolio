import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Center initial positions to prevent jumps
    gsap.set(dot, { xPercent: -50, yPercent: -50, x: window.innerWidth / 2, y: window.innerHeight / 2 });
    gsap.set(ring, { xPercent: -50, yPercent: -50, x: window.innerWidth / 2, y: window.innerHeight / 2 });

    const xToDot = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3" });

    const xToRing = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" });
    const yToRing = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      xToDot(e.clientX);
      yToDot(e.clientY);
      xToRing(e.clientX);
      yToRing(e.clientY);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Hook hover events for interactive items
  useEffect(() => {
    let cleanups: (() => void)[] = [];

    const addHoverEvents = () => {
      // Clean up previous listeners
      cleanups.forEach((c) => c());
      cleanups = [];

      const interactives = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, .clickable, [data-hover-expand]'
      );
      
      const onMouseEnter = () => setIsHovered(true);
      const onMouseLeave = () => setIsHovered(false);

      interactives.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnter);
        el.addEventListener("mouseleave", onMouseLeave);
        cleanups.push(() => {
          el.removeEventListener("mouseenter", onMouseEnter);
          el.removeEventListener("mouseleave", onMouseLeave);
        });
      });
    };

    // Set up a MutationObserver to hook new elements that are rendered dynamically
    const observer = new MutationObserver(addHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial attachment
    addHoverEvents();

    return () => {
      observer.disconnect();
      cleanups.forEach((c) => c());
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`hidden md:block ${isHovered ? "cursor-hover" : ""}`}>
      {/* Central gold dot */}
      <div ref={dotRef} className="custom-cursor" />
      {/* Outer delay ring */}
      <div ref={ringRef} className="custom-cursor-ring" />
    </div>
  );
};
