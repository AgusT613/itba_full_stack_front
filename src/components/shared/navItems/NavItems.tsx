'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/src/lib/utils'
import type { INavItem } from '@/src/types/navItem'

export default function NavItems({ links }: { links: INavItem[] }) {
  const pathname = usePathname()
  const [activeHash, setActiveHash] = useState<string>('')

  useEffect(() => {
    const hashLinks = links.filter((link) => link.href.startsWith('#'))
    if (hashLinks.length === 0) return

    const sectionIds = hashLinks.map((link) => link.href.slice(1))

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180
      let currentSection = sectionIds[0]

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          if (scrollPosition >= top) {
            currentSection = id
          }
        }
      }

      if (currentSection) {
        setActiveHash(`#${currentSection}`)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveHash(window.location.hash)
      }
    }
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [links])

  return links.map((link) => {
    const isHashLink = link.href.startsWith('#')
    const isActive = isHashLink
      ? activeHash === link.href
      : link.href === pathname ||
        (link.href !== '/' &&
          link.href !== '/inicio' &&
          pathname.startsWith(`${link.href}/`))

    return (
      <Link
        key={link.href}
        href={link.href}
        onClick={() => {
          if (isHashLink) {
            setActiveHash(link.href)
          }
        }}
        className={cn(
          'w-full block transition-all duration-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:text-white hover:bg-primary-600 dark:text-white/75 dark:hover:text-white dark:hover:bg-primary-600',
          isActive &&
            'bg-primary-600 text-white hover:bg-primary-700 hover:text-white dark:bg-primary-600 dark:hover:bg-primary-700 dark:text-white shadow-sm',
        )}
      >
        {link.title}
      </Link>
    )
  })
}
