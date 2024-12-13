import { INavItem } from '@/types/navItem'

import styles from './header.module.css'
import BankLogo from '../bankLogo/BankLogo'
import NavItems from '../navItems/NavItems'

export default function Header({ links }: { links: INavItem[] }) {
  return (
    <header className={styles.header}>
      <BankLogo href='#init'>Home</BankLogo>
      <nav className={styles.nav}>
        <NavItems links={links} />
      </nav>
    </header>
  )
}
