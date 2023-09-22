import TituloNavegacion from '@/components/TituloNavegacion'
import { datos } from '@/context/datosUsuario'

export default function Page ({ params }) {
  const listaFacturas = datos.facturas
  const idParametro = params.facturaId
  const factura = listaFacturas.filter(id => id.id === idParametro)[0]

  return (
    <>
      <TituloNavegacion ruta='/inicio/facturas'>Detalle de Factura</TituloNavegacion>
      <table>
        <tr>
          <td>Empresa</td>
          <td>{factura.payee}</td>
        </tr>
        <tr>
          <td>Descripcion</td>
          <td>{factura.description}</td>
        </tr>
        <tr>
          <td>Fecha de vencimiento</td>
          <td>{factura.dueDate}</td>
        </tr>
        <tr>
          <td>Cantidad a pagar</td>
          <td>{factura.amount}</td>
        </tr>
      </table>
    </>
  )
}
