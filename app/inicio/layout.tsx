import styles from '@/app/inicio/layout.module.css'
import AsideNav from '@/components/asideNav/AsideNav'
import { homebankingLinks } from '@/utils/headerLinks'

export default function Layout({ children }) {
  return (
    <div className={styles.initWrapper}>
      <AsideNav
        links={homebankingLinks}
        isHomebanking
        bankLogoProps={{ href: '/', title: 'Volver al Home' }}
      />
      <main className={styles.main}>{children}</main>
    </div>
  )
}
