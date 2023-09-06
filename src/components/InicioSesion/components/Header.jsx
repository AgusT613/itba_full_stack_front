import LOGO_ITBANK from '../../../images/itbank-logo.png'
import styles from './Header.module.css'

export default function Header () {
  return (
    <header className={styles.cabecera}>
      <figure className={styles.contenedor_imagen}>
        <img className={styles.logo_itbank} src={LOGO_ITBANK} alt='logo de ITBANK' />
      </figure>
      <h1 className={styles.titulo_homebanking}>Homebanking</h1>
    </header>
  )
}
