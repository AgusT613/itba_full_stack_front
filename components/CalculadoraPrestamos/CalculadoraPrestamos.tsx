'use client'

import { useState } from 'react'

import styles from '@/styles/CalcPrestamos.module.css'

export default function CalculadoraPrestamos() {
  const [importe, setImporte] = useState(0)
  const [plazoAmortizacion, setPlazoAmortizacion] = useState(0)
  const [interes, setInteres] = useState(0)
  const [resultado, setResultado] = useState(0)

  const handleChangeImporte = (e) => setImporte(parseInt(e.target.value))
  const handleChangePlazo = (e) =>
    setPlazoAmortizacion(parseInt(e.target.value))
  const handleChangeInteres = (e) => setInteres(parseInt(e.target.value))

  const handleSubmit = (e) => {
    e.preventDefault()
    /*
      Formula para calculo de prestamos
        Cuota Mensual = (Capital * i) / [1 - (1+i) ** (-n)]

      Capital = dinero prestado (importe)
      i = interes en decimales
      n = numero total de plazos
    */
    if (importe > 0 && plazoAmortizacion > 0 && interes > 0) {
      const i = interes / 100 / 12
      const n = plazoAmortizacion * 12
      const cuotaMensual = (importe * i) / [1 - (1 + i) ** -n]
      setResultado(cuotaMensual.toFixed(2))
    } else {
      setResultado('Todos los campos deben ser mayor a cero')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <div>
          <label htmlFor='loan-amount'>Importe a financiar</label>
          <input
            id='loan-amount'
            type='number'
            placeholder='En $. Ej.: 80000'
            onChange={handleChangeImporte}
          />
        </div>
        <div>
          <label htmlFor='loan-period'>Plazo de amortizacion</label>
          <input
            id='loan-period'
            type='number'
            placeholder='En años. Ej.: 2'
            onChange={handleChangePlazo}
          />
        </div>
        <div>
          <label htmlFor='loan-interest'>Interes del prestador</label>
          <input
            id='loan-interest'
            type='number'
            placeholder='En %. Ej.: 5'
            onChange={handleChangeInteres}
          />
        </div>
        <input
          type='submit'
          value='Calcular'
          className={styles.btn_calcular_prestamo}
        />
      </form>
      <section className={styles.resultado}>
        <h3>Resultado de Cuota Mensual en $</h3>
        <span>{resultado}</span>
      </section>
    </>
  )
}
