'use client'

import { type ChangeEvent, type FormEvent, useState } from 'react'
import {
  calculateAmortization,
  type LoanCalculationSummary,
} from '@/src/lib/amortization'
import LoanAmortizationChart from './LoanAmortizationChart'
import LoanBreakdownDonut from './LoanBreakdownDonut'

export default function LoanCalculator() {
  const [amount, setAmount] = useState(0)
  const [amortization, setAmortization] = useState(0)
  const [interest, setInterest] = useState(0)
  const [result, setResult] = useState<string>('$0')
  const [calculation, setCalculation] = useState<LoanCalculationSummary | null>(
    null,
  )

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) =>
    setAmount(Number.parseInt(e.target.value, 10) || 0)
  const handleChangeAmortization = (e: ChangeEvent<HTMLInputElement>) =>
    setAmortization(Number.parseInt(e.target.value, 10) || 0)
  const handleChangeInterest = (e: ChangeEvent<HTMLInputElement>) =>
    setInterest(Number.parseInt(e.target.value, 10) || 0)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (amount > 0 && amortization > 0 && interest > 0) {
      const summary = calculateAmortization(amount, amortization, interest)
      if (summary) {
        setCalculation(summary)
        setResult(`$${summary.monthlyFee.toFixed(2)}`)
      }
    } else {
      setCalculation(null)
      setResult('Todos los campos deben ser mayor a cero')
    }
  }

  return (
    <div className='flex flex-col gap-6'>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 md:grid-cols-3 gap-4 bg-surface p-6 rounded-2xl border border-surface-border shadow-md'
      >
        <div className='flex flex-col gap-2'>
          <label htmlFor='amount' className='font-bold text-sm text-foreground'>
            Importe a financiar
          </label>
          <input
            className='w-full text-foreground bg-surface-card border border-surface-border rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm'
            id='amount'
            type='number'
            placeholder='En $. Ej.: 80000'
            onChange={handleChangeAmount}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='period' className='font-bold text-sm text-foreground'>
            Plazo de amortizacion
          </label>
          <input
            className='w-full text-foreground bg-surface-card border border-surface-border rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm'
            id='period'
            type='number'
            placeholder='En años. Ej.: 2'
            onChange={handleChangeAmortization}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label
            htmlFor='interest'
            className='font-bold text-sm text-foreground'
          >
            Interes del prestador
          </label>
          <input
            className='w-full text-foreground bg-surface-card border border-surface-border rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm'
            id='interest'
            type='number'
            placeholder='En %. Ej.: 5'
            onChange={handleChangeInterest}
          />
        </div>
        <button
          type='submit'
          className='col-span-full cursor-pointer uppercase font-semibold text-sm p-3 bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white rounded-lg transition-colors shadow-sm'
        >
          Calcular
        </button>
      </form>

      <section className='p-6 flex flex-col sm:flex-row gap-4 items-center justify-between bg-surface rounded-2xl border border-surface-border shadow-md'>
        <h3 className='text-base font-semibold text-foreground/80'>
          Resultado de Cuota Mensual
        </h3>
        <span className='text-2xl font-bold text-foreground tracking-wide'>
          {result}
        </span>
      </section>

      {calculation && (
        <div className='flex flex-col gap-6 animate-in fade-in-50 duration-300'>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <div className='bg-surface border border-surface-border rounded-xl p-4 flex flex-col gap-1 shadow-sm'>
              <span className='text-xs text-foreground/70 font-medium'>
                Capital Solicitado
              </span>
              <span className='text-lg font-bold text-foreground'>
                ${calculation.principal.toLocaleString('es-AR')}
              </span>
            </div>

            <div className='bg-surface border border-surface-border rounded-xl p-4 flex flex-col gap-1 shadow-sm'>
              <span className='text-xs text-foreground/70 font-medium'>
                Intereses Totales
              </span>
              <span className='text-lg font-bold text-pink-600 dark:text-pink-400'>
                ${calculation.totalInterest.toLocaleString('es-AR')}
              </span>
            </div>

            <div className='bg-surface border border-surface-border rounded-xl p-4 flex flex-col gap-1 shadow-sm'>
              <span className='text-xs text-foreground/70 font-medium'>
                Total a Reintegrar
              </span>
              <span className='text-lg font-bold text-primary-600 dark:text-primary-300'>
                ${calculation.totalRepayment.toLocaleString('es-AR')}
              </span>
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 bg-surface p-6 rounded-2xl border border-surface-border shadow-md'>
            <LoanBreakdownDonut
              principal={calculation.principal}
              totalInterest={calculation.totalInterest}
            />
            <LoanAmortizationChart schedule={calculation.schedule} />
          </div>
        </div>
      )}
    </div>
  )
}
