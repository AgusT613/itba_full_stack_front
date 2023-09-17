import { Route, Routes } from 'react-router-dom'
import { Inicio } from '../Inicio/Inicio'
import { Cuentas } from '../Cuentas/Cuentas'
import { Transferencias } from '../Transferencias/Transferencias'
import { Pagos } from '../Pagos/Pagos'
import { MenuLateralResponsive } from './components/MenuLateralResponsive'
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
      <MenuLateralResponsive />
      <aside className={styles.menu__lateral}>
        <MenuLateral />
      </aside>
      <footer className={styles.mas__informacion}>
        <Footer />
      </footer>
    </div>
  )
}
