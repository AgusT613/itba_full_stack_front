'use client'

import { useState } from 'react'

import styles from './loanCalculator.module.css'

export default function LoanCalculator() {
  const [amount, setAmount] = useState(0)
  const [amortization, setAmortization] = useState(0)
  const [interest, setInterest] = useState(0)
  const [result, setResult] = useState<string>('$0')

  const handleChangeAmount = (e) => setAmount(parseInt(e.target.value))
  const handleChangeAmortization = (e) =>
    setAmortization(parseInt(e.target.value))
  const handleChangeInterest = (e) => setInterest(parseInt(e.target.value))

  const handleSubmit = (e) => {
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
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <label htmlFor='amount' className={styles.label}>
            Importe a financiar
          </label>
          <input
            className={styles.input}
            id='amount'
            type='number'
            placeholder='En $. Ej.: 80000'
            onChange={handleChangeAmount}
          />
        </div>
        <div className={styles.formRow}>
          <label htmlFor='period' className={styles.label}>
            Plazo de amortizacion
          </label>
          <input
            className={styles.input}
            id='period'
            type='number'
            placeholder='En años. Ej.: 2'
            onChange={handleChangeAmortization}
          />
        </div>
        <div className={styles.formRow}>
          <label htmlFor='interest' className={styles.label}>
            Interes del prestador
          </label>
          <input
            className={styles.input}
            id='interest'
            type='number'
            placeholder='En %. Ej.: 5'
            onChange={handleChangeInterest}
          />
        </div>
        <input type='submit' value='Calcular' className={styles.btn} />
      </form>

      <section className={styles.result}>
        <h3 className={styles.title}>Resultado de Cuota Mensual</h3>
        <span className={styles.amount}>{result}</span>
      </section>
    </>
  )
}
