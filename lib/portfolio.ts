export const PORTFOLIO_EMAIL = "hello@codedletter.com";
export const PORTFOLIO_LOCATION = "Wrocław, Poland";

export const PORTFOLIO_SOCIALS = {
  linkedin: "https://www.linkedin.com/in/george-lazaridis-9a2244374/",
  github: "https://github.com/ys-sudo",
  discord: "https://discord.gg/UZtuF3fwYf",
};

export const NAV_PROFILE_LINKS = [
  { label: "LinkedIn", href: PORTFOLIO_SOCIALS.linkedin },
  { label: "GitHub", href: PORTFOLIO_SOCIALS.github },
  { label: "Discord", href: PORTFOLIO_SOCIALS.discord },
] as const;

export const PLACEHOLDER_NEON_PHOTOS = {
  about:
    "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",
  hero:
    "https://images.unsplash.com/photo-1520034475321-cbe63696469a?auto=format&fit=crop&w=900&q=80",
  projects:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  contact:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
} as const;
