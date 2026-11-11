import AccountMoney from '@/src/components/features/accounts/accountMoney/AccountMoney'
import BankCards from '@/src/components/features/cards/bankCards/BankCards'
import CashFlowChart from '@/src/components/features/dashboard/dashboardCharts/CashFlowChart'
import { UserProfile } from '@/src/components/features/dashboard/userProfile/UserProfile'
import ActivityRecord from '@/src/components/features/transfers/activityRecord/ActivityRecord'
import { getHomebankingData } from '@/src/lib/dataFetch'

export default async function Page() {
  const { user, cards, itbank_account, transfers } = await getHomebankingData()

  return (
    <div className='w-full'>
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <UserProfile user={user} />
        <AccountMoney userBankAccount={itbank_account} />
        <CashFlowChart transfers={transfers} username={user.username} />
        <BankCards cards={cards} />
        <ActivityRecord transfers={transfers} />
      </section>
    </div>
  )
}
