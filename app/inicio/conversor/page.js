import Conversor from '@/components/Conversor/Conversor'

export const metadata = {
  title: 'Conversor - ITBANK',
  description:
    'Convierte fácilmente entre diferentes monedas extranjeras con nuestro conversor de monedas en línea. Obtén tasas de cambio actualizadas al instante y realiza conversiones precisas para planificar tus viajes, negocios internacionales o seguimiento financiero.',
}

export default function Page() {
  return (
    <>
      <Conversor />
    </>
  )
}
