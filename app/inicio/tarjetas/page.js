'use client'
import { Tarjeta } from '@/components/Inicio/components/Tarjeta'
import { datos } from '@/context/datosUsuario'
import styles from '@/styles/Tarjetas.module.css'
import Link from 'next/link'

// export const metadata = {
//   title: 'Tarjetas - ITBANK',
//   description: 'Administra tus tarjetas de forma rápida y segura en nuestro homebanking. Consulta el estado de tus tarjetas de crédito y débito, realiza pagos, establece límites y configura notificaciones. Simplifica tu gestión financiera con nuestro servicio de tarjetas en línea.'
// }

export default function Page () {
  const listaTarjetas = datos.tarjetas

  return (
    <>
      <section className={styles.contenedor_tarjetas}>
        {listaTarjetas.map((tarjeta) => {
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
