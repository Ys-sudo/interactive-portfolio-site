"use client"

import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useTextScramble } from "@/hooks/use-text-scramble"
import { PixelText } from "./pixel-text"

interface SectionHeaderProps {
  title: string
  icon: ReactNode
}

export function SectionHeader({ title, icon }: SectionHeaderProps) {
  const { ref, isVisible } = useScrollAnimation(0.2)
  const scrambledTitle = useTextScramble(title, isVisible, 25)

  return (
    <div ref={ref}>
      <div className="lg:sticky lg:top-24">
        <p
          className={`font-mono text-sm text-primary tracking-wider uppercase transition-all duration-600 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-6"
          }`}
        >
          {isVisible ? (
            <PixelText text={scrambledTitle} speed={220} overlayClassName="text-primary/30" />
          ) : (
            title
          )}
        </p>
        <div
          className={`mt-4 text-muted-foreground transition-all duration-600 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {icon}
        </div>
      </div>
    </div>
  )
}
