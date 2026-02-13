"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface ParallaxLayerProps {
  children: ReactNode
  speed: number
  className?: string
}

export function ParallaxLayer({ children, speed, className = "" }: ParallaxLayerProps) {
  const [offset, setOffset] = useState(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      rafRef.current = requestAnimationFrame(() => {
        setOffset(window.scrollY * speed)
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [speed])

  return (
    <div
      className={`absolute pointer-events-none z-0 ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
      aria-hidden="true"
    >
      {children}
    </div>
  )
}
