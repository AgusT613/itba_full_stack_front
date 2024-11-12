import TituloNavegacion from '@/components/TituloNavegacion'
import { USER } from '@/utils/userDataModel'

export default function Page ({ params }) {
  const factura = USER.billPayment.find(factura => factura.id === parseInt(params.facturaId))

  return (
    <>
      <TituloNavegacion ruta='/inicio/facturas'>Detalle de Factura</TituloNavegacion>
      <table className='bg-[rgba(0,0,0,.4)] rounded-xl m-6'>
        <tr>
          <td className='p-3'>Empresa</td>
          <td>{factura.recipient}</td>
        </tr>
        <tr>
          <td className='p-3'>Descripcion</td>
          <td>{factura.description}</td>
        </tr>
        <tr>
          <td className='p-3'>Fecha de vencimiento</td>
          <td>{factura.expirationDate}</td>
        </tr>
        <tr>
          <td className='p-3'>Cantidad a pagar</td>
          <td>{factura.amount}</td>
        </tr>
      </table>
    </>
  )
}
