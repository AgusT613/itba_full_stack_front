'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import LOGO_ITBANK from '@/public/itbank-logo.png'
import './MenuLateral.css'

export function MenuLateral() {
  const router = useRouter()

  return (
    <>
      <Link href='/' className='itbankLogoRedirect'>
        <figure className='menu__icono'>
          <Image
            width={100}
            height={100}
            id='logo'
            src={LOGO_ITBANK}
            alt='Imagen de logo del banco ITBANK, compuesto por el nombre del banco estilizado'
          />
        </figure>
        <span className='goBackHome'>Volver a Home</span>
      </Link>
      <nav className='menu__navegacion'>
        <Link href='/inicio'>Inicio</Link>
        <Link href='/inicio/cuentas'>Cuentas</Link>
        <Link href='/inicio/transferencias'>Transferencias</Link>
        <Link href='/inicio/pagos'>Pagos</Link>
        <Link href='/inicio/conversor'>Conversor</Link>
        <Link href='/inicio/tarjetas'>Tarjetas</Link>
        <Link href='/inicio/facturas'>Facturas</Link>
        <Link href='/inicio/prestamos'>Prestamos</Link>
        <Link href='/inicio/sucursales'>Sucursales</Link>
        <Link href='/inicio/contacto'>Contacto</Link>
      </nav>
      <span
        onClick={() => {
          window.localStorage.removeItem('auth')
          router.push('/')
        }}
        className='menu__cerrar__sesion'
      >
        Cerrar Sesion
      </span>
    </>
  )
}
