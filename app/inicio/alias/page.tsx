import { getAccountById } from '@/src/lib/dataFetch'

export default async function Page() {
  const itbankAccount = await getAccountById('1')

  return (
    <div>
      <h1>Mi Alias</h1>
      <p>Alias: {itbankAccount.alias}</p>
      <p>Número de cuenta: {itbankAccount.account_number}</p>
      <p>CBU: {itbankAccount.description}</p>
      <p>Tipo de cuenta: {itbankAccount.account_type}</p>
      <p>Monto: ${itbankAccount.balance}</p>
    </div>
  )
}
