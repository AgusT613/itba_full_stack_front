'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

import signOutAction from '@/actions/signOutAction'
import { cn } from '@/src/lib/utils'
import type { INavItem } from '@/src/types/navItem'
import BankLogo from '../bankLogo/BankLogo'
import NavItems from '../navItems/NavItems'

export default function AsideNav({
  links,
  bankLogoProps,
  isHomebanking = false,
}: {
  links: INavItem[]
  bankLogoProps: INavItem
  isHomebanking?: boolean
}) {
  const { href, title } = bankLogoProps
  const [asideNavVisible, setAsideNavVisible] = useState(true)
  const [responsive, setResponsive] = useState(false)
  const router = useRouter()

  const handleLogOut = async () => {
    await signOutAction()
    router.push('/')
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 600) {
        setAsideNavVisible(false)
        setResponsive(true)
      } else {
        setAsideNavVisible(true)
        setResponsive(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <button
        type='button'
        onClick={() => {
          setAsideNavVisible(!asideNavVisible)
        }}
        aria-label={asideNavVisible ? 'Cerrar navegación' : 'Abrir navegación'}
        className={cn(
          'hidden max-[600px]:flex fixed top-3 z-[60] w-9 h-9 rounded-full bg-white text-black items-center justify-center cursor-pointer shadow-lg transition-transform hover:scale-105 pointer-events-auto',
          asideNavVisible ? 'left-36' : 'right-3',
        )}
      >
        {asideNavVisible ? <GrClose /> : <GiHamburgerMenu />}
      </button>

      <aside
        className={cn(
          'sticky top-0 z-50 h-screen bg-[#5a28ab]/60 backdrop-blur-md flex flex-col items-center justify-between py-6 px-2 transition-all duration-300 w-full',
          responsive && 'fixed top-0 left-0 w-44 bg-black/85 shadow-2xl',
          responsive &&
            !asideNavVisible &&
            'w-0 p-0 overflow-hidden bg-transparent backdrop-blur-none pointer-events-none',
        )}
      >
        <div className='w-full flex flex-col items-center'>
          <BankLogo href={href}>{title}</BankLogo>
          <nav className='flex flex-col gap-2 w-full mt-4'>
            <NavItems links={links} />
          </nav>
        </div>

        {isHomebanking && (
          <button
            type='button'
            onClick={handleLogOut}
            className='w-max mx-auto cursor-pointer bg-black/60 hover:bg-black/90 text-white text-xs font-semibold py-2 px-4 rounded-xl transition-colors mt-4'
          >
            Cerrar Sesión
          </button>
        )}
      </aside>
    </>
  )
}
