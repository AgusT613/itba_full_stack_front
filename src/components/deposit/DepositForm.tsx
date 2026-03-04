'use client'

import { depositToAccount } from '@/actions/depositToAccountAction'
import styles from '@/app/inicio/depositar/page.module.css'
import { TAccountAlias } from '@/src/types/alias'
import { useActionState } from 'react'

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
    <form action={formAction} className={styles.form}>
      <label htmlFor='alias' className={styles.label}>
        Alias
      </label>
      <select id='alias' name='alias' className={styles.select}>
        <option value='' className={styles.option}>
          Elegir alias
        </option>
        {aliasList.map((alias) => (
          <option
            key={alias.alias}
            value={alias.alias}
            className={styles.option}
          >
            {alias.alias}
          </option>
        ))}
      </select>

      <label htmlFor='amount' className={styles.label}>
        Monto
      </label>
      <input
        type='number'
        id='amount'
        name='amount'
        placeholder='1000'
        className={styles.input}
      />

      <button type='submit' className={styles.submitBtn} disabled={pending}>
        {pending ? 'Depositando...' : 'Depositar'}
      </button>

      {state.message && (
        <p
          className={
            state.success ? styles.successMessage : styles.errorMessage
          }
        >
          {state.message}
        </p>
      )}
    </form>
  )
}
