import { USER } from '@/utils/userDataModel'
import styles from './Pagos.module.css'

export function TablaHistorial() {
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
        {USER.paymentRecords.map((value) => (
          <tr key={value.id}>
            <td>{value.service}</td>
            <td>${value.amount}</td>
            <td>{value.paymentDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
