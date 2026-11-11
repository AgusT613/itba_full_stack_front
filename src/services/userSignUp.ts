'use server'
import { api } from '@/src/lib/api/client'

export default async function userSignUp(formData: FormData) {
  const username = formData.get('username') as string
  const password = formData.get('password') as string
  const email = (formData.get('email') as string) || null
  const full_name = (formData.get('full_name') as string) || null

  const { data, response } = await api.POST('/api/auth/register', {
    body: {
      username,
      password,
      email,
      full_name,
    },
  })

  if (response.status !== 201 || !data) {
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
