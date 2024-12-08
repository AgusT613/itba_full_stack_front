import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import BankActionWrapper from '@/components/home/bankActions/bankActionWrapper'
import BankResourceWrapper from '@/components/home/bankResources/BankResourceWrapper'
import Hero from '@/components/home/hero/Hero'
import { homeLinks } from '@/utils/headerLinks'

import { Wrapper } from './page.panda'

export default function Page() {
  return (
    <Wrapper id='init'>
      <Header links={homeLinks} />
      <div>
        <main>
          <Hero />
          <BankResourceWrapper />
          <BankActionWrapper />
        </main>
        <Footer />
      </div>
    </Wrapper>
  )
}
