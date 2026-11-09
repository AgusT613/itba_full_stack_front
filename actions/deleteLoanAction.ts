'use server'
import { getSessionToken } from '@/src/lib/getSessionToken'
import { LOANS_ENDPOINT } from '@/utils/apiEndpoints'

export const deleteLoan = async (initialState, formData: FormData) => {
  const loanId = formData.get('loan_id') as string

  const response = await fetch(`${LOANS_ENDPOINT.toString()}/${loanId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${await getSessionToken()}`,
    },
  })

  const data = await response.json()

  return {
    success: response.ok,
    message: response.ok
      ? 'Préstamo eliminado con éxito'
      : `Error al eliminar el préstamo. ${data.detail}`,
  }
}
