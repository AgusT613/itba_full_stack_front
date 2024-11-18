import Link from 'next/link'
import styles from '@/styles/Facturas.module.css'
import { USER } from '@/utils/userDataModel'

export default function Page() {
  return (
    <>
      <h2>Pantalla Facturas</h2>
      <section className={styles.contenedor_tabla}>
        <table className={styles.tabla_facturas}>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Descripcion</th>
              <th>Vencimiento</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {USER.billPayment.map((factura) => {
              const rutaDinamica = `/inicio/facturas/${factura.id}`
              return (
                <tr key={factura.id}>
                  <td>{factura.recipient}</td>
                  <td className={styles.celda_descripcion}>
                    <Link key={factura.id} href={rutaDinamica}>
                      {factura.description}
                    </Link>
                  </td>
                  <td>{factura.expirationDate}</td>
                  <td>${factura.amount}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </>
  )
}
