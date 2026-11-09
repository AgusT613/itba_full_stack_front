import type { TTransfer } from '@/src/types/homebanking'
import { transferHistoryTableHeader } from '@/utils/tableHeaders'
import { toFormatDateString } from '@/utils/toDate'
import SectionDivider from '../sectionDivider/SectionDivider'
import { Table } from '../table/Table'

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
    <SectionDivider className='col-span-full md:col-span-2 flex flex-col gap-4'>
      <h3 className='text-lg font-semibold text-surface-foreground'>
        Última Actividad
      </h3>
      <section className='flex items-center justify-center w-full overflow-x-auto'>
        {transfers.length ? (
          <Table header={transferHistoryTableHeader} data={dataTransfers} />
        ) : (
          <p className='text-sm text-foreground/70 py-4'>
            No se han registrado actividades recientes.
          </p>
        )}
      </section>
    </SectionDivider>
  )
}
