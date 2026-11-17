import { cookies } from 'next/headers'

export async function getSessionToken(): Promise<string> {
  const cookie = (await cookies()).get('session_token')

  if (!cookie?.value) {
    throw new Error('Session token not found')
  }

  return cookie.value
}
