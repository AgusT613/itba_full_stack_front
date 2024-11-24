import { USER } from '@/utils/userDataModel'

import { Carta } from './Carta'
import styles from './Cuentas.module.css'

export function Cuentas() {
  return (
    <section className={styles.contenedorCartas}>
      {USER.accounts.map((cuenta) => (
        <div key={cuenta.number}>
          <Carta
            descripcion={cuenta.type}
            saldo={cuenta.balance}
            tipoAhorro={cuenta.currency}
          />
        </div>
      ))}
    </section>
  )
}
