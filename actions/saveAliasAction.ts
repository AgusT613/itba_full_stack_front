'use server'

import { getSessionToken } from '@/src/lib/getSessionToken'
import { ALIAS_ENDPOINT } from '@/utils/apiEndpoints'

export const saveAlias = async (initialState, formData: FormData) => {
  const alias = formData.get('alias')

  const response = await fetch(`${ALIAS_ENDPOINT.toString()}/save/${alias}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${await getSessionToken()}`,
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
