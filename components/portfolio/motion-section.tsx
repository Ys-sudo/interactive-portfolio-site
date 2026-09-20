"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function MotionSection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="motion" className="py-20 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mx-auto max-w-5xl">
            <div className="group overflow-hidden rounded-[2rem] border border-border/80 bg-card">
              <div className="relative aspect-[18/6]">
                <video
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  aria-label="Short screen capture showing George's process in motion"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src="/screen-recording-2025-03-23.mp4" type="video/mp4" />
                  Your browser does not support the motion study video.
                </video>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
