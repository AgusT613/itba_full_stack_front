import { Table } from '@/src/components/table/Table'
import { transferHistoryTableHeader } from '@/utils/tableHeaders'
import { USER } from '@/utils/userDataModel'

export const metadata = {
  title: 'Pagos - ITBANK',
}

export default function Page() {
  return (
    <div className='flex flex-col gap-6 w-full'>
      <h2 className='text-2xl font-bold'>Historial de pagos</h2>
      <Table data={USER.paymentRecords} header={transferHistoryTableHeader} />
    </div>
  )
}
