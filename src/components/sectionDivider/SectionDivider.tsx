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
        'bg-surface rounded-2xl border border-surface-border p-6 shadow-md flex flex-col gap-4 max-[400px]:p-3 max-[400px]:rounded-xl',
        className,
      )}
    >
      {children}
    </section>
  )
}
