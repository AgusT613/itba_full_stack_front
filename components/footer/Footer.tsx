import Link from 'next/link'

import styles from '@/components/footer/footer.module.css'

import BranchOffices from './branchOffices/BranchOffices'
import FooterInfoContainer from './footerInfoContainer/FooterInfoContainer'
import NewsletterForm from './newsletterForm/NewsletterForm'

export default function Footer() {
  return (
    <footer className={styles.footer} id='footer'>
      <article className={styles.description}>
        <p className={styles.text}>
          ¡Gracias por confiar en ITBANK! Estamos comprometidos en hacer que tu
          experiencia en el mundo financiero sea más simple, transparente y
          conveniente.
        </p>
        <p className={styles.text}>
          Si tienes alguna pregunta o sugerencia, no dudes en ponerte en
          contacto con nosotros.
        </p>
      </article>
      <FooterInfoContainer
        title='Suscribite'
        description='Enterate de todas las novedades y beneficios que tenemos para vos.'
        className={styles.formContainer}
      >
        <NewsletterForm />
      </FooterInfoContainer>

      <FooterInfoContainer
        title='Contactanos'
        description='De Lunes a Viernes de 8 a 20hs'
        className={styles.contactContainer}
      >
        <BranchOffices />
      </FooterInfoContainer>

      <FooterInfoContainer
        title='Links Útiles'
        description='Descubre más acerca de nuestros servicios'
        className={styles.linksContainer}
      >
        <Link
          href='/legal/faq'
          target='_blank'
          className={`${styles.btnPadding} ${styles.btnBg}`}
        >
          Preguntas frecuentes
        </Link>
      </FooterInfoContainer>
    </footer>
  )
}
