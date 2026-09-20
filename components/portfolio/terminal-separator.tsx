"use client"

import { useEffect, useState } from "react"

const FRAMES = [
  `> compile --section skills\n[ok] frontend.react\n[ok] automation.shell\n[ok] headless.woo`,
  `> ping creative.stack\n[rx] pixel / neon / ascii\n[tx] shipping build\n[tx] stable signal`,
  `> tail -f /var/log/portfolio\n[+] commerce online\n[+] prototypes ready\n[+] next section -> skills`,
]

export function TerminalSeparator() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((value) => (value + 1) % FRAMES.length)
    }, 1600)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-[1.75rem] border border-primary/20 bg-card/60 shadow-[0_0_40px_hsl(var(--primary)/0.08)] backdrop-blur">
          <div className="flex items-center justify-between border-b border-primary/15 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary/60">
            <span>terminal bridge</span>
            <span>skills.init</span>
          </div>
          <div className="grid gap-6 px-4 py-5 md:grid-cols-[1.1fr_auto] md:px-6">
            <pre className="min-h-[5.5rem] whitespace-pre-wrap font-mono text-[11px] leading-5 text-primary/65">
              {FRAMES[frame]}
            </pre>
            <div className="hidden md:grid md:grid-cols-6 md:gap-1 md:self-center">
              {Array.from({ length: 36 }).map((_, index) => (
                <span
                  key={index}
                  className={`h-2.5 w-2.5 rounded-[2px] ${
                    index % 4 === frame || index % 7 === 0
                      ? "bg-primary/35"
                      : "bg-border/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
