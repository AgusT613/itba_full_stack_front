import BankActionWrapper from '@/src/components/features/home/home/bankActions/bankActionWrapper'
import BankResourceWrapper from '@/src/components/features/home/home/bankResources/BankResourceWrapper'
import Hero from '@/src/components/features/home/home/hero/Hero'
import AsideNav from '@/src/components/shared/asideNav/AsideNav'
import Footer from '@/src/components/shared/footer/Footer'
import { homeLinks } from '@/src/utils/headerLinks'

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
