import { ReactNode } from 'react'

import styles from './sectionDivider.module.css'

export default function SectionDivider({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const classList = `${styles.outline} ${className}`

  return <section className={classList}>{children}</section>
}
