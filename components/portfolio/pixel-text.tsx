"use client"

import { useEffect, useMemo, useState } from "react"

const PIXEL_CHARS = ["█", "▓", "▒", "░"]

function buildOverlay(text: string, tick: number) {
  const animatedIndexes = text
    .split("")
    .map((char, index) => ({ char, index }))
    .filter(({ char }) => char !== " ")
    .map(({ index }) => index)

  const activeIndex = animatedIndexes[tick % Math.max(animatedIndexes.length, 1)]
  const nextIndex = animatedIndexes[(tick + 1) % Math.max(animatedIndexes.length, 1)]

  return text
    .split("")
    .map((char, index) => {
      if (char === " ") return " "
      if (/[./:@_-]/.test(char)) return char
      if (index === activeIndex) return PIXEL_CHARS[tick % PIXEL_CHARS.length]
      if (index === nextIndex) return PIXEL_CHARS[(tick + index) % PIXEL_CHARS.length]

      return char
    })
    .join("")
}

export function PixelText({
  text,
  className = "",
  overlayClassName = "",
  speed = 160,
}: {
  text: string
  className?: string
  overlayClassName?: string
  speed?: number
}) {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((value) => (value + 1) % 1000)
    }, speed)

    return () => clearInterval(interval)
  }, [speed])

  const overlay = useMemo(() => buildOverlay(text, tick), [text, tick])

  return (
    <span className={`relative inline-block ${className}`}>
      <span>{text}</span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 translate-x-[1px] translate-y-[-1px] opacity-35 ${overlayClassName}`}
      >
        {overlay}
      </span>
    </span>
  )
}
