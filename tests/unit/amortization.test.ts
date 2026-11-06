import { describe, expect, it } from 'vitest'
import { calculateAmortization } from '@/src/lib/amortization'
import { calculateCashFlow } from '@/src/lib/cashFlow'
import type { TTransfer } from '@/src/types/homebanking'

describe('Amortization calculation engine', () => {
  it('calculates French amortization schedule correctly for standard loan', () => {
    // $100,000 at 12% annual interest for 1 year
    const summary = calculateAmortization(100000, 1, 12)

    expect(summary).not.toBeNull()
    if (!summary) return

    expect(summary.monthlyFee).toBe(8884.88)
    expect(summary.totalRepayment).toBe(106618.55)
    expect(summary.totalInterest).toBe(6618.55)
    expect(summary.schedule).toHaveLength(12)

    // First month checks
    expect(summary.schedule[0].month).toBe(1)
    expect(summary.schedule[0].interestPaid).toBe(1000)
    expect(summary.schedule[0].principalPaid).toBe(7885)

    // Last month should bring remaining balance to 0
    expect(summary.schedule[11].remainingBalance).toBe(0)
  })

  it('handles 0% interest loans correctly', () => {
    const summary = calculateAmortization(60000, 1, 0)

    expect(summary).not.toBeNull()
    if (!summary) return

    expect(summary.monthlyFee).toBe(5000)
    expect(summary.totalRepayment).toBe(60000)
    expect(summary.totalInterest).toBe(0)
    expect(summary.schedule[11].remainingBalance).toBe(0)
  })

  it('returns null on invalid inputs (0 or negative values)', () => {
    expect(calculateAmortization(0, 1, 10)).toBeNull()
    expect(calculateAmortization(10000, 0, 10)).toBeNull()
    expect(calculateAmortization(-5000, 1, 10)).toBeNull()
    expect(calculateAmortization(10000, 1, -5)).toBeNull()
  })
})

describe('Cash flow calculation engine', () => {
  const mockTransfers: TTransfer[] = [
    {
      id: 1,
      sender_username: 'juan',
      receiver_username: 'agus',
      balance: 15000,
      transfer_date: '2024-05-01',
      transfer_type: 'inflow',
    },
    {
      id: 2,
      sender_username: 'agus',
      receiver_username: 'pedro',
      balance: 5000,
      transfer_date: '2024-05-02',
      transfer_type: 'outflow',
    },
    {
      id: 3,
      sender_username: 'maria',
      receiver_username: 'agus',
      balance: 20000,
      transfer_date: '2024-05-03',
      transfer_type: 'inflow',
    },
  ]

  it('aggregates inflows, outflows and calculates net flow correctly', () => {
    const result = calculateCashFlow(mockTransfers, 'agus')

    expect(result.totalInflow).toBe(35000)
    expect(result.totalOutflow).toBe(5000)
    expect(result.netCashFlow).toBe(30000)
    expect(result.chartData[0].ingresos).toBe(35000)
    expect(result.chartData[0].egresos).toBe(5000)
  })

  it('handles empty transfers without errors', () => {
    const result = calculateCashFlow([], 'agus')

    expect(result.totalInflow).toBe(0)
    expect(result.totalOutflow).toBe(0)
    expect(result.netCashFlow).toBe(0)
  })
})
