"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Mail, MapPin, FileDown, Calendar, MessageCircle } from "lucide-react";
import { ParticleNetwork } from "./particle-network";
import { PixelText } from "./pixel-text";
import { PortfolioImage } from "./portfolio-image";
import {
  PORTFOLIO_SECTION_IMAGES,
  PLACEHOLDER_NEON_PHOTOS,
  PORTFOLIO_EMAIL,
  PORTFOLIO_LOCATION,
  PORTFOLIO_SOCIALS,
} from "@/lib/portfolio";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleNetwork />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute left-[8%] top-[18%] hidden xl:block">
        <pre className="font-mono text-[10px] leading-4 text-primary/45">
{`┌ SYSTEM ─────────┐
│ stack: react     │
│ mode: shipping   │
│ signal: stable   │
└──────────────────┘`}
        </pre>
      </div>
      <div className="pointer-events-none absolute right-[7%] bottom-[22%] hidden xl:block">
        <div className="grid grid-cols-6 gap-1">
          {Array.from({ length: 36 }).map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-[2px] ${
                index % 4 === 0 || index % 7 === 0
                  ? "bg-primary/30"
                  : "bg-border/60"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          <div>
            <div
              className={`transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="font-mono text-primary text-sm mb-4 tracking-wider">
                Founder @ Coded Letter / Full-Stack Web Developer
              </p>
              <div className="mb-8 inline-flex max-w-full items-center gap-4 overflow-hidden rounded-2xl border border-primary/20 bg-card/50 px-4 py-3 backdrop-blur">
                <pre className="font-mono text-[10px] leading-4 text-primary/60">
{`01001100 01001001 01010110 01000101
</build>  npm:off  dep:zero`}
                </pre>
                <div className="grid grid-cols-4 gap-1">
                  {Array.from({ length: 16 }).map((_, index) => (
                    <span
                      key={index}
                      className={`h-2.5 w-2.5 rounded-[2px] ${
                        index % 3 === 0 ? "bg-primary/40" : "bg-border/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <h1
              className={`mb-12 text-[clamp(3.75rem,11vw,8rem)] font-bold tracking-[-0.05em] leading-[0.9] transition-all duration-700 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block whitespace-nowrap">
                <PixelText
                  text="George"
                  speed={340}
                  overlayClassName="text-primary/24"
                  className="whitespace-nowrap"
                />
              </span>
              <span className="mt-2 block whitespace-nowrap text-primary md:mt-3">
                <PixelText
                  text="Lazaridis"
                  speed={340}
                  overlayClassName="text-primary/30"
                  className="whitespace-nowrap"
                />
              </span>
            </h1>
            <p
              className={`max-w-xl text-muted-foreground leading-relaxed text-lg transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              I build headless commerce, custom WordPress systems, React applications,
              and product prototypes for brands, studios, and my own ventures. My work
              blends design sensitivity, engineering depth, SEO, and long-term technical ownership.
            </p>
            <div
              className={`mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href={`mailto:${PORTFOLIO_EMAIL}`}
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                {PORTFOLIO_EMAIL}
              </a>
              <a
                href={PORTFOLIO_SOCIALS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Join Discord
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {PORTFOLIO_LOCATION}
              </span>
            </div>
            <div
              className={`mt-10 transition-all duration-700 delay-[400ms] ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex flex-wrap gap-3">
                <a
                  href="/Georgios-Lazaridis-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_28px_hsl(var(--primary)/0.32)] transition-all hover:brightness-110 hover:scale-[1.02] hover:shadow-[0_0_38px_hsl(var(--primary)/0.45)] active:scale-[0.98]"
                >
                  <FileDown className="h-4 w-4" />
                  View Full CV
                </a>
                <a
                  href="/schedule"
                  className="inline-flex items-center gap-2.5 rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Calendar className="h-4 w-4" />
                  My Schedule
                </a>
              </div>
              <a
                href={PORTFOLIO_SOCIALS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-mono text-primary transition-colors hover:text-primary/80"
              >
                <MessageCircle className="h-4 w-4" />
                Join the Coded Letter Discord channel
              </a>
              <pre className="mt-8 hidden max-w-max rounded-2xl border border-primary/20 bg-card/40 px-4 py-3 font-mono text-[10px] leading-4 text-primary/55 backdrop-blur md:block">
{`> init_profile --mode neon
[ ok ] headless commerce
[ ok ] wp / react / next
[ ok ] prototypes / automation`}
              </pre>
            </div>
          </div>

          <div
            className={`hidden lg:block transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative w-[320px]">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-primary/10 blur-2xl" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-2xl shadow-primary/10">
                <PortfolioImage
                  src={PORTFOLIO_SECTION_IMAGES.hero}
                  alt="Neon-lit portrait placeholder"
                  fallbackSrc={PLACEHOLDER_NEON_PHOTOS.hero}
                  className="h-full w-full object-cover"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/15 to-transparent" />
                <div className="absolute left-4 top-4 rounded-xl border border-primary/20 bg-background/70 px-3 py-2 backdrop-blur">
                  <pre className="font-mono text-[10px] leading-4 text-primary/55">
{`[pixel stream]
██░░██░░
░██░░███`}
                  </pre>
                </div>
                <div className="absolute bottom-5 right-5 rounded-2xl border border-primary/30 bg-background/85 px-4 py-3 backdrop-blur">
                  <span className="font-mono text-lg text-primary/80">{"</>"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-xs text-muted-foreground font-mono">Scroll down</span>
          <ArrowDown className="h-4 w-4 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
