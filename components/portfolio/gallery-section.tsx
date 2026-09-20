"use client"

import { ChevronLeft, ChevronRight, Image as ImageIcon, X } from "lucide-react"
import { useEffect, useState } from "react"

import { PLACEHOLDER_NEON_PHOTOS, PORTFOLIO_GALLERY_IMAGES } from "@/lib/portfolio"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { PortfolioImage } from "./portfolio-image"
import { SectionHeader } from "./section-header"
import { TiltCard } from "./tilt-card"

const galleryImages = PORTFOLIO_GALLERY_IMAGES.map((src, index) => ({
  src,
  alt: `Portfolio gallery image ${index + 1}`,
  rotation:
    index % 3 === 0 ? "-rotate-1" : index % 3 === 1 ? "rotate-[1.5deg]" : "rotate-0",
  aspect:
    index % 5 === 0
      ? "aspect-[4/5]"
      : index % 5 === 1
        ? "aspect-[5/4]"
        : index % 5 === 2
          ? "aspect-[3/4]"
          : index % 5 === 3
            ? "aspect-square"
            : "aspect-[16/11]",
}))

export function GallerySection() {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const closeLightbox = () => setActiveIndex(null)
  const showPrev = () =>
    setActiveIndex((current) =>
      current === null ? current : (current + galleryImages.length - 1) % galleryImages.length,
    )
  const showNext = () =>
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % galleryImages.length,
    )

  useEffect(() => {
    if (activeIndex === null) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox()
      if (event.key === "ArrowLeft") showPrev()
      if (event.key === "ArrowRight") showNext()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [activeIndex])

  return (
    <section id="gallery" className="py-32 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={ref}
          className={`grid lg:grid-cols-[200px_1fr] gap-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <SectionHeader title="Gallery" icon={<ImageIcon className="h-5 w-5" />} />

          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <p className="max-w-2xl text-sm text-muted-foreground leading-relaxed">
                A wider gallery pass collecting the remaining public image assets so the main
                sections can use their dedicated feature images.
              </p>
              <pre className="hidden font-mono text-[10px] leading-4 text-primary/45 md:block">
{`gallery.mount
:: image.signal`}
              </pre>
            </div>

            <div className="columns-1 gap-5 sm:columns-2 xl:columns-3">
              {galleryImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`mb-5 break-inside-avoid transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <TiltCard
                    className={`overflow-hidden rounded-[1.75rem] border border-border bg-card/80 ${image.rotation}`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`relative block w-full text-left ${image.aspect}`}
                    >
                      <PortfolioImage
                        src={image.src}
                        alt={image.alt}
                        fallbackSrc={PLACEHOLDER_NEON_PHOTOS.projects}
                        className="h-full w-full object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 rounded-full border border-primary/20 bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-primary/70 backdrop-blur">
                        {image.src.split("/").pop()?.replace(/\.[^.]+$/, "")}
                      </div>
                    </button>
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-background/92 p-4 backdrop-blur-md"
          onClick={closeLightbox}
        >
          <button
            type="button"
            aria-label="Close gallery lightbox"
            onClick={closeLightbox}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/80 text-muted-foreground transition-colors hover:text-primary"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Previous gallery image"
            onClick={(event) => {
              event.stopPropagation()
              showPrev()
            }}
            className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/80 text-muted-foreground transition-colors hover:text-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next gallery image"
            onClick={(event) => {
              event.stopPropagation()
              showNext()
            }}
            className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/80 text-muted-foreground transition-colors hover:text-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-border bg-card">
              <PortfolioImage
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                fallbackSrc={PLACEHOLDER_NEON_PHOTOS.projects}
                className="h-full w-full object-contain bg-background"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
