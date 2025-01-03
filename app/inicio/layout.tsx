import styles from '@/app/inicio/layout.module.css'
import AsideNav from '@/components/asideNav/AsideNav'

export default function Layout({ children }) {
  return (
    <div className={styles.initWrapper}>
      <main className={styles.main}>{children}</main>
      <AsideNav />
    </div>
  )
}
