import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeToggle } from '@/src/components/theme/ThemeToggle'

const mockSetTheme = vi.fn()

vi.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'dark',
    setTheme: mockSetTheme,
  }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}))

describe('ThemeToggle component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders theme switcher controls after mounting', () => {
    render(<ThemeToggle />)

    expect(
      screen.getByRole('group', { name: /seleccionar tema visual/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /tema claro/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /tema oscuro/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /tema del sistema/i }),
    ).toBeInTheDocument()
  })

  it('indicates active theme with aria-pressed', () => {
    render(<ThemeToggle />)

    const darkButton = screen.getByRole('button', { name: /tema oscuro/i })
    expect(darkButton).toHaveAttribute('aria-pressed', 'true')

    const lightButton = screen.getByRole('button', { name: /tema claro/i })
    expect(lightButton).toHaveAttribute('aria-pressed', 'false')
  })

  it('calls setTheme with light when light theme button is clicked', () => {
    render(<ThemeToggle />)

    const lightButton = screen.getByRole('button', { name: /tema claro/i })
    fireEvent.click(lightButton)

    expect(mockSetTheme).toHaveBeenCalledWith('light')
  })

  it('calls setTheme with dark when dark theme button is clicked', () => {
    render(<ThemeToggle />)

    const darkButton = screen.getByRole('button', { name: /tema oscuro/i })
    fireEvent.click(darkButton)

    expect(mockSetTheme).toHaveBeenCalledWith('dark')
  })

  it('calls setTheme with system when system theme button is clicked', () => {
    render(<ThemeToggle />)

    const systemButton = screen.getByRole('button', {
      name: /tema del sistema/i,
    })
    fireEvent.click(systemButton)

    expect(mockSetTheme).toHaveBeenCalledWith('system')
  })
})
