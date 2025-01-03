'use client'

import Card from '@/components/card/Card'
import useCardCarrousel from '@/hooks/useCardCarrousel'
import { USER } from '@/utils/userDataModel'

import styles from './bankCards.module.css'
import Carrousel from '../carrousel/Carrousel'
import SectionDivider from '../sectionDivider/SectionDivider'

export default function BankCards() {
  const cardList = USER.cards

  const {
    handlePreviousCard,
    handleNextCard,
    currentCard,
    currentCardIndex,
    setCardListIndex,
    href,
  } = useCardCarrousel(cardList)

  return (
    <SectionDivider className={styles.container}>
      <h3>Mis Tarjetas</h3>
      <Carrousel
        handlePrevious={handlePreviousCard}
        handleNext={handleNextCard}
        itemList={cardList}
        itemIndex={currentCardIndex}
        setItemIndex={setCardListIndex}
        href={href}
      >
        <Card card={currentCard} />
      </Carrousel>
    </SectionDivider>
  )
}
