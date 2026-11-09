import type { ReactNode } from 'react'

export default function FormMessage({
  message,
  success,
}: {
  message?: ReactNode
  success?: boolean
}) {
  if (!message) return null

  return (
    <div
      className={`max-w-md w-full text-center text-balance mx-auto my-3 bg-surface-card border border-surface-border shadow-sm p-3 rounded-xl text-sm font-medium ${
        success ? 'text-success-500' : 'text-danger-500'
      }`}
    >
      {message}
    </div>
  )
}
