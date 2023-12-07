'use client'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import { Tarjeta } from './Tarjeta'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi/index'
import { GoDotFill, GoDot } from 'react-icons/go/index'
import styles from '../Inicio.module.css'
import { TARJETAS_USER_API, obtenerListado } from '@/context/services'
import { DatosUsuarioContexto } from '@/context/datosUsuarioContexto'

export const MisTarjetas = () => {
  const [listaTarjetas, setListaTarjetas] = useState([])
  const [tarjetaPosicion, setTarjetaPosicion] = useState(0)
  const { datosUsuario } = useContext(DatosUsuarioContexto)
  const router = useRouter()
  const cantidadTarjetas = listaTarjetas.length - 1

  useEffect(() => {
    const { userId, username, password } = datosUsuario
    obtenerListado(userId, TARJETAS_USER_API, username, password)
      .then(tarjetas => {
        setListaTarjetas(tarjetas)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const avanzar = () => {
    tarjetaPosicion >= 0 && tarjetaPosicion < cantidadTarjetas ? setTarjetaPosicion(tarjetaPosicion + 1) : setTarjetaPosicion(0)
  }
  const retroceder = () => {
    tarjetaPosicion <= 0 ? setTarjetaPosicion(cantidadTarjetas) : setTarjetaPosicion(tarjetaPosicion - 1)
  }

  return (
    <article className={styles.contenedor_mis_tarjetas}>
      <h3>Mis Tarjetas</h3>
      <section className={styles.todas_las_tarjetas}>
        <BiLeftArrow onClick={retroceder} className={styles.flecha_desplazamiento} />
        <Tarjeta
          datosTarjeta={listaTarjetas[tarjetaPosicion]}
          onClick={() => { router.push(`/inicio/tarjetas/${listaTarjetas[tarjetaPosicion].id}`) }}
        />
        <BiRightArrow onClick={avanzar} className={styles.flecha_desplazamiento} />
      </section>
      <section className={styles.carrousel_tarjetas}>
        {listaTarjetas.length && listaTarjetas.map((tarj, index) => {
          return (
            index === tarjetaPosicion
              ? <GoDotFill key={tarj.id} className={styles.posicion_tarjeta} />
              : <GoDot key={tarj.id} className={styles.posicion_tarjeta} onClick={() => setTarjetaPosicion(index)} />
          )
        })}
      </section>
    </article>
  )
}
