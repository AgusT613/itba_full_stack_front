'use client'

import { useRouter } from 'next/navigation'
import { useActionState } from 'react'
import { deleteLoan } from '@/actions/deleteLoanAction'
import { cn } from '@/src/lib/utils'
import type { TLoan } from '@/src/types/loan'

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
    <article className='bg-surface p-6 rounded-xl flex flex-col gap-3 shadow-md border border-surface-border'>
      <h3 className='text-xl font-bold text-center'>
        Prestamo {loan.loan_type}
      </h3>

      <ul className='flex flex-col gap-1.5 text-sm'>
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
          <button
            className='bg-danger-500 hover:bg-danger-600 active:bg-danger-700 text-white font-medium cursor-pointer rounded-md p-2 transition-colors w-full disabled:opacity-50'
            type='submit'
            disabled={pending}
          >
            {pending ? 'Cancelando...' : 'Cancelar Prestamo'}
          </button>
        </form>
      )}

      {state.message && (
        <div
          className={cn(
            'text-center font-medium text-sm',
            state.success ? 'text-success-500' : 'text-danger-500',
          )}
        >
          {state.message}
        </div>
      )}

      {state.success && (
        <button
          type='button'
          className='bg-success-500 hover:bg-success-600 text-white font-medium p-2 rounded-md cursor-pointer transition-colors w-full text-center text-sm'
          onClick={() => router.refresh()}
        >
          Actualizar página
        </button>
      )}
    </article>
  )
}
