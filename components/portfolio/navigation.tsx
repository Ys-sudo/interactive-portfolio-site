"use client";

import { useState, useEffect } from "react";
import { Download, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
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
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <a
          href="/"
          className="font-mono text-sm tracking-wider text-primary transition-opacity hover:opacity-80"
        >
          GL
        </a>
        <ul className="hidden md:flex items-center gap-8">
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
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/schedule"
            className="inline-flex items-center gap-2 rounded-md border border-primary px-4 py-2 text-xs font-mono text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <Calendar className="h-3.5 w-3.5" />
            My Schedule
          </a>
          <a
            href="/Georgios-Lazaridis-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary px-4 py-2 text-xs font-mono text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <Download className="h-3.5 w-3.5" />
            Download CV
          </a>
          <a
            href="mailto:glazari27@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-mono text-primary-foreground transition-all hover:brightness-110"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
