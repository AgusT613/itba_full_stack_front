'use client'

import CalculadoraPrestamos from '@/components/CalculadoraPrestamos/CalculadoraPrestamos'
import FormularioSolicitarPrestamo from '@/components/SolicitarPrestamo'
import { BRANCH_OFFICE, USER } from '@/utils/userDataModel'

export default function Page() {
  const prestamosITBANK = USER.loan.filter(
    (prestamo) => prestamo.branchOffice === 'ITBANK',
  )
  const prestamosOtrasSucursales = USER.loan.filter(
    (prestamo) => prestamo.branchOffice !== 'ITBANK',
  )

  const handleEliminarPrestamo = (prestamoId) => {
    return prestamoId
  }

  return (
    <>
      <section>
        <h2 className='text-3xl font-medium bg-[rgba(0,0,0,.2)] p-2 rounded-xl'>
          Solicitar un Prestamo
        </h2>
        <div className='my-8'>
          <FormularioSolicitarPrestamo />
        </div>
      </section>
      <section>
        <div className='bg-[rgba(0,0,0,.2)] py-2 px-4 rounded-xl'>
          <h2 className='text-3xl font-medium '>Listado Prestamos ITBANK</h2>
          <h3 className='text-xl font-normal'>
            Dirección: {BRANCH_OFFICE[0].address}
          </h3>
        </div>
        <div className='grid grid-cols-2 my-8 gap-4'>
          {prestamosITBANK.map((prestamo) => (
            <div
              key={prestamo.id}
              className='bg-[rgba(0,0,0,.4)] p-6 rounded-xl flex flex-col gap-3'
            >
              <h2 className='text-xl text-center'>Prestamo {prestamo.type}</h2>
              <p>
                <strong>Fecha inicio del prestamo:</strong> {prestamo.grandDate}
              </p>
              <p>
                <strong>Fecha finalizacion del prestamo:</strong>{' '}
                {prestamo.expirationDate}
              </p>
              <strong className='text-center'>Monto: ${prestamo.amount}</strong>
              <button
                className='bg-red-300 text-black rounded hover:bg-red-400 p-2'
                onClick={() => handleEliminarPrestamo(prestamo.id)}
              >
                Dar de Baja
              </button>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className='text-3xl font-medium bg-[rgba(0,0,0,.2)] p-2 rounded-xl'>
          Listado Prestamos por Sucursal
        </h2>
        <div className='grid grid-cols-2 my-8 gap-4'>
          {prestamosOtrasSucursales.map((prestamo) => (
            <div
              key={prestamo.id}
              className='bg-[rgba(0,0,0,.4)] p-6 rounded-xl flex flex-col gap-3'
            >
              <h2 className='text-xl text-center'>Prestamo {prestamo.type}</h2>
              <p>
                <strong>Nombre sucursal:</strong> {BRANCH_OFFICE[1].name}
              </p>
              <p>
                <strong>Direccion sucursal:</strong> {BRANCH_OFFICE[1].address}
              </p>
              <p>
                <strong>Fecha inicio del prestamo:</strong> {prestamo.grandDate}
              </p>
              <p>
                <strong>Fecha finalizacion del prestamo:</strong>{' '}
                {prestamo.expirationDate}
              </p>
              <strong className='text-center'>Monto: ${prestamo.amount}</strong>
              <button
                className='bg-red-300 text-black rounded hover:bg-red-400 p-2'
                onClick={() => handleEliminarPrestamo(prestamo.id)}
              >
                Dar de Baja
              </button>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className='text-3xl font-medium bg-[rgba(0,0,0,.2)] p-2 rounded-xl'>
          Calculadora de Prestamos
        </h2>
        <CalculadoraPrestamos />
      </section>
    </>
  )
}
