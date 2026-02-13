"use client"

import { useEffect, useRef, useCallback } from "react"

export function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<(HTMLDivElement | null)[]>([])
  const mouse = useRef({ x: -100, y: -100 })
  const dotPos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const trailPositions = useRef(
    Array.from({ length: 5 }, () => ({ x: -100, y: -100 }))
  )
  const isHovering = useRef(false)
  const isClicking = useRef(false)
  const isVisible = useRef(false)
  const rafId = useRef<number>(0)

  const setTrailRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    trailRefs.current[index] = el
  }, [])

  useEffect(() => {
    // Skip on touch devices
    if ("ontouchstart" in window && navigator.maxTouchPoints > 0) return

    // Hide default cursor globally
    document.documentElement.style.cursor = "none"

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (!isVisible.current) {
        isVisible.current = true
        if (dotRef.current) dotRef.current.style.opacity = "1"
        if (ringRef.current) ringRef.current.style.opacity = "1"
        for (const trail of trailRefs.current) {
          if (trail) trail.style.opacity = "1"
        }
      }
    }

    const handleMouseDown = () => {
      isClicking.current = true
    }

    const handleMouseUp = () => {
      isClicking.current = false
    }

    const handleMouseLeave = () => {
      isVisible.current = false
      if (dotRef.current) dotRef.current.style.opacity = "0"
      if (ringRef.current) ringRef.current.style.opacity = "0"
      for (const trail of trailRefs.current) {
        if (trail) trail.style.opacity = "0"
      }
    }

    const handleMouseEnter = () => {
      isVisible.current = true
      if (dotRef.current) dotRef.current.style.opacity = "1"
      if (ringRef.current) ringRef.current.style.opacity = "1"
    }

    // Detect interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest("a, button, [role='button'], input, textarea, select, [data-magnetic]")
      isHovering.current = !!interactive
    }

    // Animation loop
    const animate = () => {
      const lerp = (start: number, end: number, factor: number) =>
        start + (end - start) * factor

      // Dot follows mouse closely
      dotPos.current.x = lerp(dotPos.current.x, mouse.current.x, 0.35)
      dotPos.current.y = lerp(dotPos.current.y, mouse.current.y, 0.35)

      // Ring follows with more lag (magnetic field effect)
      ringPos.current.x = lerp(ringPos.current.x, mouse.current.x, 0.12)
      ringPos.current.y = lerp(ringPos.current.y, mouse.current.y, 0.12)

      // Trail particles follow with increasing lag
      for (let i = 0; i < trailPositions.current.length; i++) {
        const leader = i === 0 ? ringPos.current : trailPositions.current[i - 1]
        const factor = 0.08 - i * 0.012
        trailPositions.current[i].x = lerp(
          trailPositions.current[i].x,
          leader.x,
          Math.max(factor, 0.02)
        )
        trailPositions.current[i].y = lerp(
          trailPositions.current[i].y,
          leader.y,
          Math.max(factor, 0.02)
        )
      }

      // Apply transforms
      if (dotRef.current) {
        const dotScale = isClicking.current ? 0.5 : isHovering.current ? 1.8 : 1
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%) scale(${dotScale})`
        dotRef.current.style.backgroundColor = isHovering.current
          ? "hsl(172 66% 50%)"
          : "hsl(172 66% 50%)"
      }

      if (ringRef.current) {
        const ringScale = isClicking.current ? 0.7 : isHovering.current ? 1.5 : 1
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${ringScale})`
        ringRef.current.style.borderColor = isHovering.current
          ? "hsl(172 66% 50% / 0.5)"
          : "hsl(172 66% 50% / 0.25)"
      }

      for (let i = 0; i < trailPositions.current.length; i++) {
        const trail = trailRefs.current[i]
        if (trail) {
          const progress = (i + 1) / trailPositions.current.length
          const scale = 1 - progress * 0.6
          trail.style.transform = `translate3d(${trailPositions.current[i].x}px, ${trailPositions.current[i].y}px, 0) translate(-50%, -50%) scale(${scale})`
          trail.style.opacity = isVisible.current ? `${(1 - progress) * 0.4}` : "0"
        }
      }

      rafId.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    rafId.current = requestAnimationFrame(animate)

    // Set cursor:none on all interactive elements
    const style = document.createElement("style")
    style.textContent = "*, *::before, *::after { cursor: none !important; }"
    document.head.appendChild(style)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      cancelAnimationFrame(rafId.current)
      document.documentElement.style.cursor = ""
      style.remove()
    }
  }, [])

  return (
    <>
      {/* Trail particles */}
      {trailPositions.current.map((_, i) => (
        <div
          key={`trail-${i}`}
          ref={setTrailRef(i)}
          className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full will-change-transform"
          style={{
            width: 6,
            height: 6,
            backgroundColor: "hsl(172 66% 50%)",
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
        />
      ))}

      {/* Outer ring (magnetic field) */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full will-change-transform"
        style={{
          width: 40,
          height: 40,
          border: "1.5px solid hsl(172 66% 50% / 0.25)",
          opacity: 0,
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, opacity 0.3s ease",
          mixBlendMode: "screen",
        }}
      />

      {/* Inner dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000] rounded-full will-change-transform"
        style={{
          width: 8,
          height: 8,
          backgroundColor: "hsl(172 66% 50%)",
          opacity: 0,
          transition: "transform 0.15s ease, opacity 0.3s ease",
        }}
      />
    </>
  )
}
