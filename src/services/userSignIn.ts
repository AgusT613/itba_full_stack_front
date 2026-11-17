'use server'
import { cookies } from 'next/headers'
import { api } from '@/src/lib/api/client'

export default async function userSignIn(formData: FormData) {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  try {
    const { data, response } = await api.POST('/api/auth/token', {
      body: {
        username,
        password,
        grant_type: 'password',
        scope: '',
      },
      bodySerializer(body) {
        const params = new URLSearchParams()
        for (const [key, val] of Object.entries(body)) {
          if (val !== undefined && val !== null) {
            params.append(key, String(val))
          }
        }
        return params.toString()
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })

    if (!response.ok || !data?.access_token) {
      return { success: false, message: 'Credenciales inválidas' }
    }

    const cookieStore = await cookies()

    cookieStore.set('session_token', data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 30,
      path: '/',
    })

    return {
      success: true,
      message: 'Logueo exitoso. Redirigiendo a su homebanking...',
    }
  } catch {
    return {
      success: false,
      message:
        'El servidor no está disponible. Por favor, inténtalo de nuevo más tarde.',
    }
  }
}
