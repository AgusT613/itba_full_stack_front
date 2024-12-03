import Footer from '@/components/footer/Footer'
import HeaderHome from '@/components/HeaderHome/HeaderHome'
import BankActionWrapper from '@/components/home/bankActions/bankActionWrapper'
import BankResourceWrapper from '@/components/home/bankResources/BankResourceWrapper'
import Hero from '@/components/home/hero/Hero'

import { Wrapper } from './page.panda'

export default function Page() {
  return (
    <>
      <Wrapper id='init'>
        <HeaderHome />
        <main>
          <Hero />
          <BankResourceWrapper />
          <BankActionWrapper />
        </main>
      </Wrapper>
      <Footer />
    </>
  )
}
