'use client'
import { useContext } from 'react'
import { DatosUsuarioContexto } from '../../../context/datosUsuarioContexto'
import { Tarjeta } from './Tarjeta'
import styles from '../Inicio.module.css'

export const MisTarjetas = () => {
  const { datosUsuario } = useContext(DatosUsuarioContexto)
  return (
    <article className={styles.contenedor_mis_tarjetas}>
      <h3>Mis Tarjetas</h3>
      <section className={styles.todas_las_tarjetas}>
        <Tarjeta datosTarjeta={datosUsuario.tarjeta} />
      </section>
      <section className={styles.carrousel_tarjetas}>
        <span>Carrousel de Tarjetas</span>
      </section>
    </article>
  )
}
