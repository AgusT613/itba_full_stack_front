import { cookies } from 'next/headers'

export default async function createAuthCookie() {
  (await cookies()).set('auth', 'true')
}
