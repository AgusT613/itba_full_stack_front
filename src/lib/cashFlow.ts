import type { TTransfer } from '@/src/types/homebanking'

export interface CashFlowSummary {
  totalInflow: number
  totalOutflow: number
  netCashFlow: number
  chartData: Array<{
    name: string
    ingresos: number
    egresos: number
  }>
}

export function calculateCashFlow(
  transfers: TTransfer[],
  currentUsername: string,
): CashFlowSummary {
  let totalInflow = 0
  let totalOutflow = 0

  for (const transfer of transfers) {
    const amount = Number(transfer.balance) || 0
    if (transfer.receiver_username === currentUsername) {
      totalInflow += amount
    } else if (transfer.sender_username === currentUsername) {
      totalOutflow += amount
    }
  }

  const netCashFlow = totalInflow - totalOutflow

  const chartData = [
    {
      name: 'Flujo Total',
      ingresos: Math.round(totalInflow),
      egresos: Math.round(totalOutflow),
    },
  ]

  return {
    totalInflow: Math.round(totalInflow * 100) / 100,
    totalOutflow: Math.round(totalOutflow * 100) / 100,
    netCashFlow: Math.round(netCashFlow * 100) / 100,
    chartData,
  }
}
