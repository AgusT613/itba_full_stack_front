'use client'

import CalculadoraPrestamos from '@/components/CalculadoraPrestamos/CalculadoraPrestamos'
import FormularioSolicitarPrestamo from '@/components/solicitarPrestamo/SolicitarPrestamo'
import { BRANCH_OFFICE, USER } from '@/utils/userDataModel'

import styles from './page.module.css'

export default function Page() {
  const prestamosITBANK = USER.loan.filter(
    (prestamo) => prestamo.branchOffice === 'ITBANK',
  )
  const prestamosOtrasSucursales = USER.loan.filter(
    (prestamo) => prestamo.branchOffice !== 'ITBANK',
  )

  const handleEliminarPrestamo = (prestamoId) => {
    return prestamoId
  }

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.h2}>Solicitar un Prestamo</h2>
        <FormularioSolicitarPrestamo />
      </section>
      <section className={styles.section}>
        <h2 className={styles.h2}>Listado Prestamos ITBANK</h2>
        <span className={styles.span}>
          Dirección: {BRANCH_OFFICE[0].address}
        </span>
        <div className={styles.grid}>
          {prestamosITBANK.map((prestamo) => (
            <article className={styles.card} key={prestamo.id}>
              <h3 className={styles.h3}>Prestamo {prestamo.type}</h3>
              <p>
                <strong>Fecha inicio del prestamo:</strong> {prestamo.grandDate}
              </p>
              <p>
                <strong>Fecha finalizacion del prestamo:</strong>{' '}
                {prestamo.expirationDate}
              </p>
              <strong className={styles.strong}>
                Monto: ${prestamo.amount}
              </strong>
              <button
                type='button'
                className={styles.deleteBtn}
                onClick={() => handleEliminarPrestamo(prestamo.id)}
              >
                Dar de Baja
              </button>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.h2}>Listado Prestamos por Sucursal</h2>
        <div className={styles.grid}>
          {prestamosOtrasSucursales.map((prestamo) => (
            <article className={styles.card} key={prestamo.id}>
              <h3 className={styles.h3}>Prestamo {prestamo.type}</h3>
              <p>
                <strong>Nombre sucursal:</strong> {BRANCH_OFFICE[1].name}
              </p>
              <p>
                <strong>Direccion sucursal:</strong> {BRANCH_OFFICE[1].address}
              </p>
              <p>
                <strong>Fecha inicio del prestamo:</strong> {prestamo.grandDate}
              </p>
              <p>
                <strong>Fecha finalizacion del prestamo:</strong>{' '}
                {prestamo.expirationDate}
              </p>
              <strong className={styles.strong}>
                Monto: ${prestamo.amount}
              </strong>
              <button
                type='button'
                className={styles.deleteBtn}
                onClick={() => handleEliminarPrestamo(prestamo.id)}
              >
                Dar de Baja
              </button>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.h2}>Calculadora de Prestamos</h2>
        <CalculadoraPrestamos />
      </section>
    </>
  )
}
