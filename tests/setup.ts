import '@testing-library/jest-dom/vitest'
import { afterAll, afterEach, vi } from 'vitest'
import { server } from './mocks/server'

vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
    info: vi.fn(),
    promise: vi.fn(),
  },
  Toaster: () => null,
}))

server.listen()
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
