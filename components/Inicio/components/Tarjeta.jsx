import styles from '../Inicio.module.css'

export const Tarjeta = ({ datosTarjeta, onClick }) => {
  const { tipo, marca, numero, fecha_expiracion: fechaExpiracion, cvv } = datosTarjeta

  return (
    <div className={styles.tarjeta} onClick={onClick}>
      <section className={styles.descripcion_tarjeta}>
        <h6>{tipo}</h6>
        <p>{marca}</p>
      </section>
      <span className={styles.icono_chip_seguridad_tarjeta} />
      <section className={styles.numero_tarjeta}>
        {numero}
      </section>
      <section className={styles.tarjeta_detalles}>
        <div>
          <p>Vencimiento</p>
          <span>{fechaExpiracion}</span>
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
