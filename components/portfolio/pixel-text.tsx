"use client"

import { useEffect, useMemo, useState } from "react"

const PIXEL_CHARS = ["█", "▓", "▒", "░"]

function buildOverlay(text: string, tick: number) {
  return text
    .split("")
    .map((char, index) => {
      if (char === " ") return " "
      const keepOriginal =
        /[./:@_-]/.test(char) || ((index + tick) % 5 !== 0 && (index * 3 + tick) % 11 !== 0)

      return keepOriginal ? char : PIXEL_CHARS[(index + tick) % PIXEL_CHARS.length]
    })
    .join("")
}

export function PixelText({
  text,
  className = "",
  overlayClassName = "",
}: {
  text: string
  className?: string
  overlayClassName?: string
}) {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((value) => (value + 1) % 1000)
    }, 180)

    return () => clearInterval(interval)
  }, [])

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
