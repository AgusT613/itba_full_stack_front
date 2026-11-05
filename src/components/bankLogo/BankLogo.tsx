import Image from 'next/image'
import Link from 'next/link'
import LOGO_ITBANK from '@/public/itbank-logo.png'
import styles from '@/src/components/bankLogo/bankLogo.module.css'

export default function BankLogo({ children, href }) {
  return (
    <Link href={href} className={styles.link}>
      <figure className={styles.wrapper}>
        <Image
          src={LOGO_ITBANK}
          alt='Logo del banco ITBANK'
          className={styles.image}
        />
        <span className={styles.goToSection}>{children}</span>
      </figure>
    </Link>
  )
}
