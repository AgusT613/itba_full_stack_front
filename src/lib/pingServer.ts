import { BASE_URL } from '@/utils/apiEndpoints'

export async function isServerAlive(url: string = BASE_URL): Promise<boolean> {
  try {
    await fetch(url, { method: 'HEAD', cache: 'no-store' })
    return true
  } catch {
    return false
  }
}
