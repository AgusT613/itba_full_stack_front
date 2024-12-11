'use client'

import { useRouter } from 'next/navigation'

import styles from './form.module.css'

export default function ToggleForm({ children, to }) {
  const router = useRouter()

  const toggleFormulario = () => {
    router.push(to)
  }

  return (
    <button
      type='button'
      onClick={toggleFormulario}
      className={styles.toggleForm}
    >
      {children}
    </button>
  )
}
