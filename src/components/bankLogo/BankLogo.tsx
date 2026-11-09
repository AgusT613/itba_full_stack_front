import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import LOGO_ITBANK from '@/public/itbank-logo.png'

export default function BankLogo({
  children,
  href,
}: {
  children?: ReactNode
  href: string
}) {
  return (
    <Link href={href} className='my-3 block w-full px-1 group'>
      <figure className='w-full flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl bg-slate-900/95 dark:bg-white/10 border border-slate-800 dark:border-white/15 shadow-md transition-all group-hover:scale-[1.02] group-hover:shadow-lg'>
        <Image
          src={LOGO_ITBANK}
          alt='Logo del banco ITBANK'
          className='w-full h-auto max-w-[170px] object-contain'
          priority
        />
        {children && (
          <span className='text-xs text-slate-300 dark:text-white/80 group-hover:text-white transition-colors font-medium'>
            {children}
          </span>
        )}
      </figure>
    </Link>
  )
}
