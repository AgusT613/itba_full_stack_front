'use client'
import styles from './userAction.module.css'

export default function UserAction({
  actionName,
  className,
  href,
}: {
  actionName: string
  className: string
  href: string
}) {
  return (
    <a className={styles.container} href={href}>
      <span className={`${styles.icon} ${className}`} />
      <p className={styles.text}>{actionName}</p>
    </a>
  )
}
