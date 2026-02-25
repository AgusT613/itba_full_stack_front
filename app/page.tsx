import AsideNav from '@/src/components/asideNav/AsideNav'
import Footer from '@/src/components/footer/Footer'
import BankActionWrapper from '@/src/components/home/bankActions/bankActionWrapper'
import BankResourceWrapper from '@/src/components/home/bankResources/BankResourceWrapper'
import Hero from '@/src/components/home/hero/Hero'
import { homeLinks } from '@/utils/headerLinks'

import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <AsideNav
        links={homeLinks}
        bankLogoProps={{ href: '#init', title: 'Home' }}
      />
      <div>
        <main>
          <Hero />
          <BankResourceWrapper />
          <BankActionWrapper />
        </main>
        <Footer />
      </div>
    </div>
  )
}
