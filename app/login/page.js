import HeaderHome from '@/components/HeaderHome/HeaderHome'
import SignInForm from '@/components/Login/SignInForm'
import ToggleForm from '@/components/Login/ToggleForm'
import styles from "@/components/Login/Form.module.css"

export const metadata = {
  title: 'Inicio de sesión - ITBANK',
  description: 'Inicia sesión en nuestro portal bancario protegido por medidas de seguridad avanzadas. Administra tus finanzas, realiza transferencias y verifica tus saldos con confianza.'
}

export default function Page () {
  return (
    <div className={styles.wrapperContainer}>
      <HeaderHome isAction />
      <main className={styles.userLoginContainer}>
        <div>
          <section>
            <h2>Iniciar Sesion</h2>
            <SignInForm />
            <ToggleForm to='/register'>Deseas crearte una cuenta? Registrate aquí</ToggleForm>
          </section>
        </div>
      </main>
    </div>
  )
}
