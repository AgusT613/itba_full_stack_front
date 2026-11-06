import type { ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

export default function SectionDivider({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <section
      className={cn(
        'rounded-xl p-2 text-lg outline-2 outline-[#9b92ff] max-[400px]:rounded-none max-[400px]:p-2 max-[400px]:text-base max-[400px]:outline-none',
        className,
      )}
    >
      {children}
    </section>
  )
}
