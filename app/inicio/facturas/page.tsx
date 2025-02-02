import { Table } from '@/components/table/Table'
import { billPaymentTableHeader } from '@/utils/tableHeaders'
import { USER } from '@/utils/userDataModel'

import styles from './page.module.css'

export default function Page() {
  const itemLinkDescription = {
    href: `/inicio/facturas/`,
    matchHeader: 'description',
  }

  return (
    <section className={styles.container}>
      <h2>Facturas</h2>
      <Table
        data={USER.billPayment}
        header={billPaymentTableHeader}
        itemLink={itemLinkDescription}
      />
    </section>
  )
}
