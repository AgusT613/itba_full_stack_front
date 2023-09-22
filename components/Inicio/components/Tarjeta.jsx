import styles from '../Inicio.module.css'

export const Tarjeta = ({ datosTarjeta }) => {
  const { type, issuer, cardNumber, expirationDate, cvv } = datosTarjeta
  return (
    <div className={styles.tarjeta}>
      <section className={styles.descripcion_tarjeta}>
        <h6>{type}</h6>
        <p>{issuer}</p>
      </section>
      <span className={styles.icono_chip_seguridad_tarjeta} />
      <section className={styles.numero_tarjeta}>
        {cardNumber}
      </section>
      <section className={styles.tarjeta_detalles}>
        <div>
          <p>Vencimiento</p>
          <span>{expirationDate}</span>
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
