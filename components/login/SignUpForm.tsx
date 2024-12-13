'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import userSignUp from '@/utils/userSignUp'

import LoginForm from './loginForm/LoginForm'

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
    <LoginForm
      formAction={formAction}
      success={success}
      message={message}
      formTitle='Registrarse'
    />
  )
}
