'use client'

import { useRouter } from 'next/navigation'
import { useActionState, useEffect, useRef } from 'react'
import { toast } from 'sonner'
import { requestLoan } from '@/actions/requestLoanAction'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select'
import type { TBranchOffice } from '@/src/types/branchOffice'
import type { TUserBankAccount } from '@/src/types/homebanking'

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

  useEffect(() => {
    if (!state.message) return

    if (state.success) {
      toast.success('Solicitud de préstamo enviada', {
        description: state.message,
      })
      formRef.current?.reset()
    } else {
      toast.error('Error en la solicitud de préstamo', {
        description: state.message,
      })
    }
  }, [state])

  const handleFormReset = () => {
    formRef.current?.reset()
  }

  const handleResetPage = () => {
    router.refresh()
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      className='flex flex-col items-center justify-center gap-4 py-8 px-4 rounded-lg w-full max-w-2xl mx-auto'
    >
      <fieldset className='w-full border-2 border-surface-border p-4 sm:p-6 rounded-lg flex flex-col gap-4'>
        <legend className='mx-4 sm:mx-8 px-2 text-lg font-medium'>
          Préstamo
        </legend>

        <div className='grid grid-cols-1 md:grid-cols-[1fr_minmax(18rem,2fr)] items-center gap-2 md:gap-4'>
          <label htmlFor='branch_office_id' className='text-sm font-medium'>
            Sucursal
          </label>
          <Select name='branch_office_id'>
            <SelectTrigger id='branch_office_id'>
              <SelectValue placeholder='Elegir sucursal' />
            </SelectTrigger>
            <SelectContent>
              {branchOfficesList.map((sucursal) => (
                <SelectItem value={String(sucursal.id)} key={sucursal.id}>
                  {sucursal.name} - {sucursal.address}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-[1fr_minmax(18rem,2fr)] items-center gap-2 md:gap-4'>
          <label htmlFor='user_account_id' className='text-sm font-medium'>
            Cuenta de usuario
          </label>
          <Select name='user_account_id'>
            <SelectTrigger id='user_account_id'>
              <SelectValue placeholder='Elegir cuenta de usuario' />
            </SelectTrigger>
            <SelectContent>
              {bankAccounts.map((account) => (
                <SelectItem value={String(account.id)} key={account.id}>
                  {account.alias} - {account.account_number}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-[1fr_minmax(18rem,2fr)] items-center gap-2 md:gap-4'>
          <label htmlFor='loan_type' className='text-sm font-medium'>
            Tipo de préstamo
          </label>
          <Select name='loan_type'>
            <SelectTrigger id='loan_type'>
              <SelectValue placeholder='Elegir tipo de prestamo' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='hipotecario'>Préstamo hipotecario</SelectItem>
              <SelectItem value='personal'>Préstamo personal</SelectItem>
              <SelectItem value='prendario'>Préstamo prendario</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-[1fr_minmax(18rem,2fr)] items-center gap-2 md:gap-4'>
          <label htmlFor='due_date' className='text-sm font-medium'>
            Fecha de finalización del préstamo
          </label>
          <input
            id='due_date'
            type='date'
            name='due_date'
            className='w-full p-2 rounded-md bg-transparent border-2 border-black/40 focus:outline-none focus:border-primary-500'
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-[1fr_minmax(18rem,2fr)] items-center gap-2 md:gap-4'>
          <label htmlFor='amount' className='text-sm font-medium'>
            Monto
          </label>
          <input
            id='amount'
            type='number'
            name='amount'
            placeholder='500000'
            className='w-full p-2 rounded-md bg-transparent border-2 border-black/40 focus:outline-none focus:border-primary-500'
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-[1fr_minmax(18rem,2fr)] items-center gap-2 md:gap-4'>
          <label htmlFor='interest_rate' className='text-sm font-medium'>
            Tasa de interés
          </label>
          <input
            id='interest_rate'
            type='number'
            name='interest_rate'
            placeholder='0.15'
            step='0.01'
            className='w-full p-2 rounded-md bg-transparent border-2 border-black/40 focus:outline-none focus:border-primary-500'
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-[1fr_minmax(18rem,2fr)] items-center gap-2 md:gap-4'>
          <label htmlFor='total_installments' className='text-sm font-medium'>
            Cantidad de cuotas
          </label>
          <input
            id='total_installments'
            type='number'
            name='total_installments'
            placeholder='24'
            className='w-full p-2 rounded-md bg-transparent border-2 border-black/40 focus:outline-none focus:border-primary-500'
          />
        </div>
      </fieldset>

      <div className='flex flex-wrap gap-4 justify-center self-center mt-2'>
        <input
          type='button'
          onClick={handleFormReset}
          value='Reiniciar formulario'
          className='w-40 rounded-md p-2 cursor-pointer bg-black/20 hover:bg-black/60 transition-colors font-medium text-sm'
        />
        <input
          type='submit'
          disabled={pending}
          value={pending ? 'Enviando...' : 'Pedir préstamo'}
          className='w-40 rounded-md p-2 cursor-pointer bg-black/20 hover:bg-black/60 transition-colors font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed'
        />
        {state.success && (
          <input
            type='button'
            onClick={handleResetPage}
            value='Recargar página'
            className='w-40 rounded-md p-2 cursor-pointer bg-black/20 hover:bg-black/60 transition-colors font-medium text-sm'
          />
        )}
      </div>
    </form>
  )
}
