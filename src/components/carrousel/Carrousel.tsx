import { ChevronLeft, ChevronRight, Circle, CircleDot } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface ICarrouselItem {
  id: string | number
  [key: string]: unknown
}

export default function Carrousel({
  children,
  itemList,
  handleNext,
  handlePrevious,
  itemIndex,
  setItemIndex,
  href,
}: {
  children: ReactNode
  itemList: ICarrouselItem[]
  handleNext: () => void
  handlePrevious: () => void
  itemIndex: number
  setItemIndex: (index: number) => void
  href: string
}) {
  return (
    <>
      <div className='flex items-center justify-center gap-2 overflow-hidden w-full'>
        <button
          type='button'
          onClick={handlePrevious}
          aria-label='Anterior'
          className='p-2 rounded-full bg-black/20 hover:bg-black/40 text-white cursor-pointer transition-colors shrink-0'
        >
          <ChevronLeft className='w-5 h-5' />
        </button>
        <Link href={href} className='w-full max-w-sm flex justify-center'>
          {children}
        </Link>
        <button
          type='button'
          onClick={handleNext}
          aria-label='Siguiente'
          className='p-2 rounded-full bg-black/20 hover:bg-black/40 text-white cursor-pointer transition-colors shrink-0'
        >
          <ChevronRight className='w-5 h-5' />
        </button>
      </div>

      <div className='flex items-center justify-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-full self-center my-2'>
        {Boolean(itemList.length) &&
          itemList.map((item, index) =>
            index === itemIndex ? (
              <CircleDot
                key={item.id}
                className='w-4 h-4 text-primary-400 cursor-pointer'
              />
            ) : (
              <button
                type='button'
                key={item.id}
                onClick={() => setItemIndex(index)}
                aria-label={`Ir a tarjeta ${index + 1}`}
                className='text-white/60 hover:text-white cursor-pointer flex items-center justify-center p-0.5'
              >
                <Circle className='w-3.5 h-3.5' />
              </button>
            ),
          )}
      </div>
    </>
  )
}
