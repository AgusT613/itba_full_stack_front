'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import userSignUp from '@/utils/userSignUp'

import LoginForm from './loginForm/LoginForm'

export default function SignUpForm() {
  const [message, setMessage] = useState<string | null>(null)
  const [success, setSuccess] = useState<boolean | null>(null)
  const [urlRedirection, setUrlRedirection] = useState<string | null>(null)

  const router = useRouter()

  const formAction = async (formData: FormData) => {
    const res = await userSignUp(formData)

    setMessage(res.message)
    setSuccess(res.success)
    setUrlRedirection(res.urlRedirection)
  }

  useEffect(() => {
    if (success) {
      router.push(urlRedirection)
    }
  }, [success])

  return (
    <LoginForm
      formAction={formAction}
      success={success}
      message={message}
      formTitle='Registrarse'
    />
  )
}
