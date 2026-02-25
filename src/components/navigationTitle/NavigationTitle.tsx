import Link from 'next/link'

import styles from './navigationTitle.module.css'

export default function NavigationTitle({ children, href }) {
  return (
    <header className={styles.header}>
      <h2>{children}</h2>
      <Link href={href} className={styles.btnGoBack}>
        Volver
      </Link>
    </header>
  )
}
