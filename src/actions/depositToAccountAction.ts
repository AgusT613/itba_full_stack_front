'use server'
import { api } from '@/src/lib/api/client'

export const depositToAccount = async (initialState, formData: FormData) => {
  const alias = formData.get('alias') as string
  const amount = formData.get('amount') as string

  if (!alias || !amount) {
    return {
      message: 'Por favor, completa todos los campos.',
      success: false,
    }
  }

  const { error, response } = await api.POST('/api/homebanking/deposit/', {
    body: { alias, amount: parseFloat(amount) },
  })

  return {
    success: response.ok,
    message: response.ok
      ? 'Depósito realizado con éxito'
      : `Error al realizar el depósito. ${error?.detail || ''}`,
  }
}
