import NavigationTitle from '@/components/navigationTitle/NavigationTitle'
import { USER } from '@/utils/userDataModel'

import styles from './page.module.css'

export default async function Page(props) {
  const params = await props.params
  const tarjeta = USER.cards.find(
    (value) => value.id === parseInt(params.tarjetaId),
  )

  return (
    <>
      <NavigationTitle href='/inicio/tarjetas'>
        Detalles de Tarjeta
      </NavigationTitle>
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
