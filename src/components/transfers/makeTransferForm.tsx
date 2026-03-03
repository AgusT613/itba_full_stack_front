'use client'

import { handleTransfer } from '@/actions/makeTransferAction'
import styles from '@/app/inicio/transferencias/page.module.css'
import { TUserBankAccount } from '@/src/types/homebanking'
import { useActionState } from 'react'

const initialState = {
  message: '',
  success: false,
}

export default function MakeTransferForm({
  bankAccountsAlias,
}: {
  bankAccountsAlias: TUserBankAccount[]
}) {
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
        <label htmlFor='receiver_alias' className={styles.label}>
          Receptor
        </label>
        <input
          id='receiver_alias'
          type='text'
          name='receiver_alias'
          className={styles.input}
          placeholder='Alias o CVU'
        />
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
