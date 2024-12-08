import TituloNavegacion from '@/components/TituloNavegacion'
import { USER } from '@/utils/userDataModel'

import styles from './page.module.css'

export default function Page({ params }) {
  const { recipient, description, expirationDate, amount } =
    USER.billPayment.find(
      (factura) => factura.id === parseInt(params.facturaId),
    )

  return (
    <>
      <TituloNavegacion ruta='/inicio/facturas'>
        Detalle de Factura
      </TituloNavegacion>
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
