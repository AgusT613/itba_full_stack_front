import Link from 'next/link'

import styles from '@/src/components/footer/footer.module.css'

import BranchOffices from './branchOffices/BranchOffices'
import FooterInfoContainer from './footerInfoContainer/FooterInfoContainer'
import NewsletterForm from './newsletterForm/NewsletterForm'
import { getBranchOffices } from '@/src/lib/dataFetch'

export default async function Footer() {
  const branchOffices = await getBranchOffices()

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

      {branchOffices && (
        <FooterInfoContainer
          title='Contactanos'
          description='De Lunes a Viernes de 8 a 20hs'
          className={styles.contactContainer}
        >
          <BranchOffices branchOfficesList={branchOffices} />
        </FooterInfoContainer>
      )}

      <FooterInfoContainer
        title='Links Útiles'
        description='Descubre más acerca de nuestros servicios'
        className={styles.linksContainer}
      >
        <div className={styles.linksWrapper}>
          <Link
            href='/legal/faq'
            target='_blank'
            className={`${styles.btnPadding} ${styles.btnBg}`}
          >
            Preguntas frecuentes
          </Link>
          <Link
            href='/legal/privacidad'
            target='_blank'
            className={`${styles.btnPadding} ${styles.btnBg}`}
          >
            Privacidad
          </Link>
          <Link
            href='/legal/terminos'
            target='_blank'
            className={`${styles.btnPadding} ${styles.btnBg}`}
          >
            Terminos y Condiciones
          </Link>
        </div>
      </FooterInfoContainer>
    </footer>
  )
}
