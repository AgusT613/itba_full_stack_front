import { MenuLateral } from '@/components/MenuLateral/MenuLateral'
import { ProveedorUsuario } from '@/context/usuarioContexto'
import { MenuLateralResponsive } from '@/components/MenuLateral/MenuLateralResponsive'
import { Footer } from '@/components/Footer/Footer'
import styles from '@/app/inicio/layout.module.css'

export const metadata = {
  title: 'Inicio - ITBANK',
  description: 'Bienvenido a ITBANK, tu socio financiero de confianza. Descubre una amplia gama de servicios bancarios, desde acceso a tus cuentas hasta préstamos y asesoría financiera. Nuestra misión es ayudarte a alcanzar tus metas financieras y ofrecerte seguridad y comodidad en cada transacción.'
}

export default function Inicio ({ children }) {
  return (
    <>
      <ProveedorUsuario>
        <div className={styles.contenedor__pagina__principal}>
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

    </>
  )
}
