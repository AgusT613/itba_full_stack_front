import styles from '../Conversor.module.css'

export default function ConversionADolar({ valorDos, leerCambioMonedaDos }) {
  return (
    <div>
      <span className={styles.cantidad_moneda}>{valorDos}</span>
      <select name='aMoneda' onChange={leerCambioMonedaDos}>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='ARS'>ARS</option>
      </select>
    </div>
  )
}
