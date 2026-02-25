import Link from 'next/link'
import Card from '@/src/components/card/Card'
import styles from './page.module.css'
import { getCards } from '@/src/lib/dataFetch'

export default async function Page() {
  const cards = await getCards()

  return (
    <>
      <h2>Tarjetas</h2>
      <section className={styles.container}>
        {cards.map((card) => (
          <Link key={card.id} href={`/inicio/tarjetas/${card.id}`}>
            <Card card={card} />
          </Link>
        ))}
      </section>
    </>
  )
}
