import Link from 'next/link'

import styles from './Footer.module.css'

export function Footer() {
  return (
    <>
      <article className={styles.parrafo}>
        <p>
          ¡Gracias por confiar en ITBANK! Estamos comprometidos en hacer que tu
          experiencia en el mundo financiero sea más simple, transparente y
          conveniente.
        </p>
        <p>
          Si tienes alguna pregunta o sugerencia, no dudes en ponerte en
          contacto con nosotros.
        </p>
      </article>
      <article className={styles.info_detalles}>
        <section>
          <h4>Legales</h4>
          <ul>
            <li>
              <Link href='/legal/privacidad' target='_blank'>
                Políticas de privacidad
              </Link>
            </li>
            <li>
              <Link href='/legal/terminos' target='_blank'>
                Términos y condiciones
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h4>Contacto</h4>
          <ul>
            <li>WhatsApp</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </section>
        <section>
          <h4>Horarios</h4>
          <p>Lunes a Viernes de 8hs a 18 hs</p>
        </section>
      </article>
    </>
  )
}
