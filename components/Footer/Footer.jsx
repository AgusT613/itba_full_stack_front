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
              <a href='' target='_blank'>
                Políticas de privacidad
              </a>
            </li>
            <li>
              <a href='' target='_blank'>
                Términos y condiciones
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h4>Contacto</h4>
          <ul>
            <li>
              <a href='' target='_blank'>
                WhatsApp
              </a>
            </li>
            <li>
              <a href='' target='_blank'>
                Instagram
              </a>
            </li>
            <li>
              <a href='' target='_blank'>
                Twitter
              </a>
            </li>
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
