import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'curlette',
  description: 'i teach developers the art of vibe coding',
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
