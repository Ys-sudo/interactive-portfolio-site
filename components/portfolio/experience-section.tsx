"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Briefcase } from "lucide-react"
import { SectionHeader } from "./section-header"
import { TiltCard } from "./tilt-card"

const experiences = [
  {
    title: "Founder & Solo Developer",
    company: "hex-to-rgb.com",
    location: "Remote",
    period: "2023 \u2014 Present",
    bullets: [
      "Conceived, designed, and single-handedly built a full-service color conversion platform serving 30k+ monthly active users.",
      "Engineered advanced color bridging algorithms for seamless conversion across HEX, RGB, HSL, CMYK, and other color spaces.",
      "Architected the entire stack from the ground up with React, TypeScript, and Vite, backed by Firebase for real-time data and authentication.",
      "Owned every aspect of the product lifecycle \u2014 from UX research and interface design to deployment, analytics, and ongoing iteration.",
    ],
    tags: ["React", "TypeScript", "Vite", "Firebase"],
  },
  {
    title: "WordPress Developer",
    company: "\u015awie\u017ca Strona",
    location: "Wroc\u0142aw / Hybrid",
    period: "Jun 2024 \u2014 Jun 2025",
    bullets: [
      "Designed and developed custom WordPress plugins, integrations and themes.",
      "Delivered over 20 responsive, SEO-optimized websites with mobile-first execution for service and e-commerce brands.",
      "Built a Next.js helpdesk platform with real-time updates and multiple authentication methods.",
      "Implemented Python and shell-based automations for internal operations and data analysis.",
    ],
    tags: ["WordPress", "Next.js", "Python", "SEO"],
  },
  {
    title: "Full-Stack Developer",
    company: "Shroom Drink",
    location: "Wroc\u0142aw / Remote",
    period: "Aug 2023 \u2014 Aug 2025",
    bullets: [
      "Developed the headless WordPress and Gatsby.js foundation behind shroom4you.com using GraphQL for scalable content delivery.",
      "Optimized data flow, caching, and queries for faster storefront performance and easier editorial workflows.",
      "Introduced automation flows that streamlined product and content management across teams.",
      "Delivered a maintainable multilingual architecture ready for growth.",
    ],
    tags: ["Gatsby.js", "GraphQL", "WordPress", "Automation"],
  },
  {
    title: "Full-Stack Developer",
    company: "Art Open",
    location: "Wroc\u0142aw / Remote",
    period: "Jun 2020 \u2014 Present",
    bullets: [
      "Led design, development, and deployment of 30+ scalable, data-driven web applications and digital brand platforms.",
      "Architected modern front-end and back-end solutions with a strong focus on SSR, SSG, and long-term maintainability.",
      "Integrated custom CMS layers, APIs, and third-party services while maintaining performance and security standards.",
      "Supported delivery workflows with Git, GCP, Netlify, and pragmatic DevOps practices.",
    ],
    tags: ["React.js", "Node.js", "GCP", "SSR/SSG"],
  },
  {
    title: "Freelance Web Developer & Designer",
    company: "Self-employed",
    location: "Remote",
    period: "Mar 2018 \u2014 Present",
    bullets: [
      "Delivered high-impact client websites, e-commerce platforms, and tailored digital experiences from discovery through launch.",
      "Built custom WordPress themes, plugins, and REST/GraphQL integrations for varied business needs.",
      "Applied performance techniques including code-splitting, lazy loading, and caching to improve real-world results.",
      "Combined UI/UX thinking with Figma-based design direction and product consultation.",
    ],
    tags: ["Figma", "E-commerce", "REST APIs", "Performance"],
  },
]

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <div ref={ref} className="relative pl-8 pb-12 last:pb-0 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-last:bg-transparent">
        <div
          className={`absolute top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full border-2 border-primary bg-background transition-all duration-500 ${
            isVisible ? "scale-100" : "scale-0"
          }`}
        />
      </div>

      <div
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <TiltCard className="rounded-lg border border-border bg-card p-6 hover:border-primary/30 transition-colors duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-3">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {exp.title}
              </h3>
              <p className="text-primary font-medium">{exp.company}</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-xs text-muted-foreground">
                {exp.period}
              </p>
              <p className="text-xs text-muted-foreground">{exp.location}</p>
            </div>
          </div>

          <ul className="mt-4 space-y-2">
            {exp.bullets.map((bullet) => (
              <li
                key={bullet}
                className="text-sm text-muted-foreground leading-relaxed flex gap-2"
              >
                <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-mono text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </TiltCard>
      </div>
    </div>
  )
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[200px_1fr] gap-12">
          <SectionHeader
            title="Experience"
            icon={<Briefcase className="h-5 w-5" />}
          />
          <div>
            {experiences.map((exp, i) => (
              <ExperienceCard key={`${exp.company}-${exp.title}`} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
