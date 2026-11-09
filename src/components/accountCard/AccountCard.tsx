import type { TUserBankAccount } from '@/src/types/homebanking'

export default function AccountCard({
  account,
}: {
  account: TUserBankAccount
}) {
  return (
    <article className='flex w-80 flex-col items-center justify-center gap-4 rounded-2xl bg-surface-card border border-surface-border text-foreground p-5 shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-primary-500/40 hover:shadow-xl'>
      <h3 className='text-xl font-semibold capitalize text-foreground'>
        Tarjeta {account.account_type}
      </h3>
      <h4 className='text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-violet-200'>
        {account.description}
      </h4>
      <h2 className='text-4xl font-bold tracking-tight text-foreground'>
        ${account.balance}
      </h2>
      <div className='flex w-full flex-col items-center gap-1 text-center pt-2 border-t border-surface-border'>
        <h4 className='text-[11px] font-semibold uppercase tracking-wider text-foreground/60 dark:text-violet-300'>
          Num. Cuenta
        </h4>
        <p className='font-mono text-sm text-foreground/80'>
          {account.account_number}
        </p>
        <h4 className='mt-2 text-[11px] font-semibold uppercase tracking-wider text-foreground/60 dark:text-violet-300'>
          Alias
        </h4>
        <p className='font-mono text-sm text-foreground/80'>{account.alias}</p>
      </div>
    </article>
  )
}
