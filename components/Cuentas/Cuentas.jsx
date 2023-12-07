'use client'
import { useContext, useEffect, useState } from 'react'
import styles from './Cuentas.module.css'
import { DatosUsuarioContexto } from '@/context/datosUsuarioContexto'
import { CUENTAS_USER_API, obtenerListado } from '@/context/services'

const Carta = ({ descripcion, tipoAhorro, saldo }) => {
  return (
    <div className={styles.carta}>
      <h3>{descripcion}</h3>
      <div className={styles.detalles}>
        <h4>IBAN: {tipoAhorro}</h4>
        <h2>
          <b>SALDO: ${saldo}</b>
        </h2>
        <button className={styles.boton}> Ver CBU</button>
        <button className={styles.boton}> Solicitar baja</button>
      </div>
    </div>
  )
}

export const Cuentas = () => {
  const [listaCuentas, setListaCuentas] = useState([])
  const { datosUsuario } = useContext(DatosUsuarioContexto)

  useEffect(() => {
    const { userId, username, password } = datosUsuario
    obtenerListado(userId, CUENTAS_USER_API, username, password)
      .then(cuentas => setListaCuentas(cuentas))
      .catch(error => console.log(error))
  }, [])

  return (
    <section className={styles.contenedorCartas}>
      {listaCuentas.map(cuenta => (
        <div key={cuenta.id}>
          <Carta
            descripcion={cuenta.tipo_cuenta}
            saldo={cuenta.balance}
            tipoAhorro={cuenta.iban}
          />
        </div>
      ))}
    </section>
  )
}
