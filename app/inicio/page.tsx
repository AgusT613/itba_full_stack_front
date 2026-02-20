import AccountMoney from '@/src/components/accountMoney/AccountMoney'
import ActivityRecord from '@/src/components/activityRecord/ActivityRecord'
import BankCards from '@/src/components/bankCards/BankCards'
import { UserProfile } from '@/src/components/userProfile/UserProfile'

import styles from './page.module.css'

export default async function Page() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <UserProfile />
        <AccountMoney />
        <BankCards />
        <ActivityRecord />
      </section>
    </div>
  )
}
