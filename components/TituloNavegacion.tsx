import Link from 'next/link'

import styles from '@/styles/TituloNavegacion.module.css'

export default function TituloNavegacion({ children, ruta }) {
  return (
    <header className={styles.header}>
      <h2>{children}</h2>
      <Link href={ruta} className={styles.btn_volver_tarjetas}>
        Volver
      </Link>
    </header>
  )
}
