import createClient, { type Middleware } from 'openapi-fetch'
import { getSessionToken } from '@/src/lib/getSessionToken'
import type { paths } from '@/src/types/api'

const BASE_URL =
  process.env.API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  'http://localhost:8000'

export const api = createClient<paths>({
  baseUrl: BASE_URL,
  fetch: (...args) => fetch(...args),
})

const authMiddleware: Middleware = {
  async onRequest({ request }) {
    try {
      const token = await getSessionToken()
      if (token) {
        request.headers.set('Authorization', `Bearer ${token}`)
      }
    } catch {
      // Unauthenticated or public request: proceed without Authorization header
    }
    return request
  },
}

api.use(authMiddleware)
