"use client"

import { useEffect, useState } from "react"

const PETALS = [
  { cx: 80, cy: 62, rx: 14, ry: 28, rotate: 0 },
  { cx: 58, cy: 74, rx: 12, ry: 24, rotate: -28 },
  { cx: 102, cy: 74, rx: 12, ry: 24, rotate: 28 },
  { cx: 42, cy: 98, rx: 11, ry: 21, rotate: -52 },
  { cx: 118, cy: 98, rx: 11, ry: 21, rotate: 52 },
  { cx: 64, cy: 104, rx: 11, ry: 20, rotate: -18 },
  { cx: 96, cy: 104, rx: 11, ry: 20, rotate: 18 },
]

export function LotusSeparator() {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((value) => (value + 1) % PETALS.length)
    }, 240)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-5 rounded-[1.75rem] border border-primary/15 bg-card/40 px-6 py-8 shadow-[0_0_36px_hsl(var(--primary)/0.06)] backdrop-blur">
          <svg
            viewBox="0 0 160 150"
            className="h-40 w-40 overflow-visible"
            aria-hidden="true"
          >
            {PETALS.map((petal, index) => {
              const isActive = index === frame
              const isTrailing = index === (frame + PETALS.length - 1) % PETALS.length

              return (
                <ellipse
                  key={index}
                  cx={petal.cx}
                  cy={petal.cy}
                  rx={petal.rx}
                  ry={petal.ry}
                  transform={`rotate(${petal.rotate} ${petal.cx} ${petal.cy})`}
                  className={`origin-center transition-all duration-300 ${
                    isActive
                      ? "fill-primary/45 stroke-primary/70"
                      : isTrailing
                        ? "fill-primary/25 stroke-primary/45"
                        : "fill-card stroke-primary/25"
                  }`}
                  strokeWidth="1.5"
                />
              )
            })}
            <path
              d="M48 120c11 10 25 16 32 16s21-6 32-16"
              fill="none"
              stroke="hsl(var(--primary) / 0.55)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M80 42v78"
              fill="none"
              stroke="hsl(var(--primary) / 0.4)"
              strokeWidth="1.5"
              strokeDasharray="4 5"
            />
          </svg>

          <div className="flex items-center gap-6">
            <pre className="font-mono text-[10px] leading-4 text-primary/50">
{`> lotus.loop
[ breathing ]
[ pixel bloom ]`}
            </pre>
            <div className="grid grid-cols-5 gap-1">
              {Array.from({ length: 25 }).map((_, index) => (
                <span
                  key={index}
                  className={`h-2.5 w-2.5 rounded-[2px] ${
                    index % 5 === frame % 5 || index === 12
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
