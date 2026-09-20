"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTextScramble } from "@/hooks/use-text-scramble";
import { Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { TiltCard } from "./tilt-card";
import {
  PORTFOLIO_EMAIL,
  PORTFOLIO_SECTION_IMAGES,
  PORTFOLIO_LOCATION,
  PORTFOLIO_SOCIALS,
} from "@/lib/portfolio";

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
        <div className="grid lg:grid-cols-[200px_1fr] gap-12 lg:items-start">
          <div>
            <div className="lg:sticky lg:top-24">
              <p
                className={`font-mono text-sm text-primary tracking-wider uppercase transition-all duration-600 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                }`}
              >
                {isVisible ? scrambledTitle : "Contact"}
              </p>
              <div
                className={`mt-8 overflow-hidden rounded-[1.75rem] border border-border bg-card transition-all duration-700 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={PORTFOLIO_SECTION_IMAGES.contact}
                    alt="Feature image for contact section"
                    fill
                    sizes="(max-width: 1024px) 100vw, 200px"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-foreground text-balance transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {"Let's work together"}
            </h2>
            <p
              className={`mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {
                "If you'd like to discuss a project, ongoing technical support, or a product idea, feel free to reach out."
              }
            </p>

            <div
              className={`mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <TiltCard className="rounded-lg">
                <a
                  href={`mailto:${PORTFOLIO_EMAIL}`}
                  className="group flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 h-full"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Email</p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors break-all">
                      {PORTFOLIO_EMAIL}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </TiltCard>

              <TiltCard className="rounded-lg">
                <a
                  href={PORTFOLIO_SOCIALS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 h-full"
                >
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Discord</p>
                    <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                      Join the server
                    </p>
                  </div>
                  <ArrowUpRight className="mt-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </TiltCard>

              <TiltCard className="rounded-lg">
                <div className="flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-6 h-full">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Location</p>
                    <p className="text-sm text-foreground">{PORTFOLIO_LOCATION}</p>
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
