import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.termsPageContainer}>
      <h1 className={styles.title}>Términos y Condiciones</h1>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Introducción</h2>
        <p className={styles.paragraph}>
          Estos términos y condiciones rigen el uso de nuestra plataforma de
          homebanking. Al acceder o utilizar la plataforma, usted acepta cumplir
          con estos términos. Si no está de acuerdo, no utilice la plataforma.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Elegibilidad</h2>
        <p className={styles.paragraph}>
          Debe tener al menos 18 años para usar nuestros servicios. Al aceptar
          estos términos, confirma que cumple con este requisito de
          elegibilidad.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Cuenta de Usuario</h2>
        <p className={styles.paragraph}>
          Para usar nuestros servicios, debe crear una cuenta. Usted es
          responsable de mantener la confidencialidad de sus credenciales de
          acceso.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Responsabilidades</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Usted es responsable de toda actividad en su cuenta.
          </li>
          <li className={styles.listItem}>
            Notifique inmediatamente si sospecha de un acceso no autorizado a su
            cuenta.
          </li>
          <li className={styles.listItem}>
            Siga todas las leyes y regulaciones aplicables mientras utiliza la
            plataforma.
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Privacidad y Protección de Datos
        </h2>
        <p className={styles.paragraph}>
          Nos tomamos su privacidad muy en serio. Sus datos personales solo se
          utilizarán de acuerdo con nuestra política de privacidad. Por favor,
          revísela para entender cómo recopilamos, usamos y protegemos sus
          datos.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Limitación de Responsabilidad</h2>
        <p className={styles.paragraph}>
          No somos responsables de ningún daño directo o indirecto derivado del
          uso o la imposibilidad de usar la plataforma. Utilice la plataforma
          bajo su propio riesgo.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Cambios en los Términos</h2>
        <p className={styles.paragraph}>
          Podemos actualizar estos términos de vez en cuando. Cualquier cambio
          será comunicado a usted, y su uso continuo de la plataforma
          constituirá la aceptación de los términos actualizados.
        </p>
      </div>
    </div>
  )
}
