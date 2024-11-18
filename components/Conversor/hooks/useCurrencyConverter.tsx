import { useEffect, useState } from 'react'
import { obtenerConversion } from '../service/obtenerConversion'

export default function useCurrencyConverter() {
  const [monedaUno, setMonedaUno] = useState('ARS')
  const [valorUno, setValorUno] = useState(1)
  const [monedaDos, setMonedaDos] = useState('USD')
  const [valorDos, setValorDos] = useState(null)

  useEffect(() => {
    obtenerConversion(monedaUno).then((data) => {
      const conversion = valorUno * data.rates[monedaDos]
      if (conversion > 0 && conversion < 1) {
        const redondeoCincoDecimales = conversion.toFixed(5)
        setValorDos(redondeoCincoDecimales)
      } else if (Number.isInteger(conversion)) {
        const conversionSinDecimales = Math.floor(conversion)
        setValorDos(conversionSinDecimales)
      } else {
        const redondeDosDecimales = conversion.toFixed(2)
        setValorDos(redondeDosDecimales)
      }
    })
  }, [monedaUno, valorUno, monedaDos])

  return {
    valorUno,
    setValorUno,
    valorDos,
    setValorDos,
    setMonedaUno,
    setMonedaDos,
  }
}
