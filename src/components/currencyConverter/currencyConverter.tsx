'use client'

import type { ChangeEvent } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select'
import useCurrencyConverter from '@/src/hooks/useCurrencyConverter'

export default function CurrencyConverter() {
  const {
    mainAmount,
    setMainAmount,
    mainCurrency,
    setMainCurrency,
    secondAmount,
    secondCurrency,
    setSecondCurrency,
  } = useCurrencyConverter()

  const handleAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const val = Number.parseFloat(e.target.value)
    if (!Number.isNaN(val) && val > 0) {
      setMainAmount(val)
    }
  }

  return (
    <form className='bg-surface rounded-xl flex flex-col md:flex-row gap-6 p-6 self-center w-full max-w-xl mx-auto shadow-md border border-surface-border'>
      <div className='flex flex-col gap-3 flex-1'>
        <span className='text-xs font-semibold text-foreground/70 uppercase tracking-wider'>
          De
        </span>
        <input
          aria-label='Monto a convertir'
          className='w-full h-16 text-3xl font-bold bg-transparent text-foreground border-b-2 border-primary-400 focus:outline-none focus:border-primary-300 p-2'
          onChange={handleAmount}
          defaultValue={mainAmount}
          type='number'
        />
        <Select value={mainCurrency} onValueChange={setMainCurrency}>
          <SelectTrigger aria-label='Moneda de origen'>
            <SelectValue placeholder='Seleccionar moneda' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='ARS'>ARS - Peso Argentino</SelectItem>
            <SelectItem value='USD'>USD - Dólar Estadounidense</SelectItem>
            <SelectItem value='EUR'>EUR - Euro</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='flex flex-col gap-3 flex-1'>
        <span className='text-xs font-semibold text-foreground/70 uppercase tracking-wider'>
          A
        </span>
        <output
          aria-label='Monto convertido'
          className='w-full h-16 text-3xl font-bold flex items-center bg-transparent text-foreground border-b-2 border-surface-border p-2'
        >
          {secondAmount ?? '...'}
        </output>
        <Select value={secondCurrency} onValueChange={setSecondCurrency}>
          <SelectTrigger aria-label='Moneda de destino'>
            <SelectValue placeholder='Seleccionar moneda' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='USD'>USD - Dólar Estadounidense</SelectItem>
            <SelectItem value='EUR'>EUR - Euro</SelectItem>
            <SelectItem value='ARS'>ARS - Peso Argentino</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </form>
  )
}
