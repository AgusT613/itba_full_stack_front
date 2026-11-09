'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className={`inline-flex items-center gap-1 p-1 rounded-full bg-surface border border-surface-border opacity-70 ${className || ''}`}
        aria-hidden='true'
      >
        <span className='w-7 h-7 rounded-full flex items-center justify-center text-foreground/40'>
          <Sun className='w-3.5 h-3.5' />
        </span>
        <span className='w-7 h-7 rounded-full flex items-center justify-center text-foreground/40'>
          <Moon className='w-3.5 h-3.5' />
        </span>
        <span className='w-7 h-7 rounded-full flex items-center justify-center text-foreground/40'>
          <Monitor className='w-3.5 h-3.5' />
        </span>
      </div>
    )
  }

  return (
    <fieldset
      className={`inline-flex items-center gap-1 p-1 rounded-full bg-surface-card border border-surface-border shadow-sm m-0 ${className || ''}`}
    >
      <legend className='sr-only'>Seleccionar tema visual</legend>
      <button
        type='button'
        aria-pressed={theme === 'light'}
        aria-label='Tema claro'
        onClick={() => setTheme('light')}
        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer ${
          theme === 'light'
            ? 'bg-primary-600 text-white shadow-sm scale-105'
            : 'text-foreground/70 hover:text-foreground hover:bg-surface-hover'
        }`}
      >
        <Sun className='w-3.5 h-3.5' />
      </button>

      <button
        type='button'
        aria-pressed={theme === 'dark'}
        aria-label='Tema oscuro'
        onClick={() => setTheme('dark')}
        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer ${
          theme === 'dark'
            ? 'bg-primary-600 text-white shadow-sm scale-105'
            : 'text-foreground/70 hover:text-foreground hover:bg-surface-hover'
        }`}
      >
        <Moon className='w-3.5 h-3.5' />
      </button>

      <button
        type='button'
        aria-pressed={theme === 'system'}
        aria-label='Tema del sistema'
        onClick={() => setTheme('system')}
        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer ${
          theme === 'system'
            ? 'bg-primary-600 text-white shadow-sm scale-105'
            : 'text-foreground/70 hover:text-foreground hover:bg-surface-hover'
        }`}
      >
        <Monitor className='w-3.5 h-3.5' />
      </button>
    </fieldset>
  )
}

export default ThemeToggle
