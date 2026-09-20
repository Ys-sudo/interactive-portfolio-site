"use client";

import Image from "next/image";
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
import { PORTFOLIO_SECTION_IMAGES } from "@/lib/portfolio";

const projects = [
  {
    title: "Coded Letter",
    url: "https://github.com/coded-letter/",
    period: "2026 — Present",
    description:
      "My zero-dependency startup site and delivery hub, bringing together helpdesk tooling, Netlify Functions, server management, superfunky.pro distribution, prototyping, and open-source publishing.",
    tags: ["0 dependencies", "Netlify Functions", "Open Source", "Server Management"],
    highlight: "Own startup",
    supportingLabel: "Core scope",
    supporting: [
      { label: "Helpdesk" },
      { label: "superfunky distribution" },
      { label: "prototyping" },
      { label: "server ops" },
    ],
  },
  {
    title: "Superfunky.pro",
    url: "https://superfunky.pro",
    period: "2025 — Present",
    description:
      "Author of a headless WordPress and WooCommerce theme platform with license checking, built for repeatable delivery and long-term management across multiple commerce deployments.",
    tags: ["Headless WordPress", "WooCommerce", "Licensing", "Productization"],
    highlight: "Platform product",
    supportingLabel: "Selected stores",
    supporting: [
      { label: "aqua-bar.pl", url: "https://aqua-bar.pl" },
      { label: "polskiewafle.pl", url: "https://polskiewafle.pl" },
      { label: "camea.pl", url: "https://camea.pl" },
      { label: "and more (20+)..." },
    ],
  },
  {
    title: "ArtOpen.pl / sklep.artopen.pl",
    url: "https://artopen.pl",
    period: "2020 — Present",
    description:
      "Long-term B2B and B2C collaboration spanning the agency website, the Promotron e-commerce platform, and custom delivery for client brands across WordPress, React, and headless systems.",
    tags: ["WordPress", "React", "Headless", "E-commerce"],
    highlight: "6-year collaboration",
    supportingLabel: "Selected client work",
    supporting: [
      { label: "artopen.pl", url: "https://artopen.pl" },
      { label: "sklep.artopen.pl", url: "https://sklep.artopen.pl" },
      { label: "kreator-kalendarzy.pl", url: "https://kreator-kalendarzy.pl" },
      { label: "bekuplast.com.pl", url: "https://bekuplast.com.pl" },
      { label: "DeLaval" },
      { label: "Rexer" },
      { label: "and more (15+)..." },
    ],
  },
  {
    title: "Shroom4you.com",
    url: "https://shroom4you.com",
    period: "2022 — Present",
    description:
      "Client e-commerce platform and storefront built on a headless stack, with ongoing ownership of the WordPress backend, Gatsby frontend, and PHP, SQL, and Node.js server environment.",
    tags: ["Gatsby.js", "WooCommerce", "PHP", "Node.js"],
    highlight: "Headless e-commerce",
    supportingLabel: "Core responsibilities",
    supporting: [
      { label: "headless servers" },
      { label: "Woo backend" },
      { label: "frontend delivery" },
      { label: "SEO / GEO" },
    ],
  },
  {
    title: "Świeżastrona.pl",
    url: "https://web.archive.org/web/20250913002826/https://swiezastrona.pl/",
    period: "Archive / 1-year collaboration",
    description:
      "Archive of a studio collaboration focused on custom WordPress and WooCommerce builds, plugins, tailored themes, a Next.js helpdesk platform, shell scripting, Python automation, server administration, and cybersecurity-oriented technical support.",
    tags: ["WordPress", "Next.js", "Python", "Server Admin"],
    highlight: "Agency collaboration",
    supportingLabel: "Selected brands",
    supporting: [
      { label: "organicseries.pl", url: "https://organicseries.pl" },
      { label: "bbg.pl", url: "https://bbg.pl" },
      { label: "triplesofficial.pl", url: "https://triplesofficial.pl" },
      { label: "and more (20+)..." },
    ],
  },
  {
    title: "e-multicontent.pl / let-pr.com",
    url: "https://e-multicontent.pl",
    period: "2018 — Present",
    description:
      "Part of a long-running B2B collaboration for IV Group, covering WordPress delivery, Gatsby and Decap CMS builds, Elementor-based publishing, and practical web systems designed to reduce operating costs and improve agility.",
    tags: ["WordPress", "Gatsby", "Decap CMS", "Elementor"],
    highlight: "IV Group collaboration",
    supportingLabel: "Related links",
    supporting: [
      { label: "e-multicontent.pl", url: "https://e-multicontent.pl" },
      { label: "let-pr.com", url: "https://let-pr.com" },
      { label: "iv-group.pl", url: "https://iv-group.pl" },
    ],
  },
  {
    title: "Self-employed",
    url: "https://github.com/ys-sudo",
    period: "2018 — Present",
    description:
      "Independent client delivery across WooCommerce, legacy CMS implementations, performance optimization including Ruby/Jekyll work for Logicaltrust, and headless builds developed alongside long-term agency and studio collaborations.",
    tags: ["Freelance", "WooCommerce", "Performance", "Headless"],
    highlight: "Independent delivery",
    supportingLabel: "Selected work",
    supporting: [
      { label: "powerenergy.com.pl", url: "https://powerenergy.com.pl" },
      { label: "axel-travel.pl" },
      { label: "Logicaltrust.net (Ruby / Jekyll)", url: "https://logicaltrust.net" },
      { label: "3dprintingstl.com", url: "https://3dprintingstl.com" },
      { label: "and more (20+)..." },
    ],
  },
  {
    title: "Creative",
    url: "https://github.com/ys-sudo",
    period: "R&D / archive",
    description:
      "Creative technology and research work spanning robotics interfaces, AR and CV experiments, VR, and open-source prototypes created in parallel with client and studio delivery.",
    tags: ["R&D", "Creative Tech", "Open Source", "Prototyping"],
    highlight: "Experimental work",
    supportingLabel: "Selected projects",
    supporting: [
      { label: "plantguardian.app", url: "https://plantguardian.app" },
      { label: "hair-coloring-app", url: "https://ys-sudo.github.io/hair-coloring-app/" },
      { label: "PUUF VR project", url: "https://github.com/Ys-sudo/puuf-vr-project" },
      { label: "More on GitHub", url: "https://github.com/ys-sudo" },
    ],
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const hasUrl = Boolean(project.url);

  return (
    <div data-magnetic className="h-full">
      <TiltCard className="group h-full flex flex-col rounded-lg border border-border bg-card overflow-hidden hover:border-primary/30 transition-colors duration-300">
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

            <div className="mt-3 flex items-start justify-between gap-4">
              <pre className="font-mono text-[10px] leading-4 text-primary/45">
{`> route.project
[id] stable
[fx] pixel`}
              </pre>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-mono text-primary whitespace-nowrap">
                {project.highlight}
              </span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
            {project.description}
          </p>

          <div className="mb-5">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground font-mono">
              {project.supportingLabel}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.supporting.map((item) =>
                item.url ? (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs font-mono text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {item.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span
                    key={item.label}
                    className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-mono text-muted-foreground"
                  >
                    {item.label}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-mono text-primary"
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

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (el.scrollWidth <= el.clientWidth) return;
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
      el.querySelector<HTMLElement>(":scope > div")?.offsetWidth ?? 400;
    el.scrollBy({
      left: dir === "left" ? -cardWidth - 24 : cardWidth + 24,
      behavior: "smooth",
    });
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;

    const target = e.target as HTMLElement;
    const interactive = target?.closest(
      "a, button, [role='button'], input, textarea, select, [data-no-drag]",
    );
    if (interactive || el.scrollWidth <= el.clientWidth) return;

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
    if (!el || !dragRef.current.active || dragRef.current.pointerId !== e.pointerId) return;

    const dx = e.clientX - dragRef.current.startX;
    if (!dragRef.current.moved) {
      if (Math.abs(dx) < 5) return;
      dragRef.current.moved = true;
      setIsDragging(true);
    }
    el.scrollLeft = dragRef.current.startScrollLeft - dx;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || !dragRef.current.active || dragRef.current.pointerId !== e.pointerId) return;

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
          className={`grid lg:grid-cols-[minmax(180px,20%)_minmax(0,80%)] gap-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-6">
            <SectionHeader
              title="Projects"
              icon={<FolderOpen className="h-5 w-5" />}
            />
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card">
              <div className="relative aspect-[4/3]">
                <Image
                  src={PORTFOLIO_SECTION_IMAGES.projects}
                  alt="Feature image for projects section"
                  fill
                  sizes="(max-width: 1024px) 100vw, 20vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <pre className="hidden font-mono text-[10px] leading-4 text-primary/45 lg:block">
{`project.buffer
░░ escape lane
██ slide focus`}
            </pre>
          </div>

          <div className="relative min-w-0">
            <div className="mb-8">
              <div className="w-full overflow-hidden rounded-[1.5rem] border border-primary/15 bg-card/50 px-4 py-3 backdrop-blur">
                <pre className="font-mono text-[10px] leading-4 text-primary/55">
{`// swipe lane: 80%
// left rail: 20%
// navigation: smooth`}
                </pre>
              </div>
            </div>

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

            {canScrollLeft && (
              <div className="pointer-events-none absolute left-0 top-24 bottom-0 w-12 z-10 bg-gradient-to-r from-background to-transparent" />
            )}
            {canScrollRight && (
              <div className="pointer-events-none absolute right-0 top-24 bottom-0 w-12 z-10 bg-gradient-to-l from-background to-transparent" />
            )}

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
                  className="w-[340px] md:w-[400px] shrink-0 snap-start snap-always"
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
