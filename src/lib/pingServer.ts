'use server'

import { api } from '@/src/lib/api/client'

export async function isServerAlive(): Promise<boolean> {
  try {
    const { response } = await api.HEAD('/api/itbank/server-alive')
    return response.ok
  } catch {
    return false
  }
}
