import styles from '@/app/inicio/layout.module.css'
import { MenuLateral } from '@/components/MenuLateral/MenuLateral'
import { MenuLateralResponsive } from '@/components/MenuLateral/MenuLateralResponsive'

export default function Layout({ children }) {
  return (
    <div className={styles.contenedor__pagina__principal}>
      <main className={styles.contenido__principal}>{children}</main>
      <MenuLateralResponsive />
      <aside className={styles.menu__lateral}>
        <MenuLateral />
      </aside>
    </div>
  )
}
