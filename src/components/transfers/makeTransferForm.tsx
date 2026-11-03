'use client'

import { handleTransfer } from '@/actions/makeTransferAction'
import styles from '@/app/inicio/transferencias/page.module.css'
import { TUserBankAccount } from '@/src/types/homebanking'
import { TUserSavedAlias } from '@/src/types/userSavedAlias'
import { useActionState, useState } from 'react'

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
  const [inputType, setInputType] = useState<'text' | 'select'>('text')
  const [state, formAction, pending] = useActionState(
    handleTransfer,
    initialState,
  )

  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.inputWrapper}>
        <label htmlFor='sender_alias' className={styles.label}>
          Cuenta Origen
        </label>
        <select
          name='sender_alias'
          id='sender_alias'
          className={styles.input + ' ' + styles.select}
        >
          <option value=''>Seleccionar cuenta</option>
          {bankAccountsAlias.map((account) => (
            <option key={account.id} value={account.alias}>
              {account.alias}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.inputWrapper}>
        <div className='flex flex-row justify-between w-full items-center'>
          <label htmlFor='receiver_alias' className={styles.label}>
            Receptor
          </label>
          <div className='flex flex-row items-center gap-2 px-2'>
            <button
              type='button'
              className='bg-black/30 p-2 rounded-sm'
              onClick={() => setInputType('text')}
            >
              Escribir
            </button>
            <button
              type='button'
              className='bg-black/30 p-2 rounded-sm'
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
            className={styles.input}
            placeholder='Alias'
          />
        )}
        {inputType === 'select' && (
          <select
            name='receiver_alias'
            id='receiver_alias'
            className={styles.input}
          >
            <option value=''>
              {savedAliases.length > 0
                ? 'Seleccionar receptor'
                : 'No hay aliases disponibles'}
            </option>
            {savedAliases.length > 0 &&
              savedAliases.map((alias) => (
                <option key={alias.id} value={alias.alias}>
                  {alias.alias}
                </option>
              ))}
          </select>
        )}
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor='balance' className={styles.label}>
          Monto
        </label>
        <input
          id='balance'
          type='text'
          name='balance'
          className={styles.input}
          placeholder='$1000'
        />
      </div>
      <input
        type='submit'
        disabled={pending}
        className={styles.inputSubmit}
        value='Realizar Transferencia'
      />
      {state.message && <p className={styles.errorMessage}>{state.message}</p>}
    </form>
  )
}
