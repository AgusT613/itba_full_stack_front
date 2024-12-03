import Image from 'next/image'
import Link from 'next/link'

import styles from '@/components/footer/footer.module.css'
import ITBANK_LOGO from '@/public/itbank-logo.png'
import { styled } from '@/styled-system/jsx'
import { BRANCH_OFFICE } from '@/utils/userDataModel'

import FooterInfoContainer from './FooterInfoContainer'

const Article = styled.div`
  color: #ccc;
  font-weigth: 300;
`

export default function Footer() {
  return (
    <footer className={styles.footer} id='footer'>
      <Article>
        <p>
          ¡Gracias por confiar en ITBANK! Estamos comprometidos en hacer que tu
          experiencia en el mundo financiero sea más simple, transparente y
          conveniente.
        </p>
        <p>
          Si tienes alguna pregunta o sugerencia, no dudes en ponerte en
          contacto con nosotros.
        </p>
      </Article>
      <div className={styles.footer__wrapperInfo}>
        <FooterInfoContainer
          title='Suscribite'
          description='Enterate de todas las novedades y beneficios que tenemos para vos.'
          className={styles.footer__form}
        >
          <form>
            <input type='email' placeholder='Correo electrónico' />
            <select name='nw-interests' id='newsletter-interests'>
              <option defaultValue='no-selected'>Seleccione un interés</option>
              <option value='promotions'>Promociones y Beneficios</option>
              <option value='pymes'>Instituto PyMes</option>
              <option value='economic-studies'>Estudios Económicos</option>
              <option value='bid'>Subastas</option>
              <option value='enterprise'>Empresas</option>
            </select>
            <input type='submit' value='Suscribirse' />
          </form>
        </FooterInfoContainer>
        <FooterInfoContainer
          title='Contactanos'
          description='De Lunes a Viernes de 8 a 20hs'
          className={styles.footer__contact}
        >
          <ul>
            {BRANCH_OFFICE.map((contact) => (
              <div key={contact.name}>
                <h5>{contact.name}</h5>
                <span>{contact.address}</span>
                <span>{contact.contactNumber}</span>
              </div>
            ))}
          </ul>
        </FooterInfoContainer>
        <FooterInfoContainer
          title='Links Útiles'
          description='Descubre más acerca de nuestros servicios'
          className={styles.footer__links}
        >
          <Link href='/legal/faq' target='_blank'>
            Preguntas frecuentes
          </Link>
        </FooterInfoContainer>
      </div>
      <div className={styles.footer__logo}>
        <Image src={ITBANK_LOGO} alt='Logo del banco itbank' height={50} />
      </div>
    </footer>
  )
}
