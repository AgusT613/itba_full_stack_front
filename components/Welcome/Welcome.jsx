import HeaderHome from '../HeaderHome/HeaderHome'
import styles from './Welcome.module.css'
import AutoImagesCarrousel from './AutoImagesCarrousel'
import bankResources from './bankResourcesList'
import BankResourceContainer from './BankResourceContainer'
import bankActionsList from './bankActionsList'
import BankActionContainer from './BankActionContainer'
import FooterHome from './FooterHome'

export default function Welcome () {
  return (
    <>
      <div className={styles.wrapperContainer} id='init'>
        <HeaderHome />
        <main>
          {/* HERO SECTION */}
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

          {/* BANK RESOURCES */}
          <section className={styles.bankResources} id='resources'>
            <h4 className={styles.bankResources__title}>¿Qué estas buscando?</h4>
            <div className={styles.bankResources__items}>
              {bankResources.map(resource => (
                <BankResourceContainer resourceList={resource} key={resource}/>
              ))}
            </div>
          </section>

          {/* BANK ACTIONS */}
          <section className={styles.actionContainer} id='actions'>
            {bankActionsList.map(action => (
                <BankActionContainer bankAction={action} key={action}/>
            ))}
          </section>
        </main>
      </div>
      <FooterHome />
    </>
  )
}
