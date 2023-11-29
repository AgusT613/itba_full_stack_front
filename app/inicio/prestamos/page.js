'use client'
import CalculadoraPrestamos from '@/components/CalculadoraPrestamos/CalculadoraPrestamos'
import { datos } from '@/context/datosUsuario'

// export const metadata = {
//   title: 'Prestamos - ITBANK',
//   description: ''
// }

export default function Page () {
  return (
    <>
      <section>
        <h2 className='text-3xl font-medium bg-[rgba(0,0,0,.2)] p-2 rounded-xl'>Listado prestamos</h2>
        <div className='grid grid-cols-3 my-8'>
          {datos.prestamos.map(prestamo => (
            <div key={prestamo.id} className='bg-[rgba(0,0,0,.4)] p-6 rounded-xl flex flex-col gap-2'>
              <h2>Prestamo {prestamo.tipo_prestamo}</h2>
              <p>Fecha inicio del prestamo: {prestamo.fecha_inicio_prestamo}</p>
              <p>Fecha finalizacion del prestamo: {prestamo.fecha_finalizacion_prestamo}</p>
              <strong>Monto: ${prestamo.monto}</strong>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className='text-3xl font-medium bg-[rgba(0,0,0,.2)] p-2 rounded-xl'>Calculadora de prestamos</h2>
        <CalculadoraPrestamos />
      </section>
    </>
  )
}
