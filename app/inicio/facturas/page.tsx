import Link from 'next/link'

import { USER } from '@/utils/userDataModel'

import styles from './page.module.css'

export default function Page() {
  return (
    <>
      <h2>Facturas</h2>
      <section className={styles.container}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              <th>Empresa</th>
              <th>Descripcion</th>
              <th>Vencimiento</th>
              <th>Monto</th>
            </tr>
          </thead>

          <tbody className={styles.tableBody}>
            {USER.billPayment.map((factura) => (
              <tr key={factura.id}>
                <td>{factura.recipient}</td>
                <td className={styles.dataDescription}>
                  <Link
                    key={factura.id}
                    href={`/inicio/facturas/${factura.id}`}
                  >
                    {factura.description}
                  </Link>
                </td>
                <td>{factura.expirationDate}</td>
                <td>${factura.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}
