'use server'
import { getSessionToken } from '@/src/lib/getSessionToken'
import { LOANS_ENDPOINT } from '@/utils/apiEndpoints'

export const requestLoan = async (initialState, formData: FormData) => {
  const rawFormData = Object.fromEntries(formData)
  const dueDate = new Date(formData.get('due_date') as string)

  if (Number.isNaN(dueDate.getTime())) {
    return {
      success: false,
      message: 'Fecha de vencimiento no válida',
    }
  }

  const response = await fetch(LOANS_ENDPOINT.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${await getSessionToken()}`,
    },
    body: JSON.stringify({ ...rawFormData, due_date: dueDate.getTime() }),
  })

  const data = await response.json()

  return {
    success: response.ok,
    message: response.ok
      ? 'Préstamo solicitado con éxito'
      : `Error al solicitar el préstamo. ${data.detail}`,
  }
}
