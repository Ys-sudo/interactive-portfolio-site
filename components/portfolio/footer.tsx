"use client";

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
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="font-mono text-xs text-muted-foreground">
            <PixelText
              text="© 2026 George Lazaridis / Coded Letter"
              speed={170}
              overlayClassName="text-primary/30"
            />
          </p>
          <a
            href={`mailto:${PORTFOLIO_EMAIL}`}
            className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <PixelText
              text={PORTFOLIO_EMAIL}
              speed={170}
              overlayClassName="text-primary/35"
            />
          </a>
          <div className="mt-3 flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            {NAV_PROFILE_LINKS.map((link, index) => (
              <div key={link.label} className="flex items-center gap-4">
                {index > 0 && <span className="text-muted-foreground/40">/</span>}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <PixelText
                    text={link.label}
                    speed={170}
                    overlayClassName="text-primary/35"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-primary/20 bg-card/50 px-4 py-3 backdrop-blur">
          <pre className="min-h-[4.5rem] font-mono text-[10px] leading-4 text-primary/60 transition-opacity duration-300">
            {ASCII_FRAMES[frame]}
          </pre>
        </div>
      </div>
    </footer>
  );
}
