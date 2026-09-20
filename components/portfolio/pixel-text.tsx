"use client"

import { useEffect, useMemo, useState } from "react"

const PIXEL_CHARS = ["█", "▓", "▒", "░", "¦", "¦", "¦", ":", "·", ">", "/", "\\"]
const STATIC_CHARS = /[./:@_-]/

function buildOverlay(text: string, tick: number) {
  const animatedIndexes = text
    .split("")
    .map((char, index) => ({ char, index }))
    .filter(({ char }) => char !== " ")
    .map(({ index }) => index)

  const activeIndex = animatedIndexes[tick % Math.max(animatedIndexes.length, 1)]
  return text
    .split("")
    .map((char, index) => {
      if (char === " ") return " "
      if (STATIC_CHARS.test(char)) return char
      if (index === activeIndex) return PIXEL_CHARS[(tick + index) % PIXEL_CHARS.length]
      if (Math.abs(index - activeIndex) === 1) return PIXEL_CHARS[(tick + index + 3) % PIXEL_CHARS.length]
      return char
    })
    .join("")
}

function buildForeground(text: string, tick: number) {
  const animatedIndexes = text
    .split("")
    .map((char, index) => ({ char, index }))
    .filter(({ char }) => char !== " ")
    .map(({ index }) => index)

  const activeIndex = animatedIndexes[tick % Math.max(animatedIndexes.length, 1)]
  const trailingIndex =
    animatedIndexes[(tick + animatedIndexes.length - 1) % Math.max(animatedIndexes.length, 1)]

  return text.split("").map((char, index) => {
    if (char === " ") return " "
    if (STATIC_CHARS.test(char)) return char
    if (index === activeIndex) return PIXEL_CHARS[(tick + index) % PIXEL_CHARS.length]
    if (index === trailingIndex) return PIXEL_CHARS[(tick + index + 2) % PIXEL_CHARS.length]
    if (Math.abs(index - activeIndex) === 2) return PIXEL_CHARS[(tick + index + 5) % PIXEL_CHARS.length]
    return char
  })
}

export function PixelText({
  text,
  className = "",
  overlayClassName = "",
  speed = 220,
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
  const foreground = useMemo(() => buildForeground(text, tick), [text, tick])

  return (
    <span aria-label={text} className={`relative inline-block ${className}`}>
      <span aria-hidden="true" className="opacity-0">
        {text}
      </span>
      <span aria-hidden="true" className="absolute inset-0">
        {foreground.map((char, index) => (
          <span
            key={`${text}-${index}`}
            className="inline-block transition-all duration-500 ease-out"
          >
            {char}
          </span>
        ))}
      </span>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 translate-x-[1px] translate-y-[-1px] opacity-20 transition-opacity duration-500 ${overlayClassName}`}
      >
        {overlay}
      </span>
    </span>
  )
}
