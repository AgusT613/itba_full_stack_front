'use server'
import { cookies } from 'next/headers'

import { LOGIN_USER_ENDPOINT } from '@/utils/apiEndpoints'

export default async function userSignIn(formData: FormData) {
  const username = formData.get('username')
  const password = formData.get('password')
  const details = {
    username: username as string,
    password: password as string,
    grant_type: 'password',
  }

  const formBody = Object.keys(details)
    .map(
      (key) => encodeURIComponent(key) + '=' + encodeURIComponent(details[key]),
    )
    .join('&')

  const response = await fetch(LOGIN_USER_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  })

  if (!response.ok) {
    console.log(response)
    return { success: false, message: 'Credenciales inválidas' }
  }

  const data = await response.json()
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
}
