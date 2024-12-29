import AccountMoney from '@/components/accountMoney/AccountMoney'
import ActivityRecord from '@/components/activityRecord/ActivityRecord'
import BankCards from '@/components/bankCards/BankCards'
import { UserProfile } from '@/components/userProfile/UserProfile'

import styles from './page.module.css'

export default async function Page() {
  return (
    <section className={styles.container}>
      <UserProfile />
      <AccountMoney />
      <BankCards />
      <ActivityRecord />
    </section>
  )
}
