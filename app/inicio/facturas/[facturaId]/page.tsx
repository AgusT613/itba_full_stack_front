import TituloNavegacion from '@/components/TituloNavegacion'
import { styled } from '@/styled-system/jsx'
import { USER } from '@/utils/userDataModel'

const Table = styled.table`
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  margin: 0.75rem 0;
`

const TD = styled.td`
  padding: 1rem;
`

export default function Page({ params }) {
  const { recipient, description, expirationDate, amount } =
    USER.billPayment.find(
      (factura) => factura.id === parseInt(params.facturaId),
    )

  return (
    <>
      <TituloNavegacion ruta='/inicio/facturas'>
        Detalle de Factura
      </TituloNavegacion>
      <Table>
        <tr>
          <TD>Empresa</TD>
          <td>{recipient}</td>
        </tr>
        <tr>
          <TD>Descripcion</TD>
          <td>{description}</td>
        </tr>
        <tr>
          <TD>Fecha de vencimiento</TD>
          <td>{expirationDate}</td>
        </tr>
        <tr>
          <TD>Cantidad a pagar</TD>
          <td>{amount}</td>
        </tr>
      </Table>
    </>
  )
}
