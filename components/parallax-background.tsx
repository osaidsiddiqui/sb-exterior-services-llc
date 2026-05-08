"use client";

import type { ReactNode } from "react";
import { useParallax } from "@/hooks/use-parallax";

interface ParallaxBackgroundProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  overlay?: boolean;
}

export function ParallaxBackground({
  children,
  className = "",
  speed = 0.3,
  overlay = true,
}: ParallaxBackgroundProps) {
  const { elementRef, offset } = useParallax<HTMLDivElement>({
    speed,
    direction: "up",
  });

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        ref={elementRef}
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${offset}px) scale(1.1)`,
          transition: "none",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900 opacity-80" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />
      )}

      <div className="relative z-20">{children}</div>
    </div>
  );
}
