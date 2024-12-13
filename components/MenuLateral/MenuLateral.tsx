'use client'

import { useRouter } from 'next/navigation'

import signOutAction from '@/actions/signOutAction'
import { homebankingLinks } from '@/utils/headerLinks'

import styles from './MenuLateral.module.css'
import BankLogo from '../bankLogo/BankLogo'
import NavItems from '../navItems/NavItems'

export function MenuLateral() {
  const router = useRouter()

  const handleLogOut = async () => {
    await signOutAction()
    router.push('/')
  }

  return (
    <>
      <BankLogo href='/'>Volver al Home</BankLogo>
      <nav className={styles.menu__navegacion}>
        <NavItems links={homebankingLinks} />
      </nav>
      <button
        type='button'
        onClick={handleLogOut}
        className={styles.menu__cerrar__sesion}
      >
        Cerrar Sesion
      </button>
    </>
  )
}
