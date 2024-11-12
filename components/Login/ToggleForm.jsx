'use client'

import { useRouter } from 'next/navigation'

export default function ToggleForm({ children, to }) {
  const router = useRouter()

  const toggleFormulario = () => {
    router.push(to)
  }

  return <button onClick={toggleFormulario}>{children}</button>
}
