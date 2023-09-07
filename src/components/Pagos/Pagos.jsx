import { TablaHistorial } from './components/TablaHistorial'
import styles from './Pagos.module.css'

export const Pagos = () => {
  return (
    <>
      <section className={styles.tabla}>
        <h2> Historial de pagos</h2>
        <TablaHistorial />
        <button className={styles.verMasHistorial}>Ver más</button>
      </section>
    </>
  )
}
