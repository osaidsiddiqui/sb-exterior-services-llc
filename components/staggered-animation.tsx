"use client"

import type { ReactNode } from "react"
import { Children } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface StaggeredAnimationProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "scaleIn"
  threshold?: number
}

export function StaggeredAnimation({
  children,
  className = "",
  staggerDelay = 100,
  animation = "fadeInUp",
  threshold = 0.1,
}: StaggeredAnimationProps) {
  const { elementRef, isVisible } = useScrollAnimation({ threshold })

  const getAnimationClass = (index: number) => {
    const baseClass = "transition-all duration-700 ease-out"
    const delay = index * staggerDelay

    if (!isVisible) {
      switch (animation) {
        case "fadeInUp":
          return `${baseClass} opacity-0 translate-y-8`
        case "fadeInLeft":
          return `${baseClass} opacity-0 -translate-x-8`
        case "fadeInRight":
          return `${baseClass} opacity-0 translate-x-8`
        case "fadeIn":
          return `${baseClass} opacity-0`
        case "scaleIn":
          return `${baseClass} opacity-0 scale-95`
        default:
          return `${baseClass} opacity-0 translate-y-8`
      }
    }

    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  // Convert children to array and handle both single and multiple children
  const childrenArray = Children.toArray(children)

  return (
    <div ref={elementRef} className={className}>
      {childrenArray.map((child, index) => (
        <div key={index} className={getAnimationClass(index)} style={{ transitionDelay: `${index * staggerDelay}ms` }}>
          {child}
        </div>
      ))}
    </div>
  )
}
