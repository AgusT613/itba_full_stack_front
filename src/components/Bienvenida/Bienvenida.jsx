import styles from './Bienvenida.module.css'

export const Bienvenida = () => {
  return (
    <section className={styles.contenedor_imagen}>
      <article className={styles.contenedor_texto_bienvenida}>
        <h1 className={styles.titulo_bienvenida}>Bienvenido al portal ITBANK</h1>
        <p className={styles.texto_bienvenida}>Nos enorgullece brindarte una experiencia bancaria en línea que es conveniente, segura y fácil de usar. Nuestro portal de Homebanking está diseñado para ofrecerte un acceso completo y personalizado a tus cuentas financieras, permitiéndote administrar tus finanzas desde la comodidad de tu hogar o cualquier lugar donde te encuentres.</p>
      </article>
    </section>
  )
}
