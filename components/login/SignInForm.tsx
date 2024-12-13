'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import userSignIn from '@/utils/userSignIn'

import LoginForm from './loginForm/LoginForm'

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
    <LoginForm
      formAction={formAction}
      message={message}
      success={success}
      formTitle='Iniciar Sesión'
    />
  )
}
