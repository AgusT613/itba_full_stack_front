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
          'transition-colors duration-200 rounded-xl px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-black/10 dark:hover:bg-white/10',
          isActive &&
            'bg-primary-600/15 dark:bg-white/10 text-primary-600 dark:text-white font-medium ring-1 ring-primary-500/40',
        )}
      >
        {link.title}
      </Link>
    )
  })
}
