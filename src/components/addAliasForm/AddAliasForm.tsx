'use client'
import { saveAlias } from '@/actions/saveAliasAction'
import { useActionState } from 'react'

const initialFormState = {
  message: '',
  success: false,
}

export default function AddAliasForm() {
  const [state, formAction, pending] = useActionState(
    saveAlias,
    initialFormState,
  )

  return (
    <div className='bg-black/10 p-5 my-5 rounded-md inline-flex gap-4 flex-col'>
      <form action={formAction} className='flex gap-4'>
        <label htmlFor='alias' hidden />
        <input
          type='text'
          id='alias'
          name='alias'
          className='border border-violet-200 p-2 w-96'
          placeholder='alias'
        />
        <input
          type='submit'
          value='Agregar Alias'
          disabled={pending}
          className='bg-violet-200 text-black p-2 rounded-md cursor-pointer hover:bg-violet-300 transition-colors'
        />
      </form>
      <p className={`${state.success ? 'text-green-300' : 'text-red-300'}`}>
        {state.message}
      </p>
    </div>
  )
}
