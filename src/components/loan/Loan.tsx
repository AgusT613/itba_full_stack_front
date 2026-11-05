'use client'

import { useRouter } from 'next/navigation'
import { useActionState } from 'react'
import { deleteLoan } from '@/actions/deleteLoanAction'
import type { TLoan } from '@/src/types/loan'
import styles from './loan.module.css'

const initialFormState = {
  message: '',
  success: false,
}

export default function Loan({ loan }: { loan: TLoan }) {
  const [state, formAction, pending] = useActionState(
    deleteLoan,
    initialFormState,
  )
  const router = useRouter()

  return (
    <article className={styles.card}>
      <h3 className={styles.h3}>Prestamo {loan.loan_type}</h3>

      <ul>
        <li>
          <span>ID del prestamo: {loan.id}</span>
        </li>
        <li>
          <span>Sucursal: {loan.branch_office_id}</span>
        </li>
        <li>
          <span>Fecha inicio del prestamo: {loan.start_date}</span>
        </li>
        <li>
          <span>Fecha finalización del prestamo: {loan.due_date}</span>
        </li>
        <li>
          <span>Monto: {loan.amount}</span>
        </li>
        <li>
          <span>Tasa de interes: {loan.interest_rate}%</span>
        </li>
        <li>
          <span>Total a pagar: {loan.total_repayment}</span>
        </li>
        <li>
          <span>
            Cuotas restantes: {loan.remaining_installments} de{' '}
            {loan.total_installments}
          </span>
        </li>
        <li>
          <span>Estado: {loan.status}</span>
        </li>
        <li>
          <span>Cuenta bancaria: {loan.user_account_id}</span>
        </li>
        <li>
          <span>Usuario: {loan.user_id}</span>
        </li>
      </ul>

      {!state.success && (
        <form action={formAction}>
          <input type='text' name='loan_id' value={loan.id} readOnly hidden />
          <button className={styles.deleteBtn} type='submit' disabled={pending}>
            {pending ? 'Cancelando...' : 'Cancelar Prestamo'}
          </button>
        </form>
      )}

      <div
        className={state.success ? styles.successMessage : styles.errorMessage}
      >
        {state.message}
      </div>

      {state.success && (
        <button className={styles.refreshPage} onClick={() => router.refresh()}>
          Actualizar página
        </button>
      )}
    </article>
  )
}
