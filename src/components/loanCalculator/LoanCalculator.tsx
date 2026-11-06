'use client'

import { type ChangeEvent, type FormEvent, useState } from 'react'

export default function LoanCalculator() {
  const [amount, setAmount] = useState(0)
  const [amortization, setAmortization] = useState(0)
  const [interest, setInterest] = useState(0)
  const [result, setResult] = useState<string>('$0')

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) =>
    setAmount(Number.parseInt(e.target.value, 10) || 0)
  const handleChangeAmortization = (e: ChangeEvent<HTMLInputElement>) =>
    setAmortization(Number.parseInt(e.target.value, 10) || 0)
  const handleChangeInterest = (e: ChangeEvent<HTMLInputElement>) =>
    setInterest(Number.parseInt(e.target.value, 10) || 0)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    /*
      Formula para calculo de prestamos
        Cuota Mensual = (Capital * i) / (1 - (1+i) ** (-n))

      Capital = dinero prestado (amount)
      i = interes en decimales
      n = numero total de plazos
    */
    if (amount > 0 && amortization > 0 && interest > 0) {
      const i = interest / 100 / 12
      const n = amortization * 12
      const monthFee = (amount * i) / (1 - (1 + i) ** -n)
      setResult(`$${monthFee.toFixed(2)}`)
    } else {
      setResult('Todos los campos deben ser mayor a cero')
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='my-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-black/20 p-5 rounded-xl'
      >
        <div className='flex flex-col gap-2'>
          <label htmlFor='amount' className='font-bold text-sm'>
            Importe a financiar
          </label>
          <input
            className='w-full text-black bg-white rounded-md p-2 border-none focus:outline-none focus:ring-2 focus:ring-primary-400'
            id='amount'
            type='number'
            placeholder='En $. Ej.: 80000'
            onChange={handleChangeAmount}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='period' className='font-bold text-sm'>
            Plazo de amortizacion
          </label>
          <input
            className='w-full text-black bg-white rounded-md p-2 border-none focus:outline-none focus:ring-2 focus:ring-primary-400'
            id='period'
            type='number'
            placeholder='En años. Ej.: 2'
            onChange={handleChangeAmortization}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='interest' className='font-bold text-sm'>
            Interes del prestador
          </label>
          <input
            className='w-full text-black bg-white rounded-md p-2 border-none focus:outline-none focus:ring-2 focus:ring-primary-400'
            id='interest'
            type='number'
            placeholder='En %. Ej.: 5'
            onChange={handleChangeInterest}
          />
        </div>
        <input
          type='submit'
          value='Calcular'
          className='col-span-full cursor-pointer uppercase font-semibold text-base p-2 bg-white text-black hover:bg-black/50 hover:text-white active:bg-black/30 rounded-md transition-all'
        />
      </form>

      <section className='p-4 flex gap-4 flex-wrap items-center justify-around bg-black/20 rounded-xl'>
        <h3 className='text-center text-balance text-base'>
          Resultado de Cuota Mensual
        </h3>
        <span className='text-base font-bold'>{result}</span>
      </section>
    </>
  )
}
