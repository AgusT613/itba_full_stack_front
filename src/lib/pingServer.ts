import { BASE_URL } from '@/utils/apiEndpoints'

export async function isServerAlive(
  url: string = `${BASE_URL}/server-alive`,
): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD', cache: 'no-store' })
    return response.ok
  } catch {
    return false
  }
}
