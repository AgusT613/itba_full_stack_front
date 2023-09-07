import { ProveedorDatosUsuario } from '../../context/datosUsuarioContexto'
import { PerfilUsuario } from './components/PerfilUsuario'
import { SaldoCuenta } from './components/SaldoCuenta'
import { MisTarjetas } from './components/MisTarjetas'
import { UltimaActividad } from './components/UltimaActividad'
import styles from './Inicio.module.css'

export const Inicio = () => {
  return (
    <section className={styles.contenedor_bienvenida}>
      <ProveedorDatosUsuario>
        <PerfilUsuario />
        <div className={styles.secciones_grid}>
          <SaldoCuenta />
          <MisTarjetas />
          <UltimaActividad />
        </div>
      </ProveedorDatosUsuario>
    </section>
  )
}