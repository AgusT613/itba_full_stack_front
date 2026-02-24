import { TCard } from '@/src/types/homebanking'
import Card from '../card/Card'
import Carrousel from './Carrousel'
import useCardCarrousel from '@/src/hooks/useCardCarrousel'

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
      <Card card={currentCard} />
    </Carrousel>
  )
}
