import { NAV_PROFILE_LINKS, PORTFOLIO_EMAIL } from "@/lib/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 George Lazaridis / Coded Letter
          </p>
          <a
            href={`mailto:${PORTFOLIO_EMAIL}`}
            className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            {PORTFOLIO_EMAIL}
          </a>
        </div>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          {NAV_PROFILE_LINKS.map((link, index) => (
            <div key={link.label} className="flex items-center gap-4">
              {index > 0 && <span className="text-muted-foreground/40">/</span>}
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
