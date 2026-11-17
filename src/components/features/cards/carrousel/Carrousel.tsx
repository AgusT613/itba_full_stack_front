import { ChevronLeft, ChevronRight, Circle, CircleDot } from 'lucide-react'
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
  href: _href,
}: {
  children: ReactNode
  itemList: ICarrouselItem[]
  handleNext: () => void
  handlePrevious: () => void
  itemIndex: number
  setItemIndex: (index: number) => void
  href?: string
}) {
  return (
    <>
      <div className='flex items-center justify-center gap-2 overflow-hidden w-full'>
        <button
          type='button'
          onClick={handlePrevious}
          aria-label='Anterior'
          className='p-2 rounded-full bg-surface hover:bg-surface-hover text-foreground border border-surface-border shadow-sm cursor-pointer transition-colors shrink-0'
        >
          <ChevronLeft className='w-5 h-5' />
        </button>
        {/* ----------- Card -----------*/}
        {children}
        {/* ----------------------------*/}
        <button
          type='button'
          onClick={handleNext}
          aria-label='Siguiente'
          className='p-2 rounded-full bg-surface hover:bg-surface-hover text-foreground border border-surface-border shadow-sm cursor-pointer transition-colors shrink-0'
        >
          <ChevronRight className='w-5 h-5' />
        </button>
      </div>

      <div className='flex items-center justify-center gap-1.5 bg-surface border border-surface-border px-3 py-1.5 rounded-full self-center my-2 shadow-sm'>
        {Boolean(itemList.length) &&
          itemList.map((item, index) =>
            index === itemIndex ? (
              <CircleDot
                key={item.id}
                className='w-4 h-4 text-primary-600 dark:text-primary-400 cursor-pointer'
              />
            ) : (
              <button
                type='button'
                key={item.id}
                onClick={() => setItemIndex(index)}
                aria-label={`Ir a tarjeta ${index + 1}`}
                className='text-foreground/40 hover:text-foreground cursor-pointer flex items-center justify-center p-0.5 transition-colors'
              >
                <Circle className='w-3.5 h-3.5' />
              </button>
            ),
          )}
      </div>
    </>
  )
}
