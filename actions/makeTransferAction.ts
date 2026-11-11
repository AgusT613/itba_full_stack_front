'use server'
import { api } from '@/src/lib/api/client'

export const handleTransfer = async (initialState, formData: FormData) => {
  const sender_alias = formData.get('sender_alias') as string
  const receiver_alias = formData.get('receiver_alias') as string
  const balance = parseFloat(formData.get('balance') as string)

  const { error, response } = await api.POST('/api/homebanking/transfers/', {
    body: {
      sender_alias,
      receiver_alias,
      balance,
    },
  })

  return {
    success: response.ok,
    message: response.ok
      ? 'Transferencia realizada con exito'
      : `Error al realizar la transferencia. ${error?.detail || ''}`,
  }
}
