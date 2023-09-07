import { Route, Routes, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UsuarioContexto } from '../../context/usuarioContexto'
import { Inicio } from '../Inicio/Inicio'
import { Cuentas } from '../Cuentas/Cuentas'
import { Transferencias } from '../Transferencias/Transferencias'
import { Pagos } from '../Pagos/Pagos'
import { Conversor } from '../Conversor/Conversor'
import styles from './Homebanking.module.css'

export const Homebanking = () => {
  const { setUsuario } = useContext(UsuarioContexto)

  return (
    <div className={styles.contenedor__pagina__principal}>
      <header className={styles.cabecera__titulo}>
        <h2>Cabecera</h2>
      </header>
      {/* En esta seccion se renderizan las paginas dependiendo del enlace que se pinche en el menu lateral */}
      <main className={styles.contenido__principal}>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/cuentas' element={<Cuentas />} />
          <Route path='/transferencias' element={<Transferencias />} />
          <Route path='/pagos' element={<Pagos />} />
          <Route path='/conversor' element={<Conversor />} />
        </Routes>
      </main>
      {/* ------------------------ */}
      <aside className={styles.menu__lateral}>
        <h2>Menu Lateral</h2>
        <NavLink to='/'>Inicio</NavLink>
        <NavLink to='/conversor'>Conversor</NavLink>
        <span
          onClick={() => { setUsuario(false) }}
          style={{ cursor: 'pointer' }}
        >
          Cerrar Sesion
        </span>
      </aside>
      <footer className={styles.mas__informacion}>
        <p>Estamos comprometidos en hacer que tu experiencia en el mundo financiero sea más simple, transparente y conveniente. Explora nuestro portal de Homebanking y descubre cómo puedes tomar el control de tus finanzas de manera efectiva. ¡Gracias por confiar en ITBANK!</p>
        <p>Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con nosotros.</p>
      </footer>
    </div>
  )
}
