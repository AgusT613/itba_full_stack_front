import styles from '@/src/components/home/bankActions/bankActionWrapper.module.css'
import { BANK_ACTIONS } from '@/utils/userDataModel'

import BankActionContainer from './bankActionContainer/BankActionContainer'

export default function BankActionWrapper() {
  return (
    <section className={styles.bankActions} id='actions'>
      {BANK_ACTIONS.map((action) => (
        <BankActionContainer bankAction={action} key={action.description} />
      ))}
    </section>
  )
}
