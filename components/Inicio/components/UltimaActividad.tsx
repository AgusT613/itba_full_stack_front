import { TablaHistorial } from '@/components/Pagos/TablaHistorial'

import styles from '../Inicio.module.css'

export function UltimaActividad() {
  return (
    <article className={styles.contenedor_ultima_actividad}>
      <h3>Última Actividad</h3>
      <section className={styles.contenedor_historial}>
        <TablaHistorial />
      </section>
    </article>
  )
}
