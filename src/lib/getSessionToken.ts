import { cookies } from 'next/headers'

export async function getSessionToken(): Promise<string> {
  const token = (await cookies()).get('session_token').value

  if (!token) {
    throw new Error('Session token not found')
  }

  return token
}
