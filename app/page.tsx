import BankActionContainer from '@/components/bankActionContainer/BankActionContainer'
import bankActions from '@/components/bankActionContainer/bankActionContainer.module.css'
import FooterHome from '@/components/footerHome/FooterHome'
import HeaderHome from '@/components/HeaderHome/HeaderHome'
import BankResourceWrapper from '@/components/home/bankResources/BankResourceWrapper'
import Hero from '@/components/home/hero/Hero'
import { BANK_ACTIONS } from '@/utils/userDataModel'

import { Wrapper } from './page.panda'

export default function Page() {
  return (
    <>
      <Wrapper id='init'>
        <HeaderHome />
        <main>
          <Hero />
          <BankResourceWrapper />

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
