import type { ReactNode } from 'react'

interface ISectionDivider2Props {
  children: ReactNode
  title: string
  subtitle?: string
}

export default function SectionDivider2({
  children,
  title,
  subtitle,
}: ISectionDivider2Props) {
  return (
    <section className='bg-surface border border-surface-border my-2 p-6 rounded-2xl shadow-sm'>
      <h2 className='text-2xl sm:text-3xl font-semibold text-center sm:text-left text-balance'>
        {title}
      </h2>
      {subtitle && (
        <span className='text-xs opacity-80 block mt-1'>{subtitle}</span>
      )}
      {children}
    </section>
  )
}
