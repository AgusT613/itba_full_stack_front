import { CantidadSaldo } from './CantidadSaldo'
import { AccionUsuario } from './AccionUsuario'
import styles from '../Inicio.module.css'

export function SaldoCuenta() {
  return (
    <article className={styles.contenedor_saldo_cuenta}>
      <h3>Saldo en Cuenta</h3>
      <section className={styles.seccion_saldo}>
        <CantidadSaldo />
      </section>
      <section className={styles.seccion_acciones}>
        <AccionUsuario accion='Ingresar' className={styles.icono_ingresar} />
        <AccionUsuario
          accion='Transferir'
          className={styles.icono_transferir}
        />
        <AccionUsuario accion='Sacar' className={styles.icono_sacar} />
        <AccionUsuario accion='Tu CVU' className={styles.icono_cvu} />
      </section>
    </article>
  )
}
