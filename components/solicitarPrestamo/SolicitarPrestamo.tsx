'use client'

import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'

import { BRANCH_OFFICE, USER } from '@/utils/userDataModel'

import styles from './solicitarPrestamo.module.css'

export default function FormularioSolicitarPrestamo() {
  const formCrearPrestamoRef = useRef(null)
  const [resetPage, setResetPage] = useState(false)
  const router = useRouter()

  const handleFormReset = () => {
    formCrearPrestamoRef.current.reset()
  }

  const handleResetPage = () => {
    router.refresh()
    setResetPage(!resetPage)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const datosFormulario = Object.fromEntries(new FormData(e.target))

    const body = {
      user: USER.customer.id,
      branchOffice: datosFormulario.sucursal,
      loanType: datosFormulario.tipoPrestamo,
      grandDate: datosFormulario.fechaInicioPrestamo,
      expirationDate: datosFormulario.fechaFinalizacionPrestamo,
      amount: datosFormulario.monto,
    }

    console.log(body)

    setResetPage(!resetPage)
  }

  return (
    <form
      ref={formCrearPrestamoRef}
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Préstamo</legend>

        <div className={styles.formRow}>
          <label htmlFor='sucursal' className={styles.label}>
            Sucursal
          </label>
          <select id='sucursal' name='sucursal' className={styles.select}>
            {BRANCH_OFFICE.map((sucursal) => (
              <option value={sucursal.id} key={sucursal.id}>
                {sucursal.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formRow}>
          <label htmlFor='tipoPrestamo' className={styles.label}>
            Tipo de préstamo
          </label>
          <select
            id='tipoPrestamo'
            name='tipoPrestamo'
            className={styles.select}
          >
            <option value='hipotecario'>Préstamo hipotecario</option>
            <option value='personal'>Préstamo personal</option>
            <option value='prendario'>Préstamo prendario</option>
          </select>
        </div>

        <div className={styles.formRow}>
          <label htmlFor='fechaInicioPrestamo' className={styles.label}>
            Fecha de inicio del préstamo
          </label>
          <input
            id='fechaInicioPrestamo'
            type='date'
            name='fechaInicioPrestamo'
            className={styles.input}
          />
        </div>

        <div className={styles.formRow}>
          <label htmlFor='fechaFinalizacionPrestamo' className={styles.label}>
            Fecha de finalización del préstamo
          </label>
          <input
            id='fechaFinalizacionPrestamo'
            type='date'
            name='fechaFinalizacionPrestamo'
            className={styles.input}
          />
        </div>

        <div className={styles.formRow}>
          <label htmlFor='monto' className={styles.label}>
            Monto
          </label>
          <input
            id='monto'
            type='number'
            name='monto'
            placeholder='500000'
            className={styles.input}
          />
        </div>
      </fieldset>

      <div className={styles.buttonRow}>
        <input
          type='button'
          onClick={handleFormReset}
          value='Reiniciar formulario'
          className={styles.button}
        />
        <input type='submit' value='Pedir Préstamo' className={styles.button} />
        {resetPage && (
          <input
            type='button'
            onClick={handleResetPage}
            value='Recargar página'
            className={styles.button}
          />
        )}
      </div>
    </form>
  )
}
