import Link from 'next/link'
import { cn } from '@/src/lib/utils'

export default function UserAction({
  actionName,
  className,
  href,
}: {
  actionName: string
  className?: string
  href: string
}) {
  return (
    <Link
      href={href}
      className='flex flex-col items-center justify-center w-20 h-20 rounded-full bg-black/10 hover:bg-black/30 active:bg-black/40 outline-2 outline-black/20 hover:outline-primary-400 transition-all cursor-pointer p-2 text-center group'
    >
      <span
        className={cn(
          'inline-flex w-6 h-6 rounded-full bg-no-repeat bg-center bg-contain mb-1 transition-transform group-hover:scale-110',
          className,
        )}
      />
      <p className='text-xs font-medium text-surface-foreground line-clamp-1'>
        {actionName}
      </p>
    </Link>
  )
}
