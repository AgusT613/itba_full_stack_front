import { describe, expect, it, vi } from 'vitest'
import { depositToAccount } from '@/actions/depositToAccountAction'

vi.mock('@/src/lib/getSessionToken', () => ({
  getSessionToken: vi.fn().mockResolvedValue('mocked-jwt-token'),
}))

describe('depositToAccount Server Action', () => {
  it('returns an error if required fields are missing', async () => {
    const formData = new FormData()
    const result = await depositToAccount(null, formData)

    expect(result.success).toBe(false)
    expect(result.message).toContain('Por favor, completa todos los campos.')
  })

  it('successfully deposits to an account using MSW mock', async () => {
    const formData = new FormData()
    formData.append('alias', 'TEST.ALIAS')
    formData.append('amount', '5000')

    const result = await depositToAccount(null, formData)

    expect(result.success).toBe(true)
    expect(result.message).toBe('Depósito realizado con éxito')
  })
})
