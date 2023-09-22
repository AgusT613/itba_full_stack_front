import styles from './Cuentas.module.css'

const Carta = ({ descripcion, tipoAhorro, saldo }) => {
  return (
    <div className={styles.carta}>
      <h3>{descripcion}</h3>
      <div className={styles.detalles}>
        <h4>{tipoAhorro}</h4>
        <h2>
          <b>{saldo}</b>
        </h2>
        <button className={styles.boton}> Ver resumen Cta.</button>
        <button className={styles.boton}> Ver CBU</button>
        <button className={styles.boton}> Solicitar baja</button>
      </div>
    </div>
  )
}

export const Cuentas = () => {
  return (
    <section className={styles.contenedorCartas}>
      <Carta
        descripcion='Cuenta: 251688 en pesos'
        saldo='Saldo: $48890.58'
        tipoAhorro='CA-C. Ahorro comun PFis'
      />
      <Carta
        descripcion='Cuenta: 251688 en pesos'
        saldo='Saldo: $208990.58'
        tipoAhorro='CA-C. Ahorro comun PFis'
      />
    </section>
  )
}
