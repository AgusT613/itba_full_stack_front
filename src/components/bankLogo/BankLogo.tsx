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
    <Link href={href} className='my-4 block group'>
      <figure className='flex flex-col items-center justify-center gap-1'>
        <Image
          src={LOGO_ITBANK}
          alt='Logo del banco ITBANK'
          className='w-full h-auto max-w-[200px] object-contain transition-transform group-hover:scale-105'
          priority
        />
        {children && (
          <span className='opacity-80 text-xs hover:opacity-100 transition-opacity'>
            {children}
          </span>
        )}
      </figure>
    </Link>
  )
}
