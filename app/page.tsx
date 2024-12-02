import BankActionContainer from '@/components/bankActionContainer/BankActionContainer'
import bankActions from '@/components/bankActionContainer/bankActionContainer.module.css'
import BankResourceContainer from '@/components/bankResourceContainer/BankResourceContainer'
import bankResources from '@/components/bankResourceContainer/bankResourceContainer.module.css'
import FooterHome from '@/components/footerHome/FooterHome'
import HeaderHome from '@/components/HeaderHome/HeaderHome'
import Hero from '@/components/home/hero/Hero'
import { BANK_ACTIONS, BANK_RESOURCES } from '@/utils/userDataModel'

import { Wrapper } from './page.panda'

export default function Page() {
  return (
    <>
      <Wrapper id='init'>
        <HeaderHome />
        <main>
          <Hero />

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
      </Wrapper>
      <FooterHome />
    </>
  )
}
