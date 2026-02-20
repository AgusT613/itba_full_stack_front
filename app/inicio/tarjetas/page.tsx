import Link from 'next/link'

import Card from '@/src/components/card/Card'
import { USER } from '@/utils/userDataModel'

import styles from './page.module.css'

export default function Page() {
  return (
    <>
      <h2>Tarjetas</h2>
      <section className={styles.container}>
        {USER.cards.map((card) => (
          <Link key={card.id} href={`/inicio/tarjetas/${card.id}`}>
            <Card card={card} />
          </Link>
        ))}
      </section>
    </>
  )
}
