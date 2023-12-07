'use client'
import TituloNavegacion from '@/components/TituloNavegacion'
import { DatosUsuarioContexto } from '@/context/datosUsuarioContexto'
import { FACTURAS_USER_API, obtenerListado } from '@/context/services'
import { useContext, useEffect, useState } from 'react'

export default function Page ({ params }) {
  const idParametro = params.facturaId
  const [factura, setFactura] = useState()
  const { datosUsuario } = useContext(DatosUsuarioContexto)

  useEffect(() => {
    const { userId, username, password } = datosUsuario
    obtenerListado(userId, FACTURAS_USER_API, username, password)
      .then(facturas => {
        const factura = facturas.find(factura => factura.id === parseInt(idParametro))
        setFactura(factura)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <TituloNavegacion ruta='/inicio/facturas'>Detalle de Factura</TituloNavegacion>
      <table className='bg-[rgba(0,0,0,.4)] rounded-xl m-6'>
        <tr>
          <td className='p-3'>Empresa</td>
          <td>{factura?.empresa}</td>
        </tr>
        <tr>
          <td className='p-3'>Descripcion</td>
          <td>{factura?.descripcion}</td>
        </tr>
        <tr>
          <td className='p-3'>Fecha de vencimiento</td>
          <td>{factura?.vencimiento}</td>
        </tr>
        <tr>
          <td className='p-3'>Cantidad a pagar</td>
          <td>{factura?.monto}</td>
        </tr>
      </table>
    </>
  )
}
