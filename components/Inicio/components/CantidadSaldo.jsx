'use client'
import { useState } from 'react'
import styles from '../Inicio.module.css'
import { USER } from '@/utils/userDataModel'

export const CantidadSaldo = () => {
  const [saldoVisible, setSaldoVisible] = useState(false)

  const revelarSaldo = () => setSaldoVisible(!saldoVisible)

  return (
    <>
      <span>$</span>
      <span>{saldoVisible ? USER.customer.balance : '***'}</span>
      <span
        onClick={revelarSaldo}
        className={saldoVisible ? styles.icono_saldo_no_visible : styles.icono_saldo_visible}
      />
    </>
  )
}
