import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import InteractiveBankCard from '@/src/components/card/InteractiveBankCard'
import AnimatedBalance from '@/src/components/currentMoney/AnimatedBalance'

describe('InteractiveBankCard component', () => {
  it('renders output notification when user has no cards', () => {
    render(<InteractiveBankCard card={null} />)

    const outputElement = screen.getByRole('status')
    expect(outputElement).toBeInTheDocument()
    expect(
      screen.getByText(/no tenés ninguna tarjeta disponible para visualizar/i),
    ).toBeInTheDocument()
  })

  it('renders interactive 3D card when card data is provided and toggles flip state', () => {
    const mockCard = {
      brand: 'Visa',
      type: 'Crédito Black',
      number: '4532 8901 2345 6789',
      expirationDate: '08/29',
      cvv: '912',
      cardHolderName: 'AGUSTIN T.',
    }

    render(<InteractiveBankCard card={mockCard} />)

    // Assert card details
    expect(screen.getByText('ITBANK')).toBeInTheDocument()
    expect(screen.getByText('Crédito Black')).toBeInTheDocument()
    expect(screen.getByText('4532 8901 2345 6789')).toBeInTheDocument()
    expect(screen.getByText('AGUSTIN T.')).toBeInTheDocument()
    expect(screen.getByText('08/29')).toBeInTheDocument()
    expect(screen.getByText('Visa')).toBeInTheDocument()

    // Flip button toggling
    const flipButton = screen.getByRole('button', {
      name: /girar tarjeta \(ver cvv\)/i,
    })
    expect(flipButton).toBeInTheDocument()

    fireEvent.click(flipButton)
    expect(
      screen.getByRole('button', { name: /ver frente/i }),
    ).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /ver frente/i }))
    expect(
      screen.getByRole('button', { name: /girar tarjeta \(ver cvv\)/i }),
    ).toBeInTheDocument()
  })

  it('correctly maps snake_case TCard backend properties', () => {
    const tcard = {
      id: 1,
      account_id: 10,
      brand: 'Mastercard',
      card_type: 'Débito Gold',
      last_four: '7777',
      card_holder_name: 'MARIA LOPEZ',
      expiration_date: '10/27',
      status: 'active',
    }

    render(<InteractiveBankCard card={tcard} />)

    expect(screen.getByText('Débito Gold')).toBeInTheDocument()
    expect(screen.getByText('•••• •••• •••• 7777')).toBeInTheDocument()
    expect(screen.getByText('MARIA LOPEZ')).toBeInTheDocument()
    expect(screen.getByText('10/27')).toBeInTheDocument()
    expect(screen.getByText('Mastercard')).toBeInTheDocument()
  })
})

describe('AnimatedBalance component', () => {
  it('renders masked bullets when balance is not visible', () => {
    render(<AnimatedBalance balance={150000} isVisible={false} />)

    expect(screen.getByText('••••••')).toBeInTheDocument()
    expect(screen.queryByText('150.000')).toBeNull()
  })

  it('renders formatted currency when balance is visible', () => {
    render(<AnimatedBalance balance={150000} isVisible={true} />)

    expect(screen.getByText('150.000')).toBeInTheDocument()
    expect(screen.queryByText('••••••')).toBeNull()
  })
})
