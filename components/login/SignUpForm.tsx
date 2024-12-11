'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import styles from '@/components/login/form.module.css'
import userSignUp from '@/utils/userSignUp'

import FormMessage from './FormMessage'

export default function SignUpForm() {
  const [message, setMessage] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean | null>(null)
  const [urlRedirection, setUrlRedirection] = useState<string | null>(null)
  const [newUser, setNewUser] = useState(null)

  const router = useRouter()

  const formAction = async (formData: FormData) => {
    let userList = JSON.parse(localStorage.getItem('users'))

    if (!userList) {
      userList = localStorage.setItem('users', JSON.stringify([]))
    }

    const res = await userSignUp(formData, userList)

    setMessage(res.message)
    setSuccess(res.success)
    setUrlRedirection(res.urlRedirection)
    setNewUser(formData)
  }

  useEffect(() => {
    if (success) {
      const { email, password } = Object.fromEntries(newUser)
      const newUserList = JSON.parse(localStorage.getItem('users'))

      newUserList.push({ email, password })
      localStorage.setItem('users', JSON.stringify(newUserList))

      router.push(urlRedirection)
    }
  }, [success])

  return (
    <>
      <form action={formAction} className={styles.form}>
        {/* User Email */}
        <div>
          <label className={styles.labelDescription} htmlFor='email'>
            Correo Electrónico
          </label>
          <input
            className={styles.inputData}
            name='email'
            type='email'
            placeholder='agus@example.com'
            required
          />
        </div>
        {/* User Password */}
        <div>
          <label className={styles.labelDescription} htmlFor='password'>
            Contraseña
          </label>
          <input
            className={styles.inputData}
            name='password'
            type='password'
            placeholder='123'
            required
          />
        </div>
        <input
          className={styles.submitBtn}
          type='submit'
          value='Registrarse'
          disabled={success}
        />
      </form>
      <FormMessage message={message} success={success} />
    </>
  )
}
