'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import userSignUp from '@/src/services/userSignUp'

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
  }, [router, success, urlRedirection])

  return (
    <LoginForm
      formAction={formAction}
      success={success}
      message={message}
      formTitle='Registrarse'
    />
  )
}
