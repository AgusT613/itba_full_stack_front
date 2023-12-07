import { PerfilUsuario } from './components/PerfilUsuario'
import { SaldoCuenta } from './components/SaldoCuenta'
import { MisTarjetas } from './components/MisTarjetas'
import { UltimaActividad } from './components/UltimaActividad'
import styles from '@/components/Inicio/Inicio.module.css'

export const Inicio = async () => {
  return (
    <section className={styles.contenedor_bienvenida}>
      <PerfilUsuario />
      <SaldoCuenta />
      <MisTarjetas />
      <UltimaActividad />
    </section>
  )
}
