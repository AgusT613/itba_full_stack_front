import { Cpu, CreditCard } from 'lucide-react'
import type { TCard } from '@/src/types/homebanking'
import { toFormatDateString } from '@/utils/toDate'

export default function Card({ card }: { card: TCard }) {
  return (
    <article className='flex min-h-[12em] w-full cursor-pointer flex-col justify-around rounded-2xl bg-black/30 p-4 shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-black/40 border border-white/10'>
      <div className='flex items-center justify-between text-base'>
        <h6 className='font-medium text-violet-200 uppercase tracking-wider text-xs'>
          {card.card_type}
        </h6>
        <p className='font-semibold text-gray-300 uppercase tracking-wider text-xs'>
          {card.brand}
        </p>
      </div>
      <span className='flex items-center justify-center h-7 w-9 rounded bg-amber-400/20 border border-amber-300/40 text-amber-300 my-1'>
        <Cpu className='w-4 h-4' />
      </span>
      <div className='flex gap-2 font-mono text-lg tracking-widest text-white my-1'>
        •••• •••• •••• {card.last_four}
      </div>
      <div className='flex items-center justify-between text-xs pt-2 border-t border-white/10'>
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
        <CreditCard className='w-7 h-7 text-white/70' />
      </div>
    </article>
  )
}
