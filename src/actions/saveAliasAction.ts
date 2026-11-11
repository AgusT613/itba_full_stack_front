'use server'

import { api } from '@/src/lib/api/client'

export const saveAlias = async (initialState, formData: FormData) => {
  const alias = formData.get('alias') as string

  const { response } = await api.POST('/api/homebanking/alias/save/{alias}', {
    params: {
      path: { alias },
    },
  })

  if (response.ok) {
    return {
      message: 'Alias guardado exitosamente',
      success: true,
    }
  }

  return {
    message: 'Error al guardar el alias',
    success: false,
  }
}
