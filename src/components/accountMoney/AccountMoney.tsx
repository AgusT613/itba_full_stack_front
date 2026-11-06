import { ArrowDownToLine, ArrowRightLeft, QrCode, UserPlus } from 'lucide-react'
import SectionDivider from '@/src/components/sectionDivider/SectionDivider'
import type { TUserBankAccount } from '@/src/types/homebanking'
import CurrentMoney from '../currentMoney/CurrentMoney'
import UserAction from '../userAction/UserAction'

export default function AccountMoney({
  userBankAccount,
}: {
  userBankAccount: TUserBankAccount
}) {
  return (
    <SectionDivider className='flex flex-col gap-6'>
      <h3 className='text-lg font-semibold text-surface-foreground'>
        Saldo en Cuenta
      </h3>
      <CurrentMoney balance={userBankAccount.balance} />
      <article className='flex flex-wrap gap-4 justify-around pt-2'>
        <UserAction
          actionName='Ingresar'
          icon={<ArrowDownToLine className='w-6 h-6' />}
          href='/inicio/depositar'
        />
        <UserAction
          actionName='Transferir'
          icon={<ArrowRightLeft className='w-6 h-6' />}
          href='/inicio/transferencias'
        />
        <UserAction
          actionName='Mi alias'
          icon={<QrCode className='w-6 h-6' />}
          href='/inicio/alias'
        />
        <UserAction
          actionName='Agregar alias'
          icon={<UserPlus className='w-6 h-6' />}
          href='/inicio/agregar-alias'
        />
      </article>
    </SectionDivider>
  )
}
