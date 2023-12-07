'use client'
import CalculadoraPrestamos from '@/components/CalculadoraPrestamos/CalculadoraPrestamos'
import FormularioSolicitarPrestamo from '@/components/SolicitarPrestamo'
import { DatosUsuarioContexto } from '@/context/datosUsuarioContexto'
import { PRESTAMOS_USER_API, eliminarPrestamo, obtenerListado } from '@/context/services'
import { useContext, useEffect, useState } from 'react'

// export const metadata = {
//   title: 'Prestamos - ITBANK',
//   description: ''
// }

export default function Page () {
  // const [listaPrestamos, setListaPrestamos] = useState([])
  const [prestamosITBANK, setPrestamosITBANK] = useState([])
  const [prestamosOtrasSucursales, setPrestamosOtrasSucursales] = useState([])
  const { datosUsuario } = useContext(DatosUsuarioContexto)

  useEffect(() => {
    const { userId, username, password } = datosUsuario
    obtenerListado(userId, PRESTAMOS_USER_API, username, password)
      .then(prestamos => {
        const prestamosITBANK = prestamos.filter(prestamo => prestamo.sucursal.nombre === 'ITBANK')
        const prestamosOtrasSucursales = prestamos.filter(prestamo => prestamo.sucursal.nombre !== 'ITBANK')
        setPrestamosITBANK(prestamosITBANK)
        setPrestamosOtrasSucursales(prestamosOtrasSucursales)
      })
      .catch(error => console.log(error))
  }, [])

  const handleEliminarPrestamo = prestamoId => {
    const urlEliminarPrestamo = `${PRESTAMOS_USER_API}${prestamoId}/?user_id=${datosUsuario.userId}`

    eliminarPrestamo(urlEliminarPrestamo)
      .then(response => {
        window.alert(response.message)
        const confirmacion = window.confirm('Deseas recargar la página ahora?')
        if (confirmacion) return window.location.reload()
        else {
          console.log(response)
        }
      })
      .catch(error => {
        window.alert(error.message)
        const confirmacion = window.confirm('Deseas recargar la página ahora?')
        if (confirmacion) return window.location.reload()
        else {
          console.log(error)
        }
      })
  }

  return (
    <>
      <section>
        <h2 className='text-3xl font-medium bg-[rgba(0,0,0,.2)] p-2 rounded-xl'>Solicitar un Prestamo</h2>
        <div className='my-8'>
          <FormularioSolicitarPrestamo />
        </div>
      </section>
      <section>
        <div className='bg-[rgba(0,0,0,.2)] py-2 px-4 rounded-xl'>
          <h2 className='text-3xl font-medium '>Listado Prestamos ITBANK</h2>
          <h3 className='text-xl font-normal'>Dirección: {prestamosITBANK[0]?.sucursal.direccion}</h3>
        </div>
        <div className='grid grid-cols-2 my-8 gap-4'>
          {prestamosITBANK.map(prestamo => (
            <div key={prestamo.id} className='bg-[rgba(0,0,0,.4)] p-6 rounded-xl flex flex-col gap-3'>
              <h2 className='text-xl text-center'>Prestamo {prestamo.tipo_prestamo}</h2>
              <p><strong>Fecha inicio del prestamo:</strong> {prestamo.fecha_inicio_prestamo}</p>
              <p><strong>Fecha finalizacion del prestamo:</strong> {prestamo.fecha_finalizacion_prestamo}</p>
              <strong className='text-center'>Monto: ${prestamo.monto}</strong>
              <button className='bg-red-300 text-black rounded hover:bg-red-400 p-2' onClick={() => handleEliminarPrestamo(prestamo.id)}>Dar de Baja</button>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className='text-3xl font-medium bg-[rgba(0,0,0,.2)] p-2 rounded-xl'>Listado Prestamos por Sucursal</h2>
        <div className='grid grid-cols-2 my-8 gap-4'>
          {prestamosOtrasSucursales.map(prestamo => (
            <div key={prestamo.id} className='bg-[rgba(0,0,0,.4)] p-6 rounded-xl flex flex-col gap-3'>
              <h2 className='text-xl text-center'>Prestamo {prestamo.tipo_prestamo}</h2>
              <p><strong>Nombre sucursal:</strong> {prestamo.sucursal.nombre}</p>
              <p><strong>Direccion sucursal:</strong> {prestamo.sucursal.direccion}</p>
              <p><strong>Fecha inicio del prestamo:</strong> {prestamo.fecha_inicio_prestamo}</p>
              <p><strong>Fecha finalizacion del prestamo:</strong> {prestamo.fecha_finalizacion_prestamo}</p>
              <strong className='text-center'>Monto: ${prestamo.monto}</strong>
              <button className='bg-red-300 text-black rounded hover:bg-red-400 p-2' onClick={() => handleEliminarPrestamo(prestamo.id)}>Dar de Baja</button>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className='text-3xl font-medium bg-[rgba(0,0,0,.2)] p-2 rounded-xl'>Calculadora de Prestamos</h2>
        <CalculadoraPrestamos />
      </section>
    </>
  )
}
