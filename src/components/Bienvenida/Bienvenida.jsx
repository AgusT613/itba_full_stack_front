import LOGO_ITBANK from '../../images/itbank-logo.png'
import styles from './Bienvenida.module.css'

export const Bienvenida = () => {
  return (
    <section className={styles.contenedor_imagen}>
      <article className={styles.contenedor_bienvenida}>
        <header className={styles.cabecera}>
          <figure className={styles.contenedor_logo}>
            <img className={styles.logo_itbank} src={LOGO_ITBANK} alt='logo de ITBANK' />
          </figure>
          <h1 className={styles.titulo_homebanking}>Homebanking</h1>
        </header>
        <p className={styles.texto_bienvenida}>Nos enorgullece brindarte una experiencia bancaria en línea que es conveniente, segura y fácil de usar. Nuestro portal de Homebanking está diseñado para ofrecerte un acceso completo y personalizado a tus cuentas financieras, permitiéndote administrar tus finanzas desde la comodidad de tu hogar o cualquier lugar donde te encuentres.</p>
      </article>
    </section>
  )
}
