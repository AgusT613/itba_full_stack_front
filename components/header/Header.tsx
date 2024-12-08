import Link from 'next/link'

import styles from './header.module.css'
import BankLogo from '../bankLogo/BankLogo'

export default function Header({ links }) {
  return (
    <header className={styles.header}>
      <BankLogo href='#init'>Home</BankLogo>
      <nav className={styles.nav}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  )
}
