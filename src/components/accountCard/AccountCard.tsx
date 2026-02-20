import styles from './accountCard.module.css'

export default function AccountCard({ cardTitle, currency, amountMoney }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>Tarjeta {cardTitle}</h3>
      <h4 className={styles.type}>Caja de ahorro en {currency}</h4>
      <h2 className={styles.amountMoney}>${amountMoney}</h2>
      <div className={styles.btnWrapper}>
        <button type='button' className={styles.btn}>
          Ver CBU
        </button>
        <button type='button' className={styles.btn}>
          Solicitar Baja
        </button>
      </div>
    </article>
  )
}
