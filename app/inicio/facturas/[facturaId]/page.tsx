import NavigationTitle from '@/src/components/navigationTitle/NavigationTitle'
import { USER } from '@/utils/userDataModel'

export default async function Page(props: {
  params: Promise<{ facturaId: string }>
}) {
  const params = await props.params
  const factura = USER.billPayment.find(
    (f) => f.id === Number.parseInt(params.facturaId, 10),
  )

  return (
    <>
      <NavigationTitle href='/inicio/facturas'>
        Detalle de Factura
      </NavigationTitle>
      <div className='max-w-md mx-auto my-6 overflow-hidden rounded-xl bg-surface border border-surface-border shadow-md'>
        <table className='w-full border-collapse text-sm'>
          <tbody className='divide-y divide-white/10'>
            <tr className='hover:bg-white/5 transition-colors'>
              <td className='py-3 px-4 font-semibold text-foreground/70'>
                Empresa
              </td>
              <td className='py-3 px-4 text-right'>{factura?.recipient}</td>
            </tr>
            <tr className='hover:bg-white/5 transition-colors'>
              <td className='py-3 px-4 font-semibold text-foreground/70'>
                Descripción
              </td>
              <td className='py-3 px-4 text-right'>{factura?.description}</td>
            </tr>
            <tr className='hover:bg-white/5 transition-colors'>
              <td className='py-3 px-4 font-semibold text-foreground/70'>
                Fecha de vencimiento
              </td>
              <td className='py-3 px-4 text-right'>
                {factura?.expirationDate}
              </td>
            </tr>
            <tr className='hover:bg-white/5 transition-colors'>
              <td className='py-3 px-4 font-semibold text-foreground/70'>
                Cantidad a pagar
              </td>
              <td className='py-3 px-4 text-right font-bold text-primary-300'>
                ${factura?.amount}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
