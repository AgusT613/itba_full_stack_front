import SignUpForm from '@/components/Login/SignUpForm'
import ToggleForm from '@/components/Login/ToggleForm'
import HeaderHome from '@/components/HeaderHome/HeaderHome'
import styles from "@/components/Login/Form.module.css"

export const metadata = {
  title: 'Registro de Usuario- ITBANK',
  description: 'Regístrate en ITBANK y accede a una gama completa de servicios financieros. Garantizamos la seguridad de tus datos y transacciones. Abre una cuenta en línea hoy y disfruta de la comodidad de gestionar tus finanzas desde cualquier lugar.'
}

export default function Page () {
  return (
    <div className={styles.wrapperContainer}>
      <HeaderHome isAction />
      <main className={styles.userLoginContainer}>
        <section>
          <h2>Registro de Usuario</h2>
          <SignUpForm />
          <ToggleForm to='/login'>Ya tienes cuenta? Inicia sesión aquí</ToggleForm>
        </section>
      </main>
    </div>
  )
}
