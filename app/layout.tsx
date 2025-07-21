import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Curlette Blog',
  description: 'A SaaS / NextJS / AI powered blog solution',
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
