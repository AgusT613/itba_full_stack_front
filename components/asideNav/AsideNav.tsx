'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

import signOutAction from '@/actions/signOutAction'
import { homebankingLinks } from '@/utils/headerLinks'

import styles from './asideNav.module.css'
import BankLogo from '../bankLogo/BankLogo'
import NavItems from '../navItems/NavItems'

export default function AsideNav() {
  const [asideNavVisible, setAsideNavVisible] = useState(true)
  const [responsive, setResponsive] = useState(false)
  const router = useRouter()

  const handleLogOut = async () => {
    await signOutAction()
    router.push('/')
  }

  useEffect(() => {
    function handleResize(e) {
      const { innerWidth } = e.target
      if (innerWidth <= 600) {
        setAsideNavVisible(false)
        setResponsive(true)
      } else {
        setAsideNavVisible(true)
        setResponsive(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <aside
      className={`${styles.navContainer} ${asideNavVisible ? '' : styles.responsive}`}
    >
      <button
        type='button'
        onClick={() => {
          setAsideNavVisible(!asideNavVisible)
          setResponsive(!responsive)
        }}
        className={responsive ? styles.iconOpen : styles.iconClose}
      >
        {responsive ? <GiHamburgerMenu /> : <GrClose />}
      </button>
      {asideNavVisible && (
        <>
          <BankLogo href='/'>Volver al Home</BankLogo>
          <nav className={styles.nav}>
            <NavItems links={homebankingLinks} />
          </nav>
          <button
            type='button'
            onClick={handleLogOut}
            className={styles.btnLogOut}
          >
            Cerrar Sesion
          </button>
        </>
      )}
    </aside>
  )
}