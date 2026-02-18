import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jewel Chain - Production Infrastructure for Jewellery Brands',
  description: 'Protect your margins. Quote with structure. Scale without chaos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
