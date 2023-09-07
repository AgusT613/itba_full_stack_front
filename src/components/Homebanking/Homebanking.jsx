import { Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import { UsuarioContexto } from '../../context/usuarioContexto'
import { Inicio } from '../Inicio/Inicio'
import { Cuentas } from '../Cuentas/Cuentas'
import { Transferencias } from '../Transferencias/Transferencias'
import { Pagos } from '../Pagos/Pagos'
import { MenuLateral } from "../MenuLateral/MenuLateral"
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
        </Routes>
      </main>
      {/* ------------------------ */}
      <aside className={styles.menu__lateral}>
        <h2>Menu Lateral</h2>
        < MenuLateral />
        <span
          onClick={() => { setUsuario(false) }}
          style={{ cursor: 'pointer' }}
        >
          Cerrar Sesion
        </span>
      </aside>
      <footer className={styles.mas__informacion}>
        <h2>Pie de Pagina</h2>
      </footer>
    </div>
  )
}
