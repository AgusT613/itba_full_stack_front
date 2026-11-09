export interface AmortizationPoint {
  month: number
  year: number
  remainingBalance: number
  principalPaid: number
  interestPaid: number
  totalPayment: number
}

export interface LoanCalculationSummary {
  monthlyFee: number
  totalRepayment: number
  totalInterest: number
  principal: number
  schedule: AmortizationPoint[]
}

export function calculateAmortization(
  principal: number,
  years: number,
  annualInterestRate: number,
): LoanCalculationSummary | null {
  if (principal <= 0 || years <= 0 || annualInterestRate < 0) {
    return null
  }

  const n = Math.round(years * 12)
  const r = annualInterestRate / 100 / 12

  let monthlyFee: number
  if (r === 0) {
    monthlyFee = principal / n
  } else {
    monthlyFee = (principal * r) / (1 - (1 + r) ** -n)
  }

  const totalRepayment = monthlyFee * n
  const totalInterest = Math.max(0, totalRepayment - principal)

  const schedule: AmortizationPoint[] = []
  let remainingBalance = principal

  // We record monthly schedule, or aggregate if term is long for chart readability
  for (let month = 1; month <= n; month++) {
    const interestPaid = r === 0 ? 0 : remainingBalance * r
    const principalPaid = monthlyFee - interestPaid
    remainingBalance = Math.max(0, remainingBalance - principalPaid)

    schedule.push({
      month,
      year: Math.ceil(month / 12),
      remainingBalance: Math.round(remainingBalance),
      principalPaid: Math.round(principalPaid),
      interestPaid: Math.round(interestPaid),
      totalPayment: Math.round(monthlyFee),
    })
  }

  return {
    monthlyFee: Math.round(monthlyFee * 100) / 100,
    totalRepayment: Math.round(totalRepayment * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    principal: Math.round(principal * 100) / 100,
    schedule,
  }
}
