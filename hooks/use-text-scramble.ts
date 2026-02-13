"use client"

import { useEffect, useState, useRef, useCallback } from "react"

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*<>/{}[]"

export function useTextScramble(text: string, isVisible: boolean, speed = 30) {
  const [displayText, setDisplayText] = useState("")
  const hasRun = useRef(false)

  const scramble = useCallback(() => {
    if (hasRun.current) return
    hasRun.current = true

    let iteration = 0
    const totalFrames = text.length * 3

    const interval = setInterval(() => {
      const revealed = Math.floor(iteration / 3)
      let result = ""

      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          result += " "
        } else if (i < revealed) {
          result += text[i]
        } else if (i < revealed + 4 && i < text.length) {
          result += CHARS[Math.floor(Math.random() * CHARS.length)]
        } else {
          result += " "
        }
      }

      setDisplayText(result)
      iteration++

      if (iteration > totalFrames) {
        setDisplayText(text)
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  useEffect(() => {
    if (isVisible) {
      const cleanup = scramble()
      return cleanup
    }
  }, [isVisible, scramble])

  return displayText
}
