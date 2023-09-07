import { useContext } from 'react'
import { DatosUsuarioContexto } from '../../../context/datosUsuarioContexto'
import styles from '../Inicio.module.css'

export const PerfilUsuario = () => {
  const { datosUsuario } = useContext(DatosUsuarioContexto)
  return (
    <article className={styles.recuadro_usuario}>
      <figure className={styles.contenedor_imagen_usuario}>
        <img
          className={styles.imagen_usuario}
          src={datosUsuario.fotoPerfil}
          alt='Su foto de perfil de usuario'
        />
      </figure>
      <h3>Hola {datosUsuario.nombre} !</h3>
      <span className={styles.mas_detalles} />
    </article>
  )
}
