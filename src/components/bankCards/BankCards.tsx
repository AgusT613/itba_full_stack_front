'use client'

import type { TCard } from '@/src/types/homebanking'
import CarrouselWrapper from '../carrousel/CarrouselWrapper'
import SectionDivider from '../sectionDivider/SectionDivider'

export default function BankCards({ cards }: { cards: TCard[] }) {
  return (
    <SectionDivider className='flex flex-col gap-4'>
      <h3 className='text-lg font-semibold text-surface-foreground'>
        Mis Tarjetas
      </h3>
      {cards.length ? (
        <CarrouselWrapper cardList={cards} />
      ) : (
        <p className='text-sm text-foreground/70 py-4'>
          No tenés tarjetas asociadas a tu cuenta.
        </p>
      )}
    </SectionDivider>
  )
}
