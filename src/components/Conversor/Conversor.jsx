import { useEffect, useState } from 'react'
import styles from './Conversor.module.css'

export const Conversor = () => {
  const [monedaUno, setMonedaUno] = useState('ARS')
  const [valorUno, setValorUno] = useState(1)
  const [monedaDos, setMonedaDos] = useState('USD')
  const [valorDos, setValorDos] = useState(null)

  useEffect(() => {
    async function obtenerConversion (monedaUno) {
      try {
        const data = await fetch(`https://api.exchangerate-api.com/v4/latest/${monedaUno}`)
        return data.json()
      } catch (error) {
        console.log(error)
      }
    }
    obtenerConversion(monedaUno)
      .then(data => {
        const conversion = valorUno * data.rates[monedaDos]
        const redondeo = conversion.toFixed(5)
        setValorDos(redondeo)
      })
  }, [monedaUno, valorUno, monedaDos])

  return (
    <>
      <h2>Conversor</h2>
      <form>
        <label htmlFor='deMoneda'>De:</label>
        <select name='deMoneda' onChange={(e) => setMonedaUno(e.target.value)}>
          <option value='ARS'>ARS</option>
          <option value='USD'>USD</option>
          <option value='EUR'>EUR</option>
        </select>
        <label htmlFor='aMoneda'>A:</label>
        <select name='aMoneda' onChange={(e) => setMonedaDos(e.target.value)}>
          <option value='USD'>USD</option>
          <option value='EUR'>EUR</option>
          <option value='ARS'>ARS</option>
        </select>
      </form>

      <article className={styles.contenedorConversor}>
        <div>
          <h4>{monedaUno}</h4>
          <input
            onChange={(e) => {
              if (e.target.value.length >= 1 && e.target.value >= 1) {
                setValorUno(e.target.value)
              }
            }}
            defaultValue={valorUno}
          />
        </div>
        <div>
          <h4>{monedaDos}</h4>
          <span>{valorDos} </span>
        </div>
      </article>
    </>
  )
}
