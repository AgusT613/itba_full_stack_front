'use client'

import useCurrencyConverter from '@/hooks/useCurrencyConverter'

import styles from './currencyConverter.module.css'

export default function CurrencyConverter() {
  const {
    mainAmount,
    setMainAmount,
    setMainCurrency,
    secondAmount,
    setSecondCurrency,
  } = useCurrencyConverter()

  const handleAmount = (e) => {
    if (e.target.value.length >= 1 && e.target.value > 0) {
      setMainAmount(e.target.value)
    }
  }

  return (
    <form className={styles.form}>
      <div className={styles.box}>
        <input
          className={styles.moneyAmount}
          onChange={handleAmount}
          defaultValue={mainAmount}
        />
        <select
          className={styles.selectCurrency}
          name='from'
          onChange={(e) => setMainCurrency(e.target.value)}
        >
          <option value='ARS'>ARS</option>
          <option value='USD'>USD</option>
          <option value='EUR'>EUR</option>
        </select>
      </div>

      <div className={styles.box}>
        <span className={styles.moneyAmount}>{secondAmount}</span>
        <select
          className={styles.selectCurrency}
          name='to'
          onChange={(e) => setSecondCurrency(e.target.value)}
        >
          <option value='USD'>USD</option>
          <option value='EUR'>EUR</option>
          <option value='ARS'>ARS</option>
        </select>
      </div>
    </form>
  )
}
