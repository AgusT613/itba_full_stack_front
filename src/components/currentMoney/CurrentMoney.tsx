'use client'

import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import AnimatedBalance from './AnimatedBalance'

export default function CurrentMoney({ balance }: { balance: number }) {
  const [isVisibled, setVisibled] = useState<boolean>(false)
  const reveal = () => setVisibled((prevState) => !prevState)

  return (
    <article className='flex items-center gap-3'>
      <AnimatedBalance balance={balance} isVisible={isVisibled} />
      <button
        type='button'
        onClick={reveal}
        aria-label={isVisibled ? 'Ocultar saldo' : 'Mostrar saldo'}
        className='p-1.5 rounded-full text-foreground/70 hover:text-foreground hover:bg-surface-hover active:scale-90 transition-all cursor-pointer text-xl'
      >
        {isVisibled ? (
          <Eye className='w-5 h-5' />
        ) : (
          <EyeOff className='w-5 h-5' />
        )}
      </button>
    </article>
  )
}
