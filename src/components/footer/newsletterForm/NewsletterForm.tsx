'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select'

export default function NewsletterForm() {
  return (
    <form className='flex flex-wrap gap-2 items-center'>
      <input
        type='email'
        placeholder='Correo electrónico'
        className='flex-1 min-w-[12rem] h-10 px-3 py-2 text-sm rounded-lg bg-surface border border-surface-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-500'
      />
      <div className='min-w-[14rem]'>
        <Select name='nw-interests'>
          <SelectTrigger id='newsletter-interests'>
            <SelectValue placeholder='Seleccione un interés' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='promotions'>Promociones y Beneficios</SelectItem>
            <SelectItem value='pymes'>Instituto PyMes</SelectItem>
            <SelectItem value='economic-studies'>
              Estudios Económicos
            </SelectItem>
            <SelectItem value='bid'>Subastas</SelectItem>
            <SelectItem value='enterprise'>Empresas</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <input
        type='submit'
        value='Suscribirse'
        className='h-10 px-4 py-2 text-sm font-semibold rounded-lg bg-primary-600 hover:bg-primary-700 text-white cursor-pointer transition-colors shadow-sm'
      />
    </form>
  )
}
