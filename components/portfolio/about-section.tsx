"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useTextScramble } from "@/hooks/use-text-scramble"
import { useEffect, useRef, useState } from "react"
import { PLACEHOLDER_NEON_PHOTOS } from "@/lib/portfolio"

const mediaFrames = [
  {
    src: "/DSCF6090.jpeg",
    alt: "George working in a sunlit studio setting",
    className: "md:col-span-2 md:row-span-2",
    sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 44vw",
  },
  {
    src: "/DSCF7001.jpeg",
    alt: "Portrait detail from George's editorial photo set",
    className: "",
    sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 22vw",
  },
]

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useScrollAnimation(0.3)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true

    const duration = 1500
    const steps = 40
    let step = 0

    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * target)
      setCount(current)

      if (step >= steps) {
        setCount(target)
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.2)
  const scrambledTitle = useTextScramble("About", isVisible, 25)
  const hobbies = [
    "Calisthenics",
    "Skateboarding",
    "Graphic Design",
    "Robotics",
    "Automation",
    "Art",
    "Painting",
    "Drawing",
    "Vinyls",
    "Mixing Music",
    "Photography",
    "Traveling",
  ]

  return (
    <section id="about" className="py-32 relative">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 items-start">
          <div>
            <div className="lg:sticky lg:top-24">
              <p
                className={`font-mono text-sm text-primary tracking-wider uppercase transition-all duration-600 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                }`}
              >
                {isVisible ? scrambledTitle : "About"}
              </p>
              <div
                className={`mt-8 transition-all duration-700 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card aspect-square">
                  <img
                    src={PLACEHOLDER_NEON_PHOTOS.about}
                    alt="Neon city placeholder for about section"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p
              className={`text-2xl md:text-3xl leading-relaxed text-foreground/90 text-pretty transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {
                "I'm a full-stack developer and founder of Coded Letter, combining a Fine Arts background with years of production work across headless commerce, custom WordPress ecosystems, React applications, and product R&D."
              }
            </p>
            <p
              className={`mt-8 text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {
                "I work with agencies, studios, and direct clients to design, ship, and maintain fast digital products—from WooCommerce storefronts and Gatsby or Next.js sites to automation, prototypes, and creative tooling. I'm also the author of my own WordPress and WooCommerce theme work, and I regularly work across React, Python, shell scripting, server management, and monitoring."
              }
            </p>
            <p
              className={`mt-8 text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {
                "I learned coding on my own, starting with SoloLearn where I completed 15+ comprehensive courses across PHP, Python, C#, JavaScript, and more. Back when I was still studying, I was also teaching coding online using the Glitch multiuser editor, and my journey really began around the age of 12 or 13 when I wrote automation and hack scripts for a popular MMORPG."
              }
            </p>
            <div
              className={`mt-10 transition-all duration-700 delay-[350ms] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary/80">
                Hobbies
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-mono text-muted-foreground"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
            <div
              className={`mt-12 grid grid-cols-3 gap-8 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <p className="text-3xl font-bold text-primary">
                  <AnimatedCounter target={100} suffix="+" />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Projects Worked On</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">
                  <AnimatedCounter target={8} suffix="+" />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Years Independent</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">
                  <AnimatedCounter target={5} suffix="+" />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Agency Partners</p>
              </div>
            </div>
            <div
              className={`mt-12 transition-all duration-700 delay-[500ms] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-primary/80">
                  Selected Frames
                </p>
                <span className="rounded-full border border-primary/20 px-3 py-1 text-[11px] font-mono text-muted-foreground">
                  Fine arts × product builder
                </span>
              </div>
              <div className="grid gap-4 md:grid-cols-3 auto-rows-[180px]">
                {mediaFrames.map((frame) => (
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
                      Motion Study
                    </p>
                    <p className="mt-1 text-sm text-foreground/85">
                      Process captured in motion, keeping the portfolio human and tactile.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
