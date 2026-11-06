'use client'

import { useActionState, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import { handleTransfer } from '@/actions/makeTransferAction'
import { cn } from '@/src/lib/utils'
import type { TUserBankAccount } from '@/src/types/homebanking'
import type { TUserSavedAlias } from '@/src/types/userSavedAlias'

const initialState = {
  message: '',
  success: false,
}

export default function MakeTransferForm({
  bankAccountsAlias,
  savedAliases,
}: {
  bankAccountsAlias: TUserBankAccount[]
  savedAliases: TUserSavedAlias[]
}) {
  const formRef = useRef<HTMLFormElement>(null)
  const [inputType, setInputType] = useState<'text' | 'select'>('text')
  const [state, formAction, pending] = useActionState(
    handleTransfer,
    initialState,
  )

  useEffect(() => {
    if (!state.message) return

    if (state.success) {
      toast.success('Transferencia realizada', {
        description: state.message,
      })
      formRef.current?.reset()
    } else {
      toast.error('Error al transferir', {
        description: state.message,
      })
    }
  }, [state])

  return (
    <form
      ref={formRef}
      className='bg-surface p-6 rounded-xl border border-surface-border flex flex-col gap-4 shadow-md'
      action={formAction}
    >
      <div className='flex flex-col gap-1.5'>
        <label
          htmlFor='sender_alias'
          className='text-sm font-semibold text-surface-foreground'
        >
          Cuenta Origen
        </label>
        <select
          name='sender_alias'
          id='sender_alias'
          className='w-full p-2.5 rounded-md bg-black/20 border border-surface-border focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm'
        >
          <option value='' className='text-black bg-white'>
            Seleccionar cuenta
          </option>
          {bankAccountsAlias.map((account) => (
            <option
              key={account.id}
              value={account.alias}
              className='text-black bg-white'
            >
              {account.alias}
            </option>
          ))}
        </select>
      </div>

      <div className='flex flex-col gap-1.5'>
        <div className='flex flex-row justify-between w-full items-center mb-1'>
          <label
            htmlFor='receiver_alias'
            className='text-sm font-semibold text-surface-foreground'
          >
            Receptor
          </label>
          <div className='flex flex-row items-center gap-2'>
            <button
              type='button'
              className={cn(
                'text-xs px-2.5 py-1 rounded transition-colors cursor-pointer',
                inputType === 'text'
                  ? 'bg-primary-600 text-white font-medium'
                  : 'bg-black/30 hover:bg-black/50 text-foreground/80',
              )}
              onClick={() => setInputType('text')}
            >
              Escribir
            </button>
            <button
              type='button'
              className={cn(
                'text-xs px-2.5 py-1 rounded transition-colors cursor-pointer',
                inputType === 'select'
                  ? 'bg-primary-600 text-white font-medium'
                  : 'bg-black/30 hover:bg-black/50 text-foreground/80',
              )}
              onClick={() => setInputType('select')}
            >
              Elegir
            </button>
          </div>
        </div>

        {inputType === 'text' && (
          <input
            id='receiver_alias'
            type='text'
            name='receiver_alias'
            className='w-full p-2.5 rounded-md bg-black/20 border border-surface-border focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm'
            placeholder='Alias'
          />
        )}
        {inputType === 'select' && (
          <select
            name='receiver_alias'
            id='receiver_alias'
            className='w-full p-2.5 rounded-md bg-black/20 border border-surface-border focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm'
          >
            <option value='' className='text-black bg-white'>
              {savedAliases.length > 0
                ? 'Seleccionar receptor'
                : 'No hay aliases disponibles'}
            </option>
            {savedAliases.length > 0 &&
              savedAliases.map((alias) => (
                <option
                  key={alias.id}
                  value={alias.alias}
                  className='text-black bg-white'
                >
                  {alias.alias}
                </option>
              ))}
          </select>
        )}
      </div>

      <div className='flex flex-col gap-1.5'>
        <label
          htmlFor='balance'
          className='text-sm font-semibold text-surface-foreground'
        >
          Monto
        </label>
        <input
          id='balance'
          type='text'
          name='balance'
          className='w-full p-2.5 rounded-md bg-black/20 border border-surface-border focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm'
          placeholder='$1000'
        />
      </div>

      <input
        type='submit'
        disabled={pending}
        className='mt-2 p-3 font-semibold text-sm uppercase rounded-md bg-primary-600 hover:bg-primary-700 text-white cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
        value={pending ? 'Transfiriendo...' : 'Realizar Transferencia'}
      />
    </form>
  )
}
