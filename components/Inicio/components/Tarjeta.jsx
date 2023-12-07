import styles from '../Inicio.module.css'

export const Tarjeta = ({ datosTarjeta, onClick }) => {
  return (
    <div className={styles.tarjeta} onClick={onClick}>
      <section className={styles.descripcion_tarjeta}>
        <h6>{datosTarjeta?.tipo}</h6>
        <p>{datosTarjeta?.marca}</p>
      </section>
      <span className={styles.icono_chip_seguridad_tarjeta} />
      <section className={styles.numero_tarjeta}>
        {datosTarjeta?.numero}
      </section>
      <section className={styles.tarjeta_detalles}>
        <div>
          <p>Vencimiento</p>
          <span>{datosTarjeta?.fecha_expiracion}</span>
        </div>
        <div>
          <p>CVV</p>
          <span>{datosTarjeta?.cvv}</span>
        </div>
        <span className={styles.tarjeta_banco} />
      </section>
    </div>
  )
}
