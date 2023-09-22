import { datos } from '@/context/datosUsuario'
import TituloNavegacion from '@/components/TituloNavegacion'
import styles from '@/styles/Tarjetas.module.css'

export default function Page ({ params }) {
  const tarjeta = datos.tarjetas[params.tarjetaId]
  return (
    <>
      <TituloNavegacion ruta='/inicio/tarjetas'>Detalles de Tarjeta</TituloNavegacion>
      <section>
        {tarjeta.type === 'Credito'
          ? (
            <table className={styles.tabla_detalles_tarjeta}>
              <tr>
                <td>Banco</td>
                <td>{tarjeta.issuer}</td>
              </tr>
              <tr>
                <td>Tipo de tarjeta</td>
                <td>{tarjeta.type}</td>
              </tr>
              <tr>
                <td>Numero de tarjeta</td>
                <td>{tarjeta.cardNumber}</td>
              </tr>
              <tr>
                <td>Fecha de expiración</td>
                <td>{tarjeta.expirationDate}</td>
              </tr>
              <tr>
                <td>CVV</td>
                <td>{tarjeta.cvv}</td>
              </tr>
              <tr>
                <td>Limite de credito</td>
                <td>${tarjeta.creditLimit}</td>
              </tr>
              <tr>
                <td>Credito disponible</td>
                <td>${tarjeta.availableCredit}</td>
              </tr>
              <tr>
                <td>Domicilio de facturación</td>
                <td>{tarjeta.billingAddress}</td>
              </tr>
            </table>
            )
          : (
            <table className={styles.tabla_detalles_tarjeta}>
              <tr>
                <td>Banco</td>
                <td>{tarjeta.issuer}</td>
              </tr>
              <tr>
                <td>Tipo de tarjeta</td>
                <td>{tarjeta.type}</td>
              </tr>
              <tr>
                <td>Numero de tarjeta</td>
                <td>{tarjeta.cardNumber}</td>
              </tr>
              <tr>
                <td>Fecha de expiración</td>
                <td>{tarjeta.expirationDate}</td>
              </tr>
              <tr>
                <td>CVV</td>
                <td>{tarjeta.cvv}</td>
              </tr>
              <tr>
                <td>Cuenta vinculada</td>
                <td>{tarjeta.linkedAccount}</td>
              </tr>
              <tr>
                <td>Saldo en cuenta</td>
                <td>${tarjeta.accountBalance}</td>
              </tr>
              <tr>
                <td>Número de cuenta</td>
                <td>{tarjeta.accountNumber}</td>
              </tr>
            </table>
            )}
      </section>
    </>
  )
}
