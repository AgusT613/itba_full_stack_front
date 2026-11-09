'use client'

import { LogOut, Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import signOutAction from '@/actions/signOutAction'
import { ThemeToggle } from '@/src/components/theme/ThemeToggle'
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
          'hidden max-[600px]:flex fixed top-3 z-60 w-9 h-9 rounded-full bg-surface text-foreground border border-surface-border items-center justify-center cursor-pointer shadow-lg transition-transform hover:scale-105 pointer-events-auto',
          asideNavVisible ? 'left-36' : 'right-3',
        )}
      >
        {asideNavVisible ? (
          <X className='w-5 h-5' />
        ) : (
          <Menu className='w-5 h-5' />
        )}
      </button>

      <aside
        className={cn(
          'sticky top-0 z-50 h-screen bg-slate-50 dark:bg-[#160d2e] border-r border-slate-200 dark:border-white/10 shadow-xs flex flex-col items-center justify-between py-6 px-2 transition-all duration-300 w-full',
          responsive &&
            'fixed top-0 left-0 w-48 bg-slate-50 dark:bg-[#160d2e] shadow-2xl border-r border-slate-200 dark:border-white/10',
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

        <div className='w-full flex flex-col items-center gap-3'>
          <ThemeToggle />
          {isHomebanking && (
            <button
              type='button'
              onClick={handleLogOut}
              className='w-max mx-auto flex items-center gap-1.5 cursor-pointer bg-slate-900 hover:bg-slate-800 text-white dark:bg-white/10 dark:hover:bg-white/20 dark:text-white border border-slate-800 dark:border-white/15 text-xs font-semibold py-2 px-4 rounded-xl transition-colors shadow-sm'
            >
              <LogOut className='w-3.5 h-3.5' />
              Cerrar Sesión
            </button>
          )}
        </div>
      </aside>
    </>
  )
}
