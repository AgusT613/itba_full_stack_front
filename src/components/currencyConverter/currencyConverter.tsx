'use client'

import type { ChangeEvent } from 'react'
import useCurrencyConverter from '@/src/hooks/useCurrencyConverter'

export default function CurrencyConverter() {
  const {
    mainAmount,
    setMainAmount,
    setMainCurrency,
    secondAmount,
    setSecondCurrency,
  } = useCurrencyConverter()

  const handleAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const val = Number.parseFloat(e.target.value)
    if (!Number.isNaN(val) && val > 0) {
      setMainAmount(val)
    }
  }

  return (
    <form className='bg-surface rounded-xl flex flex-col md:flex-row gap-4 p-6 self-center w-full max-w-xl mx-auto shadow-md border border-surface-border'>
      <div className='flex flex-col gap-2 flex-1'>
        <input
          className='w-full h-16 text-3xl font-bold bg-transparent text-foreground border-b-2 border-primary-400 focus:outline-none focus:border-primary-300 p-2'
          onChange={handleAmount}
          defaultValue={mainAmount}
          type='number'
        />
        <select
          className='text-foreground bg-black/40 border border-surface-border rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500'
          name='from'
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setMainCurrency(e.target.value)
          }
        >
          <option value='ARS' className='text-black bg-white'>
            ARS
          </option>
          <option value='USD' className='text-black bg-white'>
            USD
          </option>
          <option value='EUR' className='text-black bg-white'>
            EUR
          </option>
        </select>
      </div>

      <div className='flex flex-col gap-2 flex-1'>
        <span className='w-full h-16 text-3xl font-bold flex items-center bg-transparent text-foreground border-b-2 border-surface-border p-2'>
          {secondAmount}
        </span>
        <select
          className='text-foreground bg-black/40 border border-surface-border rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500'
          name='to'
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setSecondCurrency(e.target.value)
          }
        >
          <option value='USD' className='text-black bg-white'>
            USD
          </option>
          <option value='EUR' className='text-black bg-white'>
            EUR
          </option>
          <option value='ARS' className='text-black bg-white'>
            ARS
          </option>
        </select>
      </div>
    </form>
  )
}
