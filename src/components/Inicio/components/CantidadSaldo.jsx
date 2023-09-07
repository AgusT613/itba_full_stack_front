import { useContext } from 'react'
import { DatosUsuarioContexto } from '../../../context/datosUsuarioContexto'
import styles from '../Inicio.module.css'

export const CantidadSaldo = () => {
  const { datosUsuario, revelarSaldo, saldoVisible } = useContext(DatosUsuarioContexto)
  return (
    <>
      <span>$</span>
      <span>{saldoVisible ? datosUsuario.saldoEnCuenta : '***'}</span>
      <span
        onClick={revelarSaldo}
        className={saldoVisible ? styles.icono_saldo_no_visible : styles.icono_saldo_visible}
      />
    </>
  )
}
