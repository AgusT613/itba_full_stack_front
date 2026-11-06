import DepositForm from '@/src/components/deposit/DepositForm'
import { getAccountAliases } from '@/src/lib/dataFetch'

export default async function Page() {
  const aliasList = await getAccountAliases()

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Depósito</h1>
      <DepositForm aliasList={aliasList} />
    </div>
  )
}
