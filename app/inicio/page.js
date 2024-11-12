import { MisTarjetas } from '@/components/Inicio/components/MisTarjetas'
import { PerfilUsuario } from '@/components/Inicio/components/PerfilUsuario'
import { SaldoCuenta } from '@/components/Inicio/components/SaldoCuenta'
import { UltimaActividad } from '@/components/Inicio/components/UltimaActividad'
import styles from '@/components/Inicio/Inicio.module.css'

export default async function Page () {
  return (
    <section className={styles.contenedor_bienvenida}>
      <PerfilUsuario />
      <SaldoCuenta />
      <MisTarjetas />
      <UltimaActividad />
    </section>
  )
}
