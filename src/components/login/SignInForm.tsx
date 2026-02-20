'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import userSignIn from '@/src/services/userSignIn'

import LoginForm from './loginForm/LoginForm'

export default function SignInForm() {
  const [message, setMessage] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean>(false)

  const router = useRouter()

  const formAction = async (formData: FormData) => {
    const res = await userSignIn(formData)

    setMessage(res.message)
    setSuccess(res.success)
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
