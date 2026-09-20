"use client"

import { useState } from "react"
import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { GallerySection } from "@/components/portfolio/gallery-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { EducationSection } from "@/components/portfolio/education-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"
import { MagneticCursor } from "@/components/portfolio/magnetic-cursor"
import { Preloader } from "@/components/portfolio/preloader"
import { ScrollProgress } from "@/components/portfolio/scroll-progress"
import { ParallaxLayer } from "@/components/portfolio/parallax-layer"
import { TerminalSeparator } from "@/components/portfolio/terminal-separator"
import { LotusSeparator } from "@/components/portfolio/lotus-separator"

export default function Page() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Preloader onComplete={() => setLoaded(true)} />
      <MagneticCursor />
      <ScrollProgress />
      <div
        className={`transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <Navigation />
        <main className="relative overflow-hidden">
          {/* Parallax floating elements */}
          <ParallaxLayer speed={0.3} className="top-[15%] left-[5%]">
            <div className="w-32 h-32 rounded-full border border-primary/10 opacity-20" />
          </ParallaxLayer>
          <ParallaxLayer speed={0.15} className="top-[45%] right-[8%]">
            <div className="w-20 h-20 rounded-full bg-primary/5 blur-sm" />
          </ParallaxLayer>
          <ParallaxLayer speed={0.25} className="top-[70%] left-[12%]">
            <div className="w-16 h-16 rotate-45 border border-primary/8 opacity-15" />
          </ParallaxLayer>
          <ParallaxLayer speed={0.1} className="top-[30%] right-[15%]">
            <div className="w-2 h-2 rounded-full bg-primary/20" />
          </ParallaxLayer>
          <ParallaxLayer speed={0.35} className="top-[85%] right-[20%]">
            <div className="w-24 h-24 rounded-full border border-primary/6 opacity-10" />
          </ParallaxLayer>
          <ParallaxLayer speed={0.2} className="top-[55%] left-[3%]">
            <div className="w-3 h-3 rounded-full bg-primary/15" />
          </ParallaxLayer>

          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <GallerySection />
          <ProjectsSection />
          <TerminalSeparator />
          <SkillsSection />
          <EducationSection />
          <LotusSeparator />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
