import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.privacyPageContainer}>
      <h1 className={styles.title}>Política de Privacidad</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Introducción</h2>
        <p className={styles.paragraph}>
          Esta Política de Privacidad describe cómo recopilamos, usamos y
          protegemos su información personal cuando utiliza nuestra plataforma
          de homebanking. Al acceder y usar nuestra plataforma, usted acepta las
          prácticas descritas en esta política.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Información que Recopilamos</h2>
        <p className={styles.paragraph}>
          Recopilamos información personal de nuestros usuarios con el fin de
          ofrecer un servicio más personalizado y seguro. Esto incluye:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Información de identificación, como nombre, correo electrónico,
            dirección y número de teléfono.
          </li>
          <li className={styles.listItem}>
            Información financiera, como números de cuenta y detalles de
            transacciones.
          </li>
          <li className={styles.listItem}>
            Datos de acceso, como nombre de usuario y contraseñas.
          </li>
          <li className={styles.listItem}>
            Información técnica, como dirección IP, tipo de dispositivo y
            cookies.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Uso de la Información</h2>
        <p className={styles.paragraph}>
          Utilizamos su información personal para los siguientes fines:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Proveer nuestros servicios de homebanking y facilitar la gestión de
            su cuenta.
          </li>
          <li className={styles.listItem}>
            Mejorar nuestra plataforma y personalizar su experiencia de usuario.
          </li>
          <li className={styles.listItem}>
            Realizar transacciones y procesar pagos de manera segura.
          </li>
          <li className={styles.listItem}>
            Enviarle comunicaciones relacionadas con su cuenta y actualizaciones
            importantes.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Protección de la Información</h2>
        <p className={styles.paragraph}>
          La seguridad de su información es nuestra prioridad. Implementamos
          medidas técnicas y organizativas para proteger su información personal
          de accesos no autorizados, divulgación, alteración o destrucción. Sin
          embargo, ningún sistema es completamente seguro y no podemos
          garantizar una protección absoluta.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Cookies</h2>
        <p className={styles.paragraph}>
          Utilizamos cookies para mejorar su experiencia en nuestra plataforma.
          Las cookies nos permiten recordar su configuración y preferencias.
          Usted puede controlar el uso de cookies desde su navegador, pero
          deshabilitar ciertas cookies puede afectar el funcionamiento de la
          plataforma.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Compartición de Información</h2>
        <p className={styles.paragraph}>
          No compartimos su información personal con terceros, salvo cuando sea
          necesario para cumplir con los fines descritos en esta política o
          cuando sea requerido por la ley. Podemos compartir su información con
          proveedores de servicios de confianza que nos ayuden a operar la
          plataforma.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Sus Derechos</h2>
        <p className={styles.paragraph}>
          Usted tiene derecho a acceder, corregir o eliminar su información
          personal que tenemos en nuestros registros. Si desea ejercer estos
          derechos, puede ponerse en contacto con nosotros en cualquier momento
          a través de los canales indicados en nuestra página de contacto.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Cambios en esta Política</h2>
        <p className={styles.paragraph}>
          Podemos actualizar esta Política de Privacidad ocasionalmente.
          Cualquier cambio se publicará en esta página, y la fecha de la última
          actualización será indicada al final del documento. Le recomendamos
          que revise esta política regularmente para estar informado sobre cómo
          protegemos su información.
        </p>
      </section>
    </div>
  )
}
