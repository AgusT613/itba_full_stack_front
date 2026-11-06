import AccountCard from '@/src/components/accountCard/AccountCard'
import { getAccounts } from '@/src/lib/dataFetch'

export const metadata = {
  title: 'Cuentas - ITBANK',
  description:
    'Accede a tus cuentas de manera rápido y segura con nuestra web.',
}

export default async function Page() {
  const bankAccounts = await getAccounts()

  return bankAccounts ? (
    <section className='flex flex-wrap justify-center gap-8 py-4'>
      {bankAccounts.map((account) => (
        <AccountCard key={account.account_number} account={account} />
      ))}
    </section>
  ) : (
    <p className='text-sm text-foreground/70 py-6 text-center'>
      No tienes cuentas registradas.
    </p>
  )
}
