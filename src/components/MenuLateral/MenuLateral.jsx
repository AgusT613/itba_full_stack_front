import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UsuarioContexto } from '../../context/usuarioContexto'
import LOGO_ITBANK from '../../images/itbank-logo.png'
import './MenuLateral.css'

export function MenuLateral () {
  const { setUsuario } = useContext(UsuarioContexto)

  return (
    <>
      <figure className='menu__icono'>
        <img id='logo' src={LOGO_ITBANK} alt='Imagen de logo del banco ITBANK, compuesto por el nombre del banco estilizado' />
      </figure>
      <nav className='menu__navegacion'>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''}
        >
          Inicio
        </NavLink>
        <NavLink
          to='/cuentas'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''}
        >
          Cuentas
        </NavLink>
        <NavLink
          to='/transferencias'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''}
        >
          Transferencias
        </NavLink>
        <NavLink
          to='/pagos'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''}
        >
          Pagos
        </NavLink>
        <NavLink
          to='/conversor'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''}
        >
          Conversor
        </NavLink>
      </nav>
      <span
        onClick={() => { setUsuario(false) }}
        className='menu__cerrar__sesion'
      >
        Cerrar Sesion
      </span>
    </>
  )
}
