import { useState } from 'react'
import { datos } from './data/datosUsuario'
import { PerfilUsuario } from './components/PerfilUsuario'
import { SaldoCuenta } from './components/SaldoCuenta'
import { MisTarjetas } from './components/MisTarjetas'
import { UltimaActividad } from './components/UltimaActividad'
import styles from './Inicio.module.css'

export const Inicio = () => {
  const [datosUsuario, setDatosUsuario] = useState(datos)
  const [saldoVisible, setSaldoVisible] = useState(true)

  const revelarSaldo = () => setSaldoVisible(!saldoVisible)

  return (
    <section className={styles.contenedor_bienvenida}>
      <PerfilUsuario datosUsuario={datosUsuario} />
      <div className={styles.secciones_grid}>
        <SaldoCuenta
          datosUsuario={datosUsuario}
          revelarSaldo={revelarSaldo}
          saldoVisible={saldoVisible}
        />
        <MisTarjetas datosUsuario={datosUsuario} />
        <UltimaActividad />
      </div>
    </section>
  )
}
