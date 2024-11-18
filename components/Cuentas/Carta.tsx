import styles from './Cuentas.module.css'

export function Carta({ descripcion, tipoAhorro, saldo }) {
  return (
    <div className={styles.carta}>
      <h3>{descripcion}</h3>
      <div className={styles.detalles}>
        <h4>IBAN: {tipoAhorro}</h4>
        <h2>
          <b>SALDO: ${saldo}</b>
        </h2>
        <button type='button' className={styles.boton}>
          Ver CBU
        </button>
        <button type='button' className={styles.boton}>
          Solicitar baja
        </button>
      </div>
    </div>
  )
}
