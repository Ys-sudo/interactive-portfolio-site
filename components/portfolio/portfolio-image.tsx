"use client"

import { useMemo, useState } from "react"

import { PORTFOLIO_LOCAL_IMAGE_DIR } from "@/lib/portfolio"

const CANDIDATE_EXTENSIONS = ["jpg", "jpeg", "png", "webp", "avif"] as const

export function PortfolioImage({
  basename,
  alt,
  fallbackSrc,
  className = "",
}: {
  basename: string
  alt: string
  fallbackSrc: string
  className?: string
}) {
  const sources = useMemo(
    () => [
      ...CANDIDATE_EXTENSIONS.map((extension) => `${PORTFOLIO_LOCAL_IMAGE_DIR}/${basename}.${extension}`),
      fallbackSrc,
    ],
    [basename, fallbackSrc],
  )

  const [srcIndex, setSrcIndex] = useState(0)

  return (
    <img
      src={sources[srcIndex]}
      alt={alt}
      className={className}
      onError={() => {
        setSrcIndex((current) => (current < sources.length - 1 ? current + 1 : current))
      }}
    />
  )
}
