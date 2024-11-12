import SignInForm from '@/components/Login/SignInForm'
import ToggleForm from '@/components/Login/ToggleForm'
import styles from '@/components/Login/Form.module.css'
import Link from 'next/link'
import Image from 'next/image'
import LOGO_ITBANK from '@/public/itbank-logo.png'

export const metadata = {
  title: 'Inicio de sesión - ITBANK',
  description:
    'Inicia sesión en nuestro portal bancario protegido por medidas de seguridad avanzadas. Administra tus finanzas, realiza transferencias y verifica tus saldos con confianza.',
}

export default function Page() {
  return (
    <main className={styles.userLoginContainer}>
      <div className={styles.formWrapper}>
        <Link href={'/'} className={styles.link}>
          <Image src={LOGO_ITBANK} alt='Logo del banco ITBANK' height={50} />
          <span className={styles.goBackHome}>Volver a Home</span>
        </Link>
        <section>
          <h2>Iniciar Sesion</h2>
          <SignInForm />
          <ToggleForm to='/register'>
            Deseas crearte una cuenta? Registrate aquí
          </ToggleForm>
        </section>
      </div>
    </main>
  )
}
