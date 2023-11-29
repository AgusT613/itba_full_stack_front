'use client'
import { datos } from '@/context/datosUsuario'
import TituloNavegacion from '@/components/TituloNavegacion'
import styles from '@/styles/Tarjetas.module.css'

export default function Page ({ params }) {
  const tarjeta = datos.tarjetas.find(value => value.id === parseInt(params.tarjetaId))
  return (
    <>
      <TituloNavegacion ruta='/inicio/tarjetas'>Detalles de Tarjeta</TituloNavegacion>
      <section>
        <table className={styles.tabla_detalles_tarjeta}>
          <tbody>
            <tr>
              <td>Banco</td>
              <td>{tarjeta.marca}</td>
            </tr>
            <tr>
              <td>Tipo de tarjeta</td>
              <td>{tarjeta.tipo}</td>
            </tr>
            <tr>
              <td>Numero de tarjeta</td>
              <td>{tarjeta.numero}</td>
            </tr>
            <tr>
              <td>Fecha de expiración</td>
              <td>{tarjeta.fecha_expiracion}</td>
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
