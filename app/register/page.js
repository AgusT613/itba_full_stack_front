import SignUpForm from '@/components/Login/SignUpForm'
import ToggleForm from '@/components/Login/ToggleForm'
import styles from "@/components/Login/Form.module.css"
import Link from 'next/link'
import LOGO_ITBANK from '@/public/itbank-logo.png'
import Image from 'next/image'

export const metadata = {
  title: 'Registro de Usuario- ITBANK',
  description: 'Regístrate en ITBANK y accede a una gama completa de servicios financieros. Garantizamos la seguridad de tus datos y transacciones. Abre una cuenta en línea hoy y disfruta de la comodidad de gestionar tus finanzas desde cualquier lugar.'
}

export default function Page () {
  return (
    <main className={styles.userLoginContainer}>
      <div className={styles.formWrapper}>
        <Link href={"/"} className={styles.link}>
          <Image src={LOGO_ITBANK} alt='Logo del banco ITBANK' height={50}/>
          <span className={styles.goBackHome}>Volver a Home</span>
        </Link>
        <section>
          <h2>Registro de Usuario</h2>
          <SignUpForm />
          <ToggleForm to='/login'>Ya tienes cuenta? Inicia sesión aquí</ToggleForm>
        </section>
      </div>
    </main>
  )
}
