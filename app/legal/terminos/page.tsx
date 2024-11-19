import {
  List,
  ListItem,
  Paragraph,
  Section,
  SectionTitle,
  TermsPageContainer,
  Title,
} from './page.panda'

export default function Page() {
  return (
    <TermsPageContainer>
      <Title>Términos y Condiciones</Title>

      <Section>
        <SectionTitle>Introducción</SectionTitle>
        <Paragraph>
          Estos términos y condiciones rigen el uso de nuestra plataforma de
          homebanking. Al acceder o utilizar la plataforma, usted acepta cumplir
          con estos términos. Si no está de acuerdo, no utilice la plataforma.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Elegibilidad</SectionTitle>
        <Paragraph>
          Debe tener al menos 18 años para usar nuestros servicios. Al aceptar
          estos términos, confirma que cumple con este requisito de
          elegibilidad.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Cuenta de Usuario</SectionTitle>
        <Paragraph>
          Para usar nuestros servicios, debe crear una cuenta. Usted es
          responsable de mantener la confidencialidad de sus credenciales de
          acceso.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Responsabilidades</SectionTitle>
        <List>
          <ListItem>
            Usted es responsable de toda actividad en su cuenta.
          </ListItem>
          <ListItem>
            Notifique inmediatamente si sospecha de un acceso no autorizado a su
            cuenta.
          </ListItem>
          <ListItem>
            Siga todas las leyes y regulaciones aplicables mientras utiliza la
            plataforma.
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Privacidad y Protección de Datos</SectionTitle>
        <Paragraph>
          Nos tomamos su privacidad muy en serio. Sus datos personales solo se
          utilizarán de acuerdo con nuestra política de privacidad. Por favor,
          revísela para entender cómo recopilamos, usamos y protegemos sus
          datos.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Limitación de Responsabilidad</SectionTitle>
        <Paragraph>
          No somos responsables de ningún daño directo o indirecto derivado del
          uso o la imposibilidad de usar la plataforma. Utilice la plataforma
          bajo su propio riesgo.
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>Cambios en los Términos</SectionTitle>
        <Paragraph>
          Podemos actualizar estos términos de vez en cuando. Cualquier cambio
          será comunicado a usted, y su uso continuo de la plataforma
          constituirá la aceptación de los términos actualizados.
        </Paragraph>
      </Section>
    </TermsPageContainer>
  )
}
