import HeaderHome from '../HeaderHome/HeaderHome'
import styles from './Welcome.module.css'
import AutoImagesCarrousel from './AutoImagesCarrousel'

export default function Welcome () {
  return (
    <>
      <div className={styles.wrapperContainer}>
        <HeaderHome />
        <main>
          <div className={styles.heroSection}>
            <section className={styles.heroSection__titles}>
              <h1>Banco Online ITBANK</h1>
              <h2>Homebanking</h2>
              <span>Tu banco al alcance de tu celular</span>
              <p>Nos enorgullece brindarte una experiencia bancaria en línea que es conveniente, segura y fácil de usar. Nuestro portal de Homebanking está diseñado para ofrecerte un acceso completo y personalizado a tus cuentas financieras, permitiéndote administrar tus finanzas desde la comodidad de tu hogar o cualquier lugar donde te encuentres.</p>
            </section>
            <figure className={styles.heroSection__carrousel}>
              <AutoImagesCarrousel />
            </figure>
          </div>
          <section>
            More Content Soon
          </section>
        </main>
      </div>
    </>
  )
}
