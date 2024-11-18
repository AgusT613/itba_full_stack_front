import HeaderHome from '@/components/HeaderHome/HeaderHome'
import AutoImagesCarrousel from '@/components/autoImagesCarrousel/AutoImagesCarrousel'
import BankActionContainer from '@/components/bankActionContainer/BankActionContainer'
import BankResourceContainer from '@/components/bankResourceContainer/BankResourceContainer'
import FooterHome from '@/components/footerHome/FooterHome'
import styles from '@/app/page.module.css'
import bankActions from '@/components/bankActionContainer/bankActionContainer.module.css'
import bankResources from '@/components/bankResourceContainer/bankResourceContainer.module.css'
import hero from '@/components/hero/hero.module.css'
import { BANK_ACTIONS, BANK_RESOURCES } from '@/utils/userDataModel'

export default function Page() {
  return (
    <>
      <div className={styles.wrapperContainer} id='init'>
        <HeaderHome />
        <main>
          {/* HERO SECTION */}
          <section className={hero.heroSection}>
            <div className={hero.heroSection__titles}>
              <h1>Banco Online ITBANK</h1>
              <h2>Homebanking</h2>
              <span>Tu banco al alcance de tu celular</span>
              <p>
                Nos enorgullece brindarte una experiencia bancaria en línea que
                es conveniente, segura y fácil de usar. Nuestro portal de
                Homebanking está diseñado para ofrecerte un acceso completo y
                personalizado a tus cuentas financieras, permitiéndote
                administrar tus finanzas desde la comodidad de tu hogar o
                cualquier lugar donde te encuentres.
              </p>
            </div>
            <figure className={hero.heroSection__carrousel}>
              <AutoImagesCarrousel />
            </figure>
          </section>

          {/* BANK RESOURCES */}
          <section className={bankResources.bankResources} id='resources'>
            <h4 className={bankResources.bankResources__title}>
              ¿Qué estas buscando?
            </h4>
            <div className={bankResources.bankResources__items}>
              {BANK_RESOURCES.map((resource) => (
                <BankResourceContainer
                  resourceList={resource}
                  key={resource.description}
                />
              ))}
            </div>
          </section>

          {/* BANK ACTIONS */}
          <section className={bankActions.actionContainer} id='actions'>
            {BANK_ACTIONS.map((action) => (
              <BankActionContainer
                bankAction={action}
                key={action.description}
              />
            ))}
          </section>
        </main>
      </div>
      <FooterHome />
    </>
  )
}
