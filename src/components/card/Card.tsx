import { toFormatDateString } from '@/utils/toDate'
import styles from './card.module.css'
import { TCard } from '@/src/types/homebanking'

export default function Card({ card }: { card: TCard }) {
  return (
    <article className={styles.card}>
      <div className={styles.heading}>
        <h6 className={styles.type}>{card.card_type}</h6>
        <p className={styles.brand}>{card.brand}</p>
      </div>
      <span className={styles.securityChip} />
      <div className={styles.number}>{card.last_four}</div>
      <div className={styles.detailsContainer}>
        <div>
          <p className={styles.detail}>Vencimiento</p>
          <span>{toFormatDateString(card.expiration_date)}</span>
        </div>
        <div>
          <p className={styles.detail}>CVV</p>
          <span>{card.last_four}</span>
        </div>
        <span className={styles.cardMock} />
      </div>
    </article>
  )
}
