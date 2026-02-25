import { useEffect, useState } from 'react'

import { getCurrencyConversion } from '@/src/services/getCurrencyConversion'

export default function useCurrencyConverter() {
  const [mainCurrency, setMainCurrency] = useState('ARS')
  const [mainAmount, setMainAmount] = useState(1)

  const [secondCurrency, setSecondCurrency] = useState('USD')
  const [secondAmount, setSecondAmount] = useState(null)

  useEffect(() => {
    getCurrencyConversion(mainCurrency).then((data) => {
      const conversion = mainAmount * data.rates[secondCurrency]

      if (conversion > 0 && conversion < 1) {
        setSecondAmount(conversion.toFixed(5))
      } else if (Number.isInteger(conversion)) {
        setSecondAmount(Math.floor(conversion))
      } else {
        setSecondAmount(conversion.toFixed(2))
      }
    })
  }, [mainCurrency, mainAmount, secondCurrency])

  return {
    mainAmount,
    setMainAmount,
    secondAmount,
    setMainCurrency,
    setSecondCurrency,
  }
}
