import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import LoanCalculator from '@/src/components/loanCalculator/LoanCalculator'

describe('LoanCalculator component', () => {
  it('renders all form inputs and initial result', () => {
    render(<LoanCalculator />)

    expect(screen.getByLabelText(/importe a financiar/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/plazo de amortizacion/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/interes del prestador/i)).toBeInTheDocument()
    expect(screen.getByText('$0')).toBeInTheDocument()
  })

  it('calculates monthly amortization correctly on valid input', () => {
    render(<LoanCalculator />)

    const amountInput = screen.getByLabelText(/importe a financiar/i)
    const amortizationInput = screen.getByLabelText(/plazo de amortizacion/i)
    const interestInput = screen.getByLabelText(/interes del prestador/i)
    const calculateButton = screen.getByRole('button', { name: /calcular/i })

    fireEvent.change(amountInput, { target: { value: '100000' } })
    fireEvent.change(amortizationInput, { target: { value: '1' } }) // 1 year = 12 months
    fireEvent.change(interestInput, { target: { value: '12' } }) // 12% annual = 1% per month

    fireEvent.click(calculateButton)

    // Formula: (100000 * 0.01) / (1 - (1.01)^-12) ≈ 8884.88
    expect(screen.getByText('$8884.88')).toBeInTheDocument()
  })

  it('shows error message if fields are zero or negative', () => {
    render(<LoanCalculator />)

    const calculateButton = screen.getByRole('button', { name: /calcular/i })
    fireEvent.click(calculateButton)

    expect(
      screen.getByText('Todos los campos deben ser mayor a cero'),
    ).toBeInTheDocument()
  })
})
