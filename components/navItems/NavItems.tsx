'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { INavItem } from '@/types/navItem'

import styles from './navItems.module.css'

export default function NavItems({ links }: { links: INavItem[] }) {
  const pathname = usePathname()

  return links.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={
        link.href === pathname
          ? `${styles.currentLink} ${styles.link}`
          : styles.link
      }
    >
      {link.title}
    </Link>
  ))
}
