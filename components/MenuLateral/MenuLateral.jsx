'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import LOGO_ITBANK from '@/public/itbank-logo.png'
import { UsuarioContexto } from '@/context/usuarioContexto'
import './MenuLateral.css'

export function MenuLateral () {
  const { setUsuario } = useContext(UsuarioContexto)
  const router = useRouter()

  return (
    <>
      <figure className='menu__icono'>
        <Image
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
          id='logo'
          src={LOGO_ITBANK}
          alt='Imagen de logo del banco ITBANK, compuesto por el nombre del banco estilizado'
        />
      </figure>
      <nav className='menu__navegacion'>
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
      <span
        onClick={() => {
          setUsuario(false)
          router.push('/')
        }}
        className='menu__cerrar__sesion'
      >
        Cerrar Sesion
      </span>
    </>
  )
}
