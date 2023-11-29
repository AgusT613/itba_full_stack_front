'use client'
import { datos } from '@/context/datosUsuario'
import styles from './Pagos.module.css'

export const TablaHistorial = () => {
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
          datos.pagos.map(value => {
            return (
              <tr key={value.id}>
                <td key={value.servicio_pagado}>{value.servicio_pagado}</td>
                <td key={value.monto_abonado}>${value.monto_abonado}</td>
                <td key={value.fecha_pagado}>{value.fecha_pagado}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
