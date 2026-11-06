'use client'

import { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

export default function CurrentMoney({ balance }: { balance: number }) {
  const [isVisibled, setVisibled] = useState<boolean>(false)
  const reveal = () => setVisibled((prevState) => !prevState)

  return (
    <article className='flex items-center gap-3'>
      <span className='text-2xl font-bold tracking-tight'>
        $ {isVisibled ? balance.toLocaleString() : '••••••'}
      </span>
      <button
        type='button'
        onClick={reveal}
        aria-label={isVisibled ? 'Ocultar saldo' : 'Mostrar saldo'}
        className='p-1.5 rounded-full text-foreground/70 hover:text-foreground hover:bg-white/10 transition-colors cursor-pointer text-xl'
      >
        {isVisibled ? <FiEye /> : <FiEyeOff />}
      </button>
    </article>
  )
}
