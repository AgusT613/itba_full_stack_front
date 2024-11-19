'use client'

import { useRouter } from 'next/navigation'

import styles from '@/app/inicio/layout.module.css'
import { Footer } from '@/components/Footer/Footer'
import { MenuLateral } from '@/components/MenuLateral/MenuLateral'
import { MenuLateralResponsive } from '@/components/MenuLateral/MenuLateralResponsive'
import useLocalStorageGI from '@/hooks/useLocalStorageGI'

import { Button, H2, Section, Wrapper } from './layout.panda'

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
    <Section>
      <Wrapper>
        <H2>Inicie sesion para acceder a su homebanking</H2>
        <Button onClick={() => router.push('/login')}>Iniciar sesión</Button>
      </Wrapper>
    </Section>
  )
}
