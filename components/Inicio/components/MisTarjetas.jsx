'use client'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import { DatosUsuarioContexto } from '../../../context/datosUsuarioContexto'
import { Tarjeta } from './Tarjeta'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi/index'
import { GoDotFill, GoDot } from 'react-icons/go/index'
import styles from '../Inicio.module.css'

export const MisTarjetas = () => {
  const router = useRouter()
  const [tarjetaPosicion, setTarjetaPosicion] = useState(0)
  const { datosUsuario } = useContext(DatosUsuarioContexto)
  const listaTarjetas = datosUsuario.tarjetas
  const cantidadTarjetas = listaTarjetas.length - 1

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
          datosTarjeta={datosUsuario.tarjetas[tarjetaPosicion]}
          onClick={() => { router.push(`/inicio/tarjetas/${tarjetaPosicion}`) }}
        />
        <BiRightArrow onClick={avanzar} className={styles.flecha_desplazamiento} />
      </section>
      <section className={styles.carrousel_tarjetas}>
        {listaTarjetas.map((tarj, index) => {
          return (
            index === tarjetaPosicion
              ? <GoDotFill key={tarj.cardNumber} className={styles.posicion_tarjeta} />
              : <GoDot key={tarj.cardNumber} className={styles.posicion_tarjeta} onClick={() => setTarjetaPosicion(index)} />
          )
        })}
      </section>
    </article>
  )
}
