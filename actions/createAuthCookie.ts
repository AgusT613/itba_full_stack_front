import { cookies } from 'next/headers'

export default async function createAuthCookie() {
  cookies().set('auth', 'true')
}
