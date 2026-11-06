import AccountMoney from '@/src/components/accountMoney/AccountMoney'
import ActivityRecord from '@/src/components/activityRecord/ActivityRecord'
import BankCards from '@/src/components/bankCards/BankCards'
import { UserProfile } from '@/src/components/userProfile/UserProfile'
import { getHomebankingData } from '@/src/lib/dataFetch'

export default async function Page() {
  const { user, cards, itbank_account, transfers } = await getHomebankingData()

  return (
    <div className='w-full'>
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <UserProfile user={user} />
        <AccountMoney userBankAccount={itbank_account} />
        <BankCards cards={cards} />
        <ActivityRecord transfers={transfers} />
      </section>
    </div>
  )
}
