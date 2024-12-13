import Link from 'next/link'

import styles from '@/components/header/header.module.css'
import { INavItem } from '@/types/navItem'

export default function NavItems({ links }: { links: INavItem[] }) {
  return links.map((link) => (
    <Link key={link.href} href={link.href} className={styles.link}>
      {link.title}
    </Link>
  ))
}
