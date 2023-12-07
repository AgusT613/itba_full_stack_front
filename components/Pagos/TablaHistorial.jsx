'use client'
import { useContext, useEffect, useState } from 'react'
import styles from './Pagos.module.css'
import { DatosUsuarioContexto } from '@/context/datosUsuarioContexto'
import { PAGOS_USER_API, obtenerListado } from '@/context/services'

export const TablaHistorial = () => {
  const [listaPagos, setListaPagos] = useState([])
  const { datosUsuario } = useContext(DatosUsuarioContexto)

  useEffect(() => {
    const { userId, username, password } = datosUsuario
    obtenerListado(userId, PAGOS_USER_API, username, password)
      .then(pagos => setListaPagos(pagos))
      .catch(error => console.log(error))
  }, [])

  return (
    <table className={styles.tablaPagos}>
      <thead>
        <tr>
          <td>Pago</td>
          <td>Monto</td>
          <td>Fecha</td>
        </tr>
      </thead>
      <tbody>
        {
          listaPagos.map(value => (
            <tr key={value.id}>
              <td key={value.servicio_pagado}>{value.servicio_pagado}</td>
              <td key={value.monto_abonado}>${value.monto_abonado}</td>
              <td key={value.fecha_pagado}>{value.fecha_pagado}</td>
            </tr>
          )
          )
        }
      </tbody>
    </table>
  )
}
