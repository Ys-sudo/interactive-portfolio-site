"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { GraduationCap } from "lucide-react"
import { SectionHeader } from "./section-header"
import { TiltCard } from "./tilt-card"
import { useTextScramble } from "@/hooks/use-text-scramble"

const education = [
  {
    degree: "Bachelor of Fine Arts, Graphic Design",
    school: "Eugeniusz Geppert Academy of Fine Arts",
    period: "Jun 2015 \u2014 Jun 2018",
  },
  {
    degree: "Digital Arts",
    school: "Athens School of Fine Arts",
    period: "Oct 2018 \u2014 Jun 2020",
  },
]

const languages = [
  { name: "Greek", level: "Native", width: 100 },
  { name: "Polish", level: "Native", width: 100 },
  { name: "English", level: "C2", width: 95 },
]

export function EducationSection() {
  return (
    <section id="education" className="py-32 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[200px_1fr] gap-12">
          <SectionHeader
            title="Education"
            icon={<GraduationCap className="h-5 w-5" />}
          />
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <EducationList />
            </div>
            <div>
              <LanguageList />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EducationList() {
  return (
    <div className="space-y-6">
      {education.map((edu, i) => (
        <EducationItem key={edu.school} edu={edu} index={i} />
      ))}
    </div>
  )
}

function EducationItem({
  edu,
  index,
}: {
  edu: (typeof education)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <TiltCard className="rounded-lg border border-border bg-card p-6 hover:border-primary/30 transition-colors duration-300">
        <p className="font-mono text-xs text-muted-foreground mb-1">
          {edu.period}
        </p>
        <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
        <p className="text-sm text-primary mt-1">{edu.school}</p>
      </TiltCard>
    </div>
  )
}

function LanguageList() {
  const { ref, isVisible } = useScrollAnimation(0.15)
  const scrambledTitle = useTextScramble("Languages", isVisible, 25)

  return (
    <div ref={ref}>
      <h3
        className={`text-sm font-mono text-primary mb-6 uppercase tracking-wider transition-all duration-600 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {isVisible ? scrambledTitle : "Languages"}
      </h3>
      <div className="space-y-5">
        {languages.map((lang, i) => (
          <div
            key={lang.name}
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-6"
            }`}
            style={{ transitionDelay: `${i * 100 + 200}ms` }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground">{lang.name}</span>
              <span className="font-mono text-xs text-muted-foreground">
                {lang.level}
              </span>
            </div>
            <div className="h-1 w-full rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                style={{
                  width: isVisible ? `${lang.width}%` : "0%",
                  transitionDelay: `${i * 100 + 400}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
