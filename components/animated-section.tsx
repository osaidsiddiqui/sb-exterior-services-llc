"use client";

import type { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?:
    | "fadeInUp"
    | "fadeInLeft"
    | "fadeInRight"
    | "fadeIn"
    | "scaleIn"
    | "slideInUp";
  delay?: number;
  threshold?: number;
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold,
  });

  const getAnimationClass = () => {
    const baseClass = "transition-all duration-1000 ease-out";

    if (!isVisible) {
      switch (animation) {
        case "fadeInUp":
          return `${baseClass} opacity-0 translate-y-12`;
        case "fadeInLeft":
          return `${baseClass} opacity-0 -translate-x-12`;
        case "fadeInRight":
          return `${baseClass} opacity-0 translate-x-12`;
        case "fadeIn":
          return `${baseClass} opacity-0`;
        case "scaleIn":
          return `${baseClass} opacity-0 scale-95`;
        case "slideInUp":
          return `${baseClass} opacity-0 translate-y-8`;
        default:
          return `${baseClass} opacity-0 translate-y-12`;
      }
    }

    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
