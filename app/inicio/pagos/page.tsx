import { Table } from '@/src/components/table/Table'
import { activityRecordTableHeader } from '@/utils/tableHeaders'
import { USER } from '@/utils/userDataModel'

import styles from './page.module.css'

export const metadata = {
  title: 'Pagos - ITBANK',
}

export default function Page() {
  return (
    <div className={styles.container}>
      <section className={styles.sectionWrapper}>
        <h2> Historial de pagos</h2>
        <Table data={USER.paymentRecords} header={activityRecordTableHeader} />
      </section>
    </div>
  )
}
