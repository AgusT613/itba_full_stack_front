import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

export default function UserAction({
  actionName,
  icon,
  className,
  href,
}: {
  actionName: string
  icon?: ReactNode
  className?: string
  href: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'flex flex-col items-center justify-center w-20 h-20 rounded-full bg-surface hover:bg-surface-hover active:scale-95 border border-surface-border hover:border-primary-500 transition-all cursor-pointer p-2 text-center group shadow-sm',
        className,
      )}
    >
      <span className='inline-flex items-center justify-center w-6 h-6 mb-1 text-primary-600 dark:text-primary-400 transition-transform group-hover:scale-110'>
        {icon}
      </span>
      <p className='text-xs font-medium text-foreground line-clamp-1'>
        {actionName}
      </p>
    </Link>
  )
}
