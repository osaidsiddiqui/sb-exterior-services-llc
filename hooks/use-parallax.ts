import { useRef, useEffect, useState } from "react";

interface ParallaxOptions {
  speed?: number;
  direction?: "up" | "down";
  disabled?: boolean;
}

export function useParallax<T extends HTMLElement>({
  speed = 0.3,
  direction = "up",
  disabled = false,
}: ParallaxOptions) {
  const elementRef = useRef<T | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => {
      if (!elementRef.current) return;
      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollPos = rect.top - windowHeight / 2;
      let movement = scrollPos * speed;

      if (direction === "down") movement *= -1;

      setOffset(movement);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction, disabled]);

  return { elementRef, offset };
}
