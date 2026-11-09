import { getAccountById } from '@/src/lib/dataFetch'

export default async function Page() {
  const itbankAccount = await getAccountById('1')

  return (
    <div className='max-w-md mx-auto my-6 p-6 rounded-2xl bg-surface-card border border-surface-border shadow-md flex flex-col gap-3 text-foreground'>
      <h1 className='text-2xl font-bold'>Mi Alias</h1>
      <div className='flex flex-col gap-1 divide-y divide-surface-border text-sm pt-2'>
        <div className='flex justify-between py-2.5'>
          <span className='text-foreground/70'>Alias</span>
          <span className='font-mono font-semibold'>{itbankAccount.alias}</span>
        </div>
        <div className='flex justify-between py-2.5'>
          <span className='text-foreground/70'>Número de cuenta</span>
          <span className='font-mono'>{itbankAccount.account_number}</span>
        </div>
        <div className='flex justify-between py-2.5'>
          <span className='text-foreground/70'>CBU</span>
          <span className='font-mono'>{itbankAccount.description}</span>
        </div>
        <div className='flex justify-between py-2.5'>
          <span className='text-foreground/70'>Tipo de cuenta</span>
          <span className='capitalize'>{itbankAccount.account_type}</span>
        </div>
        <div className='flex justify-between py-2.5'>
          <span className='text-foreground/70'>Saldo</span>
          <span className='font-bold text-primary-600 dark:text-primary-300'>
            ${itbankAccount.balance}
          </span>
        </div>
      </div>
    </div>
  )
}
