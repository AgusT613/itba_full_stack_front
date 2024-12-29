import Link from 'next/link'

import Card from '@/components/card/Card'
import styles from '@/styles/Tarjetas.module.css'
import { USER } from '@/utils/userDataModel'

export default function Page() {
  return (
    <section className={styles.contenedor_tarjetas}>
      {USER.cards.map((tarjeta) => (
        <Link key={tarjeta.id} href={`/inicio/tarjetas/${tarjeta.id}`}>
          <Card datosTarjeta={tarjeta} />
        </Link>
      ))}
    </section>
  )
}
