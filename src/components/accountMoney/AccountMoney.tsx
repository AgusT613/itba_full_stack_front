import SectionDivider from '@/src/components/sectionDivider/SectionDivider'
import type { TUserBankAccount } from '@/src/types/homebanking'
import CurrentMoney from '../currentMoney/CurrentMoney'
import UserAction from '../userAction/UserAction'
import styles from './accountMoney.module.css'

export default function AccountMoney({
  userBankAccount,
}: {
  userBankAccount: TUserBankAccount
}) {
  return (
    <SectionDivider className={styles.container}>
      <h3>Saldo en Cuenta</h3>
      <CurrentMoney balance={userBankAccount.balance} />
      <article className={styles.userActions}>
        <UserAction
          actionName='Ingresar'
          className={styles.depositIcon}
          href='/inicio/depositar'
        />
        <UserAction
          actionName='Transferir'
          className={styles.transferIcon}
          href='/inicio/transferencias'
        />
        <UserAction
          actionName='Mi alias'
          className={styles.cvuIcon}
          href='/inicio/alias'
        />
        <UserAction
          actionName='Agregar alias'
          className={styles.addAliasIcon}
          href='/inicio/agregar-alias'
        />
      </article>
    </SectionDivider>
  )
}
