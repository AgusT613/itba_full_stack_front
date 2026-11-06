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
          className="bg-[url('/icons8-iniciar-la-transferencia-de-dinero-32.png')]"
          href='/inicio/depositar'
        />
        <UserAction
          actionName='Transferir'
          className="bg-[url('/icons8-flujo-de-fondos-32.png')]"
          href='/inicio/transferencias'
        />
        <UserAction
          actionName='Mi alias'
          className="bg-[url('/icons8-chequera-32.png')]"
          href='/inicio/alias'
        />
        <UserAction
          actionName='Agregar alias'
          className="bg-[url('/icons8-tarjeta-de-crédito-mastercard-96.png')]"
          href='/inicio/agregar-alias'
        />
      </article>
    </SectionDivider>
  )
}
