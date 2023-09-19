import styles from '../Conversor.module.css'

export const CantidadEnPesos = ({ valorUno, leerCantidadAConvertir, leerCambioMonedaUno }) => {
  return (
    <div>
      <input
        className={styles.cantidad_moneda}
        onChange={leerCantidadAConvertir}
        defaultValue={valorUno}
      />
      <select name='deMoneda' onChange={leerCambioMonedaUno}>
        <option value='ARS'>ARS</option>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
      </select>
    </div>
  )
}
