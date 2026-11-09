'use client'

import { useActionState, useEffect, useRef, useState } from 'react'
import { toast } from 'sonner'
import { handleTransfer } from '@/actions/makeTransferAction'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select'
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
        <Select name='sender_alias'>
          <SelectTrigger id='sender_alias'>
            <SelectValue placeholder='Seleccionar cuenta' />
          </SelectTrigger>
          <SelectContent>
            {bankAccountsAlias.map((account) => (
              <SelectItem key={account.id} value={account.alias}>
                {account.alias}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
                  : 'bg-surface hover:bg-surface-hover text-foreground/80 border border-surface-border',
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
                  : 'bg-surface hover:bg-surface-hover text-foreground/80 border border-surface-border',
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
            className='w-full p-2.5 rounded-md bg-surface-card text-foreground border border-surface-border focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm shadow-sm'
            placeholder='Alias'
          />
        )}
        {inputType === 'select' && (
          <Select name='receiver_alias'>
            <SelectTrigger id='receiver_alias'>
              <SelectValue
                placeholder={
                  savedAliases.length > 0
                    ? 'Seleccionar receptor'
                    : 'No hay aliases disponibles'
                }
              />
            </SelectTrigger>
            <SelectContent>
              {savedAliases.map((alias) => (
                <SelectItem key={alias.id} value={alias.alias}>
                  {alias.alias}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
          className='w-full p-2.5 rounded-md bg-surface-card text-foreground border border-surface-border focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm shadow-sm'
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
