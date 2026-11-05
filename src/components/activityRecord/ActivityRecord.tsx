import type { TTransfer } from '@/src/types/homebanking'
import { transferHistoryTableHeader } from '@/utils/tableHeaders'
import { toFormatDateString } from '@/utils/toDate'
import SectionDivider from '../sectionDivider/SectionDivider'
import { Table } from '../table/Table'
import styles from './activityRecord.module.css'

export default function ActivityRecord({
  transfers,
}: {
  transfers: TTransfer[]
}) {
  const dataTransfers = transfers.map((transfer) => ({
    ...transfer,
    transfer_date: toFormatDateString(transfer.transfer_date),
  }))

  return (
    <SectionDivider className={styles.container}>
      <h3>Última Actividad</h3>
      <section className={styles.sectionWrapper}>
        {transfers.length ? (
          <Table header={transferHistoryTableHeader} data={dataTransfers} />
        ) : (
          <p>No se han registrado actividades recientes.</p>
        )}
      </section>
    </SectionDivider>
  )
}
