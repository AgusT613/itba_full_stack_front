import TituloNavegacion from '@/components/TituloNavegacion'
import { USER } from '@/utils/userDataModel'

import styles from './page.module.css'

export default function Page({ params }) {
  const tarjeta = USER.cards.find(
    (value) => value.id === parseInt(params.tarjetaId),
  )

  return (
    <>
      <TituloNavegacion ruta='/inicio/tarjetas'>
        Detalles de Tarjeta
      </TituloNavegacion>
      <section>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>Banco</td>
              <td>{tarjeta.brand}</td>
            </tr>
            <tr>
              <td>Tipo de tarjeta</td>
              <td>{tarjeta.type}</td>
            </tr>
            <tr>
              <td>Numero de tarjeta</td>
              <td>{tarjeta.number}</td>
            </tr>
            <tr>
              <td>Fecha de expiración</td>
              <td>{tarjeta.expirationDate}</td>
            </tr>
            <tr>
              <td>CVV</td>
              <td>{tarjeta.cvv}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}
