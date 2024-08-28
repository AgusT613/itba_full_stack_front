import HeaderHome from '../HeaderHome/HeaderHome'
import styles from './Welcome.module.css'
import AutoImagesCarrousel from './AutoImagesCarrousel'
import bankResources from './bankResourcesList'
import BankResourceContainer from './BankResourceContainer'

export default function Welcome () {
  return (
    <>
      <div className={styles.wrapperContainer}>
        <HeaderHome />
        <main>
          <section className={styles.heroSection}>
            <div className={styles.heroSection__titles}>
              <h1>Banco Online ITBANK</h1>
              <h2>Homebanking</h2>
              <span>Tu banco al alcance de tu celular</span>
              <p>Nos enorgullece brindarte una experiencia bancaria en línea que es conveniente, segura y fácil de usar. Nuestro portal de Homebanking está diseñado para ofrecerte un acceso completo y personalizado a tus cuentas financieras, permitiéndote administrar tus finanzas desde la comodidad de tu hogar o cualquier lugar donde te encuentres.</p>
            </div>
            <figure className={styles.heroSection__carrousel}>
              <AutoImagesCarrousel />
            </figure>
          </section>
          <section className={styles.bankResources}>
            <h4 className={styles.bankResources__title}>¿Qué estas buscando?</h4>
            <div className={styles.bankResources__items}>
              {bankResources.map(resource => (
                <BankResourceContainer resourceList={resource} key={resource[0]}/>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
