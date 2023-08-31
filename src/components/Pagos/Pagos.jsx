import styles from './Pagos.module.css'
import { historial } from './datos'

export const Pagos = () => {
  return (
    <>
      <section className={styles.tabla}>
        <h2> Historial de pagos</h2>
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
            historial.map((value, index) => {
              return (
                <tr key={index}>
                  <td key={value.pago}>{value.pago}</td>
                  <td key={value.monto}>{value.monto}</td>
                  <td key={value.fecha}>{value.fecha}</td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
        <button className={styles.verMasHistorial}>Ver más</button>
      </section>
    </>
  )
}
