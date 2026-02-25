import { ReactNode } from 'react'

import styles from './sectionDivider2.module.css'

interface ISectionDivider2Props {
  children: ReactNode
  title: string
  subtitle?: string
}

export default function SectionDivider2({
  children,
  title,
  subtitle,
}: ISectionDivider2Props) {
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>{title}</h2>
      <span className={styles.span}>{subtitle}</span>
      {children}
    </section>
  )
}
