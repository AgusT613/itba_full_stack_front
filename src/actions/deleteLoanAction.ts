'use server'
import { api } from '@/src/lib/api/client'

export const deleteLoan = async (initialState, formData: FormData) => {
  const loanId = Number(formData.get('loan_id'))

  const { error, response } = await api.DELETE(
    '/api/homebanking/loans/{loan_id}',
    {
      params: {
        path: { loan_id: loanId },
      },
    },
  )

  return {
    success: response.ok,
    message: response.ok
      ? 'Préstamo eliminado con éxito'
      : `Error al eliminar el préstamo. ${error?.detail || ''}`,
  }
}
