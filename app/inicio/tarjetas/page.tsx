import InteractiveBankCard from '@/src/components/card/InteractiveBankCard'
import { getCards } from '@/src/lib/dataFetch'

export default async function Page() {
  const cards = await getCards()

  if (cards.length === 0) {
    return (
      <p className='text-sm text-foreground/70 py-6'>
        No hay tarjetas disponibles
      </p>
    )
  }

  return (
    <div className='flex flex-col gap-6'>
      <h2 className='text-2xl font-bold'>Tarjetas</h2>
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'>
        {cards.map((card) => (
          <InteractiveBankCard card={card} key={card.id} />
        ))}
      </section>
    </div>
  )
}
