import { MenuLateral } from '@/components/MenuLateral/MenuLateral'
import { ProveedorUsuario } from '@/context/usuarioContexto'
import { MenuLateralResponsive } from '@/components/MenuLateral/MenuLateralResponsive'
import { Footer } from '@/components/Footer/Footer'
import styles from '@/app/inicio/layout.module.css'

export default function Inicio ({ children }) {
  return (
    <ProveedorUsuario>
      <div className={styles.contenedor__pagina__principal}>
        <header className={styles.cabecera__titulo}>
          <h2>Cabecera</h2>
        </header>
        <main className={styles.contenido__principal}>
          {children}
        </main>
        <MenuLateralResponsive />
        <aside className={styles.menu__lateral}>
          <MenuLateral />
        </aside>
        <footer className={styles.mas__informacion}>
          <Footer />
        </footer>
      </div>
    </ProveedorUsuario>
  )
}
