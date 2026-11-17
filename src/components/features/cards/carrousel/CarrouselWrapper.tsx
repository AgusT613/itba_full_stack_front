import useCardCarrousel from '@/src/hooks/useCardCarrousel'
import type { TCard } from '@/src/types/homebanking'
import InteractiveBankCard from '../card/InteractiveBankCard'
import Carrousel from './Carrousel'

export default function CardCarrouselWrapper({
  cardList,
}: {
  cardList: TCard[]
}) {
  const {
    handlePreviousCard,
    handleNextCard,
    currentCard,
    currentCardIndex,
    setCardListIndex,
    href,
  } = useCardCarrousel(cardList)

  return (
    <Carrousel
      handlePrevious={handlePreviousCard}
      handleNext={handleNextCard}
      itemList={cardList}
      itemIndex={currentCardIndex}
      setItemIndex={setCardListIndex}
      href={href}
    >
      <InteractiveBankCard key={currentCard.id} card={currentCard} />
    </Carrousel>
  )
}
