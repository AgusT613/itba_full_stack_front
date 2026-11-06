'use client'

import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'

export default function ToggleForm({
  children,
  to,
}: {
  children: ReactNode
  to: string
}) {
  const router = useRouter()

  const toggleFormulario = () => {
    router.push(to)
  }

  return (
    <button
      type='button'
      onClick={toggleFormulario}
      className='bg-transparent text-white/90 hover:text-white cursor-pointer py-3 px-6 rounded-full hover:bg-black/30 transition-all text-sm font-medium text-center'
    >
      {children}
    </button>
  )
}
