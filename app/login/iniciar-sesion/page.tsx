import SignInForm from '@/components/login/SignInForm'
import ToggleForm from '@/components/login/ToggleForm'

import styles from '../layout.module.css'

export const metadata = {
  title: 'Inicio de sesión - ITBANK',
  description:
    'Inicia sesión en nuestro portal bancario protegido por medidas de seguridad avanzadas. Administra tus finanzas, realiza transferencias y verifica tus saldos con confianza.',
}

export default function Page() {
  return (
    <>
      <h2 className={styles.formTitle}>Iniciar Sesion</h2>
      <SignInForm />
      <ToggleForm to='/login/registrarse'>
        Deseas crearte una cuenta? Registrate aquí
      </ToggleForm>
    </>
  )
}
