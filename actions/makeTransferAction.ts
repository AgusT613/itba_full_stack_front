'use server'
import { getSessionToken } from '@/src/lib/getSessionToken'
import { TRANSFERS_ENDPOINT } from '@/utils/apiEndpoints'

export const handleTransfer = async (initialState, formData: FormData) => {
  const rawFormData = Object.fromEntries(formData)

  const response = await fetch(TRANSFERS_ENDPOINT.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${await getSessionToken()}`,
    },
    body: JSON.stringify(rawFormData),
  })

  const data = await response.json()

  return {
    success: response.ok,
    message: response.ok
      ? 'Transferencia realizada con exito'
      : `Error al realizar la transferencia. ${data.detail}`,
  }
}
