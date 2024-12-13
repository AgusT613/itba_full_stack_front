'use server'

import { cookies } from 'next/headers'

export default async function signOutAction() {
  cookies().delete('auth')
}
