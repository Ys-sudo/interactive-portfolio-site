"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  Mail,
  Phone,
  MapPin,
  FileDown,
  Calendar,
} from "lucide-react";
import { ParticleNetwork } from "./particle-network";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle network background */}
      <ParticleNetwork />

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          <div>
            <div
              className={`transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="font-mono text-primary text-sm mb-4 tracking-wider">
                Full-Stack Web Developer
              </p>
            </div>
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[0.95] transition-all duration-700 delay-100 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              George
              <br />
              <span className="text-primary">Lazaridis</span>
            </h1>
            <p
              className={`mt-8 max-w-xl text-muted-foreground leading-relaxed text-lg transition-all duration-700 delay-200 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Dynamic full-stack web developer delivering scalable,
              high-performance applications. Proficient in modern frameworks
              with a strong foundation in SEO, WordPress, e-commerce,
              accessibility, AI and DevOps.
            </p>
            <div
              className={`mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground transition-all duration-700 delay-300 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="mailto:glazari27@gmail.com"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                glazari27@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +48 500 077 957
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {"Wroc\u0142aw, Poland"}
              </span>
            </div>
            <div
              className={`mt-10 transition-all duration-700 delay-[400ms] ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex flex-wrap gap-3">
                <a
                  href="/Georgios-Lazaridis-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
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
            </div>
          </div>

          {/* Decorative element */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full border border-border/50 animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
              </div>
              <div className="absolute inset-6 rounded-full border border-border/30 animate-[spin_15s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/60" />
              </div>
              <div className="absolute inset-12 rounded-full border border-border/20 animate-[spin_25s_linear_infinite]">
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary/40" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-2xl text-primary/80">
                  {"</>"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-700 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-xs text-muted-foreground font-mono">
            Scroll down
          </span>
          <ArrowDown className="h-4 w-4 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
