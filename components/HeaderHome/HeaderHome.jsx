import Image from 'next/image'
import Link from 'next/link'
import LOGO_ITBANK from '@/public/itbank-logo.png'
import styles from './HeaderHome.module.css'

export default function HeaderHome ({ isAction = false }) {
  return (
    <header className={styles.cabecera}>
      <figure className={styles.contenedor_logo}>
        <Image className={styles.logo_itbank} src={LOGO_ITBANK} alt='logo de ITBANK' />
      </figure>
      <h1 className={styles.titulo_homebanking}>Homebanking</h1>
      <nav>
        {isAction
          ? <Link href='/'>Volver al Home</Link>
          : (
            <>
              <Link href='/register'>Registrarse</Link>
              <Link href='/login'>Iniciar Sesión</Link>
            </>
            )}
      </nav>
    </header>
  )
}
