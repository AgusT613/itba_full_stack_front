import { Inicio } from '../Inicio/Inicio'
import styles from './Homebanking.module.css'

export const Homebanking = () => {
  return (
    <>
      <header>
        <h2>Cabecera</h2>
      </header>
      {/* En esta seccion, más adelante, se cargará cada contenido dinamicamente con React Router */}
      <main className={styles.contenidoPrincipal}>
        <h2>Contenido Principal</h2>
        <Inicio />
      </main>
      {/* ------------------------ */}
      <aside>
        <h2>Menu Lateral</h2>
      </aside>
      <footer>
        <h2>Pie de Pagina</h2>
      </footer>
    </>
  )
}
