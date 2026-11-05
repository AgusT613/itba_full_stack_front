'use client'

import { useRouter } from 'next/navigation'
import { useActionState, useRef } from 'react'
import { requestLoan } from '@/actions/requestLoanAction'
import type { TBranchOffice } from '@/src/types/branchOffice'
import type { TUserBankAccount } from '@/src/types/homebanking'
import styles from './loanRequestForm.module.css'

const initialFormState = {
  success: false,
  message: '',
}

export default function LoanRequestForm({
  branchOfficesList,
  bankAccounts,
}: {
  branchOfficesList: TBranchOffice[]
  bankAccounts: TUserBankAccount[]
}) {
  const formRef = useRef<HTMLFormElement>(null)
  const [state, formAction, pending] = useActionState(
    requestLoan,
    initialFormState,
  )
  const router = useRouter()

  const handleFormReset = () => {
    formRef.current?.reset()
  }

  const handleResetPage = () => {
    router.refresh()
  }

  return (
    <form ref={formRef} action={formAction} className={styles.form}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Préstamo</legend>

        <div className={styles.formRow}>
          <label htmlFor='branch_office_id' className={styles.label}>
            Sucursal
          </label>
          <select
            id='branch_office_id'
            name='branch_office_id'
            className={styles.select}
          >
            <option value=''>Elegir sucursal</option>
            {branchOfficesList.map((sucursal) => (
              <option
                value={sucursal.id}
                key={sucursal.id}
                className={styles.option}
              >
                {sucursal.name} - {sucursal.address}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formRow}>
          <label htmlFor='user_account_id' className={styles.label}>
            Cuenta de usuario
          </label>
          <select
            id='user_account_id'
            name='user_account_id'
            className={styles.select}
          >
            <option value=''>Elegir cuenta de usuario</option>
            {bankAccounts.map((account) => (
              <option
                value={account.id}
                key={account.id}
                className={styles.option}
              >
                {account.alias} - {account.account_number}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formRow}>
          <label htmlFor='loan_type' className={styles.label}>
            Tipo de préstamo
          </label>
          <select id='loan_type' name='loan_type' className={styles.select}>
            <option value=''>Elegir tipo de prestamo</option>
            <option value='hipotecario'>Préstamo hipotecario</option>
            <option value='personal'>Préstamo personal</option>
            <option value='prendario'>Préstamo prendario</option>
          </select>
        </div>

        <div className={styles.formRow}>
          <label htmlFor='due_date' className={styles.label}>
            Fecha de finalización del préstamo
          </label>
          <input
            id='due_date'
            type='date'
            name='due_date'
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

        <div className={styles.formRow}>
          <label htmlFor='interest_rate' className={styles.label}>
            Tasa de interés
          </label>
          <input
            id='interest_rate'
            type='number'
            name='interest_rate'
            placeholder='0.15'
            step='0.01'
            className={styles.input}
          />
        </div>

        <div className={styles.formRow}>
          <label htmlFor='total_installments' className={styles.label}>
            Cantidad de cuotas
          </label>
          <input
            id='total_installments'
            type='number'
            name='total_installments'
            placeholder='24'
            className={styles.input}
          />
        </div>
      </fieldset>

      <div
        className={`${styles.messageContainer} ${state.success ? styles.successMessage : styles.errorMessage}`}
      >
        {state.message}
      </div>

      <div className={styles.buttonRow}>
        <input
          type='button'
          onClick={handleFormReset}
          value='Reiniciar formulario'
          className={styles.button}
        />
        <input
          type='submit'
          disabled={pending}
          value={pending ? 'Enviando...' : 'Pedir préstamo'}
          className={styles.button}
        />
        {state.success && (
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
