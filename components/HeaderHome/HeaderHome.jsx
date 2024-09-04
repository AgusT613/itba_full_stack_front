'use client'
import Image from 'next/image'
import Link from 'next/link'
import LOGO_ITBANK from '@/public/itbank-logo.png'
import styles from './HeaderHome.module.css'
import useLocalStorageGI from '@/hooks/useLocalStorageGI'

export default function HeaderHome ({ isAction = false }) {
  const userIsLogged = useLocalStorageGI('auth')

  return (
    <header className={styles.header}>
      <figure className={styles.header__logoContainer}>
        <Image src={LOGO_ITBANK} alt='Logo del banco ITBANK' height={75}/>
      </figure>
      <div className={styles.navContainer}>
        <nav className={styles.navContainer__homebanking}>
          {isAction
            ? <Link href='/'>Volver al Home</Link>
            : (
              <>
                <Link href="#init">Inicio</Link>
                <Link href="#resources">Recursos</Link>
                <Link href="#actions">Herramientas</Link>
                <Link href="#footer">Información</Link>

                <Link href='/register'>Registrarse</Link>
                <Link href='/login'>Iniciar Sesión</Link>
                <Link href='/sucursales'>Sucursales</Link>
                {userIsLogged === 'true' && <Link href='/inicio'>Inicio</Link>}
              </>
              )}
        </nav>
      </div>
    </header>
  )
}
