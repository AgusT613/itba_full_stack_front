'use client'
import styles from './Cuentas.module.css'
import { datos } from '@/context/datosUsuario'

const Carta = ({ descripcion, tipoAhorro, saldo }) => {
  return (
    <div className={styles.carta}>
      <h3>{descripcion}</h3>
      <div className={styles.detalles}>
        <h4>IBAN: {tipoAhorro}</h4>
        <h2>
          <b>SALDO: ${saldo}</b>
        </h2>
        <button className={styles.boton}> Ver CBU</button>
        <button className={styles.boton}> Solicitar baja</button>
      </div>
    </div>
  )
}

export const Cuentas = () => {
  return (
    <section className={styles.contenedorCartas}>
      {datos.cuentas.map(cuenta => (
        <div key={cuenta.id}>
          <Carta
            descripcion={cuenta.tipo_cuenta}
            saldo={cuenta.balance}
            tipoAhorro={cuenta.iban}
          />
        </div>
      ))}
    </section>
  )
}
