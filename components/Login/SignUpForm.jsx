'use client'
import styles from '@/components/Login/Form.module.css'
import { useRouter } from 'next/navigation'
import userSignUp from './utils/userSignUp'

export default function SignUpForm () {
  const router = useRouter()

  const onSignUp = e =>{
    if (userSignUp(e)){
      router.push("/inicio")
    }
  }

  return (
    <form onSubmit={onSignUp} className={styles.form}>
      {/* User Email */}
      <div>
        <label className={styles.labelDescription} htmlFor='email'>Correo Electrónico</label>
        <input
          className={styles.inputData}
          name='email'
          type='email'
          placeholder='mariano@ejemplo.com'
        />
      </div>
      {/* User Password */}
      <div>
        <label className={styles.labelDescription} htmlFor='password'>Contraseña</label>
        <input
          className={styles.inputData}
          name='password'
          type='password'
          placeholder='1235678'
        />
      </div>
      <input
        className={styles.submitBtn}
        type='submit'
        value='Registrarse'
      />
    </form>
  )
}
