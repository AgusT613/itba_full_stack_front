import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/src/components/ui/alert-dialog'

describe('Accessible Primitives', () => {
  it('renders and toggles Accordion items', () => {
    render(
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger>¿Qué es ITBANK?</AccordionTrigger>
          <AccordionContent>Plataforma de Homebanking</AccordionContent>
        </AccordionItem>
      </Accordion>,
    )

    const trigger = screen.getByRole('button', { name: /¿Qué es ITBANK?/i })
    expect(trigger).toBeDefined()
    expect(trigger.getAttribute('aria-expanded')).toBe('false')

    fireEvent.click(trigger)
    expect(trigger.getAttribute('aria-expanded')).toBe('true')
    expect(screen.getByText('Plataforma de Homebanking')).toBeDefined()
  })

  it('renders AlertDialog and triggers open modal with accessible role', () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button type='button'>Abrir Modal</button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Acción</AlertDialogTitle>
            <AlertDialogDescription>
              ¿Está seguro de continuar?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction>Aceptar</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>,
    )

    expect(screen.queryByRole('alertdialog')).toBeNull()

    const openButton = screen.getByRole('button', { name: /Abrir Modal/i })
    fireEvent.click(openButton)

    const dialog = screen.getByRole('alertdialog')
    expect(dialog).toBeDefined()
    expect(screen.getByText('Confirmar Acción')).toBeDefined()
    expect(screen.getByText('¿Está seguro de continuar?')).toBeDefined()
    expect(screen.getByRole('button', { name: /Cancelar/i })).toBeDefined()
    expect(screen.getByRole('button', { name: /Aceptar/i })).toBeDefined()
  })
})
