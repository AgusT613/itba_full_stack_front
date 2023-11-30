'use client'
import CalculadoraPrestamos from '@/components/CalculadoraPrestamos/CalculadoraPrestamos'
import { datos } from '@/context/datosUsuario'

// export const metadata = {
//   title: 'Prestamos - ITBANK',
//   description: ''
// }

export default function Page () {
  const prestamosITBANK = datos.prestamos.filter(prestamo => prestamo.sucursal.nombre === 'ITBANK')
  const prestamosOtrasSucursales = datos.prestamos.filter(prestamo => prestamo.sucursal.nombre !== 'ITBANK')
  return (
    <>
      <section>
        <div className='bg-[rgba(0,0,0,.2)] py-2 px-4 rounded-xl'>
          <h2 className='text-3xl font-medium '>Listado Prestamos ITBANK</h2>
          <h3 className='text-xl font-normal'>Dirección: {prestamosITBANK[0].sucursal.direccion}</h3>
        </div>
        <div className='grid grid-cols-2 my-8'>
          {prestamosITBANK.map(prestamo => (
            <div key={prestamo.id} className='bg-[rgba(0,0,0,.4)] p-6 rounded-xl flex flex-col gap-3'>
              <h2 className='text-xl text-center'>Prestamo {prestamo.tipo_prestamo}</h2>
              <p><strong>Fecha inicio del prestamo:</strong> {prestamo.fecha_inicio_prestamo}</p>
              <p><strong>Fecha finalizacion del prestamo:</strong> {prestamo.fecha_finalizacion_prestamo}</p>
              <strong className='text-center'>Monto: ${prestamo.monto}</strong>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className='text-3xl font-medium bg-[rgba(0,0,0,.2)] p-2 rounded-xl'>Listado Prestamos por Sucursal</h2>
        <div className='grid grid-cols-2 my-8'>
          {prestamosOtrasSucursales.map(prestamo => (
            <div key={prestamo.id} className='bg-[rgba(0,0,0,.4)] p-6 rounded-xl flex flex-col gap-3'>
              <h2 className='text-xl text-center'>Prestamo {prestamo.tipo_prestamo}</h2>
              <p><strong>Nombre sucursal:</strong> {prestamo.sucursal.nombre}</p>
              <p><strong>Direccion sucursal:</strong> {prestamo.sucursal.direccion}</p>
              <p><strong>Fecha inicio del prestamo:</strong> {prestamo.fecha_inicio_prestamo}</p>
              <p><strong>Fecha finalizacion del prestamo:</strong> {prestamo.fecha_finalizacion_prestamo}</p>
              <strong className='text-center'>Monto: ${prestamo.monto}</strong>
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
