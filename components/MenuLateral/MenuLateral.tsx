'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import LOGO_ITBANK from '@/public/itbank-logo.png'

import styles from './MenuLateral.module.css'

export function MenuLateral() {
  const router = useRouter()

  const handleLogOut = () => {
    window.localStorage.removeItem('auth')
    router.push('/')
  }

  return (
    <>
      <Link href='/' className={styles.itbankLogoRedirect}>
        <figure className={styles.menu__icono}>
          <Image
            width={100}
            height={100}
            id='logo'
            src={LOGO_ITBANK}
            alt='Imagen de logo del banco ITBANK, compuesto por el nombre del banco estilizado'
          />
        </figure>
        <span className={styles.goBackHome}>Volver a Home</span>
      </Link>
      <nav className={styles.menu__navegacion}>
        <Link href='/inicio'>Inicio</Link>
        <Link href='/inicio/cuentas'>Cuentas</Link>
        <Link href='/inicio/transferencias'>Transferencias</Link>
        <Link href='/inicio/pagos'>Pagos</Link>
        <Link href='/inicio/conversor'>Conversor</Link>
        <Link href='/inicio/tarjetas'>Tarjetas</Link>
        <Link href='/inicio/facturas'>Facturas</Link>
        <Link href='/inicio/prestamos'>Prestamos</Link>
        <Link href='/inicio/contacto'>Contacto</Link>
      </nav>
      <button
        type='button'
        onClick={handleLogOut}
        className={styles.menu__cerrar__sesion}
      >
        Cerrar Sesion
      </button>
    </>
  )
}
