import styles from '@/src/components/footer/branchOffices/branchOffices.module.css'
import { TBranchOffice } from '@/src/types/branchOffice'

export default async function BranchOffices({
  branchOfficesList,
}: {
  branchOfficesList: TBranchOffice[]
}) {
  return (
    <ul className={styles.wrapperBranchOffice}>
      {branchOfficesList.map((contact) => (
        <article key={contact.name} className={styles.container}>
          <h5 className={styles.title}>{contact.name}</h5>
          <span>{contact.address}</span>
          <span>{contact.contact}</span>
        </article>
      ))}
    </ul>
  )
}
