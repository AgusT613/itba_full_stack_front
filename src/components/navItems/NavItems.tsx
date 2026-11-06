'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/src/lib/utils'
import type { INavItem } from '@/src/types/navItem'

export default function NavItems({ links }: { links: INavItem[] }) {
  const pathname = usePathname()

  return links.map((link) => {
    const isActive = link.href === pathname
    return (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          'transition-colors duration-200 rounded-xl px-3 py-2 text-sm text-foreground/80 hover:text-white hover:bg-black/40',
          isActive &&
            'bg-black/40 text-white font-medium ring-2 ring-primary-500/50',
        )}
      >
        {link.title}
      </Link>
    )
  })
}
