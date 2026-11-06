'use client'

import { useActionState, useEffect, useRef } from 'react'
import { toast } from 'sonner'
import { saveAlias } from '@/actions/saveAliasAction'

const initialFormState = {
  message: '',
  success: false,
}

export default function AddAliasForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [state, formAction, pending] = useActionState(
    saveAlias,
    initialFormState,
  )

  useEffect(() => {
    if (!state.message) return

    if (state.success) {
      toast.success('Alias guardado', {
        description: state.message,
      })
      formRef.current?.reset()
    } else {
      toast.error('Error al guardar alias', {
        description: state.message,
      })
    }
  }, [state])

  return (
    <div className='bg-surface border border-surface-border p-6 my-4 rounded-xl shadow-md inline-flex gap-4 flex-col max-w-lg'>
      <form
        ref={formRef}
        action={formAction}
        className='flex flex-wrap sm:flex-nowrap gap-3'
      >
        <label htmlFor='alias' className='sr-only'>
          Alias
        </label>
        <input
          type='text'
          id='alias'
          name='alias'
          className='flex-1 p-2.5 rounded-md bg-black/20 border border-surface-border focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm'
          placeholder='Ej: mi.cuenta.alias'
        />
        <input
          type='submit'
          value={pending ? 'Guardando...' : 'Agregar Alias'}
          disabled={pending}
          className='bg-primary-600 text-white font-medium px-4 py-2.5 rounded-md cursor-pointer hover:bg-primary-700 transition-colors text-sm disabled:opacity-50'
        />
      </form>
    </div>
  )
}
