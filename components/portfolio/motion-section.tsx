"use client"

import Image from "next/image"

import { PORTFOLIO_MOTION_FRAMES } from "@/lib/portfolio"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function MotionSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="motion" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6 flex items-center justify-between gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary/80">
              Motion Study
            </p>
            <span className="rounded-full border border-primary/20 px-3 py-1 text-[11px] font-mono text-muted-foreground">
              Fine arts × product builder
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-3 auto-rows-[180px]">
            {PORTFOLIO_MOTION_FRAMES.map((frame) => (
              <div
                key={frame.src}
                className={`group relative overflow-hidden rounded-2xl border border-border/80 bg-card ${frame.className}`}
              >
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  fill
                  sizes={frame.sizes}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/75 via-background/5 to-transparent" />
              </div>
            ))}
            <div className="group overflow-hidden rounded-2xl border border-border/80 bg-card md:row-span-2">
              <div className="relative">
                <video
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  aria-label="Short screen capture showing George's process in motion"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  controls
                >
                  <source src="/screen-recording-2025-03-23.mp4" type="video/mp4" />
                  Your browser does not support the motion study video.
                </video>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background/60 to-transparent" />
              </div>
              <div className="border-t border-border/80 px-4 py-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary/85">
                  Process in motion
                </p>
                <p className="mt-1 text-sm text-foreground/85">
                  Process captured in motion, now sitting just above contact beneath the lotus break.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
