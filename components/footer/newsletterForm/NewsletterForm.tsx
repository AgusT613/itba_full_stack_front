import styles2 from '@/components/footer/footer.module.css'
import styles from '@/components/footer/newsletterForm/newsletterForm.module.css'

export default function NewsletterForm() {
  return (
    <form className={styles.newsletterForm}>
      <input
        type='email'
        placeholder='Correo electrónico'
        className={`${styles.inputEmail} ${styles2.btnPadding}`}
      />
      <select
        name='nw-interests'
        id='newsletter-interests'
        className={`${styles2.btnPadding} ${styles2.btnBg}`}
      >
        <option defaultValue='no-selected'>Seleccione un interés</option>
        <option value='promotions'>Promociones y Beneficios</option>
        <option value='pymes'>Instituto PyMes</option>
        <option value='economic-studies'>Estudios Económicos</option>
        <option value='bid'>Subastas</option>
        <option value='enterprise'>Empresas</option>
      </select>
      <input
        type='submit'
        value='Suscribirse'
        className={`${styles.inputSubmit} ${styles2.btnPadding}`}
      />
    </form>
  )
}
