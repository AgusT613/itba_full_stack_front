'use server'
import { api } from '@/src/lib/api/client'

export const requestLoan = async (initialState, formData: FormData) => {
  const dueDate = new Date(formData.get('due_date') as string)

  if (Number.isNaN(dueDate.getTime())) {
    return {
      success: false,
      message: 'Fecha de vencimiento no válida',
    }
  }

  const branch_office_id = Number(formData.get('branch_office_id'))
  const user_account_id = Number(formData.get('user_account_id'))
  const loan_type = formData.get('loan_type') as string
  const amount = Number(formData.get('amount'))
  const interest_rate = Number(formData.get('interest_rate'))
  const total_installments = Number(formData.get('total_installments'))

  const { error, response } = await api.POST('/api/homebanking/loans/', {
    body: {
      branch_office_id,
      user_account_id,
      loan_type,
      due_date: dueDate.getTime(),
      amount,
      interest_rate,
      total_installments,
    },
  })

  return {
    success: response.ok,
    message: response.ok
      ? 'Préstamo solicitado con éxito'
      : `Error al solicitar el préstamo. ${error?.detail || ''}`,
  }
}
