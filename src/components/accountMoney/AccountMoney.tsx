import SectionDivider from '@/src/components/sectionDivider/SectionDivider'

import styles from './accountMoney.module.css'
import CurrentMoney from '../currentMoney/CurrentMoney'
import UserAction from '../userAction/UserAction'
import { TUserBankAccount } from '@/src/types/homebanking'

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
      </article>
    </SectionDivider>
  )
}
