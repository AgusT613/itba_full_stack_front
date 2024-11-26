'use client'

import { useRouter } from 'next/navigation'

import styles from '@/components/Login/Form.module.css'

import userSignIn from './utils/userSignIn'

export default function IniciarSesion() {
  const router = useRouter()

  const onSignIn = (e) => {
    if (userSignIn(e)) {
      router.push('/inicio')
    }
  }

  return (
    <form onSubmit={onSignIn} className={styles.form}>
      {/* User email */}
      <div>
        <label className={styles.labelDescription} htmlFor='email'>
          Correo electrónico
        </label>
        <input
          className={styles.inputData}
          name='email'
          type='email'
          placeholder='agus@example.com'
        />
      </div>
      {/* Password */}
      <div>
        <label className={styles.labelDescription} htmlFor='password'>
          Contraseña
        </label>
        <input
          className={styles.inputData}
          name='password'
          type='password'
          placeholder='123'
        />
      </div>
      <div>
        <input
          className={styles.submitBtn}
          type='submit'
          value='Iniciar Sesion'
        />
      </div>
    </form>
  )
}
