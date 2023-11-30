'use client'
import Image from 'next/image'
import Link from 'next/link'
import LOGO_ITBANK from '@/public/itbank-logo.png'
import styles from './HeaderHome.module.css'

export default function HeaderHome ({ isAction = false }) {
  const usuarioLogueado = window.localStorage.getItem('auth')

  return (
    <header className={styles.cabecera}>
      <figure className={styles.contenedor_logo}>
        <Image className={styles.logo_itbank} src={LOGO_ITBANK} alt='logo de ITBANK' />
      </figure>
      <h1 className={styles.titulo_homebanking}>Homebanking</h1>
      <nav className={styles.navegacion}>
        {isAction
          ? <Link href='/'>Volver al Home</Link>
          : (
            <>
              <Link href='/register'>Registrarse</Link>
              <Link href='/login'>Iniciar Sesión</Link>
              <Link href='/sucursales'>Sucursales</Link>
              {usuarioLogueado === 'true' && <Link href='/inicio'>Inicio</Link>}
            </>
            )}
      </nav>
    </header>
  )
}