import {
  List,
  ListItem,
  Paragraph,
  PrivacyPageContainer,
  Section,
  SectionTitle,
  Title,
} from './page.panda'

export default function Page() {
  return (
    <PrivacyPageContainer>
      <Title>Política de Privacidad</Title>

      <Section>
        <SectionTitle>Introducción</SectionTitle>
        <Paragraph>
          Esta Política de Privacidad describe cómo recopilamos, usamos y
          protegemos su información personal cuando utiliza nuestra plataforma
          de homebanking. Al acceder y usar nuestra plataforma, usted acepta las
          prácticas descritas en esta política.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Información que Recopilamos</SectionTitle>
        <Paragraph>
          Recopilamos información personal de nuestros usuarios con el fin de
          ofrecer un servicio más personalizado y seguro. Esto incluye:
        </Paragraph>
        <List>
          <ListItem>
            Información de identificación, como nombre, correo electrónico,
            dirección y número de teléfono.
          </ListItem>
          <ListItem>
            Información financiera, como números de cuenta y detalles de
            transacciones.
          </ListItem>
          <ListItem>
            Datos de acceso, como nombre de usuario y contraseñas.
          </ListItem>
          <ListItem>
            Información técnica, como dirección IP, tipo de dispositivo y
            cookies.
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Uso de la Información</SectionTitle>
        <Paragraph>
          Utilizamos su información personal para los siguientes fines:
        </Paragraph>
        <List>
          <ListItem>
            Proveer nuestros servicios de homebanking y facilitar la gestión de
            su cuenta.
          </ListItem>
          <ListItem>
            Mejorar nuestra plataforma y personalizar su experiencia de usuario.
          </ListItem>
          <ListItem>
            Realizar transacciones y procesar pagos de manera segura.
          </ListItem>
          <ListItem>
            Enviarle comunicaciones relacionadas con su cuenta y actualizaciones
            importantes.
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Protección de la Información</SectionTitle>
        <Paragraph>
          La seguridad de su información es nuestra prioridad. Implementamos
          medidas técnicas y organizativas para proteger su información personal
          de accesos no autorizados, divulgación, alteración o destrucción. Sin
          embargo, ningún sistema es completamente seguro y no podemos
          garantizar una protección absoluta.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Cookies</SectionTitle>
        <Paragraph>
          Utilizamos cookies para mejorar su experiencia en nuestra plataforma.
          Las cookies nos permiten recordar su configuración y preferencias.
          Usted puede controlar el uso de cookies desde su navegador, pero
          deshabilitar ciertas cookies puede afectar el funcionamiento de la
          plataforma.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Compartición de Información</SectionTitle>
        <Paragraph>
          No compartimos su información personal con terceros, salvo cuando sea
          necesario para cumplir con los fines descritos en esta política o
          cuando sea requerido por la ley. Podemos compartir su información con
          proveedores de servicios de confianza que nos ayuden a operar la
          plataforma.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Sus Derechos</SectionTitle>
        <Paragraph>
          Usted tiene derecho a acceder, corregir o eliminar su información
          personal que tenemos en nuestros registros. Si desea ejercer estos
          derechos, puede ponerse en contacto con nosotros en cualquier momento
          a través de los canales indicados en nuestra página de contacto.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Cambios en esta Política</SectionTitle>
        <Paragraph>
          Podemos actualizar esta Política de Privacidad ocasionalmente.
          Cualquier cambio se publicará en esta página, y la fecha de la última
          actualización será indicada al final del documento. Le recomendamos
          que revise esta política regularmente para estar informado sobre cómo
          protegemos su información.
        </Paragraph>
      </Section>
    </PrivacyPageContainer>
  )
}
