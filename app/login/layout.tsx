import type { ReactNode } from 'react'
import BankLogo from '@/src/components/bankLogo/BankLogo'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className='min-h-screen bg-black/20 flex flex-col items-center justify-center p-4'>
      <div className='w-full max-w-md flex flex-col items-center justify-center'>
        <div className='w-56 mb-4'>
          <BankLogo href='/'>Volver al Home</BankLogo>
        </div>
        <section className='w-full bg-surface p-8 rounded-2xl border border-surface-border shadow-xl flex flex-col gap-6 items-center'>
          {children}
        </section>
      </div>
    </main>
  )
}
