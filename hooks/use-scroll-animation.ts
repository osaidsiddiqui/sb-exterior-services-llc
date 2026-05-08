import { useEffect, useRef, useState } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
}

export function useScrollAnimation<T extends HTMLElement>({
  threshold = 0.1,
}: ScrollAnimationOptions) {
  const elementRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [threshold]);

  return { elementRef, isVisible };
}
