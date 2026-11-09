import { describe, expect, it } from 'vitest'
import { toFormatDateString } from '@/utils/toDate'

describe('toFormatDateString utility', () => {
  it('formats an ISO date string to es-AR locale format', () => {
    const formatted = toFormatDateString('2026-11-05T00:00:00Z')
    expect(formatted).toBeDefined()
    expect(typeof formatted).toBe('string')
  })

  it('throws an error when provided an invalid date string', () => {
    expect(() => toFormatDateString('invalid-date')).toThrow(
      'Invalid date string: invalid-date',
    )
  })
})
