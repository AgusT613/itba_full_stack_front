'use client'
import { Tarjeta } from '@/components/Inicio/components/Tarjeta'
import { DatosUsuarioContexto } from '@/context/datosUsuarioContexto'
import { TARJETAS_USER_API, obtenerListado } from '@/context/services'
import styles from '@/styles/Tarjetas.module.css'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'

// export const metadata = {
//   title: 'Tarjetas - ITBANK',
//   description: 'Administra tus tarjetas de forma rápida y segura en nuestro homebanking. Consulta el estado de tus tarjetas de crédito y débito, realiza pagos, establece límites y configura notificaciones. Simplifica tu gestión financiera con nuestro servicio de tarjetas en línea.'
// }

export default function Page () {
  const [listaTarjetas, setListaTarjetas] = useState([])
  const { datosUsuario } = useContext(DatosUsuarioContexto)

  useEffect(() => {
    const { userId, username, password } = datosUsuario
    obtenerListado(userId, TARJETAS_USER_API, username, password)
      .then(tarjetas => setListaTarjetas(tarjetas))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <section className={styles.contenedor_tarjetas}>
        {listaTarjetas.length && listaTarjetas.map(tarjeta => {
          const rutaDinamicaTarjeta = `/inicio/tarjetas/${tarjeta.id}`
          return (
            <Link key={tarjeta.id} href={rutaDinamicaTarjeta}>
              <Tarjeta datosTarjeta={tarjeta} />
            </Link>
          )
        })}
      </section>
    </>
  )
}
