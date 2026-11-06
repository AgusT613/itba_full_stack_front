import type { TCard } from '@/src/types/homebanking'
import { toFormatDateString } from '@/utils/toDate'

export default function Card({ card }: { card: TCard }) {
  return (
    <article className='flex min-h-[12em] w-full cursor-pointer flex-col justify-around rounded-2xl bg-black/30 p-3 shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-black/40'>
      <div className='flex items-center justify-between text-base'>
        <h6 className='font-medium text-violet-200'>{card.card_type}</h6>
        <p className='font-semibold text-gray-300'>{card.brand}</p>
      </div>
      <span className="h-8 w-8 bg-[url('/icons8-chip-de-tarjeta-sim-48.png')] bg-contain bg-center bg-no-repeat" />
      <div className='flex gap-2 font-mono text-lg tracking-widest text-white'>
        {card.last_four}
      </div>
      <div className='flex items-center justify-around text-xs max-[400px]:grid max-[400px]:grid-cols-2 max-[400px]:gap-2 max-[300px]:grid-cols-1'>
        <div>
          <p className='text-gray-400'>Vencimiento</p>
          <span className='font-mono font-medium text-white'>
            {toFormatDateString(card.expiration_date)}
          </span>
        </div>
        <div>
          <p className='text-gray-400'>CVV</p>
          <span className='font-mono font-medium text-white'>
            {card.last_four}
          </span>
        </div>
        <span className="h-8 w-8 bg-[url('/icons8-tarjeta-de-crédito-mastercard-96.png')] bg-contain bg-center bg-no-repeat" />
      </div>
    </article>
  )
}
