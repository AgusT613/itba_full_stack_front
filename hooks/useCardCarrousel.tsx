import { useState } from 'react'

import { ICard } from '@/types/card'

export default function useCardCarrousel(cardList: ICard[]) {
  const [cardListIndex, setCardListIndex] = useState(0)
  const href = `/inicio/tarjetas/${cardList[cardListIndex].id}`

  const numberOfCards = cardList.length - 1
  const currentCard = cardList[cardListIndex]
  const currentCardIndex = cardList[cardListIndex].id

  const handlePreviousCard = () =>
    cardListIndex <= 0
      ? setCardListIndex(numberOfCards)
      : setCardListIndex(cardListIndex - 1)

  const handleNextCard = () =>
    cardListIndex >= 0 && cardListIndex < numberOfCards
      ? setCardListIndex(cardListIndex + 1)
      : setCardListIndex(0)

  return {
    handlePreviousCard,
    handleNextCard,
    currentCard,
    currentCardIndex,
    setCardListIndex,
    href,
  }
}
