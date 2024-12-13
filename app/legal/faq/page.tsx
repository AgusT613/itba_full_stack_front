import styles from './page.module.css'

export default function Page() {
  return (
    <div className={styles.faqPageContainer}>
      <h1 className={styles.title}>Preguntas Frecuentes (FAQ)</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>¿Qué es Homebanking?</h2>
        <h3 className={styles.question}>
          ¿Qué es la plataforma de Homebanking?
        </h3>
        <p className={styles.answer}>
          Homebanking es un servicio en línea que le permite realizar
          operaciones bancarias a través de Internet. Desde consultar saldos y
          movimientos hasta realizar transferencias y pagar servicios, todo
          desde la comodidad de su hogar.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Acceso y Seguridad</h2>
        <h3 className={styles.question}>¿Cómo puedo acceder a mi cuenta?</h3>
        <p className={styles.answer}>
          Puede acceder a su cuenta ingresando su nombre de usuario y contraseña
          a través de nuestra plataforma. Si aún no tiene una cuenta, puede
          registrarse fácilmente en la página de inicio.
        </p>

        <h3 className={styles.question}>¿Es seguro utilizar la plataforma?</h3>
        <p className={styles.answer}>
          Sí, tomamos muy en serio la seguridad de su información. Utilizamos
          protocolos de encriptación y autenticación de dos factores para
          proteger su cuenta y datos personales.
        </p>

        <h3 className={styles.question}>
          He olvidado mi contraseña. ¿Qué debo hacer?
        </h3>
        <p className={styles.answer}>
          Si ha olvidado su contraseña, haga clic en el enlace &quot;Olvidé mi
          contraseña&quot; en la página de inicio de sesión. Le enviaremos
          instrucciones para restablecer su contraseña de forma segura.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Operaciones y Funcionalidades</h2>
        <h3 className={styles.question}>
          ¿Cómo puedo hacer una transferencia bancaria?
        </h3>
        <p className={styles.answer}>
          Para realizar una transferencia, ingrese a la sección
          &quot;Transferencias&quot; de la plataforma, elija el destinatario,
          ingrese el monto y confirme la operación. Puede transferir entre
          cuentas dentro del mismo banco o a cuentas de otros bancos.
        </p>

        <h3 className={styles.question}>
          ¿Puedo pagar servicios a través de la plataforma?
        </h3>
        <p className={styles.answer}>
          Sí, ofrecemos la opción de pagar varios servicios como electricidad,
          agua, internet, y más. Solo debe seleccionar el servicio, ingresar el
          monto y confirmar el pago.
        </p>

        <h3 className={styles.question}>
          ¿Cómo puedo ver el historial de mis transacciones?
        </h3>
        <p className={styles.answer}>
          El historial de sus transacciones está disponible en la sección
          &quot;Movimientos&quot; de su cuenta. Allí podrá consultar todos los
          pagos, transferencias y otras operaciones realizadas desde su cuenta.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Soporte y Ayuda</h2>
        <h3 className={styles.question}>
          ¿Cómo puedo contactar con el soporte al cliente?
        </h3>
        <p className={styles.answer}>
          Si necesita ayuda, puede contactar con nuestro equipo de soporte a
          través de la sección &quot;Ayuda&quot; en la plataforma, o bien
          enviándonos un correo electrónico a soporte@suempresa.com.
        </p>

        <h3 className={styles.question}>¿Hay algún teléfono de contacto?</h3>
        <p className={styles.answer}>
          Sí, puede llamarnos al +34 900 123 456 de lunes a viernes, de 9:00 AM
          a 6:00 PM, y estaremos encantados de asistirle.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Otras Preguntas</h2>
        <h3 className={styles.question}>
          ¿Cómo puedo actualizar mis datos personales?
        </h3>
        <p className={styles.answer}>
          Para actualizar su información personal, ingrese a la sección &quot;Mi
          Perfil&quot; dentro de la plataforma y edite los campos
          correspondientes. Asegúrese de guardar los cambios para que se
          actualicen correctamente.
        </p>

        <h3 className={styles.question}>
          ¿Qué sucede si detecto una transacción no autorizada?
        </h3>
        <p className={styles.answer}>
          Si detecta una transacción no autorizada en su cuenta, le recomendamos
          que nos contacte inmediatamente a través de la sección de soporte o al
          correo electrónico para que podamos investigar el problema y tomar las
          medidas adecuadas.
        </p>
      </section>
    </div>
  )
}
