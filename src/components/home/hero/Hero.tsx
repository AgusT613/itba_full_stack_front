import AutoImagesCarrousel from '@/src/components/autoImagesCarrousel/AutoImagesCarrousel'
import styles from '@/src/components/home/hero/hero.module.css'

export default function Hero() {
  return (
    <section className={styles.heroWrapper}>
      <article className={styles.titlesWrapper}>
        <h1 className={styles.mainHeading}>Banco Online ITBANK</h1>
        <div className={styles.container}>
          <h2 className={styles.secondHeading}>Homebanking</h2>
          <span className={styles.subHeading}>
            Tu banco al alcance de tu celular
          </span>
        </div>
        <p className={styles.description}>
          Nos enorgullece brindarte una experiencia bancaria en línea que es
          conveniente, segura y fácil de usar. Nuestro portal de Homebanking
          está diseñado para ofrecerte un acceso completo y personalizado a tus
          cuentas financieras, permitiéndote administrar tus finanzas desde la
          comodidad de tu hogar o cualquier lugar donde te encuentres.
        </p>
      </article>

      <figure>
        <AutoImagesCarrousel />
      </figure>
    </section>
  )
}
