import type { TUserBankAccount } from '@/src/types/homebanking'

export default function AccountCard({
  account,
}: {
  account: TUserBankAccount
}) {
  return (
    <article className='flex w-80 flex-col items-center justify-center gap-4 rounded-2xl bg-black/35 p-4 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-black/45'>
      <h3 className='text-xl font-medium capitalize'>
        Tarjeta {account.account_type}
      </h3>
      <h4 className='text-sm font-extralight uppercase tracking-wider text-violet-200'>
        {account.description}
      </h4>
      <h2 className='text-4xl font-bold tracking-tight text-white'>
        ${account.balance}
      </h2>
      <div className='flex w-full flex-col items-center gap-1 text-center'>
        <h4 className='text-xs uppercase text-violet-300'>Num. Cuenta</h4>
        <p className='font-mono text-sm text-gray-200'>
          {account.account_number}
        </p>
        <h4 className='mt-2 text-xs uppercase text-violet-300'>Alias</h4>
        <p className='font-mono text-sm text-gray-200'>{account.alias}</p>
      </div>
    </article>
  )
}
