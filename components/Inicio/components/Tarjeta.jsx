import styles from '../Inicio.module.css'

export const Tarjeta = ({ datosTarjeta }) => {
  const { tipo, numero, fechaExpedicion, fechaVencimiento, cvv, banco } = datosTarjeta
  return (
    <div className={styles.tarjeta}>
      <section className={styles.descripcion_tarjeta}>
        <h6>{tipo}</h6>
        <p>{banco}</p>
      </section>
      <span className={styles.icono_chip_seguridad_tarjeta} />
      <section className={styles.numero_tarjeta}>
        {numero.map(digitos => { return (<li key={digitos}>{digitos}</li>) })}
      </section>
      <section className={styles.tarjeta_detalles}>
        <div>
          <p>Expedición</p>
          <span>{fechaExpedicion}</span>
        </div>
        <div>
          <p>Vencimiento</p>
          <span>{fechaVencimiento}</span>
        </div>
        <div>
          <p>CVV</p>
          <span>{cvv}</span>
        </div>
        <span className={styles.tarjeta_banco} />
      </section>
    </div>
  )
}
