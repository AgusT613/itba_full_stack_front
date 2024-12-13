import SignUpForm from '@/components/login/SignUpForm'
import ToggleForm from '@/components/login/toggleForm/ToggleForm'

import styles from '../layout.module.css'

export const metadata = {
  title: 'Registro de Usuario- ITBANK',
  description:
    'Regístrate en ITBANK y accede a una gama completa de servicios financieros. Garantizamos la seguridad de tus datos y transacciones. Abre una cuenta en línea hoy y disfruta de la comodidad de gestionar tus finanzas desde cualquier lugar.',
}

export default function Page() {
  return (
    <>
      <h2 className={styles.formTitle}>Registro de Usuario</h2>
      <SignUpForm />
      <ToggleForm to='/login/iniciar-sesion'>
        Ya tienes cuenta? Inicia sesión aquí
      </ToggleForm>
    </>
  )
}
