import AccountCard from '@/src/components/accountCard/AccountCard'

import styles from './page.module.css'
import { getAccounts } from '@/src/lib/dataFetch'

export const metadata = {
  title: 'Cuentas - ITBANK',
  description:
    'Accede a tus cuentas de manera rápido y segura con nuestra web.',
}

export default async function Page() {
  const bankAccounts = await getAccounts()

  return bankAccounts ? (
    <section className={styles.cardsWrapper}>
      {bankAccounts.map((account) => (
        <AccountCard key={account.account_number} account={account} />
      ))}
    </section>
  ) : (
    <p>No tienes cuentas registradas.</p>
  )
}
