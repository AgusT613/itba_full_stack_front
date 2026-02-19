'use server'
import { REGISTER_USER_ENDPOINT } from '@/constants/apiEndpoints'

export default async function userSignUp(formData: FormData) {
  const rawFormData = Object.fromEntries(formData)
  const response = await fetch(REGISTER_USER_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({
      username: rawFormData.username,
      password: rawFormData.password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (response.status !== 201) {
    return {
      message: `No se pudo crear el usuario. ${response.statusText}`,
      success: false,
      urlRedirection: '/inicio',
    }
  }

  return {
    message: 'Usuario creado, redirigiendo al homebanking',
    success: true,
    urlRedirection: '/inicio',
  }
}
