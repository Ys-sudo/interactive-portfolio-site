"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTextScramble } from "@/hooks/use-text-scramble";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { TiltCard } from "./tilt-card";

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const scrambledTitle = useTextScramble("Contact", isVisible, 25);

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="relative mx-auto max-w-6xl px-6 w-full" ref={ref}>
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 lg:items-center">
          <div>
            <div className="lg:sticky lg:top-24">
              <p
                className={`font-mono text-sm text-primary tracking-wider uppercase transition-all duration-600 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-6"
                }`}
              >
                {isVisible ? scrambledTitle : "Contact"}
              </p>
            </div>
          </div>
          <div>
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-foreground text-balance transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {"Let's work together"}
            </h2>
            <p
              className={`mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {
                "If you'd like to discuss a project or just say hi, I'm always open to chat."
              }
            </p>

            <div
              className={`mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <TiltCard className="rounded-lg">
                <a
                  href="mailto:glazari27@gmail.com"
                  className="group flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 h-full"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Email</p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                      glazari27@gmail.com
                    </p>
                  </div>
                  <ArrowUpRight className="mt-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </TiltCard>

              <TiltCard className="rounded-lg">
                <div className="flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-6 h-full">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Phone</p>
                    <p className="text-sm text-foreground">+48 500 077 957</p>
                  </div>
                </div>
              </TiltCard>

              <TiltCard className="rounded-lg">
                <div className="flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-6 h-full">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Location
                    </p>
                    <p className="text-sm text-foreground">
                      {"Wroc\u0142aw, Poland"}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
