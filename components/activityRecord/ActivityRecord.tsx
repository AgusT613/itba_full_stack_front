import { activityRecordTableHeader } from '@/utils/tableHeaders'
import { USER } from '@/utils/userDataModel'

import styles from './activityRecord.module.css'
import SectionDivider from '../sectionDivider/SectionDivider'
import { Table } from '../table/Table'

export default function ActivityRecord() {
  return (
    <SectionDivider className={styles.container}>
      <h3>Última Actividad</h3>
      <section className={styles.sectionWrapper}>
        <Table header={activityRecordTableHeader} data={USER.paymentRecords} />
      </section>
    </SectionDivider>
  )
}
