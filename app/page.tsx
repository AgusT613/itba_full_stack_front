import AsideNav from '@/src/components/asideNav/AsideNav'
import Footer from '@/src/components/footer/Footer'
import BankActionWrapper from '@/src/components/home/bankActions/bankActionWrapper'
import BankResourceWrapper from '@/src/components/home/bankResources/BankResourceWrapper'
import Hero from '@/src/components/home/hero/Hero'
import { homeLinks } from '@/utils/headerLinks'

export default function Page() {
  return (
    <div className='min-h-screen grid grid-cols-1 md:grid-cols-[10rem_1fr]'>
      <AsideNav
        links={homeLinks}
        bankLogoProps={{ href: '#init', title: 'Home' }}
      />
      <div className='flex flex-col min-w-0'>
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
