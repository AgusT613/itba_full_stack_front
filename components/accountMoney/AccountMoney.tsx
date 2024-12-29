import SectionDivider from '@/components/sectionDivider/SectionDivider'

import styles from './accountMoney.module.css'
import CurrentMoney from '../currentMoney/CurrentMoney'
import UserAction from '../userAction/UserAction'

export default function AccountMoney() {
  return (
    <SectionDivider className={styles.container}>
      <h3>Saldo en Cuenta</h3>
      <CurrentMoney />
      <article className={styles.userActions}>
        <UserAction actionName='Ingresar' className={styles.depositIcon} />
        <UserAction actionName='Transferir' className={styles.transferIcon} />
        <UserAction actionName='Sacar' className={styles.withdrawIcon} />
        <UserAction actionName='Mi CVU' className={styles.cvuIcon} />
      </article>
    </SectionDivider>
  )
}
