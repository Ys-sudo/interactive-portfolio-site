"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_PROFILE_LINKS, PORTFOLIO_EMAIL } from "@/lib/portfolio";
import { PixelText } from "./pixel-text";

const ASCII_FRAMES = [
  `> ssh coded-letter@signal\n[auth] granted\n[stack] wp / react / next`,
  `> tail -f deploy.log\n[ok] neon.online\n[ok] commerce.stable`,
  `> scan --mode ascii\n[+] prototypes\n[+] automation\n[+] r&d`,
];

export function Footer() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((current) => (current + 1) % ASCII_FRAMES.length);
    }, 1400);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <p className="font-mono text-xs text-muted-foreground">
            <PixelText
              text="© 2026 George Lazaridis / Coded Letter"
              speed={240}
              overlayClassName="text-primary/24"
            />
          </p>
          <a
            href={`mailto:${PORTFOLIO_EMAIL}`}
            className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <PixelText
              text={PORTFOLIO_EMAIL}
              speed={240}
              overlayClassName="text-primary/24"
            />
          </a>
          <div className="overflow-hidden rounded-2xl border border-primary/20 bg-card/50 px-4 py-3 backdrop-blur">
            <pre className="min-h-[4.5rem] font-mono text-[10px] leading-4 text-primary/60 transition-opacity duration-300">
              {ASCII_FRAMES[frame]}
            </pre>
          </div>
        </div>

        <div className="min-w-[240px] rounded-2xl border border-primary/20 bg-card/50 px-4 py-4 backdrop-blur">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary/70">
            Signal links
          </p>
          <div className="mt-4 flex flex-col gap-2">
            {NAV_PROFILE_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border/80 px-3 py-2 font-mono text-xs text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                <PixelText
                  text={link.label}
                  speed={320}
                  overlayClassName="text-primary/24"
                />
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
