'use server'
import { getSessionToken } from '@/src/lib/getSessionToken'
import { DEPOSITS_ENDPOINT } from '@/utils/apiEndpoints'

export const depositToAccount = async (initialState, formData: FormData) => {
  const alias = formData.get('alias') as string
  const amount = formData.get('amount') as string

  if (!alias || !amount) {
    return {
      message: 'Por favor, completa todos los campos.',
      success: false,
    }
  }

  const response = await fetch(DEPOSITS_ENDPOINT.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${await getSessionToken()}`,
    },
    body: JSON.stringify({ alias, amount: parseFloat(amount) }),
  })

  const data = await response.json()

  return {
    success: response.ok,
    message: response.ok
      ? 'Depósito realizado con éxito'
      : `Error al realizar el depósito. ${data.detail}`,
  }
}
