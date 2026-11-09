import { PUBLIC_ENDPOINT } from '@/utils/apiEndpoints'

export async function isServerAlive(
  url: string = `${PUBLIC_ENDPOINT}server-alive`,
): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD', cache: 'no-store' })
    return response.ok
  } catch {
    return false
  }
}
