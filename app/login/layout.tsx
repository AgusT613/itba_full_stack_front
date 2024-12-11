import BankLogo from '@/components/bankLogo/BankLogo'

import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <main className={styles.userLoginContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.bankLogoWidth}>
          <BankLogo href='/'>Volver al Home</BankLogo>
        </div>
        <section>{children}</section>
      </div>
    </main>
  )
}
