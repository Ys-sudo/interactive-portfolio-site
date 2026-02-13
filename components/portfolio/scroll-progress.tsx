"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(scrolled)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-transparent">
      <div
        className="h-full bg-primary transition-none"
        style={{
          width: `${progress * 100}%`,
          boxShadow: "0 0 10px hsl(var(--primary) / 0.6), 0 0 5px hsl(var(--primary) / 0.3)",
        }}
      />
    </div>
  )
}
