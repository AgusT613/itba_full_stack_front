'use client'

import { MenuLateral } from '@/components/MenuLateral/MenuLateral'
import { MenuLateralResponsive } from '@/components/MenuLateral/MenuLateralResponsive'
import { Footer } from '@/components/Footer/Footer'
import styles from '@/app/inicio/layout.module.css'
import { useRouter } from 'next/navigation'
import useLocalStorageGI from '@/hooks/useLocalStorageGI'

export default function Inicio({ children }) {
  const usuarioLogueado: string = useLocalStorageGI('auth')
  const router = useRouter()

  return usuarioLogueado === 'true' ? (
    <div className={styles.contenedor__pagina__principal}>
      <main className={styles.contenido__principal}>{children}</main>
      <MenuLateralResponsive />
      <aside className={styles.menu__lateral}>
        <MenuLateral />
      </aside>
      <footer className={styles.mas__informacion}>
        <Footer />
      </footer>
    </div>
  ) : (
    <section className='h-screen flex items-center justify-center'>
      <div className='flex items-center flex-col bg-[rgba(0,0,0,.5)] p-4 rounded-lg h-40 justify-around'>
        <h2 className='text-xl'>Inicie sesion para acceder a su homebanking</h2>
        <button
          type='button'
          className='text-lg cursor-pointer bg-violet-300 text-black p-3 rounded-md hover:bg-violet-100'
          onClick={() => router.push('/login')}
        >
          Iniciar sesión
        </button>
      </div>
    </section>
  )
}
