"use client"

import { Image as ImageIcon } from "lucide-react"

import { PORTFOLIO_GATHERED_IMAGES, PLACEHOLDER_NEON_PHOTOS } from "@/lib/portfolio"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { PortfolioImage } from "./portfolio-image"
import { SectionHeader } from "./section-header"
import { TiltCard } from "./tilt-card"

const galleryImages = PORTFOLIO_GATHERED_IMAGES.gallery.map((basename, index) => ({
  basename,
  alt: `Portfolio gallery image ${index + 1}`,
  rotation:
    index % 3 === 0 ? "-rotate-1" : index % 3 === 1 ? "rotate-[1.5deg]" : "rotate-0",
  aspect:
    index % 3 === 0 ? "aspect-[4/5]" : index % 3 === 1 ? "aspect-square" : "aspect-[5/4]",
}))

export function GallerySection() {
  const { ref, isVisible } = useScrollAnimation(0.1)

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
                A small visual break between selected work and case studies, using your gathered
                photography set with graceful fallbacks until the local files are present.
              </p>
              <pre className="hidden font-mono text-[10px] leading-4 text-primary/45 md:block">
{`gallery.mount
:: image.signal`}
              </pre>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {galleryImages.map((image, index) => (
                <div
                  key={image.basename}
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <TiltCard className={`overflow-hidden rounded-[1.75rem] border border-border bg-card/80 ${image.rotation}`}>
                    <div className={`relative ${image.aspect}`}>
                      <PortfolioImage
                        basename={image.basename}
                        alt={image.alt}
                        fallbackSrc={PLACEHOLDER_NEON_PHOTOS.projects}
                        className="h-full w-full object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 rounded-full border border-primary/20 bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-primary/70 backdrop-blur">
                        {image.basename}
                      </div>
                    </div>
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
