import type { ReactNode } from 'react'
import AsideNav from '@/src/components/asideNav/AsideNav'
import { homebankingLinks } from '@/utils/headerLinks'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen grid grid-cols-1 md:grid-cols-[10rem_1fr]'>
      <AsideNav
        links={homebankingLinks}
        isHomebanking
        bankLogoProps={{ href: '/', title: 'Volver al Home' }}
      />
      <main className='min-h-screen bg-slate-50/50 dark:bg-black/20 p-4 sm:p-6 md:p-8 flex flex-col gap-6 overflow-y-auto'>
        {children}
      </main>
    </div>
  )
}
