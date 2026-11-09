import CurrencyConverter from '@/src/components/currencyConverter/currencyConverter'

export const metadata = {
  title: 'Conversor - ITBANK',
  description:
    'Convierte fácilmente entre diferentes monedas extranjeras con nuestro conversor de monedas en línea. Obtén tasas de cambio actualizadas al instante y realiza conversiones precisas para planificar tus viajes, negocios internacionales o seguimiento financiero.',
}

export default function Page() {
  return (
    <section className='flex flex-col gap-6'>
      <h2 className='text-2xl font-bold'>Conversor de Moneda</h2>
      <CurrencyConverter />
    </section>
  )
}
