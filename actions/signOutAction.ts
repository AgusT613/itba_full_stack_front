'use server'

import { cookies } from 'next/headers'

export default async function signOutAction() {
  (await cookies()).delete('auth')
}
