'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import userSignIn from '@/src/services/userSignIn'

import LoginForm from './loginForm/LoginForm'
import { isServerAlive } from '@/src/lib/pingServer'

export default function SignInForm() {
  const [message, setMessage] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)

  const router = useRouter()

  const formAction = async (formData: FormData) => {
    if (await isServerAlive()) {
      const res = await userSignIn(formData)

      setMessage(res.message)
      setSuccess(res.success)
    } else {
      setMessage(
        'El servidor no está disponible. Por favor, inténtalo de nuevo más tarde.',
      )
      setSuccess(false)
    }
  }

  useEffect(() => {
    if (success) router.push('/inicio')
  }, [router, success])

  return (
    <LoginForm
      formAction={formAction}
      message={message}
      success={success}
      formTitle='Iniciar Sesión'
    />
  )
}
