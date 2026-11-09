'use client'

import { useActionState, useEffect, useRef } from 'react'
import { toast } from 'sonner'
import { depositToAccount } from '@/actions/depositToAccountAction'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select'
import type { TAccountAlias } from '@/src/types/alias'

const initialFormState = {
  message: '',
  success: false,
}

export default function DepositForm({
  aliasList,
}: {
  aliasList: TAccountAlias[]
}) {
  const formRef = useRef<HTMLFormElement>(null)
  const [state, formAction, pending] = useActionState(
    depositToAccount,
    initialFormState,
  )

  useEffect(() => {
    if (!state.message) return

    if (state.success) {
      toast.success('Depósito realizado', {
        description: state.message,
      })
      formRef.current?.reset()
    } else {
      toast.error('Error al depositar', {
        description: state.message,
      })
    }
  }, [state])

  return (
    <form
      ref={formRef}
      action={formAction}
      className='flex flex-col gap-4 w-full max-w-lg p-6 sm:p-8 bg-surface rounded-xl border border-surface-border my-4 shadow-md'
    >
      <div className='flex flex-col gap-1.5'>
        <label htmlFor='alias' className='text-sm font-semibold'>
          Alias
        </label>
        <Select name='alias'>
          <SelectTrigger id='alias'>
            <SelectValue placeholder='Elegir alias' />
          </SelectTrigger>
          <SelectContent>
            {aliasList.map((alias) => (
              <SelectItem key={alias.alias} value={alias.alias}>
                {alias.alias}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className='flex flex-col gap-1.5'>
        <label htmlFor='amount' className='text-sm font-semibold'>
          Monto
        </label>
        <input
          type='number'
          id='amount'
          name='amount'
          placeholder='1000'
          className='w-full p-2.5 rounded-md bg-surface-card text-foreground border border-surface-border focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm shadow-sm'
        />
      </div>

      <button
        type='submit'
        className='mt-2 p-3 font-semibold text-sm rounded-md bg-primary-600 hover:bg-primary-700 text-white cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
        disabled={pending}
      >
        {pending ? 'Depositando...' : 'Depositar'}
      </button>
    </form>
  )
}
