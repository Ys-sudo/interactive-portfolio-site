export function Footer() {
  const LINKEDIN_URL = "https://linkedin.com/in/your-handle";
  const DISCORD_URL = "https://discord.gg/your-invite";

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          {"© 2026 Georgios Lazaridis"}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-muted-foreground/40">/</span>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}
