import Footer from '@/components/footer/Footer'
import FormularioContacto from '@/components/FormularioContacto/FormularioContacto'

export const metadata = {
  title: 'Contacto - ITBANK',
  description:
    '¡Estamos aquí para ayudarte! Completa nuestro formulario de contacto para comunicarte con nuestro equipo. Tu opinión es importante para nosotros.',
}

export default function Page() {
  return (
    <>
      <Footer />
      <FormularioContacto />
    </>
  )
}
