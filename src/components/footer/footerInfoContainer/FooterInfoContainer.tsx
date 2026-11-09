import type { ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

export default function FooterInfoContainer({
  title,
  description,
  children,
  className,
}: {
  title: string
  description?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex flex-col', className)}>
      <h5 className='py-2 text-base font-semibold border-b-2 border-surface-border mb-2 text-foreground'>
        {title}
      </h5>
      {description && (
        <p className='text-xs text-foreground/75 mb-3'>{description}</p>
      )}
      {children}
    </div>
  )
}
