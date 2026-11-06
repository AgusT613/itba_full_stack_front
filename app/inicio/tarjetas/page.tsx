import Link from 'next/link'
import Card from '@/src/components/card/Card'
import { getCards } from '@/src/lib/dataFetch'

export default async function Page() {
  const cards = await getCards()

  return (
    <div className='flex flex-col gap-6'>
      <h2 className='text-2xl font-bold'>Tarjetas</h2>
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'>
        {cards.length ? (
          cards.map((card) => (
            <Link
              key={card.id}
              href={`/inicio/tarjetas/${card.id}`}
              className='hover:scale-[1.02] transition-transform'
            >
              <Card card={card} />
            </Link>
          ))
        ) : (
          <p className='text-sm text-foreground/70 py-6'>
            No hay tarjetas disponibles
          </p>
        )}
      </section>
    </div>
  )
}
