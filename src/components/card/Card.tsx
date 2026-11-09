import { Cpu, CreditCard } from 'lucide-react'
import type { TCard } from '@/src/types/homebanking'
import { toFormatDateString } from '@/utils/toDate'

export default function Card({ card }: { card: TCard }) {
  return (
    <article className='flex min-h-[12em] w-full cursor-pointer flex-col justify-around rounded-2xl bg-surface-card p-4 shadow-md backdrop-blur-sm transition-all duration-200 hover:border-primary-500/40 border border-surface-border text-foreground'>
      <div className='flex items-center justify-between text-base'>
        <h6 className='font-semibold text-primary-600 dark:text-violet-200 uppercase tracking-wider text-xs'>
          {card.card_type}
        </h6>
        <p className='font-semibold text-foreground/70 uppercase tracking-wider text-xs'>
          {card.brand}
        </p>
      </div>
      <span className='flex items-center justify-center h-7 w-9 rounded bg-amber-400/20 border border-amber-300/40 text-amber-500 dark:text-amber-300 my-1'>
        <Cpu className='w-4 h-4' />
      </span>
      <div className='flex gap-2 font-mono text-lg tracking-widest text-foreground my-1'>
        •••• •••• •••• {card.last_four}
      </div>
      <div className='flex items-center justify-between text-xs pt-2 border-t border-surface-border'>
        <div>
          <p className='text-foreground/60'>Vencimiento</p>
          <span className='font-mono font-medium text-foreground'>
            {toFormatDateString(card.expiration_date)}
          </span>
        </div>
        <div>
          <p className='text-foreground/60'>CVV</p>
          <span className='font-mono font-medium text-foreground'>
            {card.last_four}
          </span>
        </div>
        <CreditCard className='w-7 h-7 text-foreground/70' />
      </div>
    </article>
  )
}
