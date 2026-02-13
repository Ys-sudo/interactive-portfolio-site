"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Code2 } from "lucide-react"
import { SectionHeader } from "./section-header"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Gatsby.js", level: 85 },
      { name: "HTML5 / CSS3 / SASS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "PHP / WordPress", level: 92 },
      { name: "Python", level: 75 },
      { name: "REST / GraphQL APIs", level: 90 },
      { name: "PostgreSQL / MySQL", level: 82 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "GCP / AWS", level: 78 },
      { name: "Docker", level: 75 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Netlify / Vercel", level: 90 },
      { name: "Git / GitHub", level: 92 },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Figma / UI Design", level: 88 },
      { name: "SEO / WCAG", level: 85 },
      { name: "Agile / Scrum", level: 80 },
      { name: "Shell Scripting", level: 70 },
      { name: "Redis / MongoDB", level: 72 },
    ],
  },
]

function SkillBar({
  name,
  level,
  index,
  isVisible,
}: {
  name: string
  level: number
  index: number
  isVisible: boolean
}) {
  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-foreground">{name}</span>
        <span
          className={`font-mono text-xs text-primary transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: `${index * 80 + 600}ms` }}
        >
          {level}%
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full transition-all ease-out"
          style={{
            width: isVisible ? `${level}%` : "0%",
            transitionDuration: "1.2s",
            transitionDelay: `${index * 80 + 200}ms`,
            background: `linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.6) 100%)`,
            boxShadow: isVisible
              ? "0 0 8px hsl(var(--primary) / 0.3)"
              : "none",
          }}
        />
      </div>
    </div>
  )
}

function SkillCategory({
  category,
  categoryIndex,
}: {
  category: (typeof skillCategories)[0]
  categoryIndex: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${categoryIndex * 100}ms` }}
    >
      <div className="rounded-lg border border-border bg-card p-6 hover:border-primary/20 transition-colors duration-300 h-full">
        <h3 className="font-mono text-sm text-primary mb-6 uppercase tracking-wider">
          {category.title}
        </h3>
        <div className="space-y-4">
          {category.skills.map((skill, i) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[200px_1fr] gap-12">
          <SectionHeader
            title="Skills"
            icon={<Code2 className="h-5 w-5" />}
          />
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((cat, i) => (
              <SkillCategory
                key={cat.title}
                category={cat}
                categoryIndex={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
