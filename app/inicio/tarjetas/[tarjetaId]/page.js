'use client'
import TituloNavegacion from '@/components/TituloNavegacion'
import { DatosUsuarioContexto } from '@/context/datosUsuarioContexto'
import { TARJETAS_USER_API, obtenerListado } from '@/context/services'
import styles from '@/styles/Tarjetas.module.css'
import { useContext, useEffect, useState } from 'react'

export default function Page ({ params }) {
  const [tarjeta, setTarjeta] = useState(null)
  const { datosUsuario } = useContext(DatosUsuarioContexto)

  useEffect(() => {
    const { userId, username, password } = datosUsuario
    obtenerListado(userId, TARJETAS_USER_API, username, password)
      .then(tarjetas => {
        const tarjeta = tarjetas.find(value => value.id === parseInt(params.tarjetaId))
        setTarjeta(tarjeta)
      })
      .catch(error => console.log(error))
  }, [])
  return (
    <>
      <TituloNavegacion ruta='/inicio/tarjetas'>Detalles de Tarjeta</TituloNavegacion>
      <section>
        <table className={styles.tabla_detalles_tarjeta}>
          <tbody>
            <tr>
              <td>Banco</td>
              <td>{tarjeta?.marca}</td>
            </tr>
            <tr>
              <td>Tipo de tarjeta</td>
              <td>{tarjeta?.tipo}</td>
            </tr>
            <tr>
              <td>Numero de tarjeta</td>
              <td>{tarjeta?.numero}</td>
            </tr>
            <tr>
              <td>Fecha de expiración</td>
              <td>{tarjeta?.fecha_expiracion}</td>
            </tr>
            <tr>
              <td>CVV</td>
              <td>{tarjeta?.cvv}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}
