import { TUserBankAccount } from '@/src/types/homebanking'
import styles from './accountCard.module.css'

export default function AccountCard({
  account,
}: {
  account: TUserBankAccount
}) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>Tarjeta {account.account_type}</h3>
      <h4 className={styles.type}>{account.description}</h4>
      <h2 className={styles.amountMoney}>${account.balance}</h2>
      <h4>Num. Cuenta: {account.account_number}</h4>
      {/* <div className={styles.btnWrapper}>
        <button type='button' className={styles.btn}>
          Ver CBU
        </button>
        <button type='button' className={styles.btn}>
          Solicitar Baja
        </button>
      </div> */}
    </article>
  )
}
