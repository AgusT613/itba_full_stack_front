import styles from '../Inicio.module.css'

export function AccionUsuario({ accion, className }) {
  return (
    <div>
      <span className={`${styles.icono_accion} ${className}`} />
      <p>{accion}</p>
    </div>
  )
}
