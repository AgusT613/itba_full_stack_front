'use client'

import { useRouter } from 'next/navigation'

import styles from '@/app/inicio/layout.module.css'
import { MenuLateral } from '@/components/MenuLateral/MenuLateral'
import { MenuLateralResponsive } from '@/components/MenuLateral/MenuLateralResponsive'
import useLocalStorageGI from '@/hooks/useLocalStorageGI'

export default function Inicio({ children }) {
  const usuarioLogueado: string = useLocalStorageGI('auth')
  const router = useRouter()

  return usuarioLogueado ? (
    <div className={styles.contenedor__pagina__principal}>
      <main className={styles.contenido__principal}>{children}</main>
      <MenuLateralResponsive />
      <aside className={styles.menu__lateral}>
        <MenuLateral />
      </aside>
    </div>
  ) : (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Inicie sesion para acceder a su homebanking
        </h2>
        <button
          className={styles.btn}
          onClick={() => router.push('/login')}
          type='button'
        >
          Iniciar sesión
        </button>
      </div>
    </section>
  )
}
