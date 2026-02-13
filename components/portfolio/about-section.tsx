"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useTextScramble } from "@/hooks/use-text-scramble"
import { useEffect, useRef, useState } from "react"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, isVisible } = useScrollAnimation(0.3)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true

    const duration = 1500
    const steps = 40
    const increment = target / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      // Ease out
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      current = Math.round(eased * target)
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
      {count}{suffix}
    </span>
  )
}

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.2)
  const scrambledTitle = useTextScramble("About", isVisible, 25)

  return (
    <section id="about" className="py-32 relative">
      <div className="mx-auto max-w-6xl px-6" ref={ref}>
        <div className="grid lg:grid-cols-[200px_1fr] gap-12">
          <div>
            <div className="lg:sticky lg:top-24">
              <p
                className={`font-mono text-sm text-primary tracking-wider uppercase transition-all duration-600 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-6"
                }`}
              >
                {isVisible ? scrambledTitle : "About"}
              </p>
            </div>
          </div>
          <div>
            <p
              className={`text-2xl md:text-3xl leading-relaxed text-foreground/90 text-pretty transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {
                "I'm a full-stack web developer with a Fine Arts background, blending creative vision with technical expertise. I build scalable, user-focused applications using React.js, Next.js, Node.js, and modern cloud platforms."
              }
            </p>
            <p
              className={`mt-8 text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {
                "With experience spanning e-commerce, headless CMS architectures, and data-driven web applications, I bring a proven track record of on-time delivery and performance optimization. My work emphasizes SEO, accessibility (WCAG), and robust DevOps workflows."
              }
            </p>
            <div
              className={`mt-12 grid grid-cols-3 gap-8 transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <p className="text-3xl font-bold text-primary">
                  <AnimatedCounter target={30} suffix="+" />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Web Applications
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">
                  <AnimatedCounter target={7} suffix="+" />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">
                  <AnimatedCounter target={3} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Languages Spoken
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
