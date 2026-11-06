import type { ReactNode } from 'react'

export interface IBankResource {
  title: string
  description: string
  href: string
  icon: ReactNode
}

export default function BankResourceContainer({
  resourceList,
}: {
  resourceList: IBankResource
}) {
  const { title, description, href, icon } = resourceList

  return (
    <div className='relative min-h-[13rem] flex flex-col justify-between bg-white text-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-primary-600 transition-all hover:-translate-y-1 hover:shadow-xl'>
      <div className='flex items-center gap-3'>
        <span className='w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-lg text-primary-600 bg-gray-50 shrink-0'>
          {icon}
        </span>
        <h5 className='text-lg font-bold text-gray-900'>{title}</h5>
      </div>
      <p className='text-sm text-gray-600 text-balance my-3'>{description}</p>
      <a
        href={href}
        className='self-start inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold transition-all hover:scale-105 shadow-sm'
      >
        <span>Conocer Más</span>
        <span className='text-sm font-bold'>+</span>
      </a>
    </div>
  )
}
