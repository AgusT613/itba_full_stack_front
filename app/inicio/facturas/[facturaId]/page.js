'use client'
import TituloNavegacion from '@/components/TituloNavegacion'
import { datos } from '@/context/datosUsuario'

export default function Page ({ params }) {
  const listaFacturas = datos.facturas
  const idParametro = params.facturaId
  const factura = listaFacturas.filter(factura => factura.id === parseInt(idParametro))[0]

  return (
    <>
      <TituloNavegacion ruta='/inicio/facturas'>Detalle de Factura</TituloNavegacion>
      <table className='bg-[rgba(0,0,0,.4)] rounded-xl m-6'>
        <tr>
          <td className='p-3'>Empresa</td>
          <td>{factura.empresa}</td>
        </tr>
        <tr>
          <td className='p-3'>Descripcion</td>
          <td>{factura.descripcion}</td>
        </tr>
        <tr>
          <td className='p-3'>Fecha de vencimiento</td>
          <td>{factura.vencimiento}</td>
        </tr>
        <tr>
          <td className='p-3'>Cantidad a pagar</td>
          <td>{factura.monto}</td>
        </tr>
      </table>
    </>
  )
}
