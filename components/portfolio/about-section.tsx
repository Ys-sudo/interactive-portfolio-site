"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useTextScramble } from "@/hooks/use-text-scramble"
import { useEffect, useRef, useState } from "react"
import { PLACEHOLDER_NEON_PHOTOS } from "@/lib/portfolio"

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

  return (
    <section id="about" className="py-32 relative">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <div className="grid lg:grid-cols-[200px_minmax(0,320px)_1fr] gap-12 items-start">
          <div>
            <div className="lg:sticky lg:top-24">
              <p
                className={`font-mono text-sm text-primary tracking-wider uppercase transition-all duration-600 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                }`}
              >
                {isVisible ? scrambledTitle : "About"}
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-100 ${
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
                "I work with agencies, studios, and direct clients to design, ship, and maintain fast digital products—from WooCommerce storefronts and Gatsby or Next.js sites to automation, prototypes, and creative tooling. My focus is sustainable architecture, SEO, accessibility, and practical long-term ownership."
              }
            </p>
            <div
              className={`mt-12 grid grid-cols-3 gap-8 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <p className="text-3xl font-bold text-primary">
                  <AnimatedCounter target={40} suffix="+" />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">
                  <AnimatedCounter target={8} suffix="+" />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Years Independent</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">
                  <AnimatedCounter target={20} suffix="+" />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Headless Woo Stores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
