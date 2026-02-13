"use client"

import { useRef, useState, type ReactNode, type MouseEvent } from "react"

interface TiltCardProps {
  children: ReactNode
  className?: string
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -3
    const rotateY = ((x - centerX) / centerX) * 3

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    )
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    })
  }

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)")
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden transition-transform duration-200 ease-out ${className}`}
      style={{ transform, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {children}
      {/* Glare overlay */}
      <div
        className="absolute inset-0 pointer-events-none rounded-lg transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, hsl(var(--primary) / 0.04) 0%, transparent 50%)`,
        }}
      />
    </div>
  )
}
