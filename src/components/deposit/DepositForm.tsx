'use client'

import { useActionState } from 'react'
import { depositToAccount } from '@/actions/depositToAccountAction'
import { cn } from '@/src/lib/utils'
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
  const [state, formAction, pending] = useActionState(
    depositToAccount,
    initialFormState,
  )

  return (
    <form
      action={formAction}
      className='flex flex-col gap-4 w-full max-w-lg p-6 sm:p-8 bg-surface rounded-xl border border-surface-border my-4 shadow-md'
    >
      <div className='flex flex-col gap-1.5'>
        <label htmlFor='alias' className='text-sm font-semibold'>
          Alias
        </label>
        <select
          id='alias'
          name='alias'
          className='w-full p-2.5 rounded-md bg-black/20 border border-surface-border focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm'
        >
          <option value='' className='text-black bg-white'>
            Elegir alias
          </option>
          {aliasList.map((alias) => (
            <option
              key={alias.alias}
              value={alias.alias}
              className='text-black bg-white'
            >
              {alias.alias}
            </option>
          ))}
        </select>
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
          className='w-full p-2.5 rounded-md bg-black/20 border border-surface-border focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm'
        />
      </div>

      <button
        type='submit'
        className='mt-2 p-3 font-semibold text-sm rounded-md bg-primary-600 hover:bg-primary-700 text-white cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
        disabled={pending}
      >
        {pending ? 'Depositando...' : 'Depositar'}
      </button>

      {state.message && (
        <p
          className={cn(
            'text-center font-medium text-sm mt-2',
            state.success ? 'text-success-500' : 'text-danger-500',
          )}
        >
          {state.message}
        </p>
      )}
    </form>
  )
}
