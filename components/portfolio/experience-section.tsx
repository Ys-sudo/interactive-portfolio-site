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
      "Worked on over 20 responsive, SEO-optimized websites with mobile-first design.",
      "Developed a Next.js Helpdesk platform with real-time updates and multiple authentication methods.",
      "Implemented Python and shell scripting for automation and data analysis internally.",
    ],
    tags: ["WordPress", "Next.js", "Python", "SEO"],
  },
  {
    title: "Full-Stack Developer",
    company: "Shroom Drink",
    location: "Wroc\u0142aw / Remote",
    period: "Aug 2023 \u2014 Aug 2025",
    bullets: [
      "Developed a custom headless WordPress theme using GraphQL and Gatsby.js for fast, scalable delivery.",
      "Implemented seamless data flow, optimized caching and queries for improved performance.",
      "Introduced automation workflows to streamline content and product management.",
      "Delivered a maintainable architecture supporting multilingual content and future scalability.",
    ],
    tags: ["Gatsby.js", "GraphQL", "WordPress", "Automation"],
  },
  {
    title: "Full-Stack Developer",
    company: "Art Open",
    location: "Wroc\u0142aw / Remote",
    period: "Jun 2020 \u2014 Present",
    bullets: [
      "Led design, development, and deployment of over 30 scalable, data-driven web applications.",
      "Architected modern front-end and robust back-end solutions with focus on SSR/SSG.",
      "Integrated and optimized APIs and third-party services, ensuring performance and security.",
      "Maintained code quality and DevOps workflows using Git, GCP, and Netlify.",
    ],
    tags: ["React.js", "Node.js", "GCP", "SSR/SSG"],
  },
  {
    title: "Freelance Web Developer & Designer",
    company: "Self-employed",
    location: "Remote",
    period: "Mar 2018 \u2014 Present",
    bullets: [
      "Directed full execution of high-impact client projects and e-commerce platforms.",
      "Developed custom WordPress plugins, themes, and REST/GraphQL integrations.",
      "Implemented optimizations like code-splitting, lazy loading, and caching.",
      "Delivered UX-focused design and consultation with Figma prototypes.",
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
