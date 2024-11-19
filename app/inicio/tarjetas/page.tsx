import Link from 'next/link'

import { Tarjeta } from '@/components/Inicio/components/Tarjeta'
import styles from '@/styles/Tarjetas.module.css'
import { USER } from '@/utils/userDataModel'

export default function Page() {
  return (
    <section className={styles.contenedor_tarjetas}>
      {USER.cards.map((tarjeta) => (
        <Link key={tarjeta.id} href={`/inicio/tarjetas/${tarjeta.id}`}>
          <Tarjeta datosTarjeta={tarjeta} />
        </Link>
      ))}
    </section>
  )
}
