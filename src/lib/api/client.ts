import createClient, { type Middleware } from 'openapi-fetch'
import { getSessionToken } from '@/src/lib/getSessionToken'
import type { paths } from '@/src/types/api'

export const api = createClient<paths>({ baseUrl: process.env.API_URL })

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
