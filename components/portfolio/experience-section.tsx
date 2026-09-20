"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Briefcase } from "lucide-react"
import { SectionHeader } from "./section-header"
import { TiltCard } from "./tilt-card"

const experiences = [
  {
    title: "Founder & Full-Stack Developer",
    company: "Coded Letter",
    location: "Remote",
    period: "2026 — Present",
    bullets: [
      "Founded a one-person web development studio focused on modern digital products, custom platforms, and long-term technical ownership.",
      "Built and evolved products including superfunky.pro, plantguardian.app, hex-to-rgb.com, open-source WordPress plugins, and Arduino-based experiments.",
      "Manage roughly 20 headless WooCommerce stores running on the superfunky.pro solution, covering delivery, maintenance, and iterative improvements.",
      "Grow the studio through direct community building, including the public Discord channel at discord.gg/UZtuF3fwYf.",
    ],
    tags: ["Headless WooCommerce", "WordPress", "Product Development", "Arduino"],
  },
  {
    title: "Full-Stack Developer",
    company: "Art Open",
    location: "Wrocław / Remote",
    period: "2020 — Present",
    bullets: [
      "Contribute to a six-year collaboration across both B2B and B2C projects, owning delivery from company platforms to custom client applications.",
      "Migrated the company website from Joomla to Gatsby and Decap CMS, later introducing the superfunky.pro headless architecture.",
      "Delivered 20+ client projects while driving research, SEO, and cost optimization through open-source tooling and lean infrastructure choices.",
      "Over the past year, have been responsible for the Promotron e-commerce platform and broader microservice work across WordPress, React, Python, PHP, and 3D/animation workflows.",
    ],
    tags: ["Gatsby", "Decap CMS", "React", "Microservices"],
  },
  {
    title: "Headless WooCommerce Developer",
    company: "Shroom",
    location: "Remote",
    period: "2022 — Present",
    bullets: [
      "Support a long-running B2B collaboration focused on WooCommerce development, headless architecture, and React-based storefront delivery.",
      "Introduced, built, and continue to manage the hosting stack, WooCommerce backend, and a custom Gatsby storefront frontend.",
      "Improved the platform's technical foundation with ongoing performance work, maintenance, and operational ownership.",
      "Helped grow discoverability through SEO and GEO/LLM optimization work aligned with the brand's content strategy.",
    ],
    tags: ["WooCommerce", "Gatsby.js", "React", "SEO"],
  },
  {
    title: "Full-Stack Developer",
    company: "e-multicontent.pl",
    location: "Remote",
    period: "2018 — Present",
    bullets: [
      "Introduced a modern Gatsby and Decap CMS application backed by Node.js, replacing older maintenance-heavy web service patterns.",
      "Reduced operational costs by moving publishing and content workflows onto an open-source-first stack.",
      "Set up a streamlined editorial flow using Decap CMS, GitHub, and Netlify for content management and deployment.",
      "Maintained the platform as a reliable long-term marketing and publishing tool with lightweight hosting requirements.",
    ],
    tags: ["Gatsby", "Decap CMS", "Node.js", "Netlify"],
  },
  {
    title: "Web Performance Consultant",
    company: "Logicaltrust",
    location: "Remote",
    period: "Contract",
    bullets: [
      "Delivered a focused B2B optimization contract for a Ruby and Jekyll website.",
      "Improved front-end performance bottlenecks across templates and assets.",
      "Reached a 100 PageSpeed score through targeted performance tuning and cleanup.",
      "Provided a lightweight, maintainable result without rebuilding the existing site stack.",
    ],
    tags: ["Ruby", "Jekyll", "Performance", "PageSpeed"],
  },
  {
    title: "WordPress & WooCommerce Developer",
    company: "Świeża Strona",
    location: "Wrocław / Hybrid",
    period: "1-year collaboration",
    bullets: [
      "Worked across both B2B and B2C engagements, delivering custom WordPress and WooCommerce implementations.",
      "Built plugins, tailored themes, and project-specific solutions for around 20 client websites and commerce platforms.",
      "Supported brands from the Polish mid-market as well as larger corporate clients, including bbg.pl.",
      "Contributed to projects for brands such as Organic Series and Triples while adapting solutions to varied business needs.",
    ],
    tags: ["WordPress", "WooCommerce", "Custom Plugins", "Client Delivery"],
  },
  {
    title: "Freelance Web Developer & Designer",
    company: "Self-employed",
    location: "Remote",
    period: "2018 — Present",
    bullets: [
      "Have worked independently since 2018, building websites, e-commerce experiences, and custom digital products alongside long-term collaborations.",
      "Combined design and engineering experience while finishing a Fine Arts degree at ASP in Poland.",
      "Delivered end-to-end project work spanning discovery, implementation, optimization, and client communication.",
      "Used self-employment as the foundation for both direct freelance work and later product-led studio initiatives.",
    ],
    tags: ["Freelance", "E-commerce", "Design", "Product Delivery"],
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
        <TiltCard className="rounded-lg border border-border bg-card/90 p-6 shadow-[0_0_30px_hsl(var(--primary)/0.04)] hover:border-primary/30 transition-colors duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-3">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
              <p className="text-primary font-medium">{exp.company}</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-xs text-muted-foreground">
                {exp.period}
              </p>
              <p className="text-xs text-muted-foreground">{exp.location}</p>
            </div>
          </div>

          <div className="mb-4 flex items-start justify-between gap-4">
            <pre className="font-mono text-[10px] leading-4 text-primary/45">
{`> exp.load
[ok] shipping
[ok] support`}
            </pre>
            <div className="grid grid-cols-4 gap-1">
              {Array.from({ length: 16 }).map((_, pixel) => (
                <span
                  key={pixel}
                  className={`h-2 w-2 rounded-[2px] ${
                    pixel % 3 === 0 ? "bg-primary/30" : "bg-border/80"
                  }`}
                />
              ))}
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
          <div>
            <SectionHeader
              title="Experience"
              icon={<Briefcase className="h-5 w-5" />}
            />
            <pre className="mt-6 hidden font-mono text-[10px] leading-4 text-primary/45 lg:block">
{`timeline.sync
██ work.log
██ ops.log
██ build.log`}
            </pre>
          </div>
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
