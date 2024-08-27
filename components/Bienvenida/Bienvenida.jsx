import HeaderHome from '../HeaderHome/HeaderHome'
import styles from './Bienvenida.module.css'
import AutoImagesCarrousel from './AutoImagesCarrousel'

export default function Bienvenida () {
  return (
    <div className={styles.wrapperPrincipal}>
      <HeaderHome />
      <main>
        <div className={styles.hero}>
          <section className={styles.bienvenida}>
            <h1>Banco Online ITBANK</h1>
            <h2>Homebanking</h2>
            <span>Tu banco al alcance de tu celular</span>
            <p className={styles.texto_bienvenida}>Nos enorgullece brindarte una experiencia bancaria en línea que es conveniente, segura y fácil de usar. Nuestro portal de Homebanking está diseñado para ofrecerte un acceso completo y personalizado a tus cuentas financieras, permitiéndote administrar tus finanzas desde la comodidad de tu hogar o cualquier lugar donde te encuentres.</p>
          </section>
          <figure className={styles.carrousel_imagenes}>
            <AutoImagesCarrousel />
          </figure>
        </div>
      </main>
    </div>
  )
}
