import {
  Answer,
  FaqPageContainer,
  Question,
  Section,
  SectionTitle,
  Title,
} from './page.panda'

export default function Page() {
  return (
    <FaqPageContainer>
      <Title>Preguntas Frecuentes (FAQ)</Title>

      <Section>
        <SectionTitle>¿Qué es Homebanking?</SectionTitle>
        <Question>¿Qué es la plataforma de Homebanking?</Question>
        <Answer>
          Homebanking es un servicio en línea que le permite realizar
          operaciones bancarias a través de Internet. Desde consultar saldos y
          movimientos hasta realizar transferencias y pagar servicios, todo
          desde la comodidad de su hogar.
        </Answer>
      </Section>

      <Section>
        <SectionTitle>Acceso y Seguridad</SectionTitle>
        <Question>¿Cómo puedo acceder a mi cuenta?</Question>
        <Answer>
          Puede acceder a su cuenta ingresando su nombre de usuario y contraseña
          a través de nuestra plataforma. Si aún no tiene una cuenta, puede
          registrarse fácilmente en la página de inicio.
        </Answer>

        <Question>¿Es seguro utilizar la plataforma?</Question>
        <Answer>
          Sí, tomamos muy en serio la seguridad de su información. Utilizamos
          protocolos de encriptación y autenticación de dos factores para
          proteger su cuenta y datos personales.
        </Answer>

        <Question>He olvidado mi contraseña. ¿Qué debo hacer?</Question>
        <Answer>
          Si ha olvidado su contraseña, haga clic en el enlace &quot;Olvidé mi
          contraseña&quot; en la página de inicio de sesión. Le enviaremos
          instrucciones para restablecer su contraseña de forma segura.
        </Answer>
      </Section>

      <Section>
        <SectionTitle>Operaciones y Funcionalidades</SectionTitle>
        <Question>¿Cómo puedo hacer una transferencia bancaria?</Question>
        <Answer>
          Para realizar una transferencia, ingrese a la sección
          &quot;Transferencias&quot; de la plataforma, elija el destinatario,
          ingrese el monto y confirme la operación. Puede transferir entre
          cuentas dentro del mismo banco o a cuentas de otros bancos.
        </Answer>

        <Question>¿Puedo pagar servicios a través de la plataforma?</Question>
        <Answer>
          Sí, ofrecemos la opción de pagar varios servicios como electricidad,
          agua, internet, y más. Solo debe seleccionar el servicio, ingresar el
          monto y confirmar el pago.
        </Answer>

        <Question>¿Cómo puedo ver el historial de mis transacciones?</Question>
        <Answer>
          El historial de sus transacciones está disponible en la sección
          &quot;Movimientos&quot; de su cuenta. Allí podrá consultar todos los
          pagos, transferencias y otras operaciones realizadas desde su cuenta.
        </Answer>
      </Section>

      <Section>
        <SectionTitle>Soporte y Ayuda</SectionTitle>
        <Question>¿Cómo puedo contactar con el soporte al cliente?</Question>
        <Answer>
          Si necesita ayuda, puede contactar con nuestro equipo de soporte a
          través de la sección &quot;Ayuda&quot; en la plataforma, o bien
          enviándonos un correo electrónico a soporte@suempresa.com.
        </Answer>

        <Question>¿Hay algún teléfono de contacto?</Question>
        <Answer>
          Sí, puede llamarnos al +34 900 123 456 de lunes a viernes, de 9:00 AM
          a 6:00 PM, y estaremos encantados de asistirle.
        </Answer>
      </Section>

      <Section>
        <SectionTitle>Otras Preguntas</SectionTitle>
        <Question>¿Cómo puedo actualizar mis datos personales?</Question>
        <Answer>
          Para actualizar su información personal, ingrese a la sección &quot;Mi
          Perfil&quot; dentro de la plataforma y edite los campos
          correspondientes. Asegúrese de guardar los cambios para que se
          actualicen correctamente.
        </Answer>

        <Question>
          ¿Qué sucede si detecto una transacción no autorizada?
        </Question>
        <Answer>
          Si detecta una transacción no autorizada en su cuenta, le recomendamos
          que nos contacte inmediatamente a través de la sección de soporte o al
          correo electrónico para que podamos investigar el problema y tomar las
          medidas adecuadas.
        </Answer>
      </Section>
    </FaqPageContainer>
  )
}
