'use client'

import Image from 'next/image'
import { USER } from '@/utils/userDataModel'
import styles from '../Inicio.module.css'

export const PerfilUsuario = () => {
  const welcome = `Bienvenido ${USER.customer.name} ${USER.customer.lastName}!`

  return (
    <article className={styles.recuadro_usuario}>
      <figure className={styles.contenedor_imagen_usuario}>
        <Image
          unoptimized
          width={25}
          height={25}
          className={styles.imagen_usuario}
          src={USER.customer.img}
          alt='Su foto de perfil de usuario'
        />
      </figure>
      <h3>{welcome}</h3>
      {/* <span className={styles.mas_detalles} /> */}
    </article>
  )
}
