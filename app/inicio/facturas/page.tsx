import { Table } from '@/src/components/table/Table'
import { billPaymentTableHeader } from '@/utils/tableHeaders'
import { USER } from '@/utils/userDataModel'

export default function Page() {
  const itemLinkDescription = {
    href: '/inicio/facturas/',
    matchHeader: 'description',
  }

  return (
    <section className='flex flex-col gap-6 w-full'>
      <h2 className='text-2xl font-bold'>Facturas</h2>
      <Table
        data={USER.billPayment}
        header={billPaymentTableHeader}
        itemLink={itemLinkDescription}
      />
    </section>
  )
}
