import NavigationTitle from '@/components/navigationTitle/NavigationTitle'
import { USER } from '@/utils/userDataModel'

import styles from './page.module.css'

export default async function Page(props) {
  const params = await props.params
  const { recipient, description, expirationDate, amount } =
    USER.billPayment.find(
      (factura) => factura.id === parseInt(params.facturaId),
    )

  return (
    <>
      <NavigationTitle href='/inicio/facturas'>
        Detalle de Factura
      </NavigationTitle>
      <table className={styles.table}>
        <tr>
          <td className={styles.title}>Empresa</td>
          <td>{recipient}</td>
        </tr>
        <tr>
          <td className={styles.title}>Descripcion</td>
          <td>{description}</td>
        </tr>
        <tr>
          <td className={styles.title}>Fecha de vencimiento</td>
          <td>{expirationDate}</td>
        </tr>
        <tr>
          <td className={styles.title}>Cantidad a pagar</td>
          <td>{amount}</td>
        </tr>
      </table>
    </>
  )
}
