import { Route, Routes } from 'react-router-dom'
import { Inicio } from '../Inicio/Inicio'
import { Cuentas } from '../Cuentas/Cuentas'
import { Transferencias } from '../Transferencias/Transferencias'
import { Pagos } from '../Pagos/Pagos'
import { MenuLateral } from '../MenuLateral/MenuLateral'
import { Conversor } from '../Conversor/Conversor'
import { Footer } from '../Footer/Footer'
import styles from './Homebanking.module.css'

export const Homebanking = () => {
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
        <MenuLateral />
      </aside>
      <Footer />
    </div>
  )
}
