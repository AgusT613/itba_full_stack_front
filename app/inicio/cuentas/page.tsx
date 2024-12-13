import AccountCard from '@/components/accountCard/AccountCard'
import { USER } from '@/utils/userDataModel'

import styles from './page.module.css'

export const metadata = {
  title: 'Cuentas - ITBANK',
  description:
    'Accede a tus cuentas de manera rápido y segura con nuestra web.',
}

export default function Page() {
  return (
    <section className={styles.cardsWrapper}>
      {USER.accounts.map((account) => (
        <AccountCard
          key={account.number}
          cardTitle={account.type}
          currency={account.currency}
          amountMoney={account.balance}
        />
      ))}
    </section>
  )
}
