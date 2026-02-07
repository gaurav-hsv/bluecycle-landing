import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BlueCycle - Fast-Track Your Path to Secure Microsoft 365 Copilot',
  description: 'Deploy Copilot in weeks—not months with audit-ready security and governance that scales with confidence.',
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
