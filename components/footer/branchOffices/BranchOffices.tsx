import styles from '@/components/footer/branchOffices/branchOffices.module.css'
import { BRANCH_OFFICE } from '@/utils/userDataModel'

export default function BranchOffices() {
  return (
    <ul className={styles.wrapperBranchOffice}>
      {BRANCH_OFFICE.map((contact) => (
        <article key={contact.name} className={styles.container}>
          <h5 className={styles.title}>{contact.name}</h5>
          <span>{contact.address}</span>
          <span>{contact.contactNumber}</span>
        </article>
      ))}
    </ul>
  )
}
