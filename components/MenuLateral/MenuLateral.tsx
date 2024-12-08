'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import styles from './MenuLateral.module.css'
import BankLogo from '../bankLogo/BankLogo'

export function MenuLateral() {
  const router = useRouter()

  const handleLogOut = () => {
    window.localStorage.removeItem('auth')
    router.push('/')
  }

  return (
    <>
      <BankLogo href='/'>Volver al Home</BankLogo>
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
