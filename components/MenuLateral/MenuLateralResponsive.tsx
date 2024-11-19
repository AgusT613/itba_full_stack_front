'use client'

import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

import styles from '@/app/inicio/layout.module.css'
import { MenuLateral } from '@/components/MenuLateral/MenuLateral'

export function MenuLateralResponsive() {
  const [menuLateral, setMenuLateral] = useState(false)

  const toggleMenuLateral = () => {
    setMenuLateral(!menuLateral)
  }

  return (
    <div>
      <span
        onClick={toggleMenuLateral}
        className={
          menuLateral
            ? styles.icono__menu__hamburguesa__cerrar
            : styles.icono__menu__hamburguesa__barra
        }
      >
        {menuLateral ? <GrClose /> : <GiHamburgerMenu />}
      </span>
      {menuLateral && (
        <aside className={styles.menu__lateral__hamburguesa}>
          <MenuLateral />
        </aside>
      )}
    </div>
  )
}
