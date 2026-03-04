import DepositForm from '@/src/components/deposit/DepositForm'
import { getAccountAliases } from '@/src/lib/dataFetch'

export default async function Page() {
  const aliasList = await getAccountAliases()

  return (
    <div>
      <h1>Depósito</h1>
      <DepositForm aliasList={aliasList} />
    </div>
  )
}
