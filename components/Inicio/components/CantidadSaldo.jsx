'use client'
import { useContext, useEffect, useState } from 'react'
import styles from '../Inicio.module.css'
import { CUENTAS_USER_API, obtenerListado } from '@/context/services'
import { DatosUsuarioContexto } from '@/context/datosUsuarioContexto'

export const CantidadSaldo = () => {
  const [miCuenta, setMiCuenta] = useState()
  const [saldoVisible, setSaldoVisible] = useState(false)
  const { datosUsuario } = useContext(DatosUsuarioContexto)

  useEffect(() => {
    const { userId, username, password } = datosUsuario
    obtenerListado(userId, CUENTAS_USER_API, username, password)
      .then(cuentas => {
        const cuentaITBANK = cuentas.find(value => value.iban.startsWith('ITBANK'))
        setMiCuenta(cuentaITBANK)
      })
  }, [])

  const revelarSaldo = () => setSaldoVisible(!saldoVisible)

  return (
    <>
      <span>$</span>
      <span>{saldoVisible ? miCuenta.balance : '***'}</span>
      <span
        onClick={revelarSaldo}
        className={saldoVisible ? styles.icono_saldo_no_visible : styles.icono_saldo_visible}
      />
    </>
  )
}
