"use client";

import { useState, useEffect } from "react";
import { Download, Calendar, Github, Linkedin, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_PROFILE_LINKS } from "@/lib/portfolio";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.split("#")[1]);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4 gap-4">
        <a
          href="/"
          className="font-mono text-sm tracking-wider text-primary transition-opacity hover:opacity-80"
        >
          GL
        </a>
        <a
          href="/Georgios-Lazaridis-CV.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary md:hidden"
        >
          HTML CV <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in new tab)</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "text-sm transition-colors duration-200 hover:text-primary",
                  activeSection === item.href.split("#")[1]
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Georgios-Lazaridis-CV.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              CV <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </li>
        </ul>
        <div className="hidden lg:flex items-center gap-3">
          {NAV_PROFILE_LINKS.map((link) => {
            const Icon =
              link.label === "LinkedIn"
                ? Linkedin
                : link.label === "GitHub"
                  ? Github
                  : MessageCircle;

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/schedule"
            className="inline-flex items-center gap-2 rounded-md border border-primary px-4 py-2 text-xs font-mono text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <Calendar className="h-3.5 w-3.5" />
            Schedule
          </a>
          <a
            href="/Georgios-Lazaridis-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary/70 bg-primary/10 px-4 py-2 text-xs font-mono text-primary shadow-[0_0_18px_hsl(var(--primary)/0.22)] transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_28px_hsl(var(--primary)/0.36)]"
          >
            <Download className="h-3.5 w-3.5" />
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
