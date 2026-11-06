import type { Metadata } from 'next'
import type React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'ITBANK - Homebanking',
  description: 'Plataforma digital de homebanking ITBANK',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  )
}
