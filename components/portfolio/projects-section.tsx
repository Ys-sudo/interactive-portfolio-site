"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  ExternalLink,
  FolderOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SectionHeader } from "./section-header";
import { TiltCard } from "./tilt-card";

const projects = [
  {
    title: "shroom4you.com",
    url: "https://shroom4you.com",
    image: "/projects/shroom4you.jpg",
    period: "2023 \u2014 Present",
    description:
      "A premium e-commerce platform for an adaptogenic mushroom drink brand. Built with a headless WordPress architecture powered by Gatsby.js and GraphQL, featuring dynamic product pages, seamless checkout flows, and optimized performance for a global audience.",
    tags: ["Gatsby.js", "GraphQL", "WordPress", "E-commerce"],
    highlight: "Headless CMS + JAMstack",
  },
  {
    title: "hex-to-rgb.com",
    url: "https://hex-to-rgb.com",
    image: "/projects/hex-to-rgb.jpg",
    period: "2023 \u2014 Present",
    description:
      "Conceived, designed, and single-handedly built a full-service color conversion platform serving 30k+ monthly active users. Engineered advanced color bridging algorithms for seamless conversion across HEX, RGB, HSL, CMYK, and other color spaces.",
    tags: ["Vite", "React", "TypeScript", "SEO", "Firebase", "Google Adsense"],
    highlight: "TypeScript",
  },
  {
    title: "Sprout & Spore",
    url: "",
    image: "",
    period: "2026",
    description:
      "Your AI-powered companion for growing plants and mushrooms. Get personalized growing instructions, identify species with AI vision, and track your garden collection. Fully built by me.",
    tags: ["Vite", "React", "TypeScript", "SEO", "Firebase", "Google Adsense"],
    highlight: "AI Companion",
  },
  {
    title: "artopen.pl",
    url: "https://artopen.pl",
    image: "/projects/artopen.jpg",
    period: "2020 \u2014 Present",
    description:
      "The digital home of a full-service creative agency in Wroc\u0142aw.  30+ web applications and design projects, built with modern React and server-side rendering for blazing-fast load times, integrated with custom CMS solutions and third-party APIs.",
    tags: ["React.js", "Node.js", "SSR/SSG", "GCP"],
    highlight: "30+ projects delivered",
  },
  {
    title: "swiezastrona.pl",
    url: "https://swiezastrona.pl",
    image: "/projects/swiezastrona.jpg",
    period: "2024 \u2014 2025",
    description:
      "A polished web development studio site offering custom WordPress solutions. Features responsive design, SEO-optimized architecture, and a Next.js-powered helpdesk platform with real-time updates and multi-method authentication.",
    tags: ["WordPress", "Next.js", "SEO", "UI/UX", "Python", "Shell"],
    highlight: "20+ client sites",
    links: [{ label: "market-er.pl", url: "https://market-er.pl" }],
  },
  {
    title: "e-multicontent.com",
    url: "https://e-multicontent.com",
    image: "/projects/e-multicontent.jpg",
    period: "2020 \u2014 2026",
    description:
      "A comprehensive content marketing platform delivering multilingual copywriting, SEO strategy, and digital content solutions. Built with performance-first principles, featuring dynamic service pages, client portals, and integrated analytics dashboards.",
    tags: ["React", "WordPress", "SEO", "Multilingual"],
    highlight: "Multilingual content platform",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const hasUrl = Boolean(project.url);

  return (
    <div data-magnetic className="h-full">
      <TiltCard className="group h-full flex flex-col rounded-lg border border-border bg-card overflow-hidden hover:border-primary/30 transition-colors duration-300">
        {/* Image intentionally removed for now */}

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <div className="mb-4 min-w-0">
            <div className="flex items-start justify-between gap-3 min-w-0">
              <div className="min-w-0 flex-1">
                {hasUrl ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block min-w-0 text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    <span className="inline-flex min-w-0 items-center gap-2">
                      <span className="truncate">{project.title}</span>
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </a>
                ) : (
                  <div className="text-lg font-semibold text-foreground">
                    <span className="block truncate">{project.title}</span>
                  </div>
                )}
                <p className="font-mono text-xs text-muted-foreground mt-0.5">
                  {project.period}
                </p>
              </div>
            </div>

            <div className="mt-3 flex justify-end">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-mono text-primary whitespace-nowrap">
                {project.highlight}
              </span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {project.links?.length ? (
            <div className="mb-4 flex flex-wrap gap-2">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-mono text-primary transition-colors hover:bg-primary/10"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          ) : null}

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-mono text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </TiltCard>
    </div>
  );
}

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({
    active: false,
    pointerId: -1,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
  });

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  // Map vertical wheel to horizontal scroll (non-passive so preventDefault works)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (el.scrollWidth <= el.clientWidth) return;
      // Only remap when the user is primarily scrolling vertically
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      el.scrollBy({ left: e.deltaY, behavior: "auto" });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth =
      el.querySelector<HTMLElement>(":scope > div")?.offsetWidth ?? 360;
    el.scrollBy({
      left: dir === "left" ? -cardWidth - 24 : cardWidth + 24,
      behavior: "smooth",
    });
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;

    // Don't hijack clicks on interactive elements
    const target = e.target as HTMLElement;
    const interactive = target?.closest(
      "a, button, [role='button'], input, textarea, select, [data-no-drag]",
    );
    if (interactive) return;

    // Only enable drag scroll when there's overflow
    if (el.scrollWidth <= el.clientWidth) return;

    dragRef.current.active = true;
    dragRef.current.pointerId = e.pointerId;
    dragRef.current.startX = e.clientX;
    dragRef.current.startScrollLeft = el.scrollLeft;
    dragRef.current.moved = false;
    setIsDragging(false);
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    if (!dragRef.current.active) return;
    if (dragRef.current.pointerId !== e.pointerId) return;

    const dx = e.clientX - dragRef.current.startX;

    // Only treat it as a drag after a small threshold
    if (!dragRef.current.moved) {
      if (Math.abs(dx) < 5) return;
      dragRef.current.moved = true;
      setIsDragging(true);
    }
    el.scrollLeft = dragRef.current.startScrollLeft - dx;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    if (!dragRef.current.active) return;
    if (dragRef.current.pointerId !== e.pointerId) return;

    dragRef.current.active = false;
    dragRef.current.pointerId = -1;
    dragRef.current.moved = false;
    setIsDragging(false);
    try {
      el.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <section id="projects" className="py-32 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={sectionRef}
          className={`grid lg:grid-cols-[200px_1fr] gap-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <SectionHeader
            title="Projects"
            icon={<FolderOpen className="h-5 w-5" />}
          />

          <div className="relative min-w-0">
            {/* Scroll controls */}
            <div className="flex items-center justify-end gap-2 mb-4">
              <span className="text-xs font-mono text-muted-foreground mr-auto">
                Drag or scroll to explore
              </span>
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll projects left"
                data-magnetic
                className="inline-flex items-center justify-center rounded-md border border-border h-8 w-8 text-muted-foreground transition-all hover:text-foreground hover:border-primary/40 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll projects right"
                data-magnetic
                className="inline-flex items-center justify-center rounded-md border border-border h-8 w-8 text-muted-foreground transition-all hover:text-foreground hover:border-primary/40 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Fade edges */}
            {canScrollLeft && (
              <div className="pointer-events-none absolute left-0 top-12 bottom-0 w-12 z-10 bg-gradient-to-r from-background to-transparent" />
            )}
            {canScrollRight && (
              <div className="pointer-events-none absolute right-0 top-12 bottom-0 w-12 z-10 bg-gradient-to-l from-background to-transparent" />
            )}

            {/* Scrollable row (magnetic snap) */}
            <div
              ref={scrollRef}
              className={`flex gap-6 overflow-x-scroll overflow-y-hidden pb-4 snap-x snap-mandatory scroll-smooth overscroll-x-contain select-none touch-pan-x scrollbars-none ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              onPointerLeave={(e) => {
                if (dragRef.current.active) endDrag(e);
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="w-[340px] md:w-[380px] shrink-0 snap-start snap-always"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
