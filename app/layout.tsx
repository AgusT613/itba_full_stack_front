import type { Metadata } from 'next'
import type React from 'react'
import { Toaster } from 'sonner'
import { ThemeProvider } from '@/src/components/theme/ThemeProvider'
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
    <html lang='es' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position='top-right' richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
