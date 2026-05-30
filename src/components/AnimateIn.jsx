"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

export default function AnimateIn({ children, delay = 0, duration = 800, type = "fade-up", stagger = 0 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            
            // Only animate once
            if (el.dataset.animated) return;
            el.dataset.animated = "true";

            // Define animation properties based on type
            let translateY = 0;
            let translateX = 0;
            let opacity = [0, 1];

            if (type === "fade-up") translateY = [40, 0];
            if (type === "fade-down") translateY = [-40, 0];
            if (type === "fade-left") translateX = [40, 0];
            if (type === "fade-right") translateX = [-40, 0];

            if (stagger > 0 && el.children.length > 0) {
              anime({
                targets: el.children,
                translateY,
                translateX,
                opacity,
                duration,
                delay: anime.stagger(stagger, { start: delay }),
                easing: "easeOutCubic",
              });
            } else {
              anime({
                targets: el,
                translateY,
                translateX,
                opacity,
                duration,
                delay,
                easing: "easeOutCubic",
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
      // Initialize state to hidden
      if (stagger > 0) {
        Array.from(elementRef.current.children).forEach(child => {
          child.style.opacity = "0";
        });
      } else {
        elementRef.current.style.opacity = "0";
      }
    }

    return () => observer.disconnect();
  }, [delay, duration, type, stagger]);

  return (
    <div ref={elementRef} style={{ width: "100%", height: "100%" }}>
      {children}
    </div>
  );
}
