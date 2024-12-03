import styles from '@/components/home/bankResources/bankResourceWrapper.module.css'
import { BANK_RESOURCES } from '@/utils/userDataModel'

import BankResourceContainer from './bankResourceContainer/BankResourceContainer'

export default function BankResourceWrapper() {
  return (
    <section className={styles.bankResources} id='resources'>
      <h4 className={styles.sectionHeading}>¿Qué estas buscando?</h4>
      <article className={styles.resourcesList}>
        {BANK_RESOURCES.map((resource) => (
          <BankResourceContainer
            resourceList={resource}
            key={resource.description}
          />
        ))}
      </article>
    </section>
  )
}
