import styles from './loginForm.module.css'
import FormMessage from '../formMessage/FormMessage'

interface ILoginForm {
  formAction: (formData: FormData) => Promise<void>
  success: boolean
  message: string
  formTitle: string
}

export default function LoginForm({
  formAction,
  success,
  message,
  formTitle,
}: ILoginForm) {
  return (
    <>
      <form action={formAction} className={styles.form}>
        <div className={styles.inputWrapper}>
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

        <div className={styles.inputWrapper}>
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

        <div className={styles.inputWrapper}>
          <input
            className={styles.submitBtn}
            type='submit'
            value={formTitle}
            disabled={success}
          />
        </div>
      </form>
      <FormMessage message={message} success={success} />
    </>
  )
}
