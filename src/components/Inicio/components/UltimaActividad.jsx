import { TablaHistorial } from '../../Pagos/components/TablaHistorial'
import styles from '../Inicio.module.css'

export const UltimaActividad = () => {
  return (
    <article className={styles.contenedor_ultima_actividad}>
      <h3>Última Actividad</h3>
      <section className={styles.contenedor_historial}>
        <TablaHistorial />
      </section>
    </article>
  )
}
