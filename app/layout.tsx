import React from "react"
import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Georgios Lazaridis | Full-Stack Web Developer',
  description: 'Dynamic full-stack web developer skilled at delivering scalable, high-performance applications. Proficient in React.js, Next.js, Node.js, and modern web technologies.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
