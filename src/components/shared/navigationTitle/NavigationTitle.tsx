import Link from 'next/link'
import type { ReactNode } from 'react'

export default function NavigationTitle({
  children,
  href,
}: {
  children: ReactNode
  href: string
}) {
  return (
    <header className='flex items-center gap-4 mb-4'>
      <h2 className='text-2xl font-bold'>{children}</h2>
      <Link
        href={href}
        className='bg-surface hover:bg-surface-hover text-foreground border border-surface-border text-sm font-medium py-1 px-3 rounded-md transition-colors shadow-sm'
      >
        Volver
      </Link>
    </header>
  )
}
