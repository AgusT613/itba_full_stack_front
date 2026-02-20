import { ICard } from '@/src/types/card'

import styles from './card.module.css'

export default function Card({ card }: { card: ICard }) {
  const { type, brand, number, expirationDate, cvv } = card

  return (
    <article className={styles.card}>
      <div className={styles.heading}>
        <h6 className={styles.type}>{type}</h6>
        <p className={styles.brand}>{brand}</p>
      </div>
      <span className={styles.securityChip} />
      <div className={styles.number}>{number}</div>
      <div className={styles.detailsContainer}>
        <div>
          <p className={styles.detail}>Vencimiento</p>
          <span>{expirationDate}</span>
        </div>
        <div>
          <p className={styles.detail}>CVV</p>
          <span>{cvv}</span>
        </div>
        <span className={styles.cardMock} />
      </div>
    </article>
  )
}
