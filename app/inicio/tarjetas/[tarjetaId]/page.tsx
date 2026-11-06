import NavigationTitle from '@/src/components/navigationTitle/NavigationTitle'
import { USER } from '@/utils/userDataModel'

export default async function Page(props: {
  params: Promise<{ tarjetaId: string }>
}) {
  const params = await props.params
  const tarjeta = USER.cards.find(
    (value) => value.id === Number.parseInt(params.tarjetaId, 10),
  )

  return (
    <>
      <NavigationTitle href='/inicio/tarjetas'>
        Detalles de Tarjeta
      </NavigationTitle>
      <section className='max-w-md mx-auto my-6 overflow-hidden rounded-xl bg-surface border border-surface-border shadow-md'>
        <table className='w-full border-collapse text-sm'>
          <tbody className='divide-y divide-white/10'>
            <tr className='hover:bg-white/5 transition-colors'>
              <td className='py-3 px-4 font-semibold text-foreground/70'>
                Banco
              </td>
              <td className='py-3 px-4 text-right'>{tarjeta?.brand}</td>
            </tr>
            <tr className='hover:bg-white/5 transition-colors'>
              <td className='py-3 px-4 font-semibold text-foreground/70'>
                Tipo de tarjeta
              </td>
              <td className='py-3 px-4 text-right'>{tarjeta?.type}</td>
            </tr>
            <tr className='hover:bg-white/5 transition-colors'>
              <td className='py-3 px-4 font-semibold text-foreground/70'>
                Numero de tarjeta
              </td>
              <td className='py-3 px-4 text-right font-mono'>
                {tarjeta?.number}
              </td>
            </tr>
            <tr className='hover:bg-white/5 transition-colors'>
              <td className='py-3 px-4 font-semibold text-foreground/70'>
                Fecha de expiración
              </td>
              <td className='py-3 px-4 text-right'>
                {tarjeta?.expirationDate}
              </td>
            </tr>
            <tr className='hover:bg-white/5 transition-colors'>
              <td className='py-3 px-4 font-semibold text-foreground/70'>
                CVV
              </td>
              <td className='py-3 px-4 text-right font-mono'>{tarjeta?.cvv}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  )
}
