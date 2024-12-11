'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import styles from '@/components/login/form.module.css'
import userSignIn from '@/utils/userSignIn'

import FormMessage from './FormMessage'

export default function SignInForm() {
  const [message, setMessage] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean | null>(null)
  const [urlRedirection, setUrlRedirection] = useState<string | null>(null)

  const router = useRouter()

  const formAction = async (formData: FormData) => {
    const userList = JSON.parse(localStorage.getItem('users'))
    const res = await userSignIn(formData, userList)

    setMessage(res.message)
    setSuccess(res.success)
    setUrlRedirection(res.urlRedirection)
  }

  useEffect(() => {
    if (success) router.push(urlRedirection)
  }, [success])

  return (
    <>
      <form action={formAction} className={styles.form}>
        {/* User email */}
        <div>
          <label className={styles.labelDescription} htmlFor='email'>
            Correo electrónico
          </label>
          <input
            className={styles.inputData}
            name='email'
            type='email'
            placeholder='agus@example.com'
          />
        </div>
        {/* Password */}
        <div>
          <label className={styles.labelDescription} htmlFor='password'>
            Contraseña
          </label>
          <input
            className={styles.inputData}
            name='password'
            type='password'
            placeholder='123'
          />
        </div>
        <div>
          <input
            className={styles.submitBtn}
            type='submit'
            value='Iniciar Sesion'
            disabled={success}
          />
        </div>
      </form>
      <FormMessage message={message} success={success} />
    </>
  )
}
