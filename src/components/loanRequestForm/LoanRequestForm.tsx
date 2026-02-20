'use client'

import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'

import { BRANCH_OFFICE, USER } from '@/utils/userDataModel'

import styles from './loanRequestForm.module.css'

export default function LoanRequestForm() {
  const formRef = useRef(null)
  const [resetPage, setResetPage] = useState(false)
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleFormReset = () => {
    setMessage('')
    formRef.current.reset()
  }

  const handleResetPage = () => {
    router.refresh()
    setResetPage(!resetPage)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))

    const body = {
      user: USER.customer.id,
      ...formData,
    }

    setMessage(JSON.stringify(body))
    setResetPage(!resetPage)
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Préstamo</legend>

        <div className={styles.formRow}>
          <label htmlFor='branchOffice' className={styles.label}>
            Sucursal
          </label>
          <select
            id='branchOffice'
            name='branchOffice'
            className={styles.select}
          >
            {BRANCH_OFFICE.map((sucursal) => (
              <option
                value={sucursal.id}
                key={sucursal.id}
                className={styles.option}
              >
                {sucursal.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formRow}>
          <label htmlFor='loanType' className={styles.label}>
            Tipo de préstamo
          </label>
          <select id='loanType' name='loanType' className={styles.select}>
            <option value='hipotecario'>Préstamo hipotecario</option>
            <option value='personal'>Préstamo personal</option>
            <option value='prendario'>Préstamo prendario</option>
          </select>
        </div>

        <div className={styles.formRow}>
          <label htmlFor='grandDate' className={styles.label}>
            Fecha de inicio del préstamo
          </label>
          <input
            id='grandDate'
            type='date'
            name='grandDate'
            className={styles.input}
          />
        </div>

        <div className={styles.formRow}>
          <label htmlFor='expirationDate' className={styles.label}>
            Fecha de finalización del préstamo
          </label>
          <input
            id='expirationDate'
            type='date'
            name='expirationDate'
            className={styles.input}
          />
        </div>

        <div className={styles.formRow}>
          <label htmlFor='amount' className={styles.label}>
            Monto
          </label>
          <input
            id='amount'
            type='number'
            name='amount'
            placeholder='500000'
            className={styles.input}
          />
        </div>
      </fieldset>

      <div className={styles.messageContainer}>{message}</div>

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
