'use client'
import { useCurrencyConverter } from './hooks/useCurrencyConverter'
import { CantidadEnPesos } from './components/CantidadEnPesos'
import { ConversionADolar } from './components/ConversionADolar'
import styles from './Conversor.module.css'

export const Conversor = () => {
  const { valorUno, setValorUno, valorDos, setMonedaUno, setMonedaDos } = useCurrencyConverter()

  const leerCantidadAConvertir = e => {
    if (e.target.value.length >= 1 && e.target.value > 0) {
      setValorUno(e.target.value)
    }
  }
  const leerCambioMonedaUno = e => setMonedaUno(e.target.value)
  const leerCambioMonedaDos = e => setMonedaDos(e.target.value)

  return (
    <section className={styles.contenedor_conversor_divisas}>
      <h2>Conversor</h2>
      <form className={styles.formulario_conversor}>
        <CantidadEnPesos
          valorUno={valorUno}
          leerCantidadAConvertir={leerCantidadAConvertir}
          leerCambioMonedaUno={leerCambioMonedaUno}
        />
        <ConversionADolar
          valorDos={valorDos}
          leerCambioMonedaDos={leerCambioMonedaDos}
        />
      </form>
    </section>
  )
}
