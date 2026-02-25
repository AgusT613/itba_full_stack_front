'use client'
import styles from './bankCards.module.css'
import SectionDivider from '../sectionDivider/SectionDivider'
import { TCard } from '@/src/types/homebanking'
import CarrouselWrapper from '../carrousel/CarrouselWrapper'

export default function BankCards({ cards }: { cards: TCard[] }) {
  return (
    <SectionDivider className={styles.container}>
      <h3>Mis Tarjetas</h3>
      {cards.length ? (
        <CarrouselWrapper cardList={cards} />
      ) : (
        <p>No tenés tarjetas asociadas a tu cuenta.</p>
      )}
    </SectionDivider>
  )
}
