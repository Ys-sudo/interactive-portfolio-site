"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function PortfolioImage({
  src,
  alt,
  fallbackSrc,
  className = "",
  sizes = "100vw",
}: {
  src: string
  alt: string
  fallbackSrc: string
  className?: string
  sizes?: string
}) {
  const [resolvedSrc, setResolvedSrc] = useState(src)

  useEffect(() => {
    setResolvedSrc(src)
  }, [src])

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      onError={() => {
        setResolvedSrc((current) => (current === fallbackSrc ? current : fallbackSrc))
      }}
    />
  )
}
