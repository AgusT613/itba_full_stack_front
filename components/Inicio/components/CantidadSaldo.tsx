'use client'

import { useState } from 'react'

import { USER } from '@/utils/userDataModel'

import styles from '../Inicio.module.css'

export function CantidadSaldo() {
  const [saldoVisible, setSaldoVisible] = useState(false)

  const revelarSaldo = () => setSaldoVisible(!saldoVisible)

  return (
    <>
      <span>$</span>
      <span>{saldoVisible ? USER.customer.balance : '***'}</span>
      <button
        type='button'
        onClick={revelarSaldo}
        className={
          saldoVisible
            ? styles.icono_saldo_no_visible
            : styles.icono_saldo_visible
        }
      />
    </>
  )
}
